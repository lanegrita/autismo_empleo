"use client";
import Text from "../components/ui/typography/Typography";
import Input from "../components/form/input/Input";
import Button from "../components/ui/button/Button";
import { SimpleMarquee } from "../components/ui/marquee-section/MarqueeSection";
import { cn } from "@/lib/utils";
import { LoginButton } from "../login/page";
import { FormProgressBar } from "../components/form/progress/Progress";
import CheckBox from "../components/form/check-box/CheckBox";
import { useEffect, useState } from "react";

const Register = () => {
  const [step, setStep] = useState(1);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [step]);

  return (
    <div className="grid grid-cols-12 ">
      {/* Left Container */}
      <div className=" hidden md:block md:col-span-2 lg:col-span-3"></div>
      {/* Middle Container  */}
      <div className=" col-span-12 md:col-span-8 lg:col-span-6 flex flex-col items-center   border-x border-gris2 pt-10 px-10 pb-49">
        {/* Progressbar Container */}
        <div className="w-full">
          <FormProgressBar value={step} maxValue={4} />
        </div>
        {/* Content Container */}

        {/* Step 1 Starts */}
        {step === 1 && (
          <div className=" w-full max-w-[624px] ">
            {/* Top Text Container */}
            <div className="flex flex-col gap-6 mt-40">
              <Text
                className="text-left"
                tag="h3"
                variant="subtitle"
                fontWeight="medium"
                color="blue"
              >
                Bienvenido al TEAm
              </Text>
              <Text
                className="text-left"
                tag="h3"
                variant="title"
                fontWeight="medium"
              >
                Estás a punto de crear tu cuenta totalmente gratuita en el
                portal de empleo número 1, especializado en el mundo TEA.
                Enhorabuena
              </Text>
            </div>

            <div className="mt-40 flex flex-col gap-2 w-full ">
              {/* Social Media Buttons Container */}
              <div className={cn("flex mb-20 gap-4 w-full ")}>
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
            <div className="flex flex-col gap-28 mt-30 ">
              <Input placeholder="Nombre" type="text" variant="simple" />
              <Input placeholder=" Apellidos" type="text" variant="simple" />

              <Input placeholder="Email" type="email" variant="simple" />
              <Input
                placeholder="Contraseña"
                type="password"
                variant="simple"
              />
            </div>
            {/* CheckBox */}
            <div className="mt-24">
              <CheckBox label="Acepto las Condiciones legales, del servicio y la Información básica de privacidad." />
            </div>
            {/* Button and register Container */}
            <div className="mt-40">
              <Button
                onClick={() => setStep(2)}
                variant="primary"
                title="Iniciar sesión"
              />
              {/* Text Wrapper */}
            </div>
          </div>
        )}
        {/* Step 1 Ends */}

        {/* ========================================= */}

        {/* Step 2 Starts */}
        {step === 2 && (
          <div className=" w-full max-w-[624px] ">
            {/* Top Text Container */}
            <div className="flex flex-col gap-6 mt-40">
              <Text
                className="text-left"
                tag="h3"
                variant="subtitle"
                fontWeight="medium"
                color="blue"
              >
                Bienvenido al TEAm
              </Text>
              <Text
                className="text-left"
                tag="h3"
                variant="title"
                fontWeight="medium"
              >
                Estás a punto de crear tu cuenta totalmente gratuita en el
                portal de empleo número 1, especializado en el mundo TEA.
                Enhorabuena
              </Text>
            </div>

            <div className="mt-40 flex flex-col gap-2 w-full ">
              {/* Social Media Buttons Container */}
              <div className={cn("flex mb-20 gap-4 w-full ")}>
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
            <div className="flex flex-col gap-28 mt-30 ">
              <Input placeholder="Nombre" type="text" variant="simple" />
              <Input placeholder=" Apellidos" type="text" variant="simple" />

              <Input placeholder="Email" type="email" variant="simple" />
              <Input
                placeholder="Contraseña"
                type="password"
                variant="simple"
              />
            </div>
            {/* CheckBox */}
            <div className="mt-24">
              <CheckBox label="Acepto las Condiciones legales, del servicio y la Información básica de privacidad." />
            </div>
            {/* Button and register Container */}
            <div className="mt-40">
              <Button
                onClick={function () {
                  setStep(2);
                }}
                variant="primary"
                title="Iniciar sesión"
              />
              {/* Text Wrapper */}
            </div>
          </div>
        )}

        {/* Step 2 Ends */}
      </div>
      {/* Right Container */}
      <div className=" hidden md:col-span-2 lg:col-span-3 md:flex flex-col justify-end">
        <SimpleMarquee>Registro</SimpleMarquee>
      </div>
    </div>
  );
};

export default Register;
