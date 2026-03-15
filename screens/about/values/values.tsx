import React from "react";
import styles from "./values.module.css";
import cn from "classnames";
import { Award, Users, HandShake, Recycle } from "@/constants/icons";

const values = [
  {
    id: 1,
    icon: Award,
    title: "Meisterqualität",
    description:
      "Jedes Projekt wird nach den strengen Maßstäben des deutschen Handwerks ausgeführt. Als Meisterbetrieb garantieren wir nachhaltige Qualität, die jahrzehntelang hält.",
  },
  {
    id: 2,
    icon: HandShake,
    title: "Verlässlichkeit",
    description:
      "Wir halten unsere Versprechen: vereinbarte Termine, transparente Preise, sorgfältige Ausführung. Unsere Kunden wissen, dass sie sich auf uns verlassen können.",
  },
  {
    id: 3,
    icon: Recycle,
    title: "Nachhaltigkeit",
    description:
      "Wir arbeiten nach aktuellen Energiestandards (GEG 2024) und setzen auf langlebige Materialien und umweltbewusste Bauweisen für eine bessere Zukunft.",
  },
  {
    id: 4,
    icon: Users,
    title: "Kundennähe",
    description:
      "Jedes Kundenprojekt ist einzigartig. Wir hören zu, beraten persönlich und begleiten Sie von der ersten Anfrage bis zur fertigen Abnahme – persönlich und engagiert.",
  },
];

export default function Values() {
  return (
    <section className={cn("section")}>
      <div className={cn("container")}>
        <div className={cn("subheading-small")}>OUR VALUES</div>

        <div className={styles.values}>
          {values.map((value) => (
            <div key={value.id} className={styles.value}>
              <div className={cn("gradient-bubble")}>{value.icon}</div>

              <div className={cn("heading-6", styles.value_title)}>
                {value.title}
              </div>
              <div className={cn("paragraph-medium", styles.value_description)}>
                {value.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
