"use client";
import { FilterOfferSection } from "@/app/components/ui/filter/Filter";
import Text from "@/app/components/ui/typography/Typography";
import React, { useState } from "react";

const FiltersPage = () => {
  const [openFilter, setOpenFilter] = useState(false);
  return (
    <div>
      <div className=" block sm:hidden" onClick={() => setOpenFilter(true)}>
        <Text tag="h1" variant="super-title-xl">
          Click To Open Filter
        </Text>
      </div>
      <FilterOfferSection
        setOpenFilter={setOpenFilter}
        openFilter={openFilter}
      />
    </div>
  );
};

export default FiltersPage;
