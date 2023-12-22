import React from "react";
import { TitleHeader } from "../create-offer/page";
import Text from "../components/ui/typography/Typography";
import Image from "next/image";
import Button from "../components/ui/button/Button";
import Input from "../components/form/input/Input";
import DropDown from "../components/form/dropdown/Dropdown";
import { RadioGroup } from "@/components/ui/radio-group";
import { SimpleRadioButton } from "../components/form/radio-button/RadioButton";
import { SimpleMarquee } from "../components/ui/marquee-section/MarqueeSection";
import Textarea from "../components/form/text-area/Textarea";
import Uploader from "../components/form/uploader/Uploader";
import CheckBox from "../components/form/check-box/CheckBox";

const VolunteerEditOffer = () => {
  return (
    <div>
      {/* Section 1 Starts */}
      <TitleHeader image="/images/test.webp" title="Nuevo voluntariado" />
      {/* Section 1 Ends */}

      {/* Section 2 Starts */}
      <section className="grid grid-cols-12 border-t border-gris2">
        {/* Left */}
        <div className="hidden xl:block  xl:col-span-2 border-l border-gris2"></div>

        {/* Main */}

        {/* Right */}
        <div className="hidden xl:block  xl:col-span-2 border-r border-gris2">
          <div className="mt-[380px]">
            <SimpleMarquee>Nuevo voluntariado</SimpleMarquee>
          </div>
        </div>
      </section>
      {/* Section 2 Ends */}
    </div>
  );
};

export default VolunteerEditOffer;
