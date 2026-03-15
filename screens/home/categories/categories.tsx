"use client";

import React, { useState } from "react";
import cn from "classnames";
import styles from "./categories.module.css";
import { Heading } from "@/components/typography";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, type MotionProps } from "framer-motion";

type DivMotionProps = React.HTMLAttributes<HTMLDivElement> & MotionProps;
const MotionDiv = motion.div as React.FC<DivMotionProps>;

export interface CategoryType {
  id: number | string;
  title?: string;
  image: string;
}

interface CategoriesProps {
  variant?: "category" | "certificate";
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonHref?: string;
  data: CategoryType[];
}

export default function Categories({
  variant = "category",
  title = "Explore Our Categories",
  subtitle = "Whether you're looking for a luxurious home, a cozy apartment, or a prime commercial space, we have something for everyone.",
  buttonText = "View All Categories",
  buttonHref = "/listings",
  data = [],
}: CategoriesProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleCardClick = (item: CategoryType) => {
    if (variant === "certificate") {
      setSelectedImage(item.image);
    }
  };

  const closeModal = () => setSelectedImage(null);

  return (
    <>
      <section className={cn("section")}>
        <div className={cn("container")}>
          <div className={styles.content}>
            <div className={styles.title_container}>
              {title && <Heading type="heading-3">{title}</Heading>}
              {subtitle && (
                <div className={cn("paragraph-large", styles.subtitle)}>
                  {subtitle}
                </div>
              )}
            </div>

            {buttonText && buttonHref && (
              <Link href={buttonHref} className={cn("button button-primary")}>
                {buttonText}
              </Link>
            )}
          </div>

          <div className={styles.categories}>
            {data.map((item) => (
              <div
                key={item.id}
                className={styles.category}
                onClick={() => handleCardClick(item)}
              >
                <div className={styles.image_container}>
                  <Image
                    src={item.image}
                    alt={item.title || "Image"}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>

                {item.title && variant === "category" && (
                  <div className={styles.overlay}>
                    <div className={cn("heading-6", styles.category_title)}>
                      {item.title}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal for Certificates */}
      <AnimatePresence>
        {selectedImage && (
          <MotionDiv
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={styles.modal_overlay}
            onClick={closeModal}
          >
            <MotionDiv
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className={styles.modal_content}
              onClick={(e) => e.stopPropagation()}
            >
              <button className={styles.modal_close} onClick={closeModal} aria-label="Close modal">
                &times;
              </button>
              <div className={styles.modal_image_wrapper}>
                <Image
                  src={selectedImage}
                  alt="Certificate Fullscreen"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </MotionDiv>
          </MotionDiv>
        )}
      </AnimatePresence>
    </>
  );
}
