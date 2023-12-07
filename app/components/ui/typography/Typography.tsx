import { cn } from "@/lib/utils";
import styles from "./Typography.module.css";
import { ReactNode } from "react";

interface TypograpyProps {
  children: ReactNode;
  underline?: boolean;
  fontWeight?: "regular" | "medium";
  color?: "blue" | "white";
  tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
}

const SuperTitleXL = ({
  tag: Tag,
  children,
  underline,
  color,
  fontWeight = "regular",
}: TypograpyProps) => {
  return (
    <Tag
      className={cn(
        styles.super_title_xl,
        color === "blue" && styles.azul,
        color === "white" && styles.white,
        underline && "underline",
        fontWeight === "regular" ? "font-normal" : "font-medium"
      )}
    >
      {children}
    </Tag>
  );
};
const SuperTitleL = ({
  tag: Tag,
  children,
  underline,
  color,
  fontWeight = "regular",
}: TypograpyProps) => {
  return (
    <Tag
      className={cn(
        styles.super_title_l,
        color === "blue" && styles.azul,
        color === "white" && styles.white,
        underline && "underline",
        fontWeight === "regular" ? "font-normal" : "font-medium"
      )}
    >
      {children}
    </Tag>
  );
};
const SuperTitle = ({
  tag: Tag,
  children,
  underline,
  color,
  fontWeight = "regular",
}: TypograpyProps) => {
  return (
    <Tag
      className={cn(
        styles.super_title,
        color === "blue" && styles.azul,
        color === "white" && styles.white,
        underline && "underline",
        fontWeight === "regular" ? "font-normal" : "font-medium"
      )}
    >
      {children}
    </Tag>
  );
};
const TitleXXL = ({
  tag: Tag,
  children,
  underline,
  color,
  fontWeight = "regular",
}: TypograpyProps) => {
  return (
    <Tag
      className={cn(
        styles.title_xxl,
        color === "blue" && styles.azul,
        color === "white" && styles.white,
        underline && "underline",
        fontWeight === "regular" ? "font-normal" : "font-medium"
      )}
    >
      {children}
    </Tag>
  );
};
const TitleXL = ({
  tag: Tag,
  children,
  underline,
  color,
  fontWeight = "regular",
}: TypograpyProps) => {
  return (
    <Tag
      className={cn(
        styles.title_xl,
        color === "blue" && styles.azul,
        color === "white" && styles.white,
        underline && "underline",
        fontWeight === "regular" ? "font-normal" : "font-medium"
      )}
    >
      {children}
    </Tag>
  );
};
const TitleL = ({
  tag: Tag,
  children,
  underline,
  color,
  fontWeight = "regular",
}: TypograpyProps) => {
  return (
    <Tag
      className={cn(
        styles.title_l,
        color === "blue" && styles.azul,
        color === "white" && styles.white,
        underline && "underline",
        fontWeight === "regular" ? "font-normal" : "font-medium"
      )}
    >
      {children}
    </Tag>
  );
};
const Title = ({
  tag: Tag,
  children,
  underline,
  color,
  fontWeight = "regular",
}: TypograpyProps) => {
  return (
    <Tag
      className={cn(
        styles.title,
        color === "blue" && styles.azul,
        color === "white" && styles.white,
        underline && "underline",
        fontWeight === "regular" ? "font-normal" : "font-medium"
      )}
    >
      {children}
    </Tag>
  );
};
const TitleS = ({
  tag: Tag,
  children,
  underline,
  color,
  fontWeight = "regular",
}: TypograpyProps) => {
  return (
    <Tag
      className={cn(
        styles.title_s,
        color === "blue" && styles.azul,
        color === "white" && styles.white,
        underline && "underline",
        fontWeight === "regular" ? "font-normal" : "font-medium"
      )}
    >
      {children}
    </Tag>
  );
};
const ParaL = ({
  tag: Tag,
  children,
  underline,
  color,
  fontWeight = "regular",
}: TypograpyProps) => {
  return (
    <Tag
      className={cn(
        styles.para_l,
        color === "blue" && styles.azul,
        color === "white" && styles.white,
        underline && "underline",
        fontWeight === "regular" ? "font-normal" : "font-medium"
      )}
    >
      {children}
    </Tag>
  );
};
const Para = ({
  tag: Tag,
  children,
  underline,
  color,
  fontWeight = "regular",
}: TypograpyProps) => {
  return (
    <Tag
      className={cn(
        styles.para,
        color === "blue" && styles.azul,
        color === "white" && styles.white,
        underline && "underline",
        fontWeight === "regular" ? "font-normal" : "font-medium"
      )}
    >
      {children}
    </Tag>
  );
};
const Subtitle = ({
  tag: Tag,
  children,
  underline,
  color,
  fontWeight = "regular",
}: TypograpyProps) => {
  return (
    <Tag
      className={cn(
        styles.subtitle,
        color === "blue" && styles.azul,
        color === "white" && styles.white,
        underline && "underline",
        fontWeight === "regular" ? "font-normal" : "font-medium"
      )}
    >
      {children}
    </Tag>
  );
};
const SubtitleS = ({
  tag: Tag,
  children,
  underline,
  color,
  fontWeight = "regular",
}: TypograpyProps) => {
  return (
    <Tag
      className={cn(
        styles.subtitle_s,
        color === "blue" && styles.azul,
        color === "white" && styles.white,
        underline && "underline",
        fontWeight === "regular" ? "font-normal" : "font-medium"
      )}
    >
      {children}
    </Tag>
  );
};

export {
  SuperTitleXL,
  SuperTitleL,
  SuperTitle,
  TitleXXL,
  TitleXL,
  TitleL,
  Title,
  TitleS,
  ParaL,
  Para,
  Subtitle,
  SubtitleS,
};
