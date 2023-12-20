"use client";
import { videosSlides } from "@/app/components/ui/lightbox/slides";
import useLightbox from "@/app/components/ui/lightbox/useLightbox";
import { RadioGroup } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";
import Marquee from "react-fast-marquee";
import { RadioButtonXL } from "../components/form/radio-button/RadioButton";
import ImageComponent from "../components/ui/ImageComponent/ImageComponent";
import {
  DropdownNavigationItem,
  NavigationAccordionItemProps,
  SimpleNavigationItem,
} from "../components/ui/accordion/Accordion";
import Button from "../components/ui/button/Button";
import { OfferListItem3 } from "../components/ui/list/List";
import Text from "../components/ui/typography/Typography";
import { TitleHeader } from "../create-offer/page";
import VolunteerCard from "../components/ui/volunteer-card/VolunteerCard";
const types = ["tea", "no-tea", "volunteer", "company", "entity"];

const navigationAccordion: NavigationAccordionItemProps[] = [
  {
    iconUrl: "/images/icons/pencil.svg",
    title: "Mi cuenta",
    items: [
      {
        id: "1",
        title: "Mis ofertas de empleo",
      },
      {
        id: "2",
        title: "Mis ofertas de empleo",
      },
    ],
  },
  {
    iconUrl: "/images/icons/news.svg",
    title: "Búsqueda",
    items: [
      {
        id: "1",
        title: "Mis ofertas de empleo",
      },
      {
        id: "2",
        title: "Mis ofertas de empleo",
      },
    ],
  },
  {
    iconUrl: "/images/icons/love.svg",
    title: "Programas de apoyo en educación ordinaria",
    items: [
      {
        id: "1",
        title: "Mis ofertas de empleo",
      },
    ],
  },
];

const PrivateArea = () => {
  const [userType, setUserType] = useState(0);
  const [openAccordian, setOpenAccordian] = useState(false);
  const { openLightbox, renderLightbox } = useLightbox();
  const user = {
    type: types[userType],
  };
  console.log("User Type: ", user.type);
  return (
    <div className="grid grid-cols-12">
      {/* Black Container */}
      <div
        onClick={() => setOpenAccordian(false)}
        className={cn(
          " hidden bg-negroAe fixed left-0 right-0 bottom-0 top-0 opacity-40 z-10",
          openAccordian && "block"
        )}
      ></div>
      {/* Left Container */}
      <div className=" col-span-12 lg:col-span-9 ">
        {/* Sidebar Mobile Section */}
        <div className="flex lg:hidden items-center justify-between p-10 bg-gris">
          {/* Left Text Section */}
          <div className="flex flex-col gap-26  ">
            {/* First Text  */}
            <div className="flex flex-col ">
              <Text variant="title" tag="h5" fontWeight="medium">
                Bienvenido,
              </Text>
              <Text variant="title" tag="h5" color="blue" fontWeight="medium">
                Pedro Baños
              </Text>
            </div>
            {/* Small Text */}
            <Text variant="para" tag="p" color="gray" underline>
              Cerrar Sesión
            </Text>
          </div>
          {/* Right Button  */}
          <div
            className={cn(
              "rotate-0 transition-transform duration-300",
              openAccordian && "rotate-180 "
            )}
          >
            <Button
              onClick={() => setOpenAccordian(true)}
              icon="/images/icons/dropdown_open.svg"
              variant="secondary"
            />
          </div>
        </div>
        {/* Section 1 */}
        <section className="">
          {/* Marquee Section */}
          <div className="sm:hidden ">
            <Marquee>
              <TitleHeader
                className="overflow-hidden"
                image="/images/test.webp"
                title="Mi área privada"
                titleVariant="title-xxl"
              />
            </Marquee>
          </div>
          <div className="hidden sm:block border-y border-gris2">
            <TitleHeader
              className="overflow-hidden"
              image="/images/test.webp"
              title="Mi área privada"
              titleVariant="title-xxl"
            />
          </div>
        </section>
        {/* Section 2 */}
        <section className="flex flex-col xl:flex-row gap-4 items-center justify-between py-20 px-10 md:py-40 md:px-20 ">
          <div className="flex-shrink-0">
            <BulletTitle title="Actualmente estoy…" />
          </div>
          {/* Radio Button */}
          <RadioGroup className="flex flex-col w-full  sm:flex-row  items-center gap-10 md:w-full  2xl:w-2/3  ">
            <RadioButtonXL
              checked={userType == 0}
              onClick={() => setUserType(0)}
              title="En búsqueda de empleo"
              id="1"
            />
            <RadioButtonXL
              checked={userType == 2}
              onClick={() => setUserType(2)}
              title="En búsqueda de voluntariado"
              id="2"
            />
          </RadioGroup>
          {renderLightbox({
            slides: videosSlides,
          })}
        </section>
        {/* ============================================================= */}
        {/*  Tea Section */}
        {user.type === "tea" && (
          <section className=" grid grid-cols-1 gap-y-20 md:grid-cols-2 px-10 py-40 lg:p-20 xl:p-40  relative  md:gap-30 items-center border-t border-gris2">
            <BulletTitle
              title="Primeros pasos"
              titleVariant="para"
              className="absolute top-[45px] left-[40px]"
            />
            <div className="w-[100%] col-span-1 relative">
              <ImageComponent
                src="/images/test.webp"
                alt="test"
                height={311}
                width={560}
                borderStyle="circle"
              />
              {/* Pencil Icon */}
              <div className="bg-azulLight4 rounded-full absolute  left-[45%]  md:left-[40%] top-[35%]  ">
                {/* Wrapper */}
                <div className="relative w-[12vw] h-[12vw] md:w-[7vw] md:h-[7vw] lg:w-[5vw] lg:h-[5vw] ">
                  <Image
                    src={"/images/icons/pencil.svg"}
                    alt="pencil icon"
                    fill
                  />
                </div>
              </div>
            </div>
            {/* Title and Button */}
            <div className="flex flex-col gap-20 col-span-1">
              <h4 className="text-[30px] lg:text-[38px] xl:text-[46px] font-medium">
                Utilizar el portal de empleo es muy sencillo. Aprende a hacerlo
                en 5 minutos.
              </h4>
              {/* Button */}
              <Button
                className="max-w-fit"
                title="Ver tutorial"
                variant="primary"
                onClick={openLightbox}
              />
            </div>
          </section>
        )}
        {/* ============================================================= */}
        {/* Section 3 */}
        <section className=" px-10 py-20 md:py-22 lg:px-20 lg:py-37 border-t border-gris2 flex flex-col xs:flex-row xs:items-center">
          <Text tag="h6" variant="title-s">
            Mis candidaturas
          </Text>
          {/* Icon */}
          <div className="flex  items-center">
            <div className="relative w-[68px] h-[68px]">
              <Image src={"/images/icons/news.svg"} alt="news icon" fill />
            </div>
            <Text tag="h6" variant="title-s">
              en curso
            </Text>
          </div>
        </section>
        {/*Tea and No Tea Offer List*/}
        {(user.type === "tea" || user.type === "no-tea") && (
          <section className="flex flex-col">
            <OfferListItem3
              title={
                "Técnico de Marketing para el área de Comunicación y Relaciones Institucionales."
              }
              image="/images/test.webp"
              subTitle="Confederación de Autismo España"
            />
            <OfferListItem3
              title={
                "Técnico de Marketing para el área de Comunicación y Relaciones Institucionales."
              }
              image="/images/test.webp"
              subTitle="Confederación de Autismo España"
            />
            <OfferListItem3
              title={
                "Técnico de Marketing para el área de Comunicación y Relaciones Institucionales."
              }
              image="/images/test.webp"
              subTitle="Confederación de Autismo España"
            />
          </section>
        )}
        {/* Volunteer Card List */}
        {user.type === "volunteer" && (
          <div className="border-t border-gris2 grid grid-cols-1 2xl:grid-cols-2 bg-gris2 gap-[1px]">
            <VolunteerCard
              image="/images/test.webp"
              title="Grupos de Apoyo Psicosocial"
              description="Confederación de Autismo España"
              icon="/images/icons/delete.svg"
            />
            <VolunteerCard
              image="/images/test.webp"
              title="Grupos de Apoyo Psicosocial"
              description="Confederación de Autismo España"
              icon="/images/icons/delete.svg"
            />
            <VolunteerCard
              image="/images/test.webp"
              title="Grupos de Apoyo Psicosocial"
              description="Confederación de Autismo España"
              icon="/images/icons/delete.svg"
            />
            <VolunteerCard
              image="/images/test.webp"
              title="Grupos de Apoyo Psicosocial"
              description="Confederación de Autismo España"
              icon="/images/icons/delete.svg"
            />
          </div>
        )}
      </div>
      {/* Right Container */}
      <div className="hidden lg:block col-span-3 bg-gris border-x border-gris2 h-full">
        {/* Top Text Section */}
        <div className="flex flex-col gap-26 px-20 py-17 ">
          {/* First Text  */}
          <div className="flex flex-col ">
            <Text variant="title" tag="h5" fontWeight="medium">
              Bienvenido,
            </Text>
            <Text variant="title" tag="h5" color="blue" fontWeight="medium">
              Pedro Baños
            </Text>
          </div>
          {/* Small Text */}
          <Text variant="para" tag="p" color="gray" underline>
            Cerrar Sesión
          </Text>
        </div>
        {/* Desktop Accordian Container */}
        <div className="flex flex-col mt-22">
          <SimpleNavigationItem
            iconUrl="/images/icons/news.svg"
            title="Mi cuenta"
            link="#"
          />
          <SimpleNavigationItem
            iconUrl="/images/icons/news.svg"
            title="Adjuntar CV"
            link="#"
          />
          <DropdownNavigationItem
            iconUrl="/images/icons/news.svg"
            title="Búsqueda"
            items={[
              {
                id: "1",
                title: "Mis ofertas de empleo",
                link: "#",
              },
              {
                id: "2",
                title: "Mis ofertas de empleo",
                link: "#",
              },
            ]}
          />
          {/* Red Navigation */}
          <div className="flex items-center justify-between bg-gris p-15">
            <Text
              className="cursor-pointer"
              tag="p"
              variant="para"
              color="error"
              underline
            >
              Eliminar cuenta
            </Text>
            <div className="relative w-[38px] h-[38px] -rotate-90">
              <Image
                src={"/images/icons/dropdown_open.svg"}
                alt="dropdown close icon"
                fill
              />
            </div>
          </div>
        </div>
      </div>
      {/* Mobile Accordian Container */}
      <div
        className={cn(
          "fixed overflow-y-auto z-[999]  left-0 right-0 bottom-0 h-[65vh] flex lg:hidden flex-col translate-y-full transition-all duration-300",
          openAccordian && "translate-y-0"
        )}
      >
        <SimpleNavigationItem
          iconUrl="/images/icons/news.svg"
          title="Mi cuenta"
          link="#"
        />
        <SimpleNavigationItem
          iconUrl="/images/icons/news.svg"
          title="Mi cuenta"
          link="#"
        />
        <SimpleNavigationItem
          iconUrl="/images/icons/news.svg"
          title="Mi cuenta"
          link="#"
        />
        <SimpleNavigationItem
          iconUrl="/images/icons/news.svg"
          title="Adjuntar CV"
          link="#"
        />
        <DropdownNavigationItem
          iconUrl="/images/icons/news.svg"
          title="Búsqueda"
          items={[
            {
              id: "1",
              title: "Mis ofertas de empleo",
              link: "#",
            },
            {
              id: "2",
              title: "Mis ofertas de empleo",
              link: "#",
            },
          ]}
        />
        {/* Red Navigation */}
        <div className="flex items-center justify-between bg-gris p-15">
          <Text
            className="cursor-pointer"
            tag="p"
            variant="para"
            color="error"
            underline
          >
            Eliminar cuenta
          </Text>
          <div className="relative w-[38px] h-[38px] -rotate-90">
            <Image
              src={"/images/icons/dropdown_open.svg"}
              alt="dropdown close icon"
              fill
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export const BulletTitle = ({
  title,
  titleVariant = "title",
  className,
}: {
  title: string;
  titleVariant?: "title" | "para";
  className?: string;
}) => {
  return (
    <div className={cn("flex items-center gap-4", className)}>
      {/* Circle */}
      <div className="w-[12px] h-[12px] bg-azulAe rounded-full"></div>
      {/* Text */}
      <Text tag="h6" variant={titleVariant} fontWeight="medium">
        {title}
      </Text>
    </div>
  );
};

export default PrivateArea;
