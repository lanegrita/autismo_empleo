import React from "react";
import Text from "../components/ui/typography/Typography";
import Button from "../components/ui/button/Button";
import { SimpleMarquee } from "../components/ui/marquee-section/MarqueeSection";
import Image from "next/image";
import { cn } from "@/lib/utils";

const VolunteerView = () => {
  return (
    <div>
      {/* Section 1 Starts */}
      <section className="grid md:grid-cols-1 lg:grid-cols-12">
        {/* Left */}
        <div className="col-span-6 p-20 border-r border-b lg:border-b-0 border-gris2 md:px-10 md:py-20 lg:pt-30 xl:pt-49">
          <IndicatorTag title="Bienvenido" />

          <Text tag="h1" variant="title-xxl" fontWeight="medium">
            ¿Por qué hacerse voluntario?
            <br /> Descubre aquí las principales razones.
          </Text>
          <div className="mt-20 md:mt-[185px] lg:mt-[212px] xl:mt-[309px]">
            <Button
              className="w-full xs:w-fit"
              title="Hazte voluntario"
              icon="/images/icons/pencil.svg"
              variant="primary"
              direction="left"
            />
          </div>
        </div>
        {/* Right */}
        <div className="w-screen lg:w-full overflow-hidden lg:col-span-6 lg:flex lg:flex-col">
          <div className="hidden lg:block flex-1 border-b border-gris2"></div>
          <div className="flex-1 relative ">
            <div className="lg:absolute lg:bottom-[34px]">
              <SimpleMarquee>Hazte voluntario</SimpleMarquee>
            </div>
          </div>
        </div>
      </section>
      {/* Section 1 Ends */}

      {/* Section 2 Starts */}
      <section className="px-10 pt-30 pb-22 md:pb-[140px] md:px-20 lg:pt-40 lg:pb-[168px] xl:pt-[100px] xl:pb-[239px]  border-t border-gris2">
        <Text tag="h1" variant="title-xxl" fontWeight="medium">
          El voluntariado es mucho más que una simple contribución de tiempo; es
          una oportunidad para marcar la diferencia en la vida de los demás y,
          al mismo tiempo, transformar la propia.
        </Text>
      </section>
      {/* Section 2 Ends */}

      {/* Section 3 Starts */}
      <VolunteerSection />
      <VolunteerSection direction="reverse" />

      {/* Section 3 Ends */}

      {/* Section 4 Starts */}
      <section className="bg-azulAe px-10 pt-30 pb-22 md:pb-[140px] md:px-20 lg:pt-40 lg:pb-[168px] xl:pt-[100px] xl:pb-[239px]  border-t border-gris2">
        <Text tag="h1" variant="title-xxl" fontWeight="medium" color="white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget
          pharetra ipsum, vitae placerat odio. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Nulla eget pharetra ipsum, vitae placerat
          odio.
        </Text>
      </section>
      {/* Section 4 Ends */}

      <VolunteerSection imageShape="circle" />
    </div>
  );
};

export const IndicatorTag = ({ title }: { title: string }) => {
  return (
    <div className="flex gap-4 items-center">
      <div className="w-[8px] h-[8px] bg-azulAe rounded-full" />
      <Text tag="p" variant="para" color="default">
        {title}
      </Text>
    </div>
  );
};

export const VolunteerSection = ({
  direction = "default",
  imageShape = "oval"
}: {
  direction?: "default" | "reverse";
  imageShape?: "oval" | "circle";
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 border-t border-gris2 box-border"
      )}
    >
      {/* Left */}
      <div
        className={cn(
          "basis-auto w-full border-r border-gris2 px-10 py-20 md:px-20 md:py-40 ",
          direction === "reverse" && " order-last",
          direction === "default" && "order-last md:order-first"
        )}
      >
        {/* Title */}
        <Text tag="h3" variant="title-l">
          ¿Quieres ser voluntario?
        </Text>
        {/* Sub Title */}
        <Text tag="h4" variant="title-s" color="blue" className="mt-10 mb-20">
          ¿Quieres ser voluntario?
        </Text>
        {/* Description */}
        <Text tag="p" variant="para">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget
          pharetra ipsum, vitae placerat odio. Donec pharetra fermentum finibus.
          Vestibulum condimentum magna convallis mi placerat, in molestie purus
          rutrum. Vestibulum mattis elementum justo, porta sagittis quam
          placerat quis. Praesent malesuada aliquam lectus, eu elementum orci
          lobortis et.
        </Text>
      </div>
      {/* Right */}
      <div
        className={cn(
          "basis-full flex justify-center items-center px-10 py-20 md:py-20 md:px-40 border-b md:border-b-0  xl:py-30 xl:px-[127px]",
          direction === "reverse" && "border-r border-gris2"
        )}
      >
        <div
          className={cn(
            "relative flex-1 aspect-[10/7.5] h-auto rounded-full overflow-hidden",
            imageShape === "circle" && "aspect-square"
          )}
        >
          <Image src="/images/test.webp" alt="profile image" fill />
        </div>
      </div>
    </div>
  );
};

export default VolunteerView;
