"use client";
import React from "react";
import styles from "./Button.module.css";
import Image from "next/image";
import { ReactSVG } from "react-svg";

interface ButtonProps {
  title?: string;
  onClick?: () => void;
  variant:
    | "primary"
    | "secondary"
    | "outline"
    | "simple"
    | "primary-azul"
    | "secondary-azul"
    | "outline-azul"
    | "simple-azul";
  icon?: string;
  direction?: "left" | "right";
  iconSize?: number;
}

const Button = ({
  title,
  onClick,
  variant,
  icon = "",
  direction = "left",
  iconSize = 24,
}: ButtonProps) => {
  return (
    <button
      className={[
        styles.container,
        variant === "primary" && styles.primary,
        variant === "secondary" && styles.secondary,
        variant === "outline" && styles.outline,
        variant === "simple" && styles.simple,
        // Azol Styles Start
        variant === "primary-azul" && styles.primaryAzul,
        variant === "secondary-azul" && styles.secondaryAzul,
        variant === "outline-azul" && styles.outlineAzul,
        variant === "simple-azul" && styles.simpleAzul,
        // Azol Styles Ends
        direction === "left" && styles.left,
        direction === "right" && styles.right,
        icon && title && styles.withIcon,
        icon && !title && styles.onlyIcon,
      ].join(" ")}
    >
      {title && title}
      {/* Icon Image */}
      {icon && (
        <div className={styles.iconWrapper}>
          <ReactSVG className={styles.iconImage} src={icon} />
        </div>
      )}
    </button>
  );
};

export default Button;
