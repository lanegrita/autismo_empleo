import { SimpleList, SimpleListProps } from "@/app/components/ui/list/List";
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
    </div>
  );
};

export default page;
