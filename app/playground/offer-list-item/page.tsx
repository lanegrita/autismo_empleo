import {
  OfferListItem,
  OfferListItemProps
} from "@/app/components/ui/list/List";
import React from "react";

const data: OfferListItemProps[] = [
  {
    image: "/images/test.webp",
    title:
      "Técnico de Marketing para el área de Comunicación y Relaciones Institucionales.",
    subTitle: "Confederación de Autismo España",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat turpis sit amet tortor elementum accumsan. Phasellus lacinia erat risus, nec faucibus turpis suscipit consequat. Vivamus vehicula sagittis arcu nec pellentesque.",
    items: ["Servicios Centrales, Madrid", "Presencial"]
  },
  {
    image: "/images/test.webp",
    title:
      "Técnico de Marketing para el área de Comunicación y Relaciones Institucionales.",
    subTitle: "Confederación de Autismo España",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat turpis sit amet tortor elementum accumsan. Phasellus lacinia erat risus, nec faucibus turpis suscipit consequat. Vivamus vehicula sagittis arcu nec pellentesque.",
    items: ["Servicios Centrales, Madrid", "Presencial"]
  },
  {
    image: "/images/test.webp",
    title:
      "Técnico de Marketing para el área de Comunicación y Relaciones Institucionales.",
    subTitle: "Confederación de Autismo España",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat turpis sit amet tortor elementum accumsan. Phasellus lacinia erat risus, nec faucibus turpis suscipit consequat. Vivamus vehicula sagittis arcu nec pellentesque.",
    items: ["Servicios Centrales, Madrid", "Presencial"]
  }
];

const OfferListItemPage = () => {
  return (
    <div className="p-10">
      {data.map((item, index) => (
        <OfferListItem
          key={index}
          title={item.title}
          image={item.image}
          subTitle={item.subTitle}
          description={item.description}
          items={item.items}
        />
      ))}
    </div>
  );
};

export default OfferListItemPage;
