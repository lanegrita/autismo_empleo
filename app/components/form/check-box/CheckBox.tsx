import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import styles from "./CheckBox.module.css";
import { cn } from "@/lib/utils";
import Text from "../../ui/typography/Typography";

interface CheckBoxProps {
  label: string;
  varient?: "default" | "azul";
}

const CheckBox = ({ label, varient = "default" }: CheckBoxProps) => {
  return (
    <div className="items-top flex space-x-2 max-w-sm">
      <Checkbox variant={varient} id={label} />
      <div className="grid gap-1.5 leading-none">
        <label
          htmlFor={label}
          className={cn(
            " font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
            varient === "azul" && "text-white"
          )}
        >
          <Text tag="p" variant="para" className="whitespace-nowrap">
            {" "}
            {label}
          </Text>
        </label>
      </div>
    </div>
  );
};

export default CheckBox;
