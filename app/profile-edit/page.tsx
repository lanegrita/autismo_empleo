import React from "react";
import { TitleHeader } from "../create-offer/page";
import { SimpleMarquee } from "../components/ui/marquee-section/MarqueeSection";
import Text from "../components/ui/typography/Typography";
import Image from "next/image";
import Button from "../components/ui/button/Button";
import Input from "../components/form/input/Input";
import DropDown from "../components/form/dropdown/Dropdown";
import {
  RadioButtonXL,
  SimpleRadioButton
} from "../components/form/radio-button/RadioButton";
import { RadioGroup } from "@/components/ui/radio-group";

const ProfileEditView = () => {
  return (
    <div>
      {/* Section 1 Starts */}
      <TitleHeader image="/images/test.webp" title="Perfil usuario" />
      {/* Section 1 Ends */}

      {/* Section 2 Starts */}
      <section className="grid grid-cols-12 border-t border-gris2">
        {/* Left */}
        <div className="hidden xl:block  xl:col-span-2 border-l border-gris2"></div>

        {/* Main */}
        <div className="col-span-12 xl:col-span-8 border-x border-gris2 px-10 py-30 md:px-20 md:py-40 xl:px-[160px] xl:py-40">
          {/* Profile Image Section Starts */}
          <Text tag="h3" variant="title-s" color="blue" className="mb-21">
            Datos personales
          </Text>
          <div className="flex items-center gap-18 md:gap-27">
            <div className="w-[160px] h-[160px] md:w-[200px] md:h-[200px] bg-azulLight3 rounded-full flex justify-center items-center">
              {/* Placeholder */}
              <div className="relative w-[100px] h-[100px]">
                <Image src="/images/icons/pencil.svg" alt="person icon" fill />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <Button title="Subir foto" variant="outline" />
              <div className="hidden">
                <Button title="Eliminar foto" variant="simple" />
              </div>
            </div>
          </div>
          {/* Profile Image Section Ends */}

          {/* Section 1 Starts */}
          <div className="mt-21 grid grid-cols-1 gap-26 items-end">
            {/* Row 1 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-25 sm:gap-20">
              <Input type="text" placeholder="Nombre" variant="simple" />
              <Input
                type="text"
                placeholder="Primer apellido"
                variant="simple"
              />
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-26 sm:gap-20">
              <Input
                type="text"
                placeholder="Segundo apellido"
                variant="simple"
              />
              <Input type="text" placeholder="DNI" variant="simple" />
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-26 sm:gap-20 items-end">
              <div className="grid grid-cols-1 md:grid-cols-2 items-end gap-26 sm:gap-20">
                <DropDown
                  placeHolder="Género"
                  options={[
                    {
                      label: "Género",
                      value: "género"
                    }
                  ]}
                />
                <Input
                  type="text"
                  placeholder="Fecha de nacimiento"
                  variant="simple"
                />
              </div>
              <Input type="text" placeholder="Nacionalidad" variant="simple" />
            </div>
          </div>
          {/* Section 1 Ends */}

          <Text tag="h3" variant="title-s" color="blue" className="mb-21 mt-40">
            Lugar de residencia
          </Text>
          {/* Section 2 Starts */}
          <div className="mt-21 grid grid-cols-1 gap-26 items-end">
            {/* Row 1 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-26 sm:gap-20 items-end">
              <DropDown
                placeHolder="País"
                options={[
                  {
                    label: "País",
                    value: "país"
                  }
                ]}
              />
              <Input type="text" placeholder="Código postal" variant="simple" />
              <DropDown
                placeHolder="Provincia"
                options={[
                  {
                    label: "Provincia",
                    value: "provincia"
                  }
                ]}
              />
              <Input type="text" placeholder="Población" variant="simple" />
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-26 sm:gap-20">
              <div className="col-span-2">
                <Input type="text" placeholder="Dirección" variant="simple" />
              </div>
            </div>
          </div>
          {/* Section 2 Ends */}

          <Text tag="h3" variant="title-s" color="blue" className="mb-21 mt-40">
            Datos de acceso
          </Text>
          {/* Section 3 Starts */}
          <div className="mt-21 grid grid-cols-1 gap-26 items-end">
            {/* Row 1 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-25 sm:gap-20">
              <Input type="email" placeholder="Nombre" variant="simple" />
              <Input
                type="text"
                placeholder="Nueva contraseña"
                variant="simple"
              />
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-25 sm:gap-20">
              <Input
                type="password"
                placeholder="Contraseña actual"
                variant="simple"
              />
              <Input
                type="password"
                placeholder="Contraseña actual"
                variant="simple"
              />
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-25 sm:gap-20">
              <div className="hidden md:block col-span-1"></div>
              <div>
                <Button title="Cambiar contraseña" variant="outline" />
              </div>
            </div>
          </div>
          {/* Section 3 Ends */}

          <Text tag="h3" variant="title-s" color="blue" className="mb-16 mt-40">
            Contacto
          </Text>
          {/* Section 4 Starts */}
          <div className="mt-21 grid grid-cols-1 gap-26 items-end">
            {/* Row 1 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-21 sm:gap-20">
              <div>
                <RadioGroup className="gap-4">
                  <RadioButtonXL id="1" title="Llamada" />
                  <RadioButtonXL id="2" title="SMS" />
                  <RadioButtonXL id="3" title="Mail" />
                </RadioGroup>
              </div>
              <RadioGroup className="">
                <div className="flex flex-col gap-8 h-fit">
                  <Input
                    type="tel"
                    placeholder="Teléfono móvil"
                    variant="simple"
                  />
                  <SimpleRadioButton id="tel-1" title="Preferente" />
                </div>
                <div className="flex flex-col gap-8">
                  <Input
                    type="tel"
                    placeholder="Teléfono fijo"
                    variant="simple"
                  />
                  <SimpleRadioButton id="tel-2" title="Preferente" />
                </div>
              </RadioGroup>
            </div>
          </div>
          {/* Section 4 Ends */}

          <Text tag="h3" variant="title-s" color="blue" className="mb-21 mt-40">
            Discapacidad
          </Text>
          {/* Section 5 Starts */}
          <div className="">
            {/* Row 1 */}
            <div>
              <Text tag="h6" variant="para" fontWeight="medium">
                ¿Trastorno del espectro autista confirmado?
              </Text>
              <RadioGroup className="gap-4 mt-10">
                <SimpleRadioButton id="s-1" title="Sí" />
                <SimpleRadioButton id="s-2" title="No" />
              </RadioGroup>
            </div>

            {/* Row 2 */}
            <Text tag="h6" variant="para" fontWeight="medium" className="mt-26">
              ¿Trastorno del espectro autista confirmado?
            </Text>
            <div className="grid grid-cols-1 sm:grid-cols-2">
              <RadioGroup className="flex flex-col gap-4 mt-10">
                <SimpleRadioButton id="n-1" title="Sí" />
                <SimpleRadioButton id="n-2" title="No" />
              </RadioGroup>
              <div className="flex flex-col gap-26 mt-27 md:mt-0">
                <Input
                  type="text"
                  placeholder="Porcentaje de discapacidad"
                  variant="simple"
                />
                <Input
                  type="text"
                  placeholder="Tipo/s de discapacidad"
                  variant="simple"
                />
              </div>
            </div>
          </div>
          {/* Section 5 Ends */}

          {/* Buttons Section Starts */}
          <div className="flex gap-4 mt-[160px]">
            <Button title="Guardar" variant="primary" />
            <Button title="Cancelar" variant="secondary" />
          </div>
          {/* Buttons Section Ends */}
        </div>

        {/* Right */}
        <div className="hidden xl:block  xl:col-span-2 border-r border-gris2">
          <div className="mt-[380px]">
            <SimpleMarquee>Tu perfil</SimpleMarquee>
          </div>
        </div>
      </section>
      {/* Section 2 Ends */}
    </div>
  );
};

export default ProfileEditView;
