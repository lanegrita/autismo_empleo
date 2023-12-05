"use client";
import React from "react";
import styles from "./RadioButton.module.css";
import { RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";

interface RadioButtonProps {
  id: string;
  name: string;
  title: string;
  checked?: boolean;
}

const RadioButton = (props: RadioButtonProps) => {
  return (
    <label
      htmlFor={props.id}
      className={cn(styles.container, props.checked && styles.checked)}
    >
      <RadioGroupItem
        defaultChecked={props.checked}
        value={props.id}
        id={props.id}
      />
      {/* <input type="radio"  /> */}
      <div className={styles.title}>{props.title}</div>
    </label>
  );
};

export default RadioButton;
