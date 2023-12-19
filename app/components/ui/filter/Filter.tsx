"use client";
import React, { useState } from "react";
import Text from "../typography/Typography";
import CheckBox from "../../form/check-box/CheckBox";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface FilterProps {
  openFilter?: boolean;
  setOpenFilter: (param1: boolean) => void;
}

const FilterOfferSection = ({ ...props }: FilterProps) => {
  return (
    <>
      <div className="   h-full hidden py-17 px-20 xl:px-41 xl:py-25 w-full  bg-gris5 lg:flex flex-col gap-30 ">
        {/* Section 1 Starts */}
        <div className="flex flex-col gap-12 w-full m-w-[314px]">
          <Text tag="h6" variant="para-l" color="blue" fontWeight="medium">
            Palabra Clave
          </Text>
          {/* Button Title */}
          <div className="py-10 px-12 bg-azulLight2 rounded-full min-w-fit">
            <Text tag="h5" variant="para-l" className="whitespace-nowrap">
              Project Manager
            </Text>
          </div>
        </div>
        {/* Section 1 Ends */}

        {/* Section 2 Starts */}
        <FilterOffer title={filterList1.title} list={filterList1.list} />
        {/* Section 2 Ends */}

        {/* Section 3 Starts */}
        <FilterOffer title={filterList2.title} list={filterList2.list} />
        {/* Section 3 Ends */}
      </div>

      {/* Mobile Container */}

      {/* Left Black Contaienr */}
      <div
        onClick={() => props.setOpenFilter(false)}
        className={cn(
          "fixed top-0 bottom-0 left-0 right-0 hidden z-20  bg-negroAe  opacity-30 transition-all ease-in-out duration-300",
          props.openFilter && " block"
        )}
      ></div>

      <div
        className={cn(
          " fixed top-[350px] overflow-scroll  sm:top-0 bottom-0 right-0   z-20 py-17 px-20 md:px-41 md:py-25 w-full sm:w-3/4 bg-gris5 lg:hidden flex flex-col gap-30 border border-gris2 translate-y-full sm:translate-y-0  sm:translate-x-full transition-transform ease-in-out duration-300  ",
          props.openFilter && " translate-y-0  sm:translate-x-0"
        )}
      >
        <div
          onClick={() => props.setOpenFilter(false)}
          className="absolute top-[40px] right-[40px]"
        >
          <Image
            src={"/images/icons/cross.svg"}
            alt="cross icon"
            width={20}
            height={20}
          />
        </div>
        {/* Section 1 Starts */}
        <div className="flex flex-col gap-12 w-full ">
          <Text tag="h6" variant="para-l" color="blue" fontWeight="medium">
            Palabra Clave
          </Text>
          {/* Button Title */}
          <div className="py-10 px-12 bg-azulLight2 rounded-full min-w-fit">
            <Text tag="h5" variant="para-l" className="whitespace-nowrap">
              Project Manager
            </Text>
          </div>
        </div>
        {/* Section 1 Ends */}

        {/* Section 2 Starts */}
        <FilterOffer title={filterList1.title} list={filterList1.list} />
        {/* Section 2 Ends */}

        {/* Section 3 Starts */}
        <FilterOffer title={filterList2.title} list={filterList2.list} />
        {/* Section 3 Ends */}
      </div>
    </>
  );
};

const filterList1 = {
  title: "Región",
  list: [
    {
      label: "Madrid(123)",
      value: "Madrid(123)",
    },
    {
      label: "Barcelona (42)",
      value: "Barcelona (42)",
    },

    {
      label: "Valencia (17)",
      value: "Valencia (17)",
    },

    {
      label: "Alicante (13)",
      value: "Alicante (13)",
    },

    {
      label: "Barcelona (422)",
      value: "Barcelona (422)",
    },
    {
      label: "Barcelona (421)",
      value: "Barcelona (421)",
    },
  ],
};

const filterList2 = {
  title: "Presencialidad",
  list: [
    {
      label: "Presencial (125)",
      value: "Presencial (125)",
    },
    {
      label: "Híbrido (92)",
      value: "Híbrido (92)",
    },

    {
      label: "Teletrabajo (19)",
      value: "Teletrabajo (19)",
    },

    {
      label: "Sin especificar (189)",
      value: "Sin especificar (189)",
    },
  ],
};

interface FilterOfferProps {
  title: string;
  list: { label: string; value: string }[];
}

const FilterOffer: React.FC<FilterOfferProps> = ({ title, list }) => {
  return (
    <div>
      <Text tag="h6" variant="para-l" color="blue">
        {title}
      </Text>

      <div className="flex flex-col gap-5 mt-12">
        {list.map((item, index) => (
          <CheckBox key={index} label={item.label} varient="default" />
        ))}
      </div>
    </div>
  );
};

export { FilterOfferSection };
