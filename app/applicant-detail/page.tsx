"use client";
import React from "react";
import Button from "../components/ui/button/Button";
import { useRouter } from "next/navigation";
import Text from "../components/ui/typography/Typography";
import ApplicantHeader from "@/app/components/ui/applicant-header/ApplicantHeader";
import Image from "next/image";
const ApplicantDetail = () => {
  const router = useRouter();
  return (
    <div>
      {/* Section 1 */}
      <section className="grid grid-cols-1 md:grid-cols-12 ">
        {/* Left */}
        <div className="w-full col-span-2 bg-azulAe p-11  ">
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
        <div className="col-span-10">
          <ApplicantHeader
            image="/images/test.webp"
            name="Andrés Esparza Corrales"
            date={new Date().toLocaleDateString()}
            address="Avda. del Golf, 5 Bajo Altorreal (Murcia)CP. 30506"
            number1="0134123312"
            number2="2314490132"
            email="jesus.gar.lor@autismo.org.es"
          />
        </div>
      </section>
      {/* Section 2 */}
      <section className="grid grid-cols-12">
        {/* Left Container */}
        <div className="col-span-2 hidden lg:block"></div>
        {/* Middle Container */}
        <div className="col-span-12 lg:col-span-8 border-x border-gris2">
          {/* Top Container */}
          <div className="py-28 px-10 flex flex-col sm:flex-row items-center justify-between border-b border-girs2">
            {/* Icon Image */}
            <div className="flex items-center">
              <div className="relative w-[68px] h-[68px]">
                <Image src={"/images/icons/news.svg"} alt="news icon" fill />
              </div>
              <Text tag="h6" variant="title" fontWeight="medium">
                TEA
              </Text>
            </div>
            <div className=" flex xl:hidden   items-center justify-end gap-4 p-10 xs:p-20">
              <Button
                title="Descargar CV"
                icon="/images/icons/download.svg"
                variant="outline"
              />
              <Button
                className="w-full justify-center "
                title="Contactar"
                variant="primary"
              />
            </div>
          </div>
          {/* Content Container */}
          <div className="grid grid-col-1 md:grid-cols-2 gap-20 px-10 sm:px-20 py-40">
            <DetailItem leftText="Diagnóstico TEA" rightText="Sí" />
            <DetailItem leftText="Certificado de discapacidad" rightText="Sí" />
            <DetailItem leftText="Porcentaje" rightText="36%" />
            <DetailItem leftText="Tipo" rightText="Sí" />
          </div>
        </div>
        {/* Right Container */}
        <div className="hidden lg:flex justify-end  col-span-2 p-10">
          <div className="  hidden xl:flex  flex-col items-center justify-end gap-4 w-full ">
            <Button
              className="w-full justify-center "
              title="Descargar CV"
              icon="/images/icons/download.svg"
              variant="outline"
            />
            <Button
              className="w-full justify-center "
              title="Contactar"
              variant="primary"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

const DetailItem = ({
  leftText,
  rightText,
}: {
  leftText: string;
  rightText: string;
}) => {
  return (
    <div className="pb-6 flex justify-between items-center border-b border-gris2 ">
      {/* Left Text  */}
      <Text variant="para-l" tag="p" color="blue">
        {leftText}
      </Text>
      {/* Right Text  */}
      <Text variant="para-l" tag="p">
        {rightText}
      </Text>
    </div>
  );
};

export default ApplicantDetail;
