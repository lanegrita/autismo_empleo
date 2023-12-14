"use client";
import React, { useState } from "react";
import styles from "./Input.module.css";
import { ReactSVG } from "react-svg";
import { cn } from "@/lib/utils";
import Text from "../../ui/typography/Typography";
import { error } from "console";

interface InputProps {
  placeholder: string;
  type: "text" | "email" | "password" | "tel";
  variant: "simple" | "newsletter";
  color?: "default" | "azul";
  error?: boolean;
}

const Input = (props: InputProps) => {
  const [showPlaceHolder, setShowPlaceHolder] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");

  if (props.variant === "simple") {
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const inputValue = event.target.value;
      setSelectedValue(inputValue); // Update showPlaceHolder based on input value
    };

    const handleBlur = () => {
      // Check if a value has been selected before setting showPlaceHolder to true
      if (selectedValue == "") {
        setShowPlaceHolder(false);
      } else {
        setShowPlaceHolder(true);
      }
    };
    return (
      <div>
        {/* Top Placeholder */}
        <Text
          className={cn(
            styles.topPlaceHolder,
            props.color === "azul" && styles.azul,
            showPlaceHolder && styles.active,
            props.error && styles.error
          )}
          variant="subtitle-s"
          tag="h6"
        >
          {props.placeholder}
        </Text>
        <input
          {...props}
          className={cn(
            styles.simple_input,
            props.color === "azul" && styles.azul,
            showPlaceHolder && styles.disable,
            props.error && styles.error
          )}
          type={props.type}
          placeholder={props.placeholder}
          onFocus={() => setShowPlaceHolder(true)}
          onBlur={handleBlur} // Use the custom onBlur event handler
          onChange={handleInputChange}
        />
        {/* Error Message */}
        {props.error && (
          <Text variant="subtitle-s" tag="p" className={styles.errorMessage}>
            Rellene este campo obligatorio.
          </Text>
        )}
      </div>
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

const NewsletterInput = () => {
  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        type="text"
        name="email"
        id="email"
        placeholder="Email"
      />

      <div className={styles.iconWrapper}>
        <ReactSVG
          className={styles.icon}
          src="/images/icons/right-arrow-white.svg"
          width={20}
          height={20}
        />
      </div>
    </div>
  );
};

export default Input;

export { NewsletterInput };
