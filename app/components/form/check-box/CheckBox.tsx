import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import styles from "./CheckBox.module.css";
import { cn } from "@/lib/utils";
import Text from "../../ui/typography/Typography";

interface CheckBoxProps {
  label: string;
  varient?: "default" | "azul";
  className?: string;
}

const CheckBox = ({ label, varient = "default", className }: CheckBoxProps) => {
  return (
    <div className="items-top flex space-x-2">
      <Checkbox variant={varient} id={label} />
      <div className="grid gap-1.5 leading-none">
        <label
          htmlFor={label}
          className={cn(
            " font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
            varient === "azul" && "text-white"
          )}
        >
          <Text className={className} tag="p" variant="para">
            {" "}
            {label}
          </Text>
        </label>
      </div>
    </div>
  );
};

export default CheckBox;
