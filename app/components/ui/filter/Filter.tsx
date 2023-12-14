import React from "react";
import Text from "../typography/Typography";
import CheckBox from "../../form/check-box/CheckBox";

const FilterOfferSection = () => {
  return (
    <div>
      <div className="px-41 py-25 w-full max-w-[500px] bg-gris5 flex flex-col gap-30 border border-gris2">
        {/* Section 1 Starts */}
        <div className="flex flex-col gap-12 w-full m-w-[314px]">
          <Text tag="h6" variant="para-l" color="blue" fontWeight="medium">
            Palabra Clave
          </Text>
          {/* Button Title */}
          <div className="py-10 px-12 bg-azulLight2 rounded-full">
            <Text tag="h5" variant="para-l">
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
    </div>
  );
};

const filterList1 = {
  title: "Región",
  list: [
    {
      label: "Madrid(123)",
      value: "Madrid(123)"
    },
    {
      label: "Barcelona (42)",
      value: "Barcelona (42)"
    },

    {
      label: "Valencia (17)",
      value: "Valencia (17)"
    },

    {
      label: "Alicante (13)",
      value: "Alicante (13)"
    },

    {
      label: "Barcelona (422)",
      value: "Barcelona (422)"
    },
    {
      label: "Barcelona (421)",
      value: "Barcelona (421)"
    }
  ]
};

const filterList2 = {
  title: "Presencialidad",
  list: [
    {
      label: "Presencial (125)",
      value: "Presencial (125)"
    },
    {
      label: "Híbrido (92)",
      value: "Híbrido (92)"
    },

    {
      label: "Teletrabajo (19)",
      value: "Teletrabajo (19)"
    },

    {
      label: "Sin especificar (189)",
      value: "Sin especificar (189)"
    }
  ]
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
