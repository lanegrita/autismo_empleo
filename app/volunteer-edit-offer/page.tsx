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
        <form className="col-span-12 xl:col-span-8 border-x border-gris2 px-10 py-30 md:px-20 md:py-40 xl:px-[160px] xl:py-40">
          <Text tag="h3" variant="title-s" color="blue" className="mb-21">
            Datos generales
          </Text>
          {/* Section 1 Starts */}
          <div className="mt-21 grid grid-cols-1 gap-26 items-end">
            {/* Row 1 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-25 sm:gap-20">
              <Input
                type="text"
                placeholder="Título del voluntariado"
                variant="simple"
                name="text1"
              />
              <Input
                type="text"
                placeholder="Área del voluntariado"
                variant="simple"
                name="text2"
              />
            </div>
          </div>
          {/* Text Area */}
          <div className="mt-26">
            <Textarea
              variant="multi-line"
              placeholder="Cuéntanos en qué consiste …Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lobortis eu felis sed tempor. Maecenas eget arcu ac dolor consequat tincidunt. Ut consectetur fermentum turpis, nec molestie urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lobortis eu felis sed tempor. Maecenas eget arcu ac dolor consequat tincidunt. Ut consectetur fermentum turpis, nec molestie urna.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lobortis eu felis sed tempor. Maecenas eget arcu ac dolor consequat tincidunt. Ut consectetur fermentum turpis, nec molestie urna.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lobortis eu felis sed tempor. Maecenas eget arcu ac dolor consequat tincidunt. Ut consectetur fermentum turpis, nec molestie urna."
              rows={7}
            />
          </div>
          {/* Section 1 Ends */}

          <Text tag="h3" variant="title-s" color="blue" className="mb-21 mt-40">
            Requerimientos
          </Text>
          {/* Section 2 Starts */}
          <div className="mt-21 grid grid-cols-1 gap-26 items-end">
            {/* Row 1 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-26 sm:gap-20">
              <div className="grid grid-cols-1 md:grid-cols-2  gap-26 sm:gap-20">
                <DropDown
                  placeHolder="Localidad"
                  options={[
                    {
                      label: "Localidad",
                      value: "localidad"
                    }
                  ]}
                />
                <DropDown
                  placeHolder="Edad deseada"
                  options={[
                    {
                      label: "Edad deseada",
                      value: "Edad deseada"
                    }
                  ]}
                />
              </div>
              <div className="mt-16">
                <Text tag="h6" variant="para" fontWeight="medium">
                  ¿Trastorno del espectro autista confirmado?
                </Text>
                <RadioGroup className="gap-4 mt-10">
                  <SimpleRadioButton id="s-1" title="Sí" />
                  <SimpleRadioButton id="s-2" title="No" />
                </RadioGroup>
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-22">
              {/* Left */}
              <div className="">
                <Text tag="h6" variant="para" fontWeight="medium">
                  Disponibilidad para el voluntariado
                </Text>
                <RadioGroup className="gap-4 mt-10">
                  <div className="grid grid-cols-2">
                    <div className="flex flex-col gap-4">
                      <SimpleRadioButton id="Puntual" title="Puntual" />
                      <SimpleRadioButton id="Continua" title="Continua" />
                      <SimpleRadioButton id="Vacaciones" title="Vacaciones" />
                      <SimpleRadioButton
                        id="Entre semana"
                        title="Entre semana"
                      />
                    </div>
                    <div className="flex flex-col gap-4">
                      <SimpleRadioButton
                        id="Fines de semana"
                        title="Fines de semana"
                      />
                      <SimpleRadioButton
                        id="Horario de mañana o de tarde"
                        title="Horario de mañana o de tarde"
                      />
                      <SimpleRadioButton
                        id="En grupo o sola/o"
                        title="En grupo o sola/o"
                      />
                    </div>
                  </div>
                </RadioGroup>
              </div>
              {/* Right */}
              <div className="">
                <div className="">
                  <Text tag="h6" variant="para" fontWeight="medium">
                    ¿Has tenido experiencia previa con el voluntariado?
                  </Text>
                  <RadioGroup className="gap-4 mt-10">
                    <SimpleRadioButton id="n-1" title="Sí" />
                    <SimpleRadioButton id="n-2" title="No" />
                  </RadioGroup>
                  <div className="mt-25">
                    <Input
                      type="text"
                      placeholder="Especifica"
                      variant="simple"
                      name="text3"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-22">
              <div className="">
                <Text tag="h6" variant="para" fontWeight="medium">
                  ¿Qué tipo de voluntariado te interesa?
                </Text>
                <RadioGroup className="gap-4 mt-10">
                  <SimpleRadioButton id="Presencial" title="Presencial" />
                  <SimpleRadioButton id="Virtual" title="Virtual" />
                </RadioGroup>
              </div>
            </div>
          </div>
          {/* Section 2 Ends */}

          <Text tag="h3" variant="title-s" color="blue" className="mb-12 mt-40">
            Foto portada
          </Text>
          {/* Section 3 Starts */}
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="col-span-1 flex flex-col gap-40">
              <Uploader id="image-1" variant="image" />
              <CheckBox label="Acepto las Condiciones legales, del servicio y la Información básica de privacidad." />
            </div>
            <div className="col-span-1"></div>
          </div>

          {/* Section 3 Ends */}

          {/* Buttons Section Starts */}
          <div className="flex gap-4 mt-[160px]">
            <Button title="Publicar oferta" variant="primary" />
          </div>
          {/* Buttons Section Ends */}
        </form>

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
