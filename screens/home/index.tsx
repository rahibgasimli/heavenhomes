import Layout from "@/components/Layout";
import LatestListings from "./latest-listings";
import Benefits from "./benefits";
import Showcase from "./showcase";
import Categories from "./categories";
import Partners from "./partners";
import Testimonials from "./testimonials";
import Newsletter from "../universal/newsletter";
import Hero from "./hero";
import Offices from "../universal/offices";
import ReviewSection from "./review/review";
import Facts from "../universal/facts/facts";

// Mock fetch functions
const fetchHeroData = async () => Promise.resolve(null);

const fetchReviewData = async () => {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  const placeId = process.env.GOOGLE_PLACES_ID;

  if (!apiKey || !placeId) return null;

  try {
    const res = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,rating,user_ratings_total,name&language=de&key=${apiKey}`,
      {
        next: { revalidate: 3600 },
      }
    );

    if (!res.ok) return null;

    const data = await res.json();
    if (data.status !== "OK") return null;

    const result = data.result;

    const reviews = (result.reviews || []).map(
      (review: any, index: number) => ({
        id: index + 1,
        name: review.author_name || "Anonymous",
        date: review.relative_time_description || "",
        text: review.text || "",
        rating: review.rating || 5,
        avatar: review.profile_photo_url || null,
        initial: (review.author_name || "A").charAt(0).toUpperCase(),
      })
    );

    return {
      reviews,
      rating: result.rating || 5,
      totalReviews: result.user_ratings_total || reviews.length,
      businessName: result.name || "MR Bauunternehmen",
    };
  } catch (error) {
    console.error("Error fetching reviews:", error);
    return null;
  }
};
const fetchCategoriesData = async () => Promise.resolve([
  {
    id: 1,
    title: "Houses",
    image: "/images/properties/houses/123-serenity-lane.webp",
  },
  {
    id: 2,
    title: "Townhouses",
    image: "/images/properties/townhouses/123-modern-townhouse.webp",
  },
  {
    id: 3,
    title: "Condos",
    image: "/images/properties/apartments/321-suburban-apartment.webp",
  },
  {
    id: 4,
    title: "Villas",
    image: "/images/properties/villas/luxury-estate-villa.webp",
  },
  {
    id: 5,
    title: "Commercial",
    image: "/images/properties/commercial/downtown-office.webp",
  },
  {
    id: 6,
    title: "Apartments",
    image: "/images/properties/apartments/789-downtown-loft.webp",
  },
]);

const fetchCertificatesData = async () => Promise.resolve([
  { id: 1, image: "/images/gallery/01.webp" },
  { id: 2, image: "/images/gallery/02.webp" },
  { id: 3, image: "/images/gallery/03.webp" },
]);

export default async function HomePage() {
  const [heroData, reviewData, categoriesData, certificatesData] = await Promise.all([
    fetchHeroData(),
    fetchReviewData(),
    fetchCategoriesData(),
    fetchCertificatesData(),
  ]);

  return (
    <Layout>
      <Hero />
      <Categories
        data={categoriesData}
        title="Unsere Leistungen"
        subtitle="Ob Neubau, Sanierung oder Gartengestaltung – wir bieten Ihnen professionelle Lösungen aus einer Hand."
        buttonText="Alle Leistungen"
        buttonHref="/leistungen"
      />
      <ReviewSection data={reviewData} />
      <Facts />
      <Benefits />
      <Newsletter />
    </Layout>
  );
}
