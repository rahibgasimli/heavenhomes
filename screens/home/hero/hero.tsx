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
    </>
  );
}

