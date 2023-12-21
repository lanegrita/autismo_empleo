"use client";
import Image from "next/image";
import React from "react";
import Text from "../components/ui/typography/Typography";
import Button from "../components/ui/button/Button";
import Input from "../components/form/input/Input";
import DropDown from "../components/form/dropdown/Dropdown";
import CheckBox from "../components/form/check-box/CheckBox";
import Textarea from "../components/form/text-area/Textarea";
import { SimpleMarquee } from "../components/ui/marquee-section/MarqueeSection";
import { cn } from "@/lib/utils";
import Marquee from "react-fast-marquee";

const tagList = [
  "Disponibilidad a jornada completa de lunes a viernes",
  "Perfil acostumbrado/a a trabajar en área de ventas",
  "Perfil acostumbrado/a a trabajar por objetivos",
  "Formación, colaboración y el aprendizaje constante",
  "Disponibilidad inmediata",
  "Ubicado en Murcia o alrededores",
];

const CreateOfferView = () => {
  return (
    <div>
      <TitleHeader
        title="Nueva oferta de trabajo"
        image="/images/test.webp"
        button="Salir"
      />
      <div className="grid grid-cols-12 border-t border-gris2">
        {/* Left */}
        <div className=" hidden lg:block col-span-2"></div>
        {/* Center */}
        <div className=" col-span-12 lg:col-span-8 border-x border-gris2 pt-50 pb-[160px]  px-10 md:px-20 2xl:px-[160px]">
          <form>
            {/* Section 1 */}
            <section className="flex flex-col gap-16">
              {/* First Form Row */}
              <div className="grid lg:grid-cols-2 gap-10 items-end ">
                <Input
                  placeholder="Nombre del puesto"
                  type="text"
                  variant="simple"
                />
                <DropDown
                  options={[
                    {
                      label: "Tipo",
                      value: "1",
                    },
                    {
                      label: "Tipo",
                      value: "2",
                    },
                  ]}
                  placeHolder="Categoría del puesto"
                />
              </div>
              {/* Second Form Row */}
              <div className="grid lg:grid-cols-2 gap-10 items-end">
                <DropDown
                  options={[
                    {
                      label: "Tipo",
                      value: "1",
                    },
                    {
                      label: "Tipo",
                      value: "2",
                    },
                  ]}
                  placeHolder="Nivel del puesto"
                />
                <DropDown
                  options={[
                    {
                      label: "Tipo",
                      value: "1",
                    },
                    {
                      label: "Tipo",
                      value: "2",
                    },
                  ]}
                  placeHolder="Tipo de contacto"
                />
              </div>
              {/* Third Form Row */}
              <div className="grid  grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-10 items-end">
                <div className="col-span-1">
                  <DropDown
                    options={[
                      {
                        label: "Tipo",
                        value: "1",
                      },
                      {
                        label: "Tipo",
                        value: "2",
                      },
                    ]}
                    placeHolder="Jornada"
                  />
                </div>
                <div className="col-span-1">
                  <DropDown
                    options={[
                      {
                        label: "Tipo",
                        value: "1",
                      },
                      {
                        label: "Tipo",
                        value: "2",
                      },
                    ]}
                    placeHolder="Contrato"
                  />
                </div>
                <div className=" col-span-1 xs:col-span-2">
                  <DropDown
                    options={[
                      {
                        label: "Tipo",
                        value: "1",
                      },
                      {
                        label: "Tipo",
                        value: "2",
                      },
                    ]}
                    placeHolder="Nº Vacantes"
                  />
                </div>
              </div>
            </section>

            {/* Section 2 */}
            <section className="mt-40">
              <Text tag="h3" variant="title-s" color="blue" className="mb-26">
                Salario
              </Text>

              {/* First Row */}
              <div className="grid lg:grid-cols-4 gap-10 items-end">
                <div className="col-span-1">
                  <DropDown
                    options={[
                      {
                        label: "Tipo",
                        value: "1",
                      },
                      {
                        label: "Tipo",
                        value: "2",
                      },
                    ]}
                    placeHolder="Tipo"
                  />
                </div>
                <div className="col-span-1">
                  <DropDown
                    options={[
                      {
                        label: "Tipo",
                        value: "1",
                      },
                      {
                        label: "Tipo",
                        value: "2",
                      },
                    ]}
                    placeHolder="Mínimo"
                  />
                </div>
                <div className="col-span-1">
                  <DropDown
                    options={[
                      {
                        label: "Tipo",
                        value: "1",
                      },
                      {
                        label: "Tipo",
                        value: "2",
                      },
                    ]}
                    placeHolder="Máximo"
                  />
                </div>
                <div className="col-span-1">
                  <DropDown
                    options={[
                      {
                        label: "Tipo",
                        value: "1",
                      },
                      {
                        label: "Tipo",
                        value: "2",
                      },
                    ]}
                    placeHolder="Pagas"
                  />
                </div>
              </div>
              {/* Second Row */}

              <div className="mt-16">
                <CheckBox label="No quiero mostrar este salario" />
              </div>

              {/* Third Row */}
              <div className="grid lg:grid-cols-4 gap-10 items-end mt-40">
                <div className="col-span-2">
                  <Input
                    placeholder="Fecha límite de la oferta"
                    type="text"
                    variant="simple"
                  />
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section className="mt-40">
              <Text tag="h3" variant="title-s" color="blue" className="mb-26">
                Requerimientos
              </Text>

              {/* First Row */}
              <div className="flex items-center gap-8 md:gap-16 lg:gap-32">
                <Textarea
                  variant="single-line"
                  placeholder="Requerimiento mínimo"
                />
                <Button title="Añadir" variant="secondary" />
              </div>
              {/* Second Row */}
              <div className="flex flex-col gap-10 mt-26">
                <Text tag="h5" variant="para" fontWeight="medium">
                  Requerimientos añadidos:
                </Text>
                <div className="flex flex-wrap gap-4">
                  {tagList.map((tag, index) => (
                    <TagSelector key={index} title={tag} />
                  ))}
                </div>
              </div>

              {/* Third Row */}
              <div className="flex flex-col gap-10 mt-26">
                <Text tag="h5" variant="para" fontWeight="medium">
                  Descripción del puesto:
                </Text>
                <div className="flex flex-wrap gap-4">
                  <Textarea
                    variant="multi-line"
                    placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lobortis eu felis sed tempor. Maecenas eget arcu ac dolor consequat tincidunt. Ut consectetur fermentum turpis, nec molestie urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lobortis eu felis sed tempor. Maecenas eget arcu ac dolor consequat tincidunt. Ut consectetur fermentum turpis, nec molestie urna.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lobortis eu felis sed tempor. Maecenas eget arcu ac dolor consequat tincidunt. Ut consectetur fermentum turpis, nec molestie urna."
                  />
                </div>
              </div>
            </section>

            {/* Button Container */}
            <div className="flex flex-col md:flex-row gap-2 px-10 justify-between mt-[160px] items-center">
              {/* Left */}
              <div className="flex flex-col xs:flex-row gap-4">
                <Button title="Publicar oferta" variant="primary" />
                <Button title="Guardar borrador" variant="secondary" />
              </div>
              {/* Right */}
              <div>
                <Button title="Guardar borrador" variant="simple" />
              </div>
            </div>
          </form>
        </div>
        {/* Right */}
        <div className=" hidden lg:block col-span-2">
          <div className="mt-[230px]">
            <SimpleMarquee>Nueva oferta de trabajo</SimpleMarquee>
          </div>
        </div>
      </div>
    </div>
  );
};

export const TitleHeader = ({
  image,
  title,
  titleVariant = "title-xl",
  button,
  className,
}: {
  image: string;
  title: string;
  titleVariant?: "title-xl" | "title-xxl";
  button?: string;
  className?: string;
}) => {
  return (
    <div>
      {/* Mobile */}
      <div className="flex justify-between items-center md:hidden">
        <Marquee>
          <div
            className={cn(
              "flex flex-col gap-10 xs:flex-row xs:items-center justify-between px-10 py-24 md:py-26 lg:py-27 lg:px-20",
              className
            )}
          >
            {/* Left */}
            <div className="flex gap-10 items-center">
              {/* Image */}
              <div className="relative w-[108px] h-[60px] md:w-[144px] md:h-[80px] lg:w-[180px] lg:h-[100px] rounded-full overflow-hidden">
                <Image src={image} alt="image" fill />
              </div>

              <Text tag="h1" variant={titleVariant}>
                {title}
              </Text>
            </div>
          </div>
        </Marquee>
        {/* Right */}
        {button && (
          <div className="pr-10 bg-transparent ">
            <Button variant="primary" title={button} />
          </div>
        )}
      </div>
      {/* Desktop */}
      <div
        className={cn(
          "hidden md:flex flex-col gap-10 xs:flex-row xs:items-center justify-between px-10 py-24 md:py-26 lg:py-27 lg:px-20",
          className
        )}
      >
        {/* Left */}
        <div className="flex gap-10 items-center">
          {/* Image */}
          <div className="relative w-[108px] h-[60px] md:w-[144px] md:h-[80px] lg:w-[180px] lg:h-[100px] rounded-full overflow-hidden">
            <Image src={image} alt="image" fill />
          </div>

          <Text tag="h1" variant={titleVariant}>
            {title}
          </Text>
        </div>

        {/* Right */}
        {button && (
          <div>
            <Button variant="primary" title={button} />
          </div>
        )}
      </div>
    </div>
  );
};

interface TagSelectorProps {
  title: string;
}

const TagSelector: React.FC<TagSelectorProps> = ({ title }) => {
  return (
    <div className="flex items-center bg-azulLight3 rounded-full pl-4 pr-2 py-2 cursor-pointer">
      <p className=" text-[1.75rem] sm:text-[1.25rem] text-azulAe">{title}</p>
      <div className="relative min-w-[28px] min-h-[28px] w-[28px] h-[28px]">
        <Image src="/images/icons/close.svg" alt="cross icon" fill />
      </div>
    </div>
  );
};

export default CreateOfferView;
