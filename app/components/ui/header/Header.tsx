"use client";
import React, { useState } from "react";
import Text from "../typography/Typography";
import BurgerIcon from "../burger-icon/BurgerIcon";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Button from "../button/Button";
import Icon from "../icon/Icon";

const topBarItem = [
  {
    title: "Sobre el Portal",
  },
  {
    title: "Autismo España",
  },
  {
    title: "¿Tienes un proyecto?",
  },
];

interface HeaderProps {
  loggedIn?: boolean;
}

const Header: React.FC<HeaderProps> = ({ loggedIn }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openNavbar, setOpenNavbar] = useState(false);
  return (
    <div className="fixed top-0 right-0 left-0 z-20">
      {/* Top Bar */}
      <div className=" relative w-full flex items-center justify-between z-10 bg-negroAe px-10 py-7 lg:px-20 ">
        <Text tag="p" variant="subtitle" color="gray">
          Confederación Autismo España © 2023
        </Text>
        <div className="hidden items-center gap-12 lg:gap-24 md:flex">
          {/* Right Text Container */}
          {topBarItem.map((item, index) => (
            <Text key={index} tag="p" variant="para" color="white">
              {item.title}
            </Text>
          ))}
        </div>
        {/* Mobile Burger Icon */}
        <div className="md:hidden relative">
          <BurgerIcon openMenu={openMenu} setOpenMenu={setOpenMenu} />
        </div>
      </div>
      {/* Mobile DropDown Contaienr */}
      <div
        className={cn(
          "bg-negroAe z-[3] overflow-hidden -translate-y-full   py-20 px-10 border-t-[0.5px] border-[#2A2C2D] absolute w-full transition-all ease-in-out duration-300 ",
          openMenu && " translate-y-0"
        )}
      >
        {/* Text Container */}
        <div className="flex flex-col gap-10 ">
          {topBarItem.map((item, index) => (
            <Text key={index} tag="p" variant="para" color="white">
              {item.title}
            </Text>
          ))}
        </div>
      </div>
      {/* Header  */}
      <div className="w-full flex border-b border-b-[#CCCCCC]  bg-blanco">
        {/* Left Container */}
        <div className="basis-1/3 flex-1 bg-white py-12 pl-10">
          {/* Image Container */}
          <div className="relative  w-[141px] h-[48px]  md:w-[181px] md:h-[56px] lg:w-[208px] lg:h-[62px]">
            <Image src={"/images/autismo-logo.svg"} alt="autismo logo" fill />
          </div>
        </div>
        {/* Middle Container */}
        <div className=" hidden lg:flex basis-2/4 bg-blanco border border-[##CCCCCC] "></div>
        {/* Right Container */}
        <div className="basis-1/3 border-l border-[#CCCCCC] lg:border-l-0 flex-1 bg-blanco  px-10 py-15 sm:px-20">
          {/* Button */}
          {loggedIn ? (
            <div className="flex gap-10 items-center">
              <Icon url="/images/icons/pencil.svg" />
              <Button
                title="Koke Fernández"
                image="/images/test.webp"
                variant="outline"
                direction="left"
              />
            </div>
          ) : (
            <div className="flex gap-10 items-center">
              <Button
                title="Regístrate"
                icon="/images/icons/pencil.svg"
                variant="primary"
                direction="left"
              />
              <Button
                onClick={() => setOpenNavbar(true)}
                title="Login"
                icon="/images/icons/pencil.svg"
                variant="outline"
                direction="left"
              />
            </div>
          )}
        </div>
      </div>
      {/* Blue Container */}
      <div
        className={cn(
          "bg-azulAe w-full  absolute top-0 z-[2] pt-[52px] -translate-y-full transition-transform ease-in-out duration-300",
          openNavbar && "translate-y-0"
        )}
      >
        <div className="w-full grid grid-cols-12 border-b border-b-azulDark2  bg-blanco">
          {/* Left Container */}
          <div className=" col-span-6 lg:col-span-2 flex-1 bg-azulAe py-12 pl-10">
            {/* Image Container */}
            <div className="relative  w-[141px] h-[48px]  md:w-[181px] md:h-[56px] lg:w-[208px] lg:h-[62px]">
              <Image
                src={"/images/autismo-logo-white.svg"}
                alt="autismo logo"
                fill
              />
            </div>
          </div>
          {/* Middle Container */}
          <div className=" hidden lg:flex col-span-6 bg-azulAe border border-b-0 border-azulDark2 "></div>
          {/* Right Container */}
          <div className=" col-span-6 lg:col-span-4 border-l border-azulDark2 lg:border-l-0 flex-1 bg-azulAe  px-10 py-15 sm:px-20">
            {/* Button */}
            {loggedIn ? (
              <div className="flex gap-10 items-center">
                <Icon url="/images/icons/pencil.svg" />
                <Button
                  title="Koke Fernández"
                  image="/images/test.webp"
                  variant="outline"
                  direction="left"
                />
              </div>
            ) : (
              <div className="flex justify-end gap-10 items-center">
                <Button
                  onClick={() => setOpenNavbar(false)}
                  title="Login"
                  icon="/images/icons/pencil.svg"
                  variant="outline-azul"
                  direction="left"
                />
              </div>
            )}
          </div>
        </div>
        {/* Bottom Container */}
        <div className="w-full grid grid-cols-12  bg-azulAe">
          {/* Left Container */}
          <div className=" col-span-6 lg:col-span-2 bg-azulAe py-12 pl-10"></div>
          {/* Middle Container */}
          <div className="  lg:col-span-6 hidden lg:flex  border border-t-0 border-azulDark2 "></div>
          {/* Right Container */}
          <div className=" w-full col-span-6 lg:col-span-4 bg-azulAe  lg:border-l-0 flex-1 py-15 px-20 lg:pb-[181px] lg:px-[112px]  lg:pt-45 ">
            <Text tag="p" variant="para" color="default">
              Acceso
            </Text>
            <Text tag="p" variant="title" color="white">
              Candidatos
            </Text>
            <Text tag="p" variant="title" color="default">
              Empresas
            </Text>
            <Text tag="p" variant="title" color="white">
              Voluntariado
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
