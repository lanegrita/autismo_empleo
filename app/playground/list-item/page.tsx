import { ListItem } from "@/app/components/ui/list/List";
import React from "react";

const ListItemPage = () => {
  return (
    <div className="p-5 border-collapse">
      <div className="px-20 py-22 border border-gris1">
        <ListItem
          iconUrl="/images/icons/news.svg"
          title="Requisitos"
          variant="simple"
        />
      </div>
      <div className="px-20 py-22 border border-gris1">
        <ListItem
          iconUrl="/images/icons/news.svg"
          title="Descripción"
          variant="simple"
        />
      </div>
      <div className="px-20 py-22 border border-gris1 grid grid-cols-1 xl:grid-cols-2 gap-8">
        <ListItem
          iconUrl="/images/icons/news.svg"
          title="Descripción"
          descrition="Ciclo formativo / Grado superior"
          variant="with-description"
        />
        <ListItem
          iconUrl="/images/icons/pencil.svg"
          title="Experiencia mínima"
          variant="with-items"
          items={[
            "Disponibilidad a jornada completa de lunes a viernes.",
            "Perfil acostumbrado/a a trabajar en área de ventas.",
            "Perfil acostumbrado/a a trabajar por objetivos.",
            "Formación, colaboración y el aprendizaje constante."
          ]}
        />
        <ListItem
          iconUrl="/images/icons/pencil.svg"
          title="Experiencia mínima"
          descrition="Al menos 4 años"
          variant="with-description"
        />
      </div>
    </div>
  );
};

export default ListItemPage;
