import React from "react";
import Button from "../components/ui/button/Button";
import { ListItem, OfferListItem2 } from "../components/ui/list/List";
import styles from "./page.module.css";
import { cn } from "@/lib/utils";
import Text from "../components/ui/typography/Typography";

const OfferDetail = () => {
  return (
    <div className="">
      {/* Header Section  */}
      <section className="grid grid-cols-1 md:grid-cols-12 ">
        {/* Left */}
        <div className="w-full col-span-2 bg-azulAe p-11  ">
          <div className="flex justify-between w-full items-center md:justify-center md:mt-21">
            <div className="rotate-180">
              <Button
                variant="secondary-azul"
                icon="/images/icons/arrow-right.svg"
              />
            </div>
            <Text tag="p" variant="para" color="white" className="md:hidden">
              Volver al listado
            </Text>
          </div>
        </div>
        {/* Right */}
        <div className="col-span-10">
          <OfferListItem2
            image="/images/test.webp"
            publishDate="16/09/23"
            title="Técnico de Marketing para el área de Comunicación y Relaciones Institucionales."
            subTitle="Confederación de Autismo España"
            registerdOnOffer={133}
          />
        </div>
      </section>

      {/* Main Section */}
      <section className="grid grid-cols-12">
        {/* Left */}
        <div className="hidden lg:block col-span-2"></div>
        {/* Center */}
        <div className=" col-span-12 lg:col-span-8 border-x border-gris1">
          {/* First section */}
          <div className="px-10 sm:px-20 py-20 sm:py-22 ">
            <ListItem
              iconUrl="/images/icons/news.svg"
              title="Requisitos"
              variant="simple"
            />
          </div>

          {/* Second Section */}
          <div className=" px-10 py-20 sm:px-20 sm:py-22 border-y border-gris2  grid grid-cols-1 xl:grid-cols-2 gap-8">
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
                "Formación, colaboración y el aprendizaje constante.",
              ]}
            />
            <ListItem
              iconUrl="/images/icons/pencil.svg"
              title="Experiencia mínima"
              descrition="Al menos 4 años"
              variant="with-description"
            />
          </div>

          {/* Third Section */}
          <div className="px-10 sm:px-20 py-20 sm:py-22 ">
            <ListItem
              iconUrl="/images/icons/news.svg"
              title="Descripción"
              variant="simple"
            />
          </div>

          {/* Content Section 4 */}
          <section className={cn("border-t border-gris2", styles.content)}>
            <p>
              Si eres un apasionado del marketing digital, con un ojo analítico
              afilado y un deseo inagotable de superarte, ¡te estamos buscando!
              Únete a nuestro equipo y sé parte de una empresa que valora la
              innovación, la creatividad y el crecimiento.
            </p>
            <p>Dentro del área de negocio de Formación, tus funciones serán:</p>
            <p>
              <b>Desarrollo</b> y ejecución de estrategias de marketing digital
              efectivas.
            </p>
            <p>
              Esto implica comprender los objetivos comerciales y utilizar una
              combinación de tácticas digitales, como <a href="#">SEO</a>, SEM,
              marketing de contenidos, email marketing, redes sociales,
              publicidad en línea… Planificar, implementar y gestionar campañas
              digitales en diversos canales Análisis de datos y métricas con{" "}
              <b>herramientas y plataformas de análisis</b> para medir el
              rendimiento de las campañas, realizar un seguimiento de las
              métricas clave y generar informes para evaluar la eficacia de las
              estrategias
            </p>
            <p>
              Desarrollar y ejecutar estrategias de redes sociales para aumentar
              la visibilidad de la marca, interactuar con la audiencia,{" "}
              <b>generar leads</b> y promover contenido relevante. Esto implica
              la gestión de diferentes plataformas sociales, creación de
              contenido, programación de publicaciones, seguimiento de
              comentarios y análisis de resultados
            </p>
            <p>
              Se ofrece
              <br />- Proyecto estable
              <br />- Salario fijo + variable
              <br />- Convenio seguro salud AXA
              <br />- Formación continua
            </p>
          </section>
          {/* Section 5 */}
          <section className="grid grid-cols-1 md:grid-cols-2 px-10 sm:px-20 pt-6 md:pt-0 pb-30 gap-x-48 gap-y-30">
            <ListItem
              iconUrl="/images/icons/news.svg"
              title="Categoría"
              descrition="Marketing y Comunicación"
              variant="with-description"
            />
            <ListItem
              iconUrl="/images/icons/news.svg"
              title="Nº Vacantes"
              descrition="2"
              variant="with-description"
            />
            <ListItem
              iconUrl="/images/icons/news.svg"
              title="Nivel"
              descrition="Mando intermedio"
              variant="with-description"
            />
            <ListItem
              iconUrl="/images/icons/news.svg"
              title="Salario"
              descrition="Entre 18.000€ y 24.000€ brutos/año depende de valía y experiencia."
              variant="with-description"
            />
          </section>

          {/* Button Section */}
          <section className="flex justify-between px-10 md:px-20 py-20 md:py-40 border-t border-gris2">
            {/* Left */}
            <div className="flex gap-4 items-center">
              <Button title="Editar" variant="primary" />
              <Button title="Eliminar" variant="secondary" />
            </div>
            <Button title="Cancelar" variant="simple" />
          </section>
        </div>
        {/* Right */}
        <div className=" hidden lg:block col-span-2"></div>
      </section>
    </div>
  );
};

export default OfferDetail;
