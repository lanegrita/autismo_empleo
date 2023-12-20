import React from "react";
import { TitleHeader } from "../create-offer/page";
import Text from "../components/ui/typography/Typography";
import Image from "next/image";
import Button from "../components/ui/button/Button";
import Input from "../components/form/input/Input";
import { RadioGroup } from "@/components/ui/radio-group";
import { SimpleRadioButton } from "../components/form/radio-button/RadioButton";
import { SimpleMarquee } from "../components/ui/marquee-section/MarqueeSection";
import Textarea from "../components/form/text-area/Textarea";
import CheckBox from "../components/form/check-box/CheckBox";

const VolunteerApplyView = () => {
  return (
    <div>
      {/* Section 1 Starts */}
      <TitleHeader image="/images/test.webp" title="Inscríbete" />
      {/* Section 1 Ends */}

      {/* Section 2 Starts */}
      <section className="grid grid-cols-12 border-t border-gris2">
        {/* Left */}
        <div className="hidden xl:block  xl:col-span-2 border-l border-gris2"></div>

        {/* Main */}
        <div className="col-span-12 xl:col-span-8 border-x border-gris2">
          {/* Section 1 Starts */}
          <section className="px-10 py-20 lg:py-30 lg:px-20 xl:py-40 xl:px-[160px] border-b border-gris2">
            <div className="flex flex-col gap-6">
              <Text tag="p" variant="subtitle" color="blue">
                Voluntariado en ABAMUR (Murcia)
              </Text>
              <Text tag="h3" variant="title-l" fontWeight="medium">
                Investigación y transferencia de conocimiento
              </Text>
            </div>
          </section>
          {/* Section 1 Ends */}

          {/* Section 2 Starts */}
          <section className="px-10 py-20 lg:py-30 lg:px-20 xl:py-40 xl:px-[160px]">
            {/* Row 1 */}
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
                    <SimpleRadioButton id="s-1" title="Sí" />
                    <SimpleRadioButton id="s-2" title="No" />
                  </RadioGroup>
                  <div className="mt-25">
                    <Input
                      type="text"
                      placeholder="Especifica"
                      variant="simple"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-22 mt-40">
              <Textarea
                variant="multi-line"
                placeholder="Placeholder que explica como debes contarnos brevemente tus intereses, un texto de ejemplo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis ligula eget ligula porttitor aliquam consequat sit amet sem. Vivamus convallis nulla in fringilla blandit. Pellentesque in lorem nisl. Curabitur et luctus urna."
                rows={10}
              />
              <div className="flex flex-col gap-26">
                <div className="">
                  <Text tag="h6" variant="para" fontWeight="medium">
                    ¿Qué tipo de voluntariado te interesa?
                  </Text>
                  <RadioGroup className="gap-4 mt-10">
                    <SimpleRadioButton id="Presencial" title="Presencial" />
                    <SimpleRadioButton id="Virtual" title="Virtual" />
                  </RadioGroup>
                </div>
                <div className="">
                  <Text tag="h6" variant="para" fontWeight="medium">
                    ¿Quieres participar como asesor de Autismo España?
                  </Text>
                  <RadioGroup className="gap-4 mt-10">
                    <SimpleRadioButton id="n-1" title="Sí" />
                    <SimpleRadioButton id="n-2" title="No" />
                  </RadioGroup>
                </div>
              </div>
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-22 mt-40">
              <CheckBox
                label="Acepto las Condiciones legales, del servicio y la Información básica de privacidad."
                varient="default"
              />
            </div>

            {/* Row 4 */}
            <div className="mt-[160px]">
              <Button title="Enviar" variant="primary" />
            </div>
          </section>
          {/* Section 2 Ends */}
        </div>

        {/* Right */}
        <div className="hidden xl:block  xl:col-span-2 border-r border-gris2">
          <div className="mt-[380px]">
            <SimpleMarquee>Inscríbete</SimpleMarquee>
          </div>
        </div>
      </section>
      {/* Section 2 Ends */}
    </div>
  );
};

export default VolunteerApplyView;
