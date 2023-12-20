"use client";
import React, { useState } from "react";
import Text from "../typography/Typography";
import BurgerIcon from "../burger-icon/BurgerIcon";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Button from "../button/Button";
import Icon from "../icon/Icon";
import Link from "next/link";

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
      <div className="w-full grid grid-cols-12 border-b border-gris2  bg-blanco">
        {/* Left Container */}
        <div className="col-span-6 lg:col-span-3 border-r lg:border-r-0 border-gris2   bg-blanco py-12 pl-10">
          {/* Image Container */}
          <Link href={"/"}>
            <div className="relative  w-[141px] h-[48px]  md:w-[181px] md:h-[56px] lg:w-[208px] lg:h-[62px]">
              <Image src={"/images/autismo-logo.svg"} alt="autismo logo" fill />
            </div>
          </Link>
        </div>
        {/* Middle Container */}
        <div className=" hidden lg:block sm:col-span-6 lg:col-span-5 2xl:col-span-6 bg-blanco border-x   border-gris2  "></div>
        {/* Right Container */}
        <div className="col-span-6 lg:col-span-4 2xl:col-span-3    bg-blanco  px-10 py-15 sm:px-20">
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
              {/* Register Button Wrapper */}
              <div className="hidden md:block">
                <Link href={"/select-registration"}>
                  <Button
                    title="Regístrate"
                    icon="/images/icons/pencil.svg"
                    variant="primary"
                    direction="left"
                  />
                </Link>
              </div>
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
          "bg-azulAe w-full  absolute top-0 z-[2] pt-[52px] -translate-y-full  ",
          openNavbar && "translate-y-0"
        )}
      >
        <div className="w-full grid grid-cols-12 border-b border-b-azulDark2  bg-blanco">
          {/* Left Container */}
          <div className=" flex col-span-6 lg:col-span-2 flex-1 bg-azulAe py-12 pl-10 pr-10 min-w-0 ">
            {/* Image Container */}
            <Link href={"/"}>
              <div className="relative  w-[141px] h-[48px]  md:w-[181px] md:h-[56px] lg:w-[208px] lg:h-[62px] ">
                <Image
                  src={"/images/autismo-logo-white.svg"}
                  alt="autismo logo"
                  fill
                />
              </div>
            </Link>
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
                {/* <Button
                  onClick={() => setOpenNavbar(false)}
                  title="Register"
                  icon="/images/icons/pencil.svg"
                  variant="primary-azul"
                  direction="left"
                /> */}
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
          <div className=" col-span-0 sm:col-span-6 lg:col-span-2 bg-azulAe py-12 pl-10"></div>
          {/* Middle Container */}
          <div className="  lg:col-span-6 hidden lg:flex  border border-t-0 border-azulDark2 "></div>
          {/* Right Container */}
          <div className=" w-full col-span-12 flex flex-col sm:col-span-6 lg:col-span-4 bg-azulAe  lg:border-l-0 flex-1 py-15 px-10  sm:px-20 lg:pb-[181px] lg:px-[112px]  lg:pt-45 ">
            <Text tag="p" variant="para" color="default">
              Acceso
            </Text>
            <Link href="/login?userType=candidatos">
              <Text
                className="cursor-pointer"
                tag="p"
                variant="title"
                color="white"
              >
                Candidatos
              </Text>
            </Link>
            <Link href="/login?userType=empresas">
              <Text
                className="cursor-pointer"
                tag="p"
                variant="title"
                color="default"
              >
                Empresas
              </Text>
            </Link>
            <Link href="/login?userType=voluntariado">
              <Text
                className="cursor-pointer"
                tag="p"
                variant="title"
                color="white"
              >
                Voluntariado
              </Text>
            </Link>
            <div className="mt-4  gap-1 flex sm:hidden ">
              <Text tag="p" variant="para">
                Lorem ipsum dolor sit amet.?
              </Text>
              <Link href={"/select-registration"}>
                <Text tag="p" variant="para" underline>
                  Register
                </Text>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
