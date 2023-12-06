"use client";
import { ReactSVG } from "react-svg";
import styles from "./Tag.module.css";
import Tooltip from "../tooltip/Tooltip";

interface TagProps {
  title: string;
  iconUrl: string;
  tooltip: string;
}

const Tag = ({ title, tooltip, iconUrl }: TagProps) => {
  return (
    <Tooltip
      id={title}
      content={tooltip}
      offset={0}
      className={styles.container}
    >
      <ReactSVG src={iconUrl} className={styles.icon} />
      <div className={styles.title}>{title}</div>
    </Tooltip>
  );
};

export default Tag;
