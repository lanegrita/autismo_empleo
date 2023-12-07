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
  variant?: "default" | "azul";
}

const RadioButton = (props: RadioButtonProps) => {
  return (
    <label
      htmlFor={props.id}
      className={cn(styles.container, props.checked && styles.checked)}
    >
      <div className={styles.left_container}>
        <RadioGroupItem
          defaultChecked={props.checked}
          value={props.id}
          id={props.id}
        />

        {/* <input type="radio"  /> */}
        <div className={styles.title}>{props.title}</div>
      </div>
      {props.icon && (
        <div className={styles.icon}>
          <Image src={props.icon} alt="input Icon" fill />
        </div>
      )}
    </label>
  );
};

const SimpleRadioButton = ({
  id,
  title,
  variant = "default",
}: RadioButtonProps) => {
  return (
    <div className="flex items-center space-x-2">
      <RadioGroupItem variant={variant} value={id} id={id} />
      <Label variant={variant} htmlFor={id}>
        {title}
      </Label>
    </div>
  );
};

export { RadioButton, SimpleRadioButton };
