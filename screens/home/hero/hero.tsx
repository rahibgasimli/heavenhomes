"use client";

import React from "react";
import styles from "./hero.module.css";
import cn from "classnames";
import { Heading, Hero as HeroTitle } from "@/components/typography";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <div className={styles.img_container}>
        <Image
          src="/images/header-background.webp"
          alt="MR Bauunternehmen – Meisterbetrieb in Herborn"
          layout="fill"
          objectFit="cover"
        />

        <div className={styles.overlay} />

        <div className={styles.hero_content}>
          <HeroTitle size="hero-lg" className={styles.title}>
            Ihr Meisterbetrieb <br />
            für Bau & Sanierung.
          </HeroTitle>

          <div style={{ display: "flex", gap: "1rem" }}>
            <Link href="/contact" className="button">
              Angebot anfragen
            </Link>
            <Link href="/listings" className="button-stroke">
              Projekte ansehen
            </Link>
          </div>
        </div>
      </div>

      <section className={cn("section", styles.section)}>
        <div className={cn("container", styles.container)}>
          <div className={styles.content}>
            <Heading type="heading-3">
              Zuverlässige Handwerkskunst auf Meisterniveau – in Herborn und der gesamten Region Hessen.
            </Heading>

            <div className={styles.stack}>
              <div className={styles.card}>
                <div className={cn("paragraph-large", styles.card_subtitle)}>
                  Abgeschlossene Projekte
                </div>
                <div className={cn("heading-3")}>500+</div>
              </div>

              <div className={styles.card}>
                <Image
                  src="/images/intro.webp"
                  alt="MR Bauunternehmen Projekt"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

