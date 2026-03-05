import React from "react";
import styles from "./content.module.css";
import cn from "classnames";
import { Heading } from "@/components/typography";

export default function Content() {
    return (
        <section className={cn("section")}>
            <div className={cn("container", styles.container)}>
                <div className={styles.block}>
                    <Heading type="heading-4" className={styles.title}>
                        ANGABEN GEMÄSS § 5 TMG
                    </Heading>
                    <div className={cn("paragraph-large", styles.text)}>
                        MR Bauunternehmen<br />
                        Austr. 55<br />
                        35745 Herborn
                    </div>
                </div>

                <div className={styles.block}>
                    <Heading type="heading-4" className={styles.title}>
                        VERTRETEN DURCH
                    </Heading>
                    <div className={cn("paragraph-large", styles.text)}>Ruslan Mammadov</div>
                </div>

                <div className={styles.block}>
                    <Heading type="heading-4" className={styles.title}>
                        KONTAKT
                    </Heading>
                    <div className={cn("paragraph-large", styles.text)}>
                        Telefon: +49 160 182 91 92<br />
                        E-Mail: <a href="mailto:info@mr-bauunternehmen.de" className={styles.link}>info@mr-bauunternehmen.de</a>
                    </div>
                </div>

                <div className={styles.block}>
                    <Heading type="heading-4" className={styles.title}>
                        UMSATZSTEUER-ID
                    </Heading>
                    <div className={cn("paragraph-large", styles.text)}>
                        Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz: DE449969311
                    </div>
                </div>

                <div className={styles.block}>
                    <Heading type="heading-4" className={styles.title}>
                        BERUFSBEZEICHNUNG UND BERUFSRECHTLICHE REGELUNGEN
                    </Heading>
                    <div className={cn("paragraph-large", styles.text)}>
                        Berufsbezeichnung: Bau- und Handwerksdienstleistungen<br />
                        Zuständige Kammer: Handwerkskammer Wiesbaden<br />
                        Verliehen durch: Deutschland<br />
                        Es gelten folgende berufsrechtliche Regelungen: Handwerksordnung (HwO)
                    </div>
                </div>

                <div className={styles.block}>
                    <Heading type="heading-4" className={styles.title}>
                        VERANTWORTLICH FÜR DEN INHALT NACH § 55 ABS. 2 RStV
                    </Heading>
                    <div className={cn("paragraph-large", styles.text)}>
                        Ruslan Mammadov<br />
                        Austraße 55<br />
                        35745 Herborn
                    </div>
                </div>

                <div className={styles.block}>
                    <Heading type="heading-4" className={styles.title}>
                        ONLINE-STREITBEILEGUNG
                    </Heading>
                    <div className={cn("paragraph-large", styles.text)}>
                        Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr" className={styles.link} target="_blank" rel="noreferrer">https://ec.europa.eu/consumers/odr</a><br />
                        Unsere E-Mail-Adresse finden Sie oben im Impressum.
                    </div>
                </div>
            </div>
        </section>
    );
}
