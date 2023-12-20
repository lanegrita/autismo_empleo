import {
  OfferListItem1,
  OfferListItem1Props,
  OfferListItem2,
  OfferListItem3,
} from "@/app/components/ui/list/List";
import React from "react";

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

const OfferListItemPage = () => {
  return (
    <div className="p-10">
      {data.map((item, index) => (
        <OfferListItem1
          key={index}
          title={item.title}
          image={item.image}
          subTitle={item.subTitle}
          description={item.description}
          items={item.items}
        />
      ))}
      <OfferListItem2
        image="/images/test.webp"
        publishDate="16/09/23"
        title="Técnico de Marketing para el área de Comunicación y Relaciones Institucionales."
        subTitle="Confederación de Autismo España"
        backgroundColor="blue"
        subscribeButton
        registerdOnOffer={133}
      />
      <OfferListItem2
        image="/images/test.webp"
        publishDate="16/09/23"
        title="Técnico de Marketing para el área de Comunicación y Relaciones Institucionales."
        subTitle="Confederación de Autismo España"
        backgroundColor="blue"
        registerdOnOffer={133}
      />
      <OfferListItem3
        title={
          "Técnico de Marketing para el área de Comunicación y Relaciones Institucionales."
        }
        image="/images/test.webp"
        subTitle="Confederación de Autismo España"
      />
    </div>
  );
};

export default OfferListItemPage;
