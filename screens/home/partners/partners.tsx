import React from "react";
import styles from "./partners.module.css";
import cn from "classnames";
import Image from "next/image";
import { Heading } from "@/components/typography";
import { Medal } from "@/constants/icons";
import Link from "next/link";

export default function Partners() {
  return (
    <section className={cn("section")}>
      <div className={cn("container", styles.container)}>
        <div className={styles.content}>
          <Heading type="heading-3" className={cn("h2", styles.title)}>
            Unsere Qualitätsnachweise
          </Heading>
          <p className={cn("paragraph-large", styles.text)}>
            Als zertifizierter Meisterbetrieb im Lahn-Dill-Kreis arbeiten wir nach den höchsten deutschen Handwerksstandards. Unsere Qualität ist durch MyHammer-Bewertungen, den Meisterstatus und die Einhaltung aktueller Energiestandards (GEG 2024) belegt.
          </p>
          <Link href="/contact" className={cn("button", styles.button)}>
            Angebot anfordern
          </Link>
        </div>
        <div className={styles.partners}>
          <div className={styles.image_container}>
            <Image
              src="/images/partners/flexport.webp"
              alt="Meisterbetrieb Qualität"
              layout="fill"
              objectFit="cover"
            />
            <div className={styles.logo} style={{ fontSize: "1.1rem", fontWeight: 700, color: "#fff", textAlign: "center", padding: "1rem" }}>
              ⭐ MyHammer<br />5 / 5 Sterne<br />55 Bewertungen
            </div>
          </div>

          <div className={styles.side_images}>
            <div className={styles.image_container}>
              <Image
                src="/images/partners/check.webp"
                alt="Meisterbetrieb"
                layout="fill"
                objectFit="cover"
              />
              <div className={styles.logo} style={{ fontSize: "1rem", fontWeight: 700, color: "#fff", textAlign: "center", padding: "0.5rem" }}>
                🏆 Staatlich<br />geprüfter<br />Meisterbetrieb
              </div>
            </div>
            <div className={styles.image_container}>
              <Image
                src="/images/partners/corning.webp"
                alt="GEG 2024"
                layout="fill"
                objectFit="cover"
              />
              <div className={styles.logo} style={{ fontSize: "1rem", fontWeight: 700, color: "#fff", textAlign: "center", padding: "0.5rem" }}>
                🌿 GEG 2024<br />Energiestandard<br />konform
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

