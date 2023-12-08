import AppLink from "@/app/components/ui/app-link/AppLink";
import React from "react";

const page = () => {
  return (
    <div className="container mt-10 flex flex-col gap-10">
      <h2 className="font-bold text-3xl">Hover 1</h2>
      <div className="flex gap-4">
        <AppLink title="El autismo" hoverType="hover-1" />
        <AppLink title="Nosotros" hoverType="hover-1" />
        <AppLink title="Qué hacemos" hoverType="hover-1" />
        <AppLink title="Qué hacemos" hoverType="hover-1" />
      </div>
      <h2 className="font-bold text-3xl">Hover 2</h2>
      <div className="flex gap-4">
        <AppLink title="El autismo" hoverType="hover-2" />
        <AppLink title="Nosotros" hoverType="hover-2" />
        <AppLink title="Qué hacemos" hoverType="hover-2" />
        <AppLink title="Qué hacemos" hoverType="hover-2" />
      </div>
      <h2 className="font-bold text-3xl">Hover 3</h2>
      <div className="flex gap-4">
        <AppLink title="El autismo" hoverType="hover-3" />
        <AppLink title="Nosotros" hoverType="hover-3" />
        <AppLink title="Qué hacemos" hoverType="hover-3" />
        <AppLink title="Qué hacemos" hoverType="hover-3" />
      </div>
      <h2 className="font-bold text-3xl">Hover 4</h2>
      <div className="flex gap-4">
        <AppLink title="El autismo" hoverType="hover-4" />
        <AppLink title="Nosotros" hoverType="hover-4" />
        <AppLink title="Qué hacemos" hoverType="hover-4" />
        <AppLink title="Qué hacemos" hoverType="hover-4" />
      </div>
      <h2 className="font-bold text-3xl">Hover 5</h2>
      <div className="flex gap-4">
        <AppLink title="El autismo" hoverType="hover-5" />
        <AppLink title="Nosotros" hoverType="hover-5" />
        <AppLink title="Qué hacemos" hoverType="hover-5" />
        <AppLink title="Qué hacemos" hoverType="hover-5" />
      </div>
    </div>
  );
};

export default page;
