import { cn } from "@/lib/utils";
import styles from "./List.module.css";
import Text from "../typography/Typography";
import Image from "next/image";
import Icon from "../icon/Icon";

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

export interface NumberListProps {
  number: number;
  title: string;
  description: string;
}

const NumberList = ({ number, title, description }: NumberListProps) => {
  return (
    <div className={styles.number_list}>
      <div className={styles.number_list_icon_wrapper}>
        <Text tag="h6" variant="title-xxl" color="blue">
          {number}
        </Text>
      </div>
      <div className={styles.number_list_content}>
        <Text
          className={styles.number_list_title}
          variant="title-s"
          tag="h5"
          color="blue"
        >
          {title}
        </Text>

        <Text className={styles.number_list_description} variant="para" tag="p">
          {description}
        </Text>
      </div>
    </div>
  );
};

interface ListItemProps {
  variant: "simple" | "with-description" | "with-items";
  iconUrl: string;
  title: string;
  descrition?: string;
  items?: string[];
}

const ListItem: React.FC<ListItemProps> = ({
  iconUrl,
  title,
  descrition,
  variant,
  items
}) => {
  return (
    <div className="flex flex-col gap-8">
      <div
        className={cn(
          styles.list_item,
          variant === "with-description" && styles.list_with_description,
          variant === "with-items" && styles.list_with_items
        )}
      >
        <Icon
          url={iconUrl}
          variant={(variant === "simple" && "without-mask") || "default"}
          size={variant === "simple" ? "default" : "lg"}
        />
        <Text
          tag="h5"
          variant="title-s"
          color={variant === "simple" ? "default" : "blue"}
        >
          {title}
        </Text>
      </div>
      {variant === "with-description" && (
        <Text tag="p" variant="para" className="ml-[104px] ">
          {descrition}
        </Text>
      )}

      {variant === "with-items" && (
        <ul className="flex flex-col gap-4 ml-[104px] ">
          {items?.map((item, index) => (
            <li key={index} className="flex items-center gap-4">
              <BulletIcon />
              <Text variant="para" tag="p">
                {item}
              </Text>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export { SimpleList, ImageListItem, NumberList, ListItem };
