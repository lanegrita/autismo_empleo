import ImageComponent from "@/app/components/ui/ImageComponent/ImageComponent";
import MarqueeSection, {
  MarqueeItemProps
} from "@/app/components/ui/marquee-section/MarqueeSection";
import Text from "@/app/components/ui/typography/Typography";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const firstMarquee: MarqueeItemProps[] = [
  {
    title: "Portal de empleo",
    imageUrl: "/images/test.webp"
  },
  {
    title: "Portal de voluntariado",
    imageUrl: "/images/test.webp"
  }
];

const page = () => {
  return (
    <div>
      <div className="w-screen p-10">
        {/* Marquee Container */}
        <MarqueeSection items={firstMarquee} variant="default" />
        <MarqueeSection items={firstMarquee} variant="azul" />
      </div>
    </div>
  );
};

export default page;
