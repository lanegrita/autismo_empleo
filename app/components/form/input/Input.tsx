"use client";
import React, { useState } from "react";
import styles from "./Input.module.css";
import { ReactSVG } from "react-svg";
import { cn } from "@/lib/utils";
import Text from "../../ui/typography/Typography";

export interface InputProps {
  placeholder: string;
  name?: string;
  type?: "text" | "email" | "password" | "tel";
  variant: "simple" | "newsletter";
  color?: "default" | "azul";
  error?: string;
  register?: any;
}

const Input = ({
  variant,
  type,
  register = () => {},
  color,
  error = "",
  name,
  placeholder
}: InputProps) => {
  const [showPlaceHolder, setShowPlaceHolder] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");

  if (variant === "simple") {
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
            color === "azul" && styles.azul,
            showPlaceHolder && styles.active,
            error && styles.error
          )}
          variant="subtitle-s"
          tag="h6"
        >
          {placeholder}
        </Text>
        <input
          type={type}
          className={cn(
            styles.simple_input,
            color === "azul" && styles.azul,
            showPlaceHolder && styles.disable,
            error && styles.error
          )}
          placeholder={placeholder}
          onFocus={() => setShowPlaceHolder(true)}
          onBlur={handleBlur} // Use the custom onBlur event handler
          onChange={handleInputChange}
          {...register(name)}
        />
        {/* Error Message */}
        {error && (
          <Text variant="subtitle-s" tag="p" className={styles.errorMessage}>
            {error}
          </Text>
        )}
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        type="text"
        name="email"
        id="email"
        placeholder="Email"
      />
      {variant === "newsletter" && (
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
