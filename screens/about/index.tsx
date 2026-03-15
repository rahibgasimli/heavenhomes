import Layout from "@/components/Layout";
import React from "react";
import Hero from "./hero";
import Mission from "./mission";
import Values from "./values";
import Offices from "../universal/offices";
import Categories from "../home/categories";
import Gallery from "./gallery";
import Newsletter from "../universal/newsletter";

const certificatesData = [
  { id: 1, image: "/images/gallery/01.webp" },
  { id: 2, image: "/images/gallery/02.webp" },
  { id: 3, image: "/images/gallery/03.webp" },
];

export default function AboutPage() {
  return (
    <Layout>
      <Hero />
      <Mission />
      <Values />
      {/* <Offices /> */}
      <Categories
        data={certificatesData}
        variant="certificate"
        title="Unsere Zertifikate"
        subtitle="Qualität, die zertifiziert ist – unsere Nachweise für Fachkompetenz und Zuverlässigkeit."
        buttonText=""
        buttonHref=""
      />
      <Gallery />
      <Newsletter />
    </Layout>
  );
}
