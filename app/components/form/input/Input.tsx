"use client";
import React from "react";
import styles from "./Input.module.css";
import { ReactSVG } from "react-svg";

interface InputProps {
  placeholder: string;
  type: "text" | "email" | "password" | "tel";
  variant: "simple" | "newsletter";
}

const Input = (props: InputProps) => {
  if (props.variant === "simple") {
    return (
      <input
        {...props}
        className={styles.simple_input}
        type={props.type}
        placeholder={props.placeholder}
      />
    );
  }

  return (
    <div className={styles.container}>
      <input
        {...props}
        className={styles.input}
        type="text"
        name="email"
        id="email"
        placeholder="Email"
      />
      {props.variant === "newsletter" && (
        <div className={styles.iconWrapper}>
          <ReactSVG
            className={styles.icon}
            src="/images/icons/right-arrow-white.svg"
            width={20}
            height={20}
          />
        </div>
      )}
    </div>
  );
};

export default Input;
