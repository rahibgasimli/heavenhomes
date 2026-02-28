import React from "react";
import styles from "./team.module.css";
import cn from "classnames";
import { Heading } from "@/components/typography";
import Link from "next/link";
import TeamMember from "@/components/team-member";
import { TeamMembers } from "@/constants/mock";

export default function Team() {
  return (
    <section className={cn("section")}>
      <div className={cn("container")}>
        <div className={styles.content}>
          <div className={styles.title_container}>
            <Heading type="heading-3">Unser Team – Meister und Fachkräfte</Heading>
            <div className={cn("paragraph-large", styles.subtitle)}>
              {
                "Unser erfahrenes Team aus zertifizierten Fachkräften begleitet Sie durch alle Phasen Ihres Bauprojekts – von der Planung bis zur Fertigstellung."
              }
            </div>
          </div>

          <Link href="/agents" className={cn("button button-primary")}>
            Team kennenlernen
          </Link>
        </div>

        <div className={styles.team_members}>
          {TeamMembers.slice(0, 3).map((member) => (
            <TeamMember key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}

