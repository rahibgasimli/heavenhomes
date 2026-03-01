"use client";

import React from "react";
import styles from "./hero.module.css";
import cn from "classnames";
import Image from "next/image";
import Link from "next/link";

type Kategorie = "Alle" | "Hochbau" | "Sanierung" | "Gartenbau" | "Tiefbau" | "Fassade";

const projekte = [
  {
    id: 1,
    kategorie: "Hochbau",
    ort: "Herborn",
    title: "Neubau Einfamilienhaus",
    beschreibung:
      "Schlüsselfertiger Neubau eines modernen Einfamilienhauses in Herborn – inkl. Keller, Rohbau und vollständigem Innenausbau nach Kundenwunsch.",
    image: "/images/properties/houses/123-serenity-lane.webp",
    tags: ["Neubau", "Rohbau", "Schlüsselfertig"],
  },
  {
    id: 2,
    kategorie: "Sanierung",
    ort: "Dillenburg",
    title: "Energetische Komplettsanierung",
    beschreibung:
      "Vollständige energetische Sanierung eines Altbaus aus den 1970er Jahren: Fassadendämmung (WDVS), Kellerabdichtung, neue Fenster und Heizungsanlage.",
    image: "/images/properties/houses/456-harmony-drive.webp",
    tags: ["Sanierung", "KfW-förderbar", "Energieeffizienz"],
  },
  {
    id: 3,
    kategorie: "Gartenbau",
    ort: "Haiger",
    title: "Außenanlage & Pflasterung",
    beschreibung:
      "Neugestaltung der gesamten Außenanlage: Natursteinpflasterung der Einfahrt und Terrasse, Stützmauern, Drainage und Bepflanzung.",
    image: "/images/properties/houses/789-bliss-boulevard.webp",
    tags: ["Pflasterung", "Naturstein", "Landschaftsbau"],
  },
  {
    id: 4,
    kategorie: "Tiefbau",
    ort: "Wetzlar",
    title: "Fundament & Tiefbauarbeiten",
    beschreibung:
      "Aushub und Fundamentarbeiten für ein Gewerbegebäude: Streifenfundament, Bodenplatte, Entwässerungsrinnen und Rückbau des Altbestands.",
    image: "/images/properties/commercial/downtown-office.webp",
    tags: ["Tiefbau", "Fundament", "Gewerbebau"],
  },
  {
    id: 5,
    kategorie: "Fassade",
    ort: "Herborn",
    title: "Fassadensanierung Mehrfamilienhaus",
    beschreibung:
      "Komplettsanierung der Außenfassade eines Mehrfamilienhauses: Neuer Außenputz, Anstrich und Dämmung – optisch und energetisch erneuert.",
    image: "/images/properties/townhouses/789-suburban-townhouse.webp",
    tags: ["Fassade", "Putz", "Dämmung"],
  },
  {
    id: 6,
    kategorie: "Hochbau",
    ort: "Lahn-Dill-Kreis",
    title: "Garage & Carport Neubau",
    beschreibung:
      "Neubau einer Doppelgarage mit angrenzendem Carport in Massivbauweise – inklusive Bodenplatte, Stahlbetondecke und Sektionaltor.",
    image: "/images/properties/villas/ocean-view-villa.webp",
    tags: ["Garage", "Massivbau", "Neubau"],
  },
  {
    id: 7,
    kategorie: "Sanierung",
    ort: "Dillenburg",
    title: "Schimmelbekämpfung & Kellertrocknung",
    beschreibung:
      "Feuchtigkeitsschutz im Keller: Professionelle Diagnose, Trockenlegung, Schimmelbekämpfung und Abdichtung der Kellerwände von innen und außen.",
    image: "/images/properties/apartments/456-city-apartment.webp",
    tags: ["Sanierung", "Feuchtigkeitsschutz", "Keller"],
  },
  {
    id: 8,
    kategorie: "Gartenbau",
    ort: "Herborn",
    title: "Zaun- & Sichtschutzanlage",
    beschreibung:
      "Planung und Errichtung einer vollständigen Zaun- und Sichtschutzanlage für ein Privatgrundstück – Betonfundamente, Stahlpfosten und Holzlamellen.",
    image: "/images/properties/townhouses/123-modern-townhouse.webp",
    tags: ["Zaun", "Sichtschutz", "Gartenbau"],
  },
  {
    id: 9,
    kategorie: "Tiefbau",
    ort: "Haiger",
    title: "Leitungsverlegung & Erschließung",
    beschreibung:
      "Erschließungsarbeiten für ein Neubaugrundstück: Verlegung von Wasser-, Abwasser- und Stromleitungen mit anschließender Verfüllung und Verdichtung.",
    image: "/images/properties/commercial/industrial-warehouse.webp",
    tags: ["Tiefbau", "Leitungsverlegung", "Erschließung"],
  },
];

const kategorien: Kategorie[] = ["Alle", "Hochbau", "Sanierung", "Gartenbau", "Tiefbau", "Fassade"];

const kategorieColors: Record<string, string> = {
  Hochbau: "var(--main-color-1)",
  Sanierung: "#2a7fc4",
  Gartenbau: "#3a9f5c",
  Tiefbau: "#8b5e3c",
  Fassade: "#9b59b6",
};

export default function Hero() {
  const [aktiv, setAktiv] = React.useState<Kategorie>("Alle");

  const gefilterte = aktiv === "Alle" ? projekte : projekte.filter((p) => p.kategorie === aktiv);

  return (
    <section className={cn("section", styles.section)}>
      <div className={cn("container", styles.container)}>

        {/* Page Header */}
        <div style={{ marginBottom: "2.5rem" }}>
          <div className={cn("subheading-small")} style={{ color: "var(--main-color-2)" }}>
            REFERENZPROJEKTE
          </div>
          <h1 className={cn("heading-3")} style={{ marginTop: "0.4rem", marginBottom: "1rem" }}>
            Unsere abgeschlossenen Bauprojekte
          </h1>
          <p className={cn("paragraph-large")} style={{ color: "#555", maxWidth: "680px" }}>
            Vom Neubau über Sanierungen bis zum Garten- und Landschaftsbau – hier finden Sie einen
            Auszug unserer erfolgreich abgeschlossenen Projekte im Lahn-Dill-Kreis und der Region Hessen.
          </p>
        </div>

        {/* Category Tabs */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.5rem",
            marginBottom: "2.5rem",
          }}
        >
          {kategorien.map((k) => (
            <button
              key={k}
              onClick={() => setAktiv(k)}
              className={cn("label-medium")}
              style={{
                padding: "0.5rem 1.25rem",
                borderRadius: "100px",
                border: "1.5px solid",
                borderColor: aktiv === k ? "var(--main-color-1)" : "#ddd",
                background: aktiv === k ? "var(--main-color-1)" : "#fff",
                color: aktiv === k ? "#fff" : "#555",
                cursor: "pointer",
                transition: "all 0.2s ease",
                fontWeight: aktiv === k ? 700 : 400,
              }}
            >
              {k}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div
          className={styles.listings}
        >
          {gefilterte.map((projekt) => (
            <div
              key={projekt.id}
              style={{
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 2px 16px rgba(0,0,0,0.08)",
                background: "#fff",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 28px rgba(0,0,0,0.14)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "0 2px 16px rgba(0,0,0,0.08)";
              }}
            >
              {/* Image */}
              <div style={{ position: "relative", height: "210px", width: "100%" }}>
                <Image
                  src={projekt.image}
                  alt={projekt.title}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                />
                {/* Kategorie Badge */}
                <div
                  className={cn("label-medium")}
                  style={{
                    position: "absolute",
                    top: "12px",
                    left: "12px",
                    background: kategorieColors[projekt.kategorie] ?? "#E67A00",
                    color: "#fff",
                    padding: "0.25rem 0.75rem",
                    borderRadius: "100px",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                  }}
                >
                  {projekt.kategorie}
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: "1.25rem 1.5rem 1.5rem" }}>
                <div
                  className={cn("paragraph-small")}
                  style={{ color: "#888", marginBottom: "0.25rem" }}
                >
                  📍 {projekt.ort}
                </div>
                <div className={cn("heading-6")} style={{ marginBottom: "0.6rem" }}>
                  {projekt.title}
                </div>
                <div
                  className={cn("paragraph-medium")}
                  style={{ color: "#555", lineHeight: "1.6", marginBottom: "1rem" }}
                >
                  {projekt.beschreibung}
                </div>

                {/* Tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.375rem" }}>
                  {projekt.tags.map((tag) => (
                    <span
                      key={tag}
                      className={cn("paragraph-small")}
                      style={{
                        background: "#f4f4f4",
                        color: "#444",
                        padding: "0.2rem 0.65rem",
                        borderRadius: "4px",
                        fontSize: "0.78rem",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div
          style={{
            marginTop: "4rem",
            background: "linear-gradient(135deg, #1a1a1a, #2d2d2d)",
            borderRadius: "16px",
            padding: "2.5rem",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1.5rem",
          }}
        >
          <div>
            <div className={cn("heading-6")} style={{ color: "#fff", marginBottom: "0.4rem" }}>
              Möchten Sie Ihr Projekt bei uns einreichen?
            </div>
            <div className={cn("paragraph-medium")} style={{ color: "#aaa" }}>
              Kontaktieren Sie uns für eine kostenlose Beratung und ein unverbindliches Angebot.
            </div>
          </div>
          <Link
            href="/contact"
            className="button"
            style={{
              padding: "0.875rem 2rem",
              borderRadius: "6px",
              fontWeight: 700,
              textDecoration: "none",
              whiteSpace: "nowrap",
              display: "inline-block",
            }}
          >
            Angebot anfragen
          </Link>
        </div>

      </div>
    </section>
  );
}
