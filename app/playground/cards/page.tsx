import ApplicantHeader from "@/app/components/ui/applicant-header/ApplicantHeader";
import BurgerIcon from "@/app/components/ui/burger-icon/BurgerIcon";
import Header from "@/app/components/ui/header/Header";
import VolunteerCard from "@/app/components/ui/volunteer-card/VolunteerCard";
import React from "react";
import { date } from "zod";

const Cards = () => {
  return (
    <div>
      <Header />

      <div className="pt-[162px]">
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
      <div className="grid grid-cols-1 md:grid-cols-2 border-solid border border-gris2 bg-gris2  gap-1">
        <VolunteerCard
          title="Informar, orientar y mediar"
          description="Confederación de Autismo España"
          image="/images/test.webp"
          icon="/images/icons/delete.svg"
        />
        <VolunteerCard
          title="Informar, orientar y mediar"
          description="Confederación de Autismo España"
          image="/images/test.webp"
          icon="/images/icons/delete.svg"
        />
        <VolunteerCard
          title="Informar, orientar y mediar"
          description="Confederación de Autismo España"
          image="/images/test.webp"
        />
        <VolunteerCard
          title="Informar, orientar y mediar"
          description="Confederación de Autismo España"
          image="/images/test.webp"
        />
        <VolunteerCard
          title="Informar, orientar y mediar"
          description="Confederación de Autismo España"
          image="/images/test.webp"
        />
        <VolunteerCard
          title="Informar, orientar y mediar"
          description="Confederación de Autismo España"
          image="/images/test.webp"
        />
        <VolunteerCard
          title="Informar, orientar y mediar"
          description="Confederación de Autismo España"
          image="/images/test.webp"
        />
        <VolunteerCard
          title="Informar, orientar y mediar"
          description="Confederación de Autismo España"
          image="/images/test.webp"
        />
        <VolunteerCard
          title="Informar, orientar y mediar"
          description="Confederación de Autismo España"
          image="/images/test.webp"
        />
        <VolunteerCard
          title="Informar, orientar y mediar"
          description="Confederación de Autismo España"
          image="/images/test.webp"
        />
      </div>
    </div>
  );
};

export default Cards;
