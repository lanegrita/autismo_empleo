import { ReactNode } from "react";
import styles from "./Tooltip.module.css";
import { Tooltip as ReactTooltip } from "react-tooltip";

interface TooltipProps {
  id: string;
  content: string;
  children: ReactNode;
  position?: "top" | "right" | "bottom" | "left";
  offset: number;
  className?: string;
}

const Tooltip = ({
  id,
  content,
  children,
  position,
  offset,
  className
}: TooltipProps) => {
  return (
    <span>
      <div className={className} data-tooltip-id={id}>
        {children}
      </div>
      <ReactTooltip
        content={content}
        offset={offset}
        id={id}
        className={styles.container}
        place={position}
      />
    </span>
  );
};

export default Tooltip;
