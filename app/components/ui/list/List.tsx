import { cn } from "@/lib/utils";
import styles from "./List.module.css";
import { Para } from "../typography/Typography";

export interface SimpleListProps {
  heading: string;
  items: string[];
}

interface BulletIconProps {
  variant?: "main" | "sub";
}

const BulletIcon = ({ variant = "main" }: BulletIconProps) => {
  return (
    <div
      className={cn(styles.bullet, variant === "sub" && styles.bullet_sub)}
    ></div>
  );
};

const SimpleList = ({ heading, items }: SimpleListProps) => {
  return (
    <ul className={styles.simple_list}>
      <li className={styles.simple_list_heading}>
        <BulletIcon />
        <Para tag="p">{heading}</Para>
      </li>
      <ul className={styles.simple_list_items}>
        {items.map((item, index) => (
          <li key={index} className={styles.simple_list_item}>
            <BulletIcon variant="sub" />
            <Para tag="p"> {item}</Para>
          </li>
        ))}
      </ul>
    </ul>
  );
};

export { SimpleList };
