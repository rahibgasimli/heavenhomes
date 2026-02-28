import React from "react";
import styles from "./mission.module.css";
import cn from "classnames";
import { Heading } from "@/components/typography";

export default function Mission() {
  return (
    <section className={cn("section")}>
      <div className={cn("container", styles.container)}>
        <div className={cn("subheading-small")}>ÜBER UNS</div>
        <div className={styles.content}>
          <div className={cn("paragraph-large", styles.subtitle)}>
            MR Bauunternehmen wurde von Ruslan Mammadov gegründet, einem staatlich geprüften Stahlbeton- und Maurermeister mit Leidenschaft für handwerkliche Präzision. Von Herborn aus betreuen wir Privat- und Gewerbekunden in der gesamten Region Lahn-Dill-Kreis und Hessen.
          </div>

          <div className={styles.divider} />

          <Heading type="heading-3">
            Unsere Mission: Qualität auf Meisterniveau – für jedes Projekt, jeden Kunden, jede Region in Hessen.
          </Heading>
        </div>
      </div>
    </section>
  );
}

