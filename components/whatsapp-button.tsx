"use client";

import React from "react";
import Link from "next/link";
import { Whatsapp } from "@/constants/icons";
import styles from "./whatsapp-button.module.css";

export default function WhatsAppButton() {
  return (
    <Link
      href="https://wa.me/491601829192"
      target="_blank"
      rel="noopener noreferrer"
      className={styles.whatsappButton}
      aria-label="Contact us on WhatsApp"
    >
      <div className={styles.iconWrapper}>
        {Whatsapp}
      </div>
    </Link>
  );
}
