"use client";

import React from "react";
import cn from "classnames";
import styles from "../../impressum/content/content.module.css";
import { Heading } from "@/components/typography";

export default function CookieContent() {
    const resetCookieConsent = () => {
        localStorage.removeItem("mr-cookie-consent");
        localStorage.removeItem("mr-cookie-preferences");
        window.location.reload();
    };

    return (
        <section className={cn("section")}>
            <div className={cn("container", styles.container)}>
                <div className={styles.block}>
                    <Heading type="heading-4" className={styles.title}>
                        1. EINFÜHRUNG
                    </Heading>
                    <div className={cn("paragraph-large", styles.text)}>
                        Diese Cookie-Richtlinie erklärt, wie wir Cookies und ähnliche Technologien
                        auf unserer Website verwenden. Wir legen großen Wert auf den Schutz Ihrer
                        persönlichen Daten. Wir verwenden Cookies nur dann, wenn dies technisch
                        notwendig ist oder wenn Sie uns hierzu Ihre ausdrückliche Einwilligung gemäß
                        Art. 6 Abs. 1 lit. a DSGVO erteilt haben.
                    </div>
                </div>

                <div className={styles.block}>
                    <Heading type="heading-4" className={styles.title}>
                        2. WAS SIND COOKIES?
                    </Heading>
                    <div className={cn("paragraph-large", styles.text)}>
                        Cookies sind kleine Textdateien, die auf Ihrem Endgerät gespeichert werden.
                        Sie dienen dazu, die Nutzung unserer Website nutzerfreundlicher zu gestalten,
                        die Sicherheit zu erhöhen und die Effektivität unserer Marketingmaßnahmen zu
                        messen.
                    </div>
                </div>

                <div className={styles.block}>
                    <Heading type="heading-4" className={styles.title}>
                        3. ARTEN VON COOKIES UND RECHTSGRUNDLAGE
                    </Heading>
                    <div className={cn("paragraph-large", styles.text)}>
                        Wir unterteilen die verwendeten Cookies in folgende Kategorien:
                        <br /><br />
                        <strong>Technisch notwendige Cookies:</strong> Diese sind für den Betrieb der Website
                        zwingend erforderlich (z. B. Warenkorb, Login-Status, Cookie-Präferenzen).
                        Rechtsgrundlage ist § 25 Abs. 2 Nr. 2 TDDDG.
                        <br /><br />
                        <strong>Analyse- & Performance-Cookies:</strong> Diese helfen uns zu verstehen, wie
                        Besucher mit der Website interagieren (z. B. Google Analytics). Diese werden
                        nur mit Ihrer Einwilligung geladen (Art. 6 Abs. 1 lit. a DSGVO).
                        <br /><br />
                        <strong>Marketing- & Tracking-Cookies:</strong> Diese werden verwendet, um Besuchern
                        relevante Werbung anzuzeigen. Auch hierfür ist Ihre vorherige Einwilligung
                        erforderlich.
                    </div>
                </div>

                <div className={styles.block}>
                    <Heading type="heading-4" className={styles.title}>
                        4. EINWILLIGUNG UND WIDERRUF (CONSENT MANAGEMENT)
                    </Heading>
                    <div className={cn("paragraph-large", styles.text)}>
                        Beim ersten Besuch unserer Website erscheint ein Cookie-Banner. Hier können
                        Sie individuell entscheiden, welche Kategorien von Cookies Sie zulassen
                        möchten.
                        <br /><br />
                        <strong>Widerrufsrecht:</strong> Sie können Ihre erteilte Einwilligung jederzeit mit
                        Wirkung für die Zukunft widerrufen, indem Sie die Cookie-Einstellungen auf
                        unserer Website erneut aufrufen und Ihre Auswahl ändern.
                        <br /><br />
                        <button
                            onClick={resetCookieConsent}
                            style={{
                                padding: "10px 24px",
                                backgroundColor: "var(--main-color-1, #2d4a2e)",
                                color: "#fff",
                                border: "none",
                                borderRadius: "6px",
                                fontSize: "14px",
                                fontWeight: 600,
                                cursor: "pointer",
                                marginTop: "8px",
                            }}
                        >
                            🍪 Cookie-Einstellungen ändern
                        </button>
                    </div>
                </div>

                <div className={styles.block}>
                    <Heading type="heading-4" className={styles.title}>
                        5. DRITTANBIETER-COOKIES UND DATENTRANSFER
                    </Heading>
                    <div className={cn("paragraph-large", styles.text)}>
                        Teilweise setzen wir Dienste von Drittanbietern ein (z. B. Google, Facebook).
                        Dabei kann es zu einer Übermittlung von Daten in Drittstaaten (insbesondere
                        die USA) kommen. Wir weisen darauf hin, dass in den USA unter Umständen kein
                        mit der EU vergleichbares Datenschutzniveau besteht. Mit Ihrer Einwilligung
                        stimmen Sie auch dieser Übermittlung gemäß Art. 49 Abs. 1 lit. a DSGVO zu.
                    </div>
                </div>

                <div className={styles.block}>
                    <Heading type="heading-4" className={styles.title}>
                        6. SPEICHERDAUER
                    </Heading>
                    <div className={cn("paragraph-large", styles.text)}>
                        Cookies haben unterschiedliche Speicherdauern:
                        <br /><br />
                        <strong>Session-Cookies:</strong> Werden nach dem Schließen des Browsers gelöscht.
                        <br /><br />
                        <strong>Persistente Cookies:</strong> Bleiben für eine vordefinierte Zeit auf Ihrem
                        Gerät gespeichert (z. B. 30 Tage oder 1 Jahr), sofern Sie diese nicht manuell
                        löschen.
                    </div>
                </div>

                <div className={styles.block}>
                    <Heading type="heading-4" className={styles.title}>
                        7. VERWALTUNG ÜBER BROWSEREINSTELLUNGEN
                    </Heading>
                    <div className={cn("paragraph-large", styles.text)}>
                        Sie können das Speichern von Cookies auch generell in Ihrem Browser
                        verhindern. Anleitungen dazu finden Sie hier:
                        <br /><br />
                        <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noreferrer" className={styles.link}>
                            Google Chrome
                        </a>
                        <br />
                        <a href="https://support.mozilla.org/de/kb/cookies-erlauben-und-ablehnen" target="_blank" rel="noreferrer" className={styles.link}>
                            Mozilla Firefox
                        </a>
                        <br />
                        <a href="https://support.apple.com/de-de/guide/safari/sfri11471/" target="_blank" rel="noreferrer" className={styles.link}>
                            Apple Safari
                        </a>
                        <br />
                        <a href="https://support.microsoft.com/de-de/microsoft-edge/cookies-in-microsoft-edge-löschen-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noreferrer" className={styles.link}>
                            Microsoft Edge
                        </a>
                    </div>
                </div>

                <div className={styles.block}>
                    <Heading type="heading-4" className={styles.title}>
                        8. KONTAKT
                    </Heading>
                    <div className={cn("paragraph-large", styles.text)}>
                        Fragen zur Datennutzung richten Sie bitte an:
                        <br /><br />
                        MR Bauunternehmen<br />
                        Austraße 55<br />
                        35745 Herborn<br /><br />
                        E-Mail:{" "}
                        <a href="mailto:info@mr-bauunternehmen.de" className={styles.link}>
                            info@mr-bauunternehmen.de
                        </a>
                        <br />
                        Telefon: +49 160 182 91 92
                    </div>
                </div>
            </div>
        </section>
    );
}
