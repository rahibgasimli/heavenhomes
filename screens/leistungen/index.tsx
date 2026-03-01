import React from "react";
import Layout from "@/components/Layout";
import cn from "classnames";
import { Heading } from "@/components/typography";
import Link from "next/link";

const leistungen = [
    {
        id: 1,
        slug: "hochbau",
        title: "Hochbau in Herborn & Lahn-Dill-Kreis",
        description:
            "Als Meisterbetrieb übernehmen wir den gesamten Hochbau – von der Planung bis zur Schlüsselübergabe. Ob Einfamilienhaus, Mehrfamilienhaus oder Gewerbegebäude: Wir bauen solide, termingerecht und transparent.",
        items: [
            "Neubau von Wohn- und Gewerbegebäuden",
            "Fundament- und Mauerarbeiten",
            "Beton- und Stahlbetonarbeiten",
            "Rohbau und Ausbau",
            "Dachkonstruktionen und Abschlussarbeiten",
        ],
        faq: [
            {
                q: "Wie lange dauert ein Hausbau mit MR Bauunternehmen?",
                a: "Die Bauzeit hängt von der Größe und Komplexität des Projekts ab. Für ein Einfamilienhaus planen wir typischerweise 6–12 Monate ein.",
            },
            {
                q: "Bieten Sie auch Schlüsselfertig-Bau an?",
                a: "Ja – wir koordinieren alle Gewerke und übergeben das fertige Gebäude schlüsselfertig.",
            },
        ],
    },
    {
        id: 2,
        slug: "tiefbau",
        title: "Tiefbau – Stabile Grundlagen für Herborn und Hessen",
        description:
            "Ein gutes Fundament ist die Basis jedes Bauwerks. Unser Tiefbauteam übernimmt alle Erdarbeiten, Fundamentierungen und Leitungsverlegungen mit modernster Technik und jahrelanger Erfahrung.",
        items: [
            "Erdaushub und Geländemodellierung",
            "Streifenfundamente und Bodenplatten",
            "Leitungsverlegung (Wasser, Abwasser, Strom)",
            "Entwässerung und Drainage",
            "Verfüllung und Verdichtung",
        ],
        faq: [
            {
                q: "Wann wird beim Bau mit dem Tiefbau begonnen?",
                a: "Der Tiefbau ist die erste Phase eines Bauprojekts. Wir beginnen mit dem Erdaushub, sobald alle Genehmigungen vorliegen.",
            },
            {
                q: "Übernehmen Sie auch Leitungsverlegung für Bestandsgebäude?",
                a: "Ja – wir verlegen und erneuern Wasser-, Abwasser- und Stromleitungen auch bei bestehenden Gebäuden.",
            },
        ],
    },
    {
        id: 3,
        slug: "sanierung",
        title: "Sanierung & Renovierung in Herborn – Energetisch und Modern",
        description:
            "Energetische Sanierung ist in Deutschland wichtiger denn je. Ruslan Mammadov und sein Team sanieren Gebäude nach aktuellen GEG-Standards, bekämpfen Feuchtigkeit und Schimmel und modernisieren Altbauten nachhaltig.",
        items: [
            "Energetische Gebäudesanierung (KfW-förderbar)",
            "Feuchtigkeitsschutz und Schimmelbekämpfung",
            "Fassadendämmung (WDVS)",
            "Kellertrocknung und Abdichtung",
            "Vollständige Innen- und Außenrenovierung",
        ],
        faq: [
            {
                q: "Gibt es staatliche Förderungen für Sanierungsmaßnahmen?",
                a: "Ja – viele unserer Sanierungsleistungen sind über die KfW oder das BAFA förderfähig. Wir beraten Sie gerne.",
            },
            {
                q: "Wie erkenne ich, ob mein Gebäude Feuchtigkeit hat?",
                a: "Typische Zeichen sind Flecken an Wänden, muffiger Geruch und sichtbarer Schimmel. Wir machen eine kostenlose Erstbeurteilung.",
            },
        ],
    },
    {
        id: 4,
        slug: "gartenbau",
        title: "Garten- & Landschaftsbau – Ihr Außenbereich in Herborn",
        description:
            "Ein schöner Außenbereich erhöht den Wert Ihrer Immobilie. Von der Pflasterung bis zur kompletten Gartengestaltung – wir setzen Ihre Wünsche professionell und termingerecht um.",
        items: [
            "Pflasterarbeiten (Einfahrten, Terrassen, Wege)",
            "Gartengestaltung und Bepflanzung",
            "Zaun- und Sichtschutzanlagen",
            "Dränagesysteme und Entwässerung",
            "Natursteinmauern und Stützmauern",
        ],
        faq: [
            {
                q: "Planen Sie die Gartengestaltung auch selbst?",
                a: "Ja – wir bieten eine vollständige Planung und Ausführung aus einer Hand.",
            },
            {
                q: "Welche Pflasterbeläge empfehlen Sie?",
                a: "Je nach Budget und Stil empfehlen wir Betonpflaster, Naturstein oder Klinker. Wir zeigen Ihnen Musterflächen vor Ort.",
            },
        ],
    },
    {
        id: 5,
        slug: "fassade",
        title: "Fassadenarbeiten – Modernes Erscheinungsbild für Ihr Gebäude",
        description:
            "Die Fassade ist das Gesicht Ihres Gebäudes. Wir führen alle Putz-, Farb- und Dämmarbeiten fachgerecht aus – für ein modernes Erscheinungsbild und eine bessere Energiebilanz.",
        items: [
            "Außenputz und Anstrich",
            "Wärmedämmverbundsystem (WDVS)",
            "Fassadenrenovierung und -reinigung",
            "Klinker- und Natursteinverkleidungen",
            "Balkon- und Loggiasanierung",
        ],
        faq: [
            {
                q: "Wie oft sollte eine Fassade erneuert werden?",
                a: "In der Regel alle 15–20 Jahre. Eine regelmäßige Inspektion ist empfehlenswert – wir begutachten Ihre Fassade kostenlos.",
            },
            {
                q: "Verbessert die Fassadendämmung die Energieeffizienz?",
                a: "Deutlich – eine gute WDVS-Dämmung kann die Heizkosten um bis zu 30% senken.",
            },
        ],
    },
    {
        id: 6,
        slug: "winterdienst",
        title: "Winterdienst im Lahn-Dill-Kreis – Zuverlässig und Pünktlich",
        description:
            "Schnee und Eis stellen Hausbesitzer und Gewerbetreibende vor Herausforderungen. Unser Winterdienst sorgt für sichere Wege und Einfahrten – bei jedem Wetter, jeden Morgen.",
        items: [
            "Schneeräumung von Einfahrten und Gehwegen",
            "Streudienst mit umweltfreundlichem Streumittel",
            "Räumung von Firmen- und Gewerbeflächen",
            "Saisonverträge für private und gewerbliche Kunden",
            "Einsatz in Herborn, Dillenburg, Haiger und Umgebung",
        ],
        faq: [
            {
                q: "Zu welcher Uhrzeit beginnt der Winterdienst?",
                a: "Wir beginnen bei Bedarf ab 6:00 Uhr morgens, damit Ihre Wege vor Arbeitsbeginn geräumt sind.",
            },
            {
                q: "Bieten Sie Saisonverträge an?",
                a: "Ja – mit einem Saisonvertrag sichern Sie sich verlässlichen Winterdienst zu einem festen Monatspreis.",
            },
        ],
    },
];

export default function LeistungenPage() {
    return (
        <Layout>
            {/* Page Hero */}
            <section className={cn("section")} style={{ background: "linear-gradient(135deg, #1a1a1a 60%, #2d2d2d)", color: "#fff", paddingTop: "6rem", paddingBottom: "4rem" }}>
                <div className={cn("container")}>
                    <div className={cn("subheading-small")} style={{ color: "var(--main-color-2)" }}>UNSERE LEISTUNGEN</div>
                    <div style={{ color: "#fff", marginTop: "0.5rem" }}><Heading type="heading-3">
                        Professioneller Bau &amp; Sanierung –<br />Ihr Meisterbetrieb in Herborn, Hessen
                    </Heading></div>
                    <p className={cn("paragraph-large")} style={{ color: "#ccc", marginTop: "1rem", maxWidth: "640px" }}>
                        Von Hochbau über Tiefbau, Sanierung bis Gartenbau – MR Bauunternehmen bietet Ihnen alle Bauleistungen aus einer Hand. Staatlich geprüft, regional verwurzelt, meisterlich ausgeführt.
                    </p>
                    <div style={{ display: "flex", gap: "1rem", marginTop: "2rem" }}>
                        <Link href="/contact" className="button">Angebot anfordern</Link>
                        <Link href="/listings" className="button-stroke">Projekte ansehen</Link>
                    </div>
                </div>
            </section>

            {/* Service Sections */}
            {leistungen.map((l, i) => (
                <section key={l.id} className={cn("section")} style={{ background: i % 2 === 0 ? "#fff" : "#f8f8f8" }}>
                    <div className={cn("container")}>
                        <div className={cn("subheading-small")} style={{ color: "var(--main-color-2)" }}>LEISTUNG 0{l.id}</div>
                        <div style={{ marginTop: "0.5rem" }}><Heading type="heading-3">{l.title}</Heading></div>

                        <p className={cn("paragraph-large")} style={{ marginTop: "1rem", maxWidth: "700px" }}>
                            {l.description}
                        </p>

                        <ul style={{ marginTop: "1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                            {l.items.map((item, idx) => (
                                <li key={idx} className={cn("paragraph-medium")} style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                                    <span style={{ color: "var(--main-color-1)", fontWeight: 700 }}>✓</span> {item}
                                </li>
                            ))}
                        </ul>

                        {/* FAQ */}
                        <div style={{ marginTop: "2rem" }}>
                            <div className={cn("subheading-small")} style={{ marginBottom: "1rem" }}>HÄUFIGE FRAGEN</div>
                            {l.faq.map((item, idx) => (
                                <div key={idx} style={{ marginBottom: "1rem", padding: "1rem", background: "#f0f0f0", borderRadius: "8px", borderLeft: "4px solid var(--main-color-2)" }}>
                                    <div className={cn("paragraph-medium")} style={{ fontWeight: 700 }}>{item.q}</div>
                                    <div className={cn("paragraph-medium")} style={{ marginTop: "0.25rem", color: "#555" }}>{item.a}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            ))}

            {/* CTA Section */}
            <section className={cn("section")} style={{ background: "var(--main-color-2)", color: "#fff" }}>
                <div className={cn("container")} style={{ textAlign: "center" }}>
                    <div style={{ color: "var(--black)" }}><Heading type="heading-3">
                        Bereit für Ihr Bauprojekt?
                    </Heading></div>
                    <p className={cn("paragraph-large")} style={{ color: "var(--black)", marginTop: "0.75rem", marginBottom: "2rem" }}>
                        Kontaktieren Sie uns jetzt für ein kostenloses und unverbindliches Angebot. Als Meisterbetrieb in Herborn stehen wir für Qualität und Verlässlichkeit.
                    </p>
                    <Link href="/contact" className="button" style={{ padding: "0.875rem 2rem", fontWeight: 700, textDecoration: "none", display: "inline-block" }}>
                        Jetzt Angebot anfordern
                    </Link>
                </div>
            </section>
        </Layout>
    );
}
