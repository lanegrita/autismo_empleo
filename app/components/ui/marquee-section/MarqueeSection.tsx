import React from "react";
import Text from "../typography/Typography";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface MarqueeSectionProps {
  variant: "default" | "azul";
  items: MarqueeItemProps[];
}

export interface MarqueeItemProps {
  imageUrl: string;
  title: string;
}

const MarqueeSection: React.FC<MarqueeSectionProps> = ({ items, variant }) => {
  return (
    <div
      className={cn(
        "pt-20 pb-[53px] sm:pb-[113px] lg:pb-20 xl:pb-[130px] border border-gris2",
        variant === "azul" && "bg-azulLight3"
      )}
    >
      {/* Marquee Top */}
      <div className="flex justify-between mb-23 ml-10 md:ml-20 mr-11">
        <Text
          variant="para"
          tag="p"
          fontWeight="medium"
          className="max-w-[298px]"
        >
          Si estás buscando empleo o eres empresa que busca empleados…
        </Text>
        <Text
          variant="para"
          tag="p"
          fontWeight="medium"
          className="max-w-[298px] hidden sm:block"
          color="blue"
          underline={variant === "azul"}
        >
          Ir al portal de empleo
        </Text>
      </div>

      {/* Marquee Bottom */}
      <Marquee autoFill>
        {items.map((item, index) => (
          <MarqueeItem
            key={index}
            title={item.title}
            imageUrl={item.imageUrl}
          />
        ))}
      </Marquee>
    </div>
  );
};

const MarqueeItem: React.FC<MarqueeItemProps> = ({ title, imageUrl }) => {
  return (
    <div className="flex items-center  w-full gap-14 ml-14 sm:gap-20 sm:ml-20">
      <div className="relative w-[190px] h-[120px] md:w-[222px] md:h-[140px] lg:w-[269px] lg:h-[170px]">
        <Image src={imageUrl} fill alt="image" className="rounded-full" />
      </div>

      <Text
        className="whitespace-nowrap"
        variant="super-title-l"
        color="default"
        tag="h3"
      >
        {title}
      </Text>
    </div>
  );
};

export default MarqueeSection;
