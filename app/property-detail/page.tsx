import PropertyDetailPage from "@/screens/property-detail";

export const dynamic = "force-dynamic";

export default function PropertyDetail({ searchParams }: any) {
  const item = JSON.parse(searchParams.item);

  return <PropertyDetailPage item={item} />;
}
