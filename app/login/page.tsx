import React, { useState } from "react";
import Text from "../components/ui/typography/Typography";
import { RadioButtonXL } from "../components/form/radio-button/RadioButton";
import { RadioGroup } from "@/components/ui/radio-group";
import Input from "../components/form/input/Input";
import Button from "../components/ui/button/Button";
import MarqueeSection, {
  SimpleMarquee,
} from "../components/ui/marquee-section/MarqueeSection";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import { cn } from "@/lib/utils";
const Login = ({ searchParams }: { searchParams?: { userType: string } }) => {
  console.log("Params: ", searchParams?.userType);
  const userType = searchParams?.userType;
  return (
    <div className="grid grid-cols-12 ">
      {/* Left Container */}
      <div className=" hidden md:block md:col-span-2 lg:col-span-3"></div>
      {/* Middle Container  */}
      <div className=" col-span-12 md:col-span-8 lg:col-span-6 flex flex-col items-center   border-x border-gris2 pt-20 px-10 md:pt-42 pb-50">
        {/* Content Container */}
        <div className=" w-full max-w-[482px] ">
          <Text
            className="text-left"
            tag="h3"
            variant="title"
            fontWeight="medium"
          >
            Accede a tu cuenta
          </Text>
          {/* Radio Button  */}
          {userType !== "voluntariado" && (
            <RadioGroup className="mt-20">
              <RadioButtonXL id="1" title="Entrar como candidato" />
              <RadioButtonXL checked id="2" title="Entrar como empresa" />
            </RadioGroup>
          )}
          <div className="mt-20 flex flex-col gap-2 w-full max-w-[482px]">
            {/* Social Media Buttons Container */}
            <div
              className={cn(
                "flex gap-4 my-26 w-full ",
                userType === "voluntariado" && "mt-0"
              )}
            >
              <LoginButton
                title="Conéctate con Google"
                icon="/images/social/google.svg"
              />
              <LoginButton icon="/images/social/facebook.svg" />
              <LoginButton icon="/images/social/apple-logo.svg" />
            </div>
          </div>
          {/* Divider */}
          <div className="relative w-full h-[1px] bg-gris2 ">
            {/* Outer Circle */}
            <div className=" left-1/2 right-1/2  top-[-10px] absolute bg-blanco h-[20px] w-[20px] rounded-full flex justify-center items-center">
              {/* Circle */}
              <div className=" w-[12px] h-[12px] rounded-full border-[2px]   border-gris3 bg-blanco"></div>
            </div>
          </div>
          {/* Inputs Container */}
          <div className="flex flex-col gap-22 mt-26 ">
            <Input placeholder="Email" type="email" variant="simple" />
            <Input placeholder="Contraseña" type="password" variant="simple" />
          </div>
          {/* Button and register Container */}
          <div className="flex flex-col sm:flex-row gap-13 sm:items-center mt-30">
            <Button variant="primary" title="Iniciar sesión" />
            {/* Text Wrapper */}
            <div className="flex flex-col extraSmall:flex-row  extraSmall:items-center gap-1">
              <Text variant="para" tag="p">
                ¿Aún no tienes tu cuenta?
              </Text>
              <Text className="cursor-pointer" variant="para" tag="p" underline>
                Regístrate aquí
              </Text>
            </div>
          </div>
        </div>
      </div>
      {/* Right Container */}
      <div className=" hidden md:col-span-2 lg:col-span-3 md:flex flex-col justify-end">
        <SimpleMarquee>Accede a tu cuenta</SimpleMarquee>
      </div>
    </div>
  );
};

interface LoginButtonProps {
  title?: string;
  icon: string;
  direction?: "left" | "right";
  onClick?: () => void;
}

const LoginButton = ({ icon, onClick, title, direction }: LoginButtonProps) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        " cursor-pointer h-fit border border-gris2 py-6 px-6  rounded-full flex w-fit ",
        title && "gap-16 items-center p-6 sm:px-13 sm:py-6"
      )}
    >
      <Text tag="p" variant="para" className="hidden sm:block">
        {title}
      </Text>
      <Image src={icon} alt="social Media icon" width={43} height={26} />
    </div>
  );
};

export default Login;
