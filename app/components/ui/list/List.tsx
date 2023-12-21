import { cn } from "@/lib/utils";
import styles from "./List.module.css";
import Text from "../typography/Typography";
import Image from "next/image";
import Icon from "../icon/Icon";
import Button from "../button/Button";
import { subscribe } from "diagnostics_channel";

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
// ======================================================================

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
// ===========================================================================

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

// ====================================================================
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
// =======================================================================

interface ListItemProps {
  variant: "simple" | "with-description" | "with-items";
  iconUrl: string;
  title: string;
  descrition?: string;
  items?: string[];
  iconClassName?: string;
}

const ListItem: React.FC<ListItemProps> = ({
  iconUrl,
  title,
  descrition,
  variant,
  items,
  iconClassName,
}) => {
  return (
    <div className="flex flex-col gap-4 xl:gap-8">
      <div
        className={cn(
          styles.list_item,
          variant === "with-description" && styles.list_with_description,
          variant === "with-items" && styles.list_with_items,
          variant === "simple" && "!gap-0"
        )}
      >
        <Icon
          url={iconUrl}
          variant={(variant === "simple" && "without-mask") || "default"}
          size={variant === "simple" ? "default" : "lg"}
          className={cn(
            variant === "simple" &&
              "!w-[44px] !h-[44px] md:!w-[60px] md:!h-[60px] xl:!w-[68px] xl:!h-[68px]"
          )}
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
        <Text
          tag="p"
          variant="para"
          className=" ml-[60px] sm:ml-[72px] md:ml-[104px] "
        >
          {descrition}
        </Text>
      )}

      {variant === "with-items" && (
        <ul className="flex flex-col gap-4 ml-[60px] xs:ml-[104px] ">
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
// ==========================================================

export interface OfferListItem1Props {
  image: string;
  title: string;
  subTitle: string;
  description: string;
  items: string[];
  className?: string;
  backgroundColor?: "white" | "blue";
}

const OfferListItem1: React.FC<OfferListItem1Props> = ({
  image,
  title,
  subTitle,
  description,
  items,
  backgroundColor,
  className,
}) => {
  return (
    <div
      className={cn(
        "flex  flex-col sm:flex-row gap-20 px-10 py-20 sm:p-20 bg-blanco",
        backgroundColor === "blue" && "bg-azulLight3",
        className
      )}
    >
      <div className="relative w-[76px] h-[76px] min-w-[76px] min-h-[76px] sm:w-[120px] sm:h-[120px] sm:min-w-[120px] sm:min-h-[120px] rounded-full overflow-hidden">
        <Image src={image} alt="image" fill />
      </div>
      {/* Content Content */}
      <div className="flex flex-col gap-16 md:gap-25 max-w-[897px]">
        {/* Top Container */}
        <div className="">
          <Text tag="h3" variant="title-s" fontWeight="medium">
            {title}
          </Text>
          <Text
            tag="p"
            variant="para"
            color="blue"
            underline
            className="mt-5 mb-12"
          >
            {subTitle}
          </Text>
          {description && (
            <Text tag="p" variant="para" color="gray">
              {description}
            </Text>
          )}
        </div>
        {/* Bottom Container */}
        <div className="flex gap-20 flex-wrap">
          {items.map((item, index) => (
            <Text key={index} tag="p" variant="para">
              {item}
            </Text>
          ))}
        </div>
      </div>
    </div>
  );
};

// =========================================================================

// Offer List Item 2

export interface OfferListItem2Props {
  image: string;
  title: string;
  subTitle: string;
  backgroundColor?: "white" | "blue";
  publishDate: string;
  registerdOnOffer?: number;
  subscribeButton?: boolean;
}

const OfferListItem2: React.FC<OfferListItem2Props> = ({
  image,
  title,
  subTitle,
  backgroundColor,
  publishDate,
  registerdOnOffer,
  subscribeButton,
}) => {
  return (
    <div
      className={cn(
        "flex  flex-col sm:flex-row gap-20 border border-gris2 px-10 py-20 sm:p-20 bg-blanco",
        backgroundColor === "blue" && "bg-azulLight3"
      )}
    >
      <div className="relative w-[76px] h-[76px] min-w-[76px] min-h-[76px] sm:w-[120px] sm:h-[120px] sm:min-w-[120px] sm:min-h-[120px] rounded-full overflow-hidden">
        <Image src={image} alt="image" fill />
      </div>
      {/* Content Content */}
      <div className="flex w-full flex-col gap-16 md:gap-25 ">
        {/* Top Container */}
        <div className="flex flex-col xl:flex-row justify-between">
          <div className="max-w-[897px]">
            <Text tag="h3" variant="title-s" fontWeight="medium">
              {title}
            </Text>
            <Text
              tag="p"
              variant="para"
              color="blue"
              underline
              className="mt-5 mb-12"
            >
              {subTitle}
            </Text>
          </div>
          {/* Register Offers */}
          {registerdOnOffer && (
            <Text tag="h6" variant="para-l" color="blue" underline>
              {registerdOnOffer} inscritos en esta oferta
            </Text>
          )}
        </div>
        {/* Bottom Container */}
        <div className="flex flex-col gap-16 lg:flex-row  justify-between">
          <div className="grid flex-1 grid-cols-2 gap-y-16 md:grid-cols-5">
            {/* Publish Date */}
            {publishDate && (
              <div>
                <Text tag="p" variant="para">
                  Publicada
                </Text>
                {/* Date */}
                <Text tag="p" variant="para" color="blue">
                  {publishDate}
                </Text>
              </div>
            )}
            <div className="flex flex-col gap-5 md:col-span-2">
              <Text tag="p" variant="para">
                Contrato de duración determinada
              </Text>
              <Text tag="p" variant="para">
                Jornada Completa
              </Text>
            </div>
            <Text
              tag="p"
              variant="para"
              className="md:col-span-2 whitespace-nowrap"
            >
              25.000-35.000€/año
            </Text>
          </div>
          {subscribeButton && (
            <Button
              variant="primary"
              direction="left"
              title="Subscribe"
              icon="/images/icons/pencil.svg"
            />
          )}
        </div>
      </div>
    </div>
  );
};

// ========================================================

// Offer List Item 3
export interface OfferListItem3Props {
  image: string;
  title: string;
  subTitle: string;
  className?: string;
  backgroundColor?: "white" | "blue";
}

const OfferListItem3: React.FC<OfferListItem3Props> = ({
  image,
  title,
  subTitle,
  backgroundColor,
  className,
}) => {
  return (
    <div
      className={cn(
        "px-10 py-20 sm:p-20 bg-blanco border-t border-gris2 ",
        backgroundColor === "blue" && "bg-azulLight3",
        className
      )}
    >
      <div className={cn("flex  flex-col sm:flex-row gap-20 ")}>
        <div className="relative w-[76px] h-[76px] min-w-[76px] min-h-[76px] sm:w-[120px] sm:h-[120px] sm:min-w-[120px] sm:min-h-[120px] rounded-full overflow-hidden">
          <Image src={image} alt="image" fill />
        </div>
        {/* Content Content */}
        <div className="flex flex-col gap-16 md:gap-25 max-w-[897px]">
          {/* Top Container */}
          <div className="">
            <Text tag="h3" variant="title-s" fontWeight="medium">
              {title}
            </Text>
            <Text
              tag="p"
              variant="para"
              color="blue"
              underline
              className="mt-5 mb-12"
            >
              {subTitle}
            </Text>
          </div>
        </div>
      </div>
      {/* Bottom Section */}
      <div className="flex items-center gap-25 ">
        {/* Date Section */}
        <div className="flex flex-col gap-5 mt-13 w-[110px]">
          <Text tag="p" variant="para" fontWeight="medium">
            Inscrito
          </Text>
          <Text tag="p" variant="para" fontWeight="medium" color="blue">
            16/09/23
          </Text>
        </div>
        {/* Right Text Container */}
        <div className="flex flex-col gap-5 mt-13">
          <Text tag="p" variant="para" fontWeight="medium">
            Servicios Centrales, Madrid
          </Text>
          <Text tag="p" variant="para" fontWeight="medium">
            Presencial
          </Text>
        </div>
      </div>
    </div>
  );
};

export {
  SimpleList,
  ImageListItem,
  NumberList,
  ListItem,
  OfferListItem1,
  OfferListItem2,
  OfferListItem3,
};
