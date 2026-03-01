import Link from "next/link";
import styles from "./logo.module.css";
import cn from "classnames";
import Image from "next/image";

type LogoProps = {
  className?: string;
  src?: string;
};

export default function Logo({ className, src = "/images/logo1.png" }: LogoProps) {
  return (
    <Link href="/" className={cn(styles.logo, className)} >
      <Image
        src={src}
        alt="Açıqlama"
        width={150}
        height={150}
      />
    </Link>
  );
}
