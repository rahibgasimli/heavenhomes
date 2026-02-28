import React from "react";
import styles from "./footer.module.css";
import cn from "classnames";
import Logo from "../logo";
import { Heading } from "../typography";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Youtube } from "@/constants/icons";

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
    url: "#",
  },
  {
    id: 2,
    icon: Facebook,
    title: "Facebook",
    url: "#",
  },
  {
    id: 3,
    icon: Linkedin,
    title: "Linkedin",
    url: "#",
  },
  {
    id: 4,
    icon: Youtube,
    title: "Youtube",
    url: "#",
  },
];

export default function Footer() {
  return (
    <footer className={cn("section", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.content}>
          <Logo />

          <div>
            <Heading type="heading-3" className={styles.title}>
              Qualität, die bleibt – Ihr Meisterbetrieb in Herborn.
            </Heading>
            <div className={cn("subheading-small", styles.email)}>
              info@mr-bauunternehmen.de
            </div>
          </div>
        </div>

        <div className={styles.divider} />

        <div className={styles.content}>
          <div className={styles.business_info}>
            <div>
              <div className={cn("paragraph-small", styles.address)}>
                Herborn, Lahn-Dill-Kreis, Hessen
              </div>
              <div className={cn("paragraph-small", styles.phone)}>
                +49 (0) 2772 123456
              </div>
            </div>

            <div className={styles.socials}>
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
        </div>
      </div>
    </footer>
  );
}
