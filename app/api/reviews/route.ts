import { NextResponse } from "next/server";

const GOOGLE_API_KEY = process.env.GOOGLE_MAPS_API_KEY;
const PLACE_ID = process.env.GOOGLE_PLACES_ID;

export async function GET() {
  if (!GOOGLE_API_KEY || !PLACE_ID) {
    return NextResponse.json(
      { error: "Missing API key or Place ID" },
      { status: 500 }
    );
  }

  try {
    const res = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=reviews,rating,user_ratings_total,name&language=de&key=${GOOGLE_API_KEY}`,
      {
        next: { revalidate: 3600 }, // Cache for 1 hour
      }
    );

    if (!res.ok) {
      return NextResponse.json(
        { error: "Failed to fetch reviews from Google" },
        { status: res.status }
      );
    }

    const data = await res.json();

    if (data.status !== "OK") {
      return NextResponse.json(
        { error: `Google API error: ${data.status}` },
        { status: 400 }
      );
    }

    const result = data.result;

    const reviews = (result.reviews || []).map(
      (review: {
        author_name?: string;
        profile_photo_url?: string;
        relative_time_description?: string;
        rating?: number;
        text?: string;
        time?: number;
      }, index: number) => ({
        id: index + 1,
        name: review.author_name || "Anonymous",
        date: review.relative_time_description || "",
        text: review.text || "",
        rating: review.rating || 5,
        avatar: review.profile_photo_url || null,
        initial: (review.author_name || "A").charAt(0).toUpperCase(),
      })
    );

    return NextResponse.json({
      reviews,
      rating: result.rating || 5,
      totalReviews: result.user_ratings_total || reviews.length,
      businessName: result.name || "MR Bauunternehmen",
    });
  } catch (error) {
    console.error("Error fetching reviews:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
