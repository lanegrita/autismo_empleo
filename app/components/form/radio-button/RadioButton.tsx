"use client";
import React from "react";
import styles from "./RadioButton.module.css";
import { RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import Image from "next/image";

interface RadioButtonProps {
  id: string;
  title: string;
  checked?: boolean;
  icon?: string;
  variant?: "default" | "azul" | "default-xl" | "azul-xl";
}

const RadioButtonXL = ({
  id,
  checked,
  title,
  icon,
  variant = "default-xl"
}: RadioButtonProps) => {
  return (
    <label
      htmlFor={id}
      className={cn(
        styles.container,
        checked && styles.checked,
        variant === "azul-xl" && styles.azul_xl,
        "cursor-pointer"
      )}
    >
      <div className={styles.left_container}>
        <RadioGroupItem
          variant={variant}
          defaultChecked={checked}
          value={id}
          id={id}
        />

        {/* <input type="radio"  /> */}
        <div className={styles.title}>{title}</div>
      </div>
      {icon && (
        <div className={styles.icon}>
          <Image src={icon} alt="input Icon" fill />
        </div>
      )}
    </label>
  );
};

const SimpleRadioButton = ({
  id,
  title,
  variant = "default"
}: RadioButtonProps) => {
  return (
    <div className="flex items-center space-x-2">
      <RadioGroupItem variant={variant} value={id} id={id} />
      <Label className="text-[14px]" variant={variant} htmlFor={id}>
        {title}
      </Label>
    </div>
  );
};

export { RadioButtonXL, SimpleRadioButton };
