import React from "react";
import styles from "./facts.module.css";
import cn from "classnames";
import { Building, HappyHeart, Medal } from "@/constants/icons";
import { Heading } from "@/components/typography";

const facts = [
  {
    id: 1,
    icon: HappyHeart,
    title: "5 / 5 ★",
    description:
      "55 verifizierte Bewertungen auf MyHammer – unsere Kunden loben Pünktlichkeit, Sauberkeit und Meisterqualität.",
  },
  {
    id: 2,
    icon: Building,
    title: "500+",
    description:
      "Mehr als 500 erfolgreich abgeschlossene Bauprojekte in Herborn, Dillenburg, Haiger, Wetzlar und der gesamten Region Hessen.",
  },
  {
    id: 3,
    icon: Medal,
    title: "20+",
    description:
      "Über 20 Jahre Berufserfahrung im Hoch- und Tiefbau. Ruslan Mammadov ist staatlich geprüfter Stahlbeton- und Maurermeister.",
  },
];

export default function Facts() {
  return (
    <section className={cn("section")}>
      <div className={cn("container")}>
        <div className={cn("subheading-small", styles.title)}>Zahlen & Fakten</div>

        <div className={styles.facts}>
          {facts.map((fact) => (
            <div key={fact.id} className={styles.fact}>
              <div className={cn("gradient-bubble")}>{fact.icon}</div>
              <Heading type="heading-3" className={styles.fact_title}>
                {fact.title}
              </Heading>
              <div className={cn("paragraph-medium", styles.fact_description)}>
                {fact.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
