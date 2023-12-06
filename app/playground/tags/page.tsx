import Tag from "@/app/components/ui/tag/Tag";
import React from "react";

const page = () => {
  return (
    <div className="container mt-96">
      <div className="flex gap-2 flex-wrap max-w-xl">
        <Tag
          title="Pedro Jiménez y Juana Hernández"
          tooltip="Pedro Jiménez y Juana Hernández"
          iconUrl="/images/icons/pencil.svg"
        />
        <Tag
          title="35 horas"
          tooltip="35 horas"
          iconUrl="/images/icons/pencil.svg"
        />
        <Tag
          title="Online"
          tooltip="Online"
          iconUrl="/images/icons/pencil.svg"
        />
        <Tag
          title="Próximamente"
          tooltip="Próximamente"
          iconUrl="/images/icons/pencil.svg"
        />
        <Tag
          title="Autismo España"
          tooltip="Autismo España"
          iconUrl="/images/icons/pencil.svg"
        />
      </div>
    </div>
  );
};

export default page;
