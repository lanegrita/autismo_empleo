import { cn } from "@/lib/utils";
import React from "react";
import { IndicatorTag, VolunteerSection } from "../volunteer/page";
import Text from "../components/ui/typography/Typography";
import Button from "../components/ui/button/Button";
import { SimpleMarquee } from "../components/ui/marquee-section/MarqueeSection";
import Image from "next/image";

const VolunteerDetailView = () => {
  return (
    <div>
      {/* Section 1 Starts */}
      <section className="grid md:grid-cols-1 lg:grid-cols-12">
        {/* Left */}
        <div className="col-span-6  border-r border-b lg:border-b-0 border-gris2 ">
          {/* Top */}
          <div className="px-10 py-17 lg:px-20 border-b border-gris2">
            <IndicatorTag title="Bienvenido" />
          </div>
          {/* Bottom */}
          <div className="px-10 py-17 md:px-10 md:py-20 lg:pt-30 xl:pt-49">
            {/* Text Container */}
            <div className="">
              <p className="text-[38px] lg:text-[48px] font-medium">
                Investigación y
                <div className="flex items-center gap-4 md:gap-6">
                  <div className="relative w-[84px] h-[47px] lg:w-[109px] lg:h-[61px] rounded-full overflow-hidden">
                    <Image src="/images/test.webp" alt="image" fill />
                  </div>
                  transferencia
                </div>
                de conocimiento
              </p>
            </div>

            <div className="mt-40 lg:mt-[101px] flex justify-end ">
              <Button
                className="w-full xs:w-fit"
                title="Hazte voluntario"
                icon="/images/icons/pencil.svg"
                variant="primary"
                direction="left"
              />
            </div>
          </div>
        </div>
        {/* Right */}
        <div className="w-screen lg:w-full overflow-hidden lg:col-span-6 lg:flex lg:flex-col">
          <div className="flex-1 aspect-video  relative ">
            <Image
              src="/images/test.webp"
              alt="hero image"
              fill
              style={{ objectFit: "cover" }}
            />
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

      {/* Section 3 Ends */}
    </div>
  );
};

export default VolunteerDetailView;
