"use client";

import React, { useState } from "react";
import styles from "./BurgerIcon.module.css";
import { cn } from "@/lib/utils";

interface BurgerIconProps {
  openMenu: boolean;
  setOpenMenu: (param1: boolean) => void;
}

const BurgerIcon: React.FC<BurgerIconProps> = ({ openMenu, setOpenMenu }) => {
  return (
    <div
      className={styles["hamburger-icon"]}
      onClick={() => setOpenMenu(!openMenu)}
    >
      <div
        className={cn(
          styles.icon_bar,
          styles.icon_1,
          openMenu && styles.active
        )}
      />
      <div
        className={cn(
          styles.icon_bar,
          styles.icon_2,
          openMenu && styles.active
        )}
      />
      <div
        className={cn(
          styles.icon_bar,
          styles.icon_3,
          openMenu && styles.active
        )}
      />
    </div>
  );
};

export default BurgerIcon;
