"use client";

import React from "react";
import styles from "./testimonials.module.css";
import cn from "classnames";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "@/constants/icons";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    image: "/images/testimonials/john-lisa.webp",
    name: "Thomas M.",
    span: "Privatkunde, Herborn",
    text: "Ruslan und sein Team haben unsere gesamte Außenanlage neu gestaltet – Pflasterung, Bepflanzung und Zaunanlage. Die Arbeit war makellos sauber und wurde pünktlich fertiggestellt. Absolut empfehlenswert!",
  },
  {
    id: 2,
    image: "/images/testimonials/sarah-michael.webp",
    name: "Sabine K.",
    span: "Privatkunde, Dillenburg",
    text: "Ich hatte ein ernsthaftes Feuchtigkeitsproblem im Keller. MR Bauunternehmen hat das Problem professionell diagnostiziert und dauerhaft behoben. Klare Kommunikation und Meisterqualität – 5 Sterne!",
  },
  {
    id: 3,
    image: "/images/testimonials/emily-david.webp",
    name: "André B.",
    span: "Gewerbekunde, Wetzlar",
    text: "Für unser Firmengebäude haben wir eine komplette Fassadensanierung beauftragt. Das Ergebnis übertrifft unsere Erwartungen. Herr Mammadov ist ein echter Profi – pünktlich, sauber und zum vereinbarten Preis.",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = React.useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className={cn("section")}>
      <div className={cn("container")}>
        <div className={cn("subheading-small", styles.title)}>Kundenstimmen</div>

        <div className={styles.testimonial}>
          <div className={styles.testimonial_image}>
            <Image
              src={testimonials[current].image}
              alt={testimonials[current].name}
              layout="fill"
              objectFit="cover"
            />
          </div>

          <div className={styles.testimonial_info}>
            <div>
              <div className={cn("heading-6", styles.text)}>
                {testimonials[current].text}
              </div>

              <div className={cn("paragraph-medium", styles.testimonial_name)}>
                {testimonials[current].name},&nbsp;
                <span className={styles.span}>
                  {testimonials[current].span}
                </span>
              </div>
            </div>

            <div className={styles.btns}>
              <button
                className={cn("button-stroke-small", styles.btn)}
                onClick={prevSlide}
              >
                {ChevronLeft}
              </button>

              <button
                className={cn("button-stroke-small", styles.btn)}
                onClick={nextSlide}
              >
                {ChevronRight}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
