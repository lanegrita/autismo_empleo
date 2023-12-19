import React from "react";
import Button from "../components/ui/button/Button";
import { OfferListItem2 } from "../components/ui/list/List";
import Text from "../components/ui/typography/Typography";
import Image from "next/image";
import Pagination from "../components/ui/pagination/Pagination";

const ApplicantListView = () => {
  return (
    <div className="w-full">
      {/* Section 1 Starts */}
      {/* Section 1 Ends */}

      {/* Section 2 Starts */}
      <section className="flex flex-col md:flex-row">
        {/* Left */}
        <div className="w-full  md:w-[160px] bg-azulAe p-11  ">
          <div className="flex justify-between w-full items-center md:justify-center md:mt-21">
            <div className="rotate-180">
              <Button
                variant="secondary-azul"
                icon="/images/icons/arrow-right.svg"
              />
            </div>
            <Text tag="p" variant="para" color="white" className="md:hidden">
              Volver al listado
            </Text>
          </div>
        </div>
        {/* Right */}
        <div className="flex-1">
          <OfferListItem2
            image="/images/test.webp"
            publishDate="16/09/23"
            title="Técnico de Marketing para el área de Comunicación y Relaciones Institucionales."
            subTitle="Confederación de Autismo España"
            backgroundColor="blue"
          />
        </div>
      </section>
      {/* Section 2 Ends */}

      {/* Section 3 Starts */}
      <section className="px-10 py-20 flex justify-between items-center border-b border-gris2">
        {/* Left */}
        <div className="flex gap-30 lg:gap-[118px]">
          {/* Left Text */}
          <div className="flex flex-col md:flex-row">
            <p className="text-[23px]">Listado de</p>
            <div className="flex">
              <div className="relative w-[44px] h-[44px]">
                <Image src="/images/icons/pencil.svg" alt="icon" fill />
              </div>

              <p className="text-[23px]">Listado de</p>
            </div>
          </div>

          {/* Right Text */}
          <div className="hidden md:block ">
            <p className="text-[23px] text-azulAe">133 Inscritos</p>
          </div>
        </div>
        {/* Right */}
        <div className="">
          {/* Tablet Button */}
          <div className="hidden md:block">
            <Button
              title="Ver en todas"
              icon="/images/icons/dropdown_open.svg"
              variant="outline"
              direction="right"
            />
          </div>
          {/* Mobile Button */}
          <div className="md:hidden">
            <Button icon="/images/icons/filter.svg" variant="outline" />
          </div>
        </div>
      </section>
      {/* Section 3 Ends */}

      {/* Section 4 Starts */}
      <section>
        <ApplicantItem />
        <ApplicantItem />
        <ApplicantItem />
        <ApplicantItem />
        <ApplicantItem />
        <ApplicantItem />
      </section>
      {/* Section 4 Ends */}

      {/* Pagination Section Starts */}
      <section className="flex justify-center py-21 px-10">
        <div className="w-full max-w-[352px]">
          <Pagination page={1} totalPages={8} />
        </div>
      </section>
      {/* Pagination Section Ends */}
    </div>
  );
};

const ApplicantItem = () => {
  return (
    <div className="px-10 py-20 flex flex-col lg:flex-row lg:px-20 lg:gap-20 border-b border-gris2">
      {/* Left */}
      <div className="flex gap-10 md:gap-14">
        {/* Profile Image */}
        <div className="relative w-[76px] h-[76px] min-w-[76px] min-h-[76px] md:w-[84px] md:h-[84px] md:min-w-[84px] md:min-h-[84px] rounded-full overflow-hidden border border-gris6">
          <Image src="/images/test.webp" alt="profile image" fill />
        </div>
        {/* Profile Info */}
        <div className="flex flex-col">
          <h5 className="text-[23px] font-medium">
            Antonio Luis Gutierrez Mellado
          </h5>
          <Text tag="p" variant="para" color="blue">
            Inscrito el 25/09/23
          </Text>
        </div>
      </div>

      {/* Right */}
      <div className="flex gap-11 lg:flex-1 lg:justify-evenly mt-16 lg:mt-0 lg:gap-17">
        {/* Left Container */}
        <div className="md:ml-[112px] lg:ml-0">
          <Text tag="p" variant="para">
            Candidato TEA, Profesional TEA
          </Text>
        </div>
        {/* Right Container */}
        <div className="">
          <Text tag="p" variant="para">
            Candidato TEA, Profesional TEA
          </Text>
        </div>
      </div>
    </div>
  );
};

export default ApplicantListView;
