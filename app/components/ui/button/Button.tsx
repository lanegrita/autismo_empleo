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
  type?: "button" | "reset" | "submit";
  size?: "m" | "xl";
  disabled?: boolean;
}

const Button = ({
  title,
  onClick,
  variant,
  icon = "",
  direction = "left",
  iconSize = 24,
  type,
  size,
  disabled,
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={[
        styles.container,
        variant === "primary" && styles.primary,
        variant === "secondary" && styles.secondary,
        variant === "outline" && styles.outline,
        variant === "simple" && styles.simple,
        // Azol Styles Start
        variant === "primary-azul" && styles.primary_azul,
        variant === "secondary-azul" && styles.secondary_azul,
        variant === "outline-azul" && styles.outline_azul,
        variant === "simple-azul" && styles.simple_azul,
        // Azol Styles Ends
        direction === "left" && styles.left,
        direction === "right" && styles.right,
        icon && title && styles.with_icon,
        icon && !title && styles.only_icon,
        size === "xl" && styles.large,
        disabled && styles.disabled,
      ].join(" ")}
    >
      {title && <span style={{ zIndex: 2 }}>{title}</span>}
      {/* Icon Image */}
      {icon && (
        <div className={styles.icon_wrapper}>
          <ReactSVG className={styles.icon_image} src={icon} />
        </div>
      )}
    </button>
  );
};

export default Button;
