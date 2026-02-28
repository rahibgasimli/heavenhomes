import React from "react";
import styles from "./services.module.css";
import cn from "classnames";
import {
  Bag,
  BubbleChart,
  Building,
  DoubleBed,
  House,
  TrendUp,
} from "@/constants/icons";

const services = [
  {
    id: 1,
    icon: Building,
    title: "Hochbau",
    description:
      "Neubau von Einfamilienhäusern, Mehrfamilienhäusern und Gewerbegebäuden – solide gebaut auf Meisterniveau.",
  },
  {
    id: 2,
    icon: TrendUp,
    title: "Tiefbau",
    description:
      "Erdarbeiten, Fundamente, Leitungsverlegung und Entwässerung – stabile Grundlagen für jedes Bauvorhaben.",
  },
  {
    id: 3,
    icon: House,
    title: "Sanierung & Renovierung",
    description:
      "Energetische Sanierung, Feuchtigkeitsschutz, Schimmelbekämpfung und vollständige Gebäuderenovierung.",
  },
  {
    id: 4,
    icon: BubbleChart,
    title: "Garten- & Landschaftsbau",
    description:
      "Pflasterarbeiten, Terrassengestaltung, Einfahrten, Zäune und komplette Gartengestaltung nach Ihren Wünschen.",
  },
  {
    id: 5,
    icon: Bag,
    title: "Fassadenarbeiten",
    description:
      "Putz-, Farb- und Dämmarbeiten an Außenfassaden – für ein modernes Erscheinungsbild und bessere Energiebilanz.",
  },
  {
    id: 6,
    icon: DoubleBed,
    title: "Winterdienst",
    description:
      "Schneeräumung und Streudienst für Privatgrundstücke und Gewerbeflächen im Lahn-Dill-Kreis – zuverlässig und pünktlich.",
  },
];

export default function Services() {
  return (
    <section className={cn("section")}>
      <div className={cn("container")}>
        <div className={cn("subheading-small", styles.title)}>Unsere Leistungen</div>

        <div className={styles.services}>
          {services.map((service) => (
            <div key={service.id} className={styles.service}>
              <div className={cn("gradient-bubble")}>{service.icon}</div>
              <div className={cn("heading-6", styles.service_title)}>
                {service.title}
              </div>
              <div className={cn("paragraph-medium", styles.service_subtitle)}>
                {service.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
