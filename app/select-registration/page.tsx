import React from "react";
import { LargeIcon } from "../components/ui/icon/Icon";
import Text from "../components/ui/typography/Typography";
import Button from "../components/ui/button/Button";
import Link from "next/link";

const SelectRegistration = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      {/* Left Container */}
      <div className="px-8 border-r border-b md:border-b-0 border-gris2 flex justify-center cursor-pointer hover:bg-azulLight3 transition-colors duration-300">
        <Link href={"/register"}>
          <RegisterOption
            icon="/images/icons/briefcase.svg"
            title1="Busco trabajo o hacer un voluntariado"
            title2="Si estás buscando el trabajo de tu vida, este es tu sitio."
          />
        </Link>
      </div>
      {/* Right Container */}
      <div className=" px-8 border-r border-gris2 flex justify-center cursor-pointer hover:bg-azulLight3 transition-colors duration-300">
        <RegisterOption
          icon="/images/icons/briefcase.svg"
          title1="Busco trabajadores o voluntarios"
          title2="Si eres una empresa o una entidad y estás buscando al trabajador perfecto, este es tu sitio."
        />
      </div>
    </div>
  );
};

interface RegisterOption {
  icon: string;
  title1: string;
  title2: string;
  onClick?: () => void;
}

const RegisterOption = ({ icon, title1, title2, onClick }: RegisterOption) => {
  return (
    <div className="flex gap-14 md:gap-18 xl:gap-26 py-[88px] md:py-[337px] ">
      <LargeIcon icon={icon} />
      {/* Text Section */}
      <div className="">
        <Text tag="p" variant="para" color="blue">
          {title1}
        </Text>
        <Text tag="h6" variant="title" className="max-w-[363px]">
          {title2}
        </Text>
        <Button
          onClick={onClick}
          variant="simple"
          title="Regístrate"
          icon="/images/icons/arrow-right.svg"
          direction="right"
        />
      </div>
    </div>
  );
};

export default SelectRegistration;
