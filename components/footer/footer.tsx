import React from "react";
import styles from "./footer.module.css";
import cn from "classnames";
import Logo from "../logo";
import { Heading } from "../typography";
import Link from "next/link";
import { Facebook, Instagram, Tiktok, Youtube } from "@/constants/icons";
import Image from "next/image";

const links = [
  { id: 1, title: "Start", url: "/" },
  { id: 2, title: "Leistungen", url: "/leistungen" },
  { id: 3, title: "Projekte", url: "/listings" },
  { id: 4, title: "Über uns", url: "/about" },
  { id: 5, title: "Kontakt", url: "/contact" },
  { id: 6, title: "Hochbau", url: "/leistungen" },
  { id: 7, title: "Sanierung", url: "/leistungen" },
  { id: 8, title: "Gartenbau", url: "/leistungen" },
];

const socials = [
  {
    id: 1,
    icon: Instagram,
    title: "Instagram",
    url: "https://www.instagram.com/mr_bauunternehmen?igsh=MWh4dHpqenR5aXd4ZA%3D%3D&utm_source=qr",
  },
  {
    id: 2,
    icon: Facebook,
    title: "Facebook",
    url: "https://www.facebook.com/profile.php?id=61588340791183&mibextid=wwXIfr&rdid=9yNSvk4Y2aJkNYgm&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1AxJp85APt%2F%3Fmibextid%3DwwXIfr#",
  },
  {
    id: 3,
    icon: Tiktok,
    title: "Tiktok",
    url: "https://www.tiktok.com/@mr.bauunternehmen?_r=1&_t=ZG-948s4XVgtNp",
  },
  {
    id: 4,
    icon: Youtube,
    title: "Youtube",
    url: "https://www.youtube.com/@MRBauunternehmen",
  },
];

export default function Footer() {
  return (
    <footer className={cn("section", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.content} style={{ alignItems: "center" }}>
          <Logo />

          <div>
            <Heading type="heading-6" className={styles.title}>
              Qualität, die bleibt – Ihr Meisterbetrieb in Herborn.
            </Heading>
            <div className={cn("subheading-small", styles.email)}>
              info@mr-bauunternehmen.de
            </div>
          </div>
        </div>

        <div className={styles.divider} />

        <div className={styles.footer_bottom}>
          <div className={styles.business_info}>
            <div>
              <div className={cn("paragraph-small", styles.address)}>
                Herborn, Lahn-Dill-Kreis, Hessen
              </div>
              <div className={cn("paragraph-small", styles.phone)}>
                +49 160 182 91 92
              </div>
            </div>

            <div className={styles.socials} style={{ alignItems: "center" }}>
              {socials.map((social) => (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.social}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            <div className={cn("paragraph-small", styles.copyright)}>
              © 2025 MR Bauunternehmen. Alle Rechte vorbehalten.
            </div>
          </div>

          <div className={styles.links}>
            {links.map((link) => (
              <Link
                key={link.id}
                href={link.url}
                className={cn("label-medium", styles.link)}
              >
                {link.title}
              </Link>
            ))}
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "16px", alignItems: "center" }}>
            <Link target="blank" href="https://www.my-hammer.de/auftragnehmer/mammadov-ruslan"><Image src="/images/handwerker.png" alt="HandWerker" width={80} height={80} /></Link>
            <Link target="blank" href="https://www.handwerker.de/firmen/mr-bauunternehmen-gmbh-100000000000001698"><Image src="/images/profi.svg" alt="Profi" width={80} height={80} /></Link>
          </div>

          <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
            <Link href="/impressum" className={cn("label-medium", styles.link)} style={{ textDecoration: "underline" }}>Impressum</Link>
            <Link href="/datenschutz" className={cn("label-medium", styles.link)} style={{ textDecoration: "underline" }}>Datenschutzerklärung</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
