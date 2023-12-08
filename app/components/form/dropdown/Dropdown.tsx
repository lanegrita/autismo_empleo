"use client";
import { useState } from "react";
import { SubtitleS } from "../../ui/typography/Typography";
import styles from "./Dropdown.module.css";
import Select from "react-select";
import { cn } from "@/lib/utils";
import { log } from "console";

export interface DropdownOptions {
  value: string;
  label: string;
}

interface DropDownProps {
  variant?: "default" | "azul";
  error?: boolean;
  placeHolder: string;
  options: DropdownOptions[];
}

const DropDown = ({ variant, error, placeHolder, options }: DropDownProps) => {
  const [isClicked, setIsClicked] = useState(false);
  const [showPlaceHolder, setShowPlaceHolder] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);

  const customStyles = {
    control: (provided: any, state: any) => ({
      ...provided,
      backgroundColor: "transparent",
      border: state.isFocused ? "none" : "none", // Remove border on focus
      borderRadius: "none",
      boxShadow: "none", // Remove box shadow
      borderBottom: `2px solid ${
        error ? "#BD5459" : variant === "azul" ? "#217eab" : "#cbcbcb"
      }`,

      "&:hover": {
        borderColor: "none", // Remove border on hover
      },

      // Text Styles
    }),

    singleValue: (provided: any, state: any) => ({
      ...provided,
      color: variant === "azul" ? "white" : "black", // Change the color of the selected text

      // Other styles for the selected text if needed
    }),
    input: (provided: any, state: any) => ({
      ...provided,
      color: variant === "azul" ? "white" : "black", // Change text color when typing
    }),
    valueContainer: (provided: any) => ({
      ...provided,
      padding: "0px", // Adjusted padding values for the value container
      marginLeft: "0px",
      fontSize: "16px",
      fontWeight: "500",
    }),

    indicatorSeparator: () => ({
      display: "none", // Hide the indicator separator
    }),
    dropdownIndicator: (provided: any, state: any) => ({
      ...provided,
      transition: "transform 0.3s ease", // Apply transition for smooth rotation
      transform:
        state.isFocused && isClicked ? "rotate(180deg)" : "rotate(0deg)", // Rotate based on isClicked state
      color: variant === "azul" ? "white" : "#1D1D1B",
      "&:hover": {
        color: variant === "azul" ? "white" : "black",
      },
    }),
    option: (provided: any, state: any) => ({
      ...provided,
      color: state.isSelected ? "black" : "black", // Text color for options
      backgroundColor: state.isSelected ? "#E9F5FB" : "white",
      fontSize: "16px",
      borderBottom: "1px solid #CBCBCB",
      padding: "16px",
      "&:hover": {
        backgroundColor: "#E9F5FB", // Background color on direct hover
        color: "black", // Text color on direct hover
      },
    }),
    menu: (provided: any) => ({
      ...provided,
      boxShadow: "-1px 1px 14px 1px rgba(0,0,0,0.30)", // Applying box shadow to the menu
      WebkitBoxShadow: "-1px 1px 14px 1px rgba(0,0,0,0.30)", // Vendor prefix for Webkit browsers
      MozBoxShadow: "-1px 1px 14px 1px rgba(0,0,0,0.30)", // Vendor prefix for Mozilla browsers
      marginTop: "0",
    }),
    placeholder: (provided: any, state: any) => ({
      ...provided,
      color: variant === "azul" ? "white" : "black",
      transition: "all 0.3s",
      opacity: state.isFocused || showPlaceHolder ? "0" : "1",
    }),
  };
  const handleBlur = () => {
    // Check if a value has been selected before setting showPlaceHolder to true
    if (selectedValue) {
      setShowPlaceHolder(true);
    } else {
      setShowPlaceHolder(false);
    }
  };
  console.log("Selected Value: ", selectedValue);
  console.log("PlaceHolder Value", showPlaceHolder);
  return (
    <div className={styles.container}>
      <h6
        className={cn(
          styles.topText,
          variant === "azul" && styles.azul,
          showPlaceHolder && styles.isClicked
        )}
      >
        {placeHolder}
      </h6>

      <div onClick={() => setIsClicked(!isClicked)}>
        <Select
          placeholder={placeHolder}
          options={options}
          styles={customStyles}
          onFocus={() => setShowPlaceHolder(true)}
          onBlur={handleBlur} // Use the custom onBlur event handler
          onChange={(selectedOption: any) => {
            setSelectedValue(selectedOption); // Update the selected value
          }}
        />
        {error && <h6 className="mt-2 text-[#BD5459] ">Error</h6>}
      </div>
    </div>
  );
};

export default DropDown;
