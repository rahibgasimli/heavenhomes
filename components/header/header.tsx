"use client";

import React from "react";
import cn from "classnames";
import styles from "./header.module.css";
import Logo from "../logo";
import Burger from "../burger";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Facebook, Instagram, Tiktok, Youtube } from "@/constants/icons";

const nav_links = [
  { title: "Start", href: "/" },
  { title: "Leistungen", href: "/leistungen" },
  { title: "Projekte", href: "/listings" },
  { title: "Über uns", href: "/about" },
  { title: "Kontakt", href: "/contact" },
];

const blackHeaderPages = [
  "/listings",
  "/agents",
  "/contact",
  "/property-detail",
  "/agent",
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

export default function Header() {
  const [visibleNav, setVisibleNav] = React.useState(false);
  const [mobile, setMobile] = React.useState(false);
  const [sticky, setSticky] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  React.useEffect(() => {
    const handleResize = () => {
      setMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const navVariants = {
    open: {
      clipPath: "inset(0% 0% 0% 0%)",
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 25,
        mass: 2,
        delay: 0.2,
      },
    },
    closed: { clipPath: "inset(0% 0% 100% 0%)" },
  };

  const handleScrollSection = (
    e:
      | React.MouseEvent<HTMLAnchorElement>
      | React.MouseEvent<HTMLButtonElement>,
    href: string,
  ) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const offset = mobile ? 0 : 100;
      const y = target.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({ top: y, behavior: "smooth" });

      if (mobile) {
        setVisibleNav(false);
      }
    }
  };

  const isBlackHeader = blackHeaderPages.includes(pathname);

  return (
    <header
      className={cn(styles.header, {
        [styles.sticky]: sticky,
        [styles.border_header]: isBlackHeader,
      })}
    >
      <div className={cn("container", styles.container)}>
        <Logo
          className={cn(styles.logo, {
            [styles.black_logo]:
              (isBlackHeader && !(mobile && visibleNav)) || sticky,
            [styles.sticky_logo]: sticky,
          })}
          src={isBlackHeader ? "/images/logo2.png" : "/images/logo1.png"}
        />

        <motion.nav
          className={cn(styles.nav, {
            [styles.visible]: visibleNav,
          })}
          initial={mobile ? "closed" : false}
          animate={mobile && visibleNav ? "open" : "closed"}
          variants={mobile ? navVariants : {}}
        >
          <div className={styles.nav_links}>
            {nav_links.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className={cn("label-small", styles.nav_link, {
                  [styles.active]: pathname === link.href,
                  [styles.black_link]: isBlackHeader && !(mobile && visibleNav),
                  [styles.sticky_link]: sticky,
                })}
              >
                {link.title}
              </Link>
            ))}
          </div>

          {/* Sadece mobilde görünen Sosyal Medya İkonları */}
          {mobile && (
            <div className={styles.socials} style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "24px",
              marginTop: "40px"
            }}>
              {socials.map((social) => (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.social}
                  style={{ color: "var(--primary)" }} // Mobil menyuda görünməsi üçün rəng - ehtiyac varsa dəyişin
                >
                  <div style={{ width: "24px", height: "24px" }}>
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
          )}
        </motion.nav>

        <div className={styles.button_wrapper}>
          <Link
            href="/contact"
            className={cn("button-stroke-small", styles.button, {
              [styles.black_button]: isBlackHeader && !(mobile && visibleNav),
              [styles.sticky_button]: sticky,
            })}
          >
            Angebot anfragen
          </Link>

          <Burger
            className={styles.burger}
            burgerClassName={cn(styles.burger, {
              [styles.black_burger]: isBlackHeader && !(mobile && visibleNav),
              [styles.sticky_burger]: sticky,
            })}
            visibleNav={visibleNav}
            setVisibleNav={setVisibleNav}
          />
        </div>
      </div>
    </header>
  );
}
