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
import DropDown from "../components/form/dropdown/Dropdown";
import { RadioGroup } from "@/components/ui/radio-group";
import { SimpleRadioButton } from "../components/form/radio-button/RadioButton";
import Link from "next/link";
const Register = () => {
  const [step, setStep] = useState(1);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [step]);

  return (
    <div className="grid grid-cols-12 ">
      {/* Left Container */}
      <div className=" hidden md:block md:col-span-2 lg:col-span-3 p-20">
        {/* Back Button */}

        <div className=" sticky top-[210px] left-[48px] flex gap-6 items-center">
          <Link href={"/select-registration"}>
            <div className="rotate-90">
              <Button
                variant="secondary"
                icon="/images/icons/dropdown_open.svg"
              />
            </div>
          </Link>
          <div className="hidden lg:block">
            <Text tag="p" variant="para" fontWeight="medium">
              Salir del registro
            </Text>
          </div>
        </div>
      </div>
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

            {/* Inputs Container */}
            <div className="flex flex-col gap-26 mt-40 ">
              <Input
                placeholder="Fecha de nacimiento"
                type="text"
                variant="simple"
              />
              <DropDown
                options={[
                  {
                    label: "Nacionalidad",
                    value: "1",
                  },
                  {
                    label: "Tipo",
                    value: "2",
                  },
                ]}
                placeHolder="Nacionalidad"
              />
              {/* DropDown and Input */}
              <div className="flex flex-col extraSmall:flex-row extraSmall:items-end gap-20">
                <div className="flex-1">
                  <DropDown
                    options={[
                      {
                        label: "DNI",
                        value: "1",
                      },
                      {
                        label: "Tipo",
                        value: "2",
                      },
                    ]}
                    placeHolder="DNI"
                  />
                </div>
                <div className="flex-1">
                  <Input
                    placeholder="Fecha de nacimiento"
                    type="text"
                    variant="simple"
                  />
                </div>
              </div>
              {/* Single Input */}
              <DropDown
                options={[
                  {
                    label: "DNI",
                    value: "1",
                  },
                  {
                    label: "Tipo",
                    value: "2",
                  },
                ]}
                placeHolder="Género"
              />
            </div>

            {/* Button Container */}
            <div className="mt-46 flex gap-4">
              <Button
                variant="secondary"
                title="Atrás"
                onClick={function () {
                  setStep(1);
                }}
              />

              <Button
                onClick={function () {
                  setStep(3);
                }}
                variant="primary"
                title="Iniciar sesión"
              />
              {/* Text Wrapper */}
            </div>
          </div>
        )}
        {/* Step 2 Ends */}

        {/* ========================================= */}
        {/* Step 3 Starts */}
        {step === 3 && (
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

            {/* Inputs Container */}
            <div className="flex flex-col gap-26 mt-40 ">
              <Input
                placeholder="¿Tienes diagnóstico TEA confirmado?"
                type="text"
                variant="simple"
              />

              {/* DropDown and Input */}
              <div className="flex flex-col extraSmall:flex-row extraSmall:items-end gap-20">
                <div className="basis-2/3">
                  <DropDown
                    options={[
                      {
                        label: "DNI",
                        value: "1",
                      },
                      {
                        label: "Tipo",
                        value: "2",
                      },
                    ]}
                    placeHolder="¿Tienes certificado de discapacidad?"
                  />
                </div>
                <div className="basis-1/3">
                  <Input placeholder="26%" type="text" variant="simple" />
                </div>
              </div>
              {/* Selection Input */}
              <div className="w-full h-[81px] bg-green-500 opacity-40">
                Pending Selection Input
              </div>
              {/* Single Input */}
              <DropDown
                options={[
                  {
                    label: "DNI",
                    value: "1",
                  },
                  {
                    label: "Tipo",
                    value: "2",
                  },
                ]}
                placeHolder="Género"
              />
            </div>

            {/* Button Container */}
            <div className="mt-46 flex gap-4">
              <Button
                variant="secondary"
                title="Atrás"
                onClick={function () {
                  setStep(2);
                }}
              />

              <Button
                onClick={function () {
                  setStep(4);
                }}
                variant="primary"
                title="Iniciar sesión"
              />
              {/* Text Wrapper */}
            </div>
          </div>
        )}
        {/* Step 3 Ends */}

        {/* ========================================= */}
        {/* Step 4 Starts */}
        {step === 4 && (
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

            {/* Inputs Container */}
            <div className="flex flex-col gap-26 mt-40 ">
              <Input placeholder="Dirección" type="text" variant="simple" />

              {/* DropDown and Input */}
              <div className="flex flex-col extraSmall:flex-row extraSmall:items-end gap-20">
                <div className="flex-1">
                  <DropDown
                    options={[
                      {
                        label: "DNI",
                        value: "1",
                      },
                      {
                        label: "Tipo",
                        value: "2",
                      },
                    ]}
                    placeHolder="Población"
                  />
                </div>
                <div className="flex-1">
                  <DropDown
                    options={[
                      {
                        label: "DNI",
                        value: "1",
                      },
                      {
                        label: "Tipo",
                        value: "2",
                      },
                    ]}
                    placeHolder="Provincia"
                  />
                </div>
              </div>
              {/* Input And DropDown */}
              <div className="flex flex-col extraSmall:flex-row extraSmall:items-end gap-20">
                <div className="flex-1">
                  <Input
                    placeholder="Código postal"
                    type="text"
                    variant="simple"
                  />
                </div>
                <div className="flex-1">
                  <DropDown
                    options={[
                      {
                        label: "DNI",
                        value: "1",
                      },
                      {
                        label: "Tipo",
                        value: "2",
                      },
                    ]}
                    placeHolder="País"
                  />
                </div>
              </div>
              {/* 2 Inputs */}
              <div className="flex flex-col extraSmall:flex-row extraSmall:items-end gap-20">
                <div className="flex-1">
                  <Input
                    placeholder="Teléfono móvil"
                    type="text"
                    variant="simple"
                  />
                </div>
                <div className="flex-1">
                  <Input
                    placeholder="Teléfono fijo"
                    type="text"
                    variant="simple"
                  />
                </div>
              </div>
              {/* Simple Radio Buttons */}

              <div className="">
                <Text tag="p" variant="para" fontWeight="medium">
                  Preferencias de contacto
                </Text>
                <RadioGroup className="mt-10 flex flex-col gap-4">
                  <SimpleRadioButton id="1" variant="default" title="Llamada" />
                  <SimpleRadioButton id="2" variant="default" title="SMS" />
                  <SimpleRadioButton id="3" variant="default" title="Mail" />
                </RadioGroup>
              </div>
            </div>

            {/* Button Container */}
            <div className="mt-40 flex gap-4">
              <Button
                variant="secondary"
                title="Atrás"
                onClick={function () {
                  setStep(3);
                }}
              />

              <Button
                onClick={function () {
                  setStep(4);
                }}
                variant="primary"
                title="Iniciar sesión"
              />
              {/* Text Wrapper */}
            </div>
          </div>
        )}
        {/* Step 4 Ends */}
      </div>
      {/* Right Container */}
      <div className=" hidden md:col-span-2 lg:col-span-3 md:flex flex-col justify-end">
        <SimpleMarquee>Registro</SimpleMarquee>
      </div>
    </div>
  );
};

export default Register;
