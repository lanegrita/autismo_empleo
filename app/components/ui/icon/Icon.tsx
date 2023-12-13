"use client";
import { ReactSVG } from "react-svg";
import styles from "./Icon.module.css";
import Tooltip from "../tooltip/Tooltip";
import { cn } from "@/lib/utils";

export interface IconProps {
  url: string;
  tooltip?: string;
  selected?: boolean;
  tooltipPosition?: "top" | "right" | "bottom" | "left";
  variant?: "default" | "without-mask" | "with-mask";
  size?: "default" | "lg";
}

const Icon = ({
  url,
  tooltip,
  selected,
  tooltipPosition,
  variant,
  size
}: IconProps) => {
  return (
    <div
      className={cn(
        styles.container,
        selected && styles.selected,
        variant === "without-mask" && styles.without_mask,
        size === "lg" && styles.large
      )}
    >
      {tooltip ? (
        <Tooltip
          offset={20}
          position={tooltipPosition}
          id={tooltip}
          content={tooltip}
        >
          <ReactSVG className={styles.icon} src={url} />
        </Tooltip>
      ) : (
        <ReactSVG className={styles.icon} src={url} />
      )}
    </div>
  );
};

export default Icon;
