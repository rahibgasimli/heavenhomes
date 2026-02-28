"use client";

import React from "react";
import styles from "./hero.module.css";
import cn from "classnames";
import { TextArea, TextField } from "@/components/elements";
import MapView from "@/components/mapview";

export default function Hero() {
  return (
    <section className={cn("section", styles.section)}>
      <div className={cn("container")}>
        <div className={styles.information}>
          <div className={styles.column}>
            <div className={cn("heading-6", styles.title)}>Kontakt aufnehmen</div>
            <div className={cn("paragraph-medium", styles.subtitle)}>
              {
                "Wir freuen uns über Ihre Anfrage! Ob Neubau, Sanierung oder Gartenprojekt – unser Team steht Ihnen für eine kostenlose und unverbindliche Beratung zur Verfügung. Rufen Sie uns an oder schreiben Sie uns."
              }
            </div>
          </div>

          <div className={styles.divider} />

          <div className={styles.contact}>
            <div>
              <div className={cn("subheading-medium", styles.contact_title)}>
                BÜRO
              </div>
              <div className={cn("paragraph-medium", styles.contact_text)}>
                Herborn, Lahn-Dill-Kreis, Hessen
              </div>
            </div>

            <div>
              <div className={cn("subheading-medium", styles.contact_title)}>
                KONTAKT
              </div>
              <div className={cn("paragraph-medium", styles.contact_text)}>
                +49 (0) 2772 123456
              </div>
              <div className={cn("paragraph-medium", styles.contact_text)}>
                info@mr-bauunternehmen.de
              </div>
            </div>
          </div>
        </div>

        <div className={styles.map}>
          <MapView />
        </div>

        <form className={styles.form}>
          <div className={styles.rowFields}>
            <TextField
              name="vorname"
              type="text"
              placeholder="Vorname"
              required
            />
            <TextField
              name="nachname"
              type="text"
              placeholder="Nachname"
              required
            />
          </div>
          <TextField
            name="phone"
            type="tel"
            placeholder="Telefonnummer"
            required
          />
          <TextField
            name="email"
            type="email"
            placeholder="E-Mail-Adresse"
            required
          />

          <TextArea name="nachricht" placeholder="Ihre Nachricht / Projektbeschreibung" required />
          <div className={styles.rowFields}>
            <button className={cn("button", styles.button)}>Absenden</button>
            <div className={cn("paragraph-small", styles.agreeText)}>
              Mit dem Absenden stimmen Sie unserer <span>Datenschutzerklärung</span> zu und erklären sich einverstanden, von MR Bauunternehmen kontaktiert zu werden.
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

