import React from "react";
import Input from "../components/form/input/Input";
// import { ReactSVG } from "react-svg";

const Playground = () => {
  return (
    <div className=" h-screen flex flex-col gap-4  p-10 max-w-5xl mx-auto">
      <Input type="text" placeholder="Nombre" variant="simple" />
      <Input type="text" placeholder="Apellidos" variant="simple" />
      <Input type="email" placeholder="Email" variant="simple" />
      <Input type="password" placeholder="Contraseña" variant="simple" />
      <Input type="text" placeholder="Fecha de nacimiento" variant="simple" />
      <Input type="text" placeholder="Nacionalidad" variant="simple" />
      <Input type="tel" placeholder="+1 456 234 7890" variant="simple" />
      <div className="flex gap-10">
        <Input type="text" placeholder="DNI" variant="simple" />
        <Input type="text" placeholder="Aquí el número…" variant="simple" />
      </div>
      <Input type="text" placeholder="Género" variant="simple" />
      <Input
        type="text"
        placeholder="¿Tienes diagnóstico TEA confirmado?"
        variant="simple"
      />
      <div className="flex gap-10">
        <div className="flex-[3]">
          <Input
            type="text"
            placeholder="¿Tienes certificado de discapacidad?"
            variant="simple"
          />
        </div>
        <div className="flex-[1]">
          <Input type="text" placeholder="26%" variant="simple" />
        </div>
      </div>
      <div className="mt-10 bg-black p-10">
        <Input type="email" placeholder="Contraseña" variant="newsletter" />
      </div>
      {/* <ReactSVG src="/images/" /> */}
    </div>
  );
};

export default Playground;
