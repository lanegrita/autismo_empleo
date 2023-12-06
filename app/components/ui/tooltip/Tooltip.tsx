import { ReactNode } from "react";
import styles from "./Tooltip.module.css";
import { Tooltip as ReactTooltip } from "react-tooltip";

interface TooltipProps {
  id: string;
  content: string;
  children: ReactNode;
  position?: "top" | "right" | "bottom" | "left";
}

const Tooltip = ({ id, content, children, position }: TooltipProps) => {
  return (
    <>
      <a data-tooltip-id={id}>{children}</a>
      <ReactTooltip
        content={content}
        offset={20}
        id={id}
        className={styles.container}
        place={position}
      />
    </>
  );
};

export default Tooltip;
