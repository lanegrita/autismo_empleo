import { cn } from "@/lib/utils";
import styles from "./List.module.css";
import Text from "../typography/Typography";
import Image from "next/image";

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
        <Text variant="para" tag="p">
          {heading}
        </Text>
      </li>
      <ul className={styles.simple_list_items}>
        {items.map((item, index) => (
          <li key={index} className={styles.simple_list_item}>
            <BulletIcon variant="sub" />
            <Text variant="para" tag="p">
              {item}
            </Text>
          </li>
        ))}
      </ul>
    </ul>
  );
};

export interface ImageListItemProps {
  url: string;
  title: string;
  description: string;
}

const ImageListItem = ({ url, title, description }: ImageListItemProps) => {
  return (
    <div className={styles.image_list_item}>
      <div className={styles.image_list_item_image}>
        <Image src={url} alt={title} fill />
      </div>
      <div className={styles.image_list_item_content}>
        <Text
          className={styles.image_list_item_title}
          variant="title-s"
          tag="h5"
          color="blue"
        >
          {title}
        </Text>

        <Text
          className={styles.image_list_item_description}
          variant="para"
          tag="p"
        >
          {description}
        </Text>
      </div>
    </div>
  );
};

export { SimpleList, ImageListItem };
