"use client";
import Link from "next/link";
import React from "react";
import styles from "./AppLink.module.css";
import { ReactSVG } from "react-svg";
import { cn } from "@/lib/utils";

interface AppLinkProps {
  title: string;
  hoverType: "hover-1" | "hover-2" | "hover-3" | "hover-4" | "hover-5";
}

const AppLink = ({ title, hoverType }: AppLinkProps) => {
  return (
    <Link
      href="#"
      className={cn(
        styles.container,
        hoverType === "hover-1" && styles.hover_1_container,
        hoverType === "hover-2" && styles.hover_2_container,
        hoverType === "hover-3" && styles.hover_3_container,
        hoverType === "hover-4" && styles.hover_4_container,
        hoverType === "hover-5" && styles.hover_5_container
      )}
    >
      <div className={styles.content}>
        <span className={styles.title}>{title}</span>
        <ReactSVG src="/images/icons/pencil.svg" className={styles.icon} />
      </div>
      {hoverType === "hover-3" && <div className={styles.line}></div>}
    </Link>
  );
};

export default AppLink;
