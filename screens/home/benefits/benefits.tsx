import React from "react";
import styles from "./benefits.module.css";
import cn from "classnames";
import { Heading } from "@/components/typography";
import Image from "next/image";
import { Checkmark } from "@/constants/icons";
import Link from "next/link";

const benefits = [
  {
    id: 1,
    title: "Warum MR Bauunternehmen wählen?",
    description:
      "Als zertifizierter Meisterbetrieb in Herborn stehen wir für höchste Qualität und persönliche Betreuung. Ruslan Mammadov ist staatlich geprüfter Stahlbeton- und Maurermeister – das garantiert Ihnen handwerkliche Präzision bei jedem Projekt, egal ob Neubau, Sanierung oder Gartenbau.",
    image: "/images/benefit-1.webp",
    items: [
      { id: 1, title: "Staatlich geprüfter Meisterbetrieb" },
      { id: 2, title: "Pünktliche und saubere Ausführung" },
      { id: 3, title: "Faire und transparente Preise" },
    ],
  },
  {
    id: 2,
    title: "Unsere Stärken auf einen Blick",
    description:
      "Mit über 500 erfolgreich abgeschlossenen Bauprojekten in Herborn, Dillenburg, Haiger und der gesamten Region Lahn-Dill-Kreis kennen wir die lokalen Anforderungen genau. 55 Fünf-Sterne-Bewertungen auf MyHammer bestätigen unsere Arbeitsqualität.",
    image: "/images/benefit-2.webp",
    items: [
      { id: 1, title: "500+ Projekte erfolgreich abgeschlossen" },
      { id: 2, title: "5/5 Sterne auf MyHammer (55 Bewertungen)" },
      { id: 3, title: "Regional verwurzelt in Hessen" },
    ],
  },
];

export default function Benefits() {
  return (
    <section className={cn("section")}>
      {benefits.map((benefit) => (
        <div key={benefit.id} className={cn("container", styles.container)}>
          <div className={styles.image}>
            <Image
              src={benefit.image}
              alt="Benefits"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className={styles.content}>
            <Heading type="heading-3">{benefit.title}</Heading>
            <div className={cn("paragraph-large", styles.subtitle)}>
              {benefit.description}
            </div>

            <ul className={styles.list}>
              {benefit.items.map((item) => (
                <li key={item.id} className={styles.item}>
                  <div className={styles.icon}>{Checkmark}</div>
                  <div className={cn("paragraph-medium", styles.text)}>
                    {item.title}
                  </div>
                </li>
              ))}
            </ul>

            <Link href="/about" className={cn("button", styles.button)}>
              Learn more
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
}
