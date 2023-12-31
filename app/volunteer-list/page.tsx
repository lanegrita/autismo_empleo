"use client";
import React, { useState } from "react";
import { TitleHeader } from "../create-offer/page";
import Text from "../components/ui/typography/Typography";
import Button from "../components/ui/button/Button";
import { FilterOfferSection } from "../components/ui/filter/Filter";
import {
  OfferListItem1,
  OfferListItem1Props,
} from "../components/ui/list/List";
import Pagination from "../components/ui/pagination/Pagination";
import VolunteerCard from "../components/ui/volunteer-card/VolunteerCard";
import Link from "next/link";

const dummyData = [
  { id: 1 },
  { id: 1 },
  { id: 1 },
  { id: 1 },
  { id: 1 },
  { id: 1 },
  { id: 1 },
  { id: 1 },
];

const data: OfferListItem1Props[] = [
  {
    image: "/images/test.webp",
    title:
      "Técnico de Marketing para el área de Comunicación y Relaciones Institucionales.",
    subTitle: "Confederación de Autismo España",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat turpis sit amet tortor elementum accumsan. Phasellus lacinia erat risus, nec faucibus turpis suscipit consequat. Vivamus vehicula sagittis arcu nec pellentesque.",
    items: ["Servicios Centrales, Madrid", "Presencial"],
  },
  {
    image: "/images/test.webp",
    title:
      "Técnico de Marketing para el área de Comunicación y Relaciones Institucionales.",
    subTitle: "Confederación de Autismo España",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat turpis sit amet tortor elementum accumsan. Phasellus lacinia erat risus, nec faucibus turpis suscipit consequat. Vivamus vehicula sagittis arcu nec pellentesque.",
    items: ["Servicios Centrales, Madrid", "Presencial"],
  },
  {
    image: "/images/test.webp",
    title:
      "Técnico de Marketing para el área de Comunicación y Relaciones Institucionales.",
    subTitle: "Confederación de Autismo España",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat turpis sit amet tortor elementum accumsan. Phasellus lacinia erat risus, nec faucibus turpis suscipit consequat. Vivamus vehicula sagittis arcu nec pellentesque.",
    items: ["Servicios Centrales, Madrid", "Presencial"],
  },
];

const VolunteerList = () => {
  const [openFilter, setOpenFilter] = useState(false);
  return (
    <div className="border border-gris2">
      {/* Top Container */}
      <div className="border-b border-gris2">
        <TitleHeader
          image="/images/test.webp"
          title="Voluntariados"
          titleVariant={"title-xxl"}
        />
      </div>
      {/* Bottom Container */}
      <div className="grid grid-cols-12 ">
        {/* Left Container */}
        <div className="hidden lg:block col-span-3 border-x border-gris2 ">
          <FilterOfferSection
            setOpenFilter={setOpenFilter}
            openFilter={openFilter}
          />
        </div>
        {/* Right Container */}
        <div className=" col-span-12 lg:col-span-9 w-full ">
          {/* Right Top Container */}
          <div className=" px-10 py-20 md:p-20 flex  items-center justify-between">
            {/* Text Container */}
            <div className="flex items-center gap-2">
              <Text tag="h5" variant="title-l" color="blue" fontWeight="medium">
                1125{" "}
              </Text>
              <Text tag="h5" variant="title-l" fontWeight="medium">
                Resultados
              </Text>
            </div>
            {/* Button Container  */}
            <div className="flex gap-4">
              <div className="block md:hidden">
                <Button
                  variant="outline"
                  icon="/images/icons/dropdown_open.svg"
                  direction="right"
                />
              </div>
              <div className="hidden md:block lg:hidden">
                <Button
                  title="Por fecha "
                  variant="outline"
                  icon="/images/icons/dropdown_open.svg"
                  direction="right"
                />
              </div>

              <div className="hidden lg:block">
                <Button
                  title="Por fecha de publicación"
                  variant="outline"
                  icon="/images/icons/dropdown_open.svg"
                  direction="right"
                />
              </div>
              <div className="block lg:hidden">
                <Button
                  onClick={() => setOpenFilter(true)}
                  variant="outline"
                  icon="/images/icons/filter.svg"
                />
              </div>
              {/* Filter */}
              <div className="block lg:hidden">
                <FilterOfferSection
                  setOpenFilter={setOpenFilter}
                  openFilter={openFilter}
                />
              </div>
            </div>
          </div>
          {/* Content Container */}
          <div className="grid grid-cols-1 xl:grid-cols-2 bg-gris2 gap-[1px] border-t border-gris2">
            {dummyData.map((item, index) => (
              <Link key={index} href={"/volunteer-detail"}>
                <VolunteerCard
                  image="/images/test.webp"
                  title="Desarrollo Personal"
                  description="Confederación de Autismo España"
                />
              </Link>
            ))}
          </div>
          {/* Pagination Section */}
          <div className=" flex justify-center items-center px-10 py-[45px] md:py-[60px] lg:py-[120px] xl:py-[140px] border-t border-gris2">
            {/* Pagination wrapper */}
            <div className="w-[375px]">
              <Pagination page={1} totalPages={8} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VolunteerList;
