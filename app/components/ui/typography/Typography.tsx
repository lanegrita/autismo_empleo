import { cn } from "@/lib/utils";
import styles from "./Typography.module.css";
import { ReactNode } from "react";

interface TypograpyProps {
  children: ReactNode;
  underline?: boolean;
  className?: string;
  fontWeight?: "regular" | "medium" | "light";
  color?: "blue" | "white" | "gray" | "error" | "default";
  tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
  variant:
    | "super-title-xl"
    | "super-title-l"
    | "super-title"
    | "title-xxl"
    | "title-xl"
    | "title-l"
    | "title"
    | "title-s"
    | "para-l"
    | "para"
    | "para"
    | "subtitle"
    | "subtitle-s";
}

const Text = ({
  tag: Tag,
  children,
  underline,
  color,
  fontWeight = "regular",
  variant,
  className
}: TypograpyProps) => {
  return (
    <Tag
      className={cn(
        variant === "super-title-xl" && styles.super_title_xl,
        variant === "super-title-l" && styles.super_title_l,
        variant === "super-title" && styles.super_title,
        variant === "title-xxl" && styles.title_xxl,
        variant === "title-xl" && styles.title_xl,
        variant === "title-l" && styles.title_l,
        variant === "title" && styles.title,
        variant === "title-s" && styles.title_s,
        variant === "para-l" && styles.para_l,
        variant === "para" && styles.para,
        variant === "subtitle" && styles.subtitle,
        variant === "subtitle-s" && styles.subtitle_s,
        color === "default" && styles.default,
        color === "blue" && styles.azul,
        color === "white" && styles.white,
        color === "gray" && styles.gray,
        color === "error" && styles.error,
        underline && "underline",
        fontWeight === "regular" && "font-normal",
        fontWeight === "medium" && "font-medium",
        fontWeight === "light" && "font-light",
        className
      )}
    >
      {children}
    </Tag>
  );
};

export default Text;
