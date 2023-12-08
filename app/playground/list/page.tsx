import {
  ImageListItem,
  ImageListItemProps,
  SimpleList,
  SimpleListProps
} from "@/app/components/ui/list/List";
import React from "react";

const simpleList1: SimpleListProps = {
  heading: "Antes de los 12 meses:",
  items: [
    "Escaso contacto ocular.",
    "No muestra anticipación cuando se le va a coger en brazos.",
    "Irritabilidad o labilidad emocional."
  ]
};
const simpleList2: SimpleListProps = {
  heading: "Entre los 12 y los 18 meses:",
  items: [
    "Ausencia o limitada respuesta al propio nombre.",
    "No mirar hacia donde otros señalan.",
    "No señalar para pedir algo; no mostrar objetos."
  ]
};

const imageList1: ImageListItemProps[] = [
  {
    url: "/images/test.webp",
    title: "Participación y apertura a la sociedad",
    description:
      "Autismo España es un proyecto colectivo del conjunto de personas con autismo y sus familias que se hace extensivo al resto de la sociedad."
  },
  {
    url: "/images/test.webp",
    title: "Participación y apertura a la sociedad",
    description:
      "Autismo España es un proyecto colectivo del conjunto de personas con autismo y sus familias que se hace extensivo al resto de la sociedad."
  },
  {
    url: "/images/test.webp",
    title: "Participación y apertura a la sociedad",
    description:
      "Autismo España es un proyecto colectivo del conjunto de personas con autismo y sus familias que se hace extensivo al resto de la sociedad."
  },
  {
    url: "/images/test.webp",
    title: "Participación y apertura a la sociedad",
    description:
      "Autismo España es un proyecto colectivo del conjunto de personas con autismo y sus familias que se hace extensivo al resto de la sociedad."
  }
];
const imageList2: ImageListItemProps[] = [
  {
    url: "/images/icons/pencil.svg",
    title: "Participación y apertura a la sociedad",
    description:
      "Autismo España es un proyecto colectivo del conjunto de personas con autismo y sus familias que se hace extensivo al resto de la sociedad."
  },
  {
    url: "/images/icons/pencil.svg",
    title: "Participación y apertura a la sociedad",
    description:
      "Autismo España es un proyecto colectivo del conjunto de personas con autismo y sus familias que se hace extensivo al resto de la sociedad."
  },
  {
    url: "/images/icons/pencil.svg",
    title: "Participación y apertura a la sociedad",
    description:
      "Autismo España es un proyecto colectivo del conjunto de personas con autismo y sus familias que se hace extensivo al resto de la sociedad."
  },
  {
    url: "/images/icons/pencil.svg",
    title: "Participación y apertura a la sociedad",
    description:
      "Autismo España es un proyecto colectivo del conjunto de personas con autismo y sus familias que se hace extensivo al resto de la sociedad."
  }
];

const page = () => {
  return (
    <div className="container mt-10">
      <div className="flex flex-col gap-10">
        <h2 className="text-3xl ">Simple List</h2>
        <div className="flex justify-between">
          <SimpleList heading={simpleList1.heading} items={simpleList1.items} />
          <SimpleList heading={simpleList2.heading} items={simpleList2.items} />
        </div>
        <div className="flex justify-between">
          <SimpleList heading={simpleList1.heading} items={simpleList1.items} />
          <SimpleList heading={simpleList2.heading} items={simpleList2.items} />
        </div>
      </div>

      <div className="flex flex-col gap-10 mt-10">
        <h2 className="text-3xl ">Image List</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {imageList1.map((item, index) => (
            <ImageListItem
              key={index}
              url={item.url}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-10 mt-10">
        <h2 className="text-3xl ">Icon List</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {imageList2.map((item, index) => (
            <ImageListItem
              key={index}
              url={item.url}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
