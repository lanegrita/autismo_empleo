"use client";
import { ReactSVG } from "react-svg";
import styles from "./Icon.module.css";
import Tooltip from "../tooltip/Tooltip";
import { cn } from "@/lib/utils";
import Image from "next/image";

export interface IconProps {
  url: string;
  tooltip?: string;
  selected?: boolean;
  tooltipPosition?: "top" | "right" | "bottom" | "left";
  variant?: "default" | "without-mask" | "with-mask";
  size?: "default" | "lg";
  className?: string;
}

const Icon = ({
  url,
  tooltip,
  selected,
  tooltipPosition,
  variant,
  size,
  className,
}: IconProps) => {
  return (
    <div
      className={cn(
        styles.container,
        selected && styles.selected,
        variant === "without-mask" && styles.without_mask,
        size === "lg" && styles.large,
        className
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

interface LargeIconProps {
  icon: string;
  className?: string;
}

export const LargeIcon = ({ icon, className }: LargeIconProps) => {
  return (
    <div
      className={cn(
        "rounded-full border border-azulAe w-fit h-fit ",
        className
      )}
    >
      <div className="relative w-[99px] h-[99px]  md:w-[109px] md:h-[109px] xl:w-[188px] xl:h-[188px] ">
        <Image src={icon} alt="large icons" fill />
      </div>
    </div>
  );
};
