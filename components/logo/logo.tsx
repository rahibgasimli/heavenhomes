import Link from "next/link";
import styles from "./logo.module.css";
import cn from "classnames";
import Image from "next/image";

type LogoProps = {
  className?: string;
};

export default function Logo({ className }: LogoProps) {
  return (
    <Link href="/" className={cn(styles.logo, className)} >
      <Image
  src="/images/logo1.png"
  alt="Açıqlama"
  width={150}
  height={150}
/>
    </Link>
  );
}
