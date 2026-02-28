import React from "react";
import styles from "./newsletter.module.css";
import cn from "classnames";
import { Bag, Notification } from "@/constants/icons";
import { TextField } from "@/components/elements";
import Link from "next/link";

export default function Newsletter() {
  return (
    <section className={cn("section")}>
      <div className={cn("container")}>
        <div className={cn("subheading-small", styles.title)}>Kontakt & Angebot</div>
        <div className={styles.columns}>
          <div className={styles.column}>
            <div className={cn("gradient-bubble")}>{Bag}</div>

            <div>
              <div className={cn("heading-6", styles.text)}>
                Kostenloses Angebot anfordern
              </div>
              <div className={cn("paragraph-medium", styles.subtitle)}>
                Sie planen ein Bauprojekt in Herborn oder der Region Lahn-Dill-Kreis? Kontaktieren Sie uns – wir erstellen Ihnen ein unverbindliches und transparentes Angebot. Als Meisterbetrieb stehen wir für Qualität und Verlässlichkeit.
              </div>
            </div>
            <div className={styles.wrapper}>
              <Link href="/contact" className={cn("button", styles.button)}>
                Jetzt anfragen
              </Link>
              <Link href="/about" className={cn("button-stroke", styles.button)}>
                Über uns
              </Link>
            </div>
          </div>

          <div className={styles.column}>
            <div className={cn("gradient-bubble")}>{Notification}</div>
            <div>
              <div className={cn("heading-6", styles.text)}>
                Meister-Tipp: Früh planen – besser bauen
              </div>
              <div className={cn("paragraph-medium", styles.subtitle)}>
                Tragen Sie sich in unsere Interessentenliste ein und erhalten Sie saisonale Bautipps, Informationen zu aktuellen Förderprogrammen (z. B. KfW-Sanierungsförderung) und Neuigkeiten direkt aus unserem Betrieb.
              </div>
            </div>

            <div className={styles.wrapper}>
              <TextField
                type="email"
                placeholder="Ihre E-Mail-Adresse"
                className={styles.input}
              />
              <button className={cn("button", styles.button)}>Eintragen</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

