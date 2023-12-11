import {
  SimpleAccordion,
  SimpleAccordionItemProps
} from "@/app/components/ui/accordion/Accordion";
import React from "react";

const simpleAccordion: SimpleAccordionItemProps[] = [
  {
    heading: "¿Es lo mismo “autismo” que “trastorno del espectro del autismo”?",
    description: `
    Las últimas versiones de los sistemas de clasificación internacionales de salud y trastornos mentales (CIE-11 y DSM-5) han modificado la denominación de la categoría diagnóstica, sustituyendo el término “trastorno generalizado del desarrollo” (TGD) anteriormente empleada, por la de “trastorno del espectro del autismo” (TEA). Así, establecen que a las personas “con un diagnóstico bien establecido según el DSM-IV de trastorno autista, enfermedad de Asperger o trastorno generalizado del desarrollo no especificado de otro modo, se les aplicará el diagnóstico de trastorno del espectro del autismo”. Esta afirmación no deja lugar a dudas: el síndrome de Asperger está incorporado en la definición de TEA. Concretamente, en el caso de los criterios que establece el DSM 5 se identificaría bajo la denominación de “TEA sin déficit intelectual acompañante” o “TEA sin discapacidad intelectual asociada ni dificultades en aspectos formales del lenguaje”. Pero, aunque la categoría diagnóstica específica ha desaparecido de los dos sistemas de clasificación, se mantiene la denominación social de síndrome de Asperger por una cuestión identitaria y por el s entimiento de pertenencia que pueden presentar las personas que, en algún momento, han sido diagnosticadas bajo esta categoría. A día de hoy, desconocemos el número exacto de personas que conforman este colectivo, aunque diversos estudios de prevalencia de la discapacidad intelectual en la población infantil y adolescente con autismo (menores de 18 años) apuntan a que podrían representar en torno a un 45-70% del colectivo TEA.`
  },
  {
    heading: "¿Es lo mismo “autismo” que “trastorno del espectro del autismo”?",
    description: `
    Las últimas versiones de los sistemas de clasificación internacionales de salud y trastornos mentales (CIE-11 y DSM-5) han modificado la denominación de la categoría diagnóstica, sustituyendo el término “trastorno generalizado del desarrollo” (TGD) anteriormente empleada, por la de “trastorno del espectro del autismo” (TEA). Así, establecen que a las personas “con un diagnóstico bien establecido según el DSM-IV de trastorno autista, enfermedad de Asperger o trastorno generalizado del desarrollo no especificado de otro modo, se les aplicará el diagnóstico de trastorno del espectro del autismo”. Esta afirmación no deja lugar a dudas: el síndrome de Asperger está incorporado en la definición de TEA. Concretamente, en el caso de los criterios que establece el DSM 5 se identificaría bajo la denominación de “TEA sin déficit intelectual acompañante” o “TEA sin discapacidad intelectual asociada ni dificultades en aspectos formales del lenguaje”. Pero, aunque la categoría diagnóstica específica ha desaparecido de los dos sistemas de clasificación, se mantiene la denominación social de síndrome de Asperger por una cuestión identitaria y por el s entimiento de pertenencia que pueden presentar las personas que, en algún momento, han sido diagnosticadas bajo esta categoría. A día de hoy, desconocemos el número exacto de personas que conforman este colectivo, aunque diversos estudios de prevalencia de la discapacidad intelectual en la población infantil y adolescente con autismo (menores de 18 años) apuntan a que podrían representar en torno a un 45-70% del colectivo TEA.`
  },
  {
    heading: "¿Es lo mismo “autismo” que “trastorno del espectro del autismo”?",
    description: `
    Las últimas versiones de los sistemas de clasificación internacionales de salud y trastornos mentales (CIE-11 y DSM-5) han modificado la denominación de la categoría diagnóstica, sustituyendo el término “trastorno generalizado del desarrollo” (TGD) anteriormente empleada, por la de “trastorno del espectro del autismo” (TEA). Así, establecen que a las personas “con un diagnóstico bien establecido según el DSM-IV de trastorno autista, enfermedad de Asperger o trastorno generalizado del desarrollo no especificado de otro modo, se les aplicará el diagnóstico de trastorno del espectro del autismo”. Esta afirmación no deja lugar a dudas: el síndrome de Asperger está incorporado en la definición de TEA. Concretamente, en el caso de los criterios que establece el DSM 5 se identificaría bajo la denominación de “TEA sin déficit intelectual acompañante” o “TEA sin discapacidad intelectual asociada ni dificultades en aspectos formales del lenguaje”. Pero, aunque la categoría diagnóstica específica ha desaparecido de los dos sistemas de clasificación, se mantiene la denominación social de síndrome de Asperger por una cuestión identitaria y por el s entimiento de pertenencia que pueden presentar las personas que, en algún momento, han sido diagnosticadas bajo esta categoría. A día de hoy, desconocemos el número exacto de personas que conforman este colectivo, aunque diversos estudios de prevalencia de la discapacidad intelectual en la población infantil y adolescente con autismo (menores de 18 años) apuntan a que podrían representar en torno a un 45-70% del colectivo TEA.`
  },
  {
    heading: "¿Es lo mismo “autismo” que “trastorno del espectro del autismo”?",
    description: `
    Las últimas versiones de los sistemas de clasificación internacionales de salud y trastornos mentales (CIE-11 y DSM-5) han modificado la denominación de la categoría diagnóstica, sustituyendo el término “trastorno generalizado del desarrollo” (TGD) anteriormente empleada, por la de “trastorno del espectro del autismo” (TEA). Así, establecen que a las personas “con un diagnóstico bien establecido según el DSM-IV de trastorno autista, enfermedad de Asperger o trastorno generalizado del desarrollo no especificado de otro modo, se les aplicará el diagnóstico de trastorno del espectro del autismo”. Esta afirmación no deja lugar a dudas: el síndrome de Asperger está incorporado en la definición de TEA. Concretamente, en el caso de los criterios que establece el DSM 5 se identificaría bajo la denominación de “TEA sin déficit intelectual acompañante” o “TEA sin discapacidad intelectual asociada ni dificultades en aspectos formales del lenguaje”. Pero, aunque la categoría diagnóstica específica ha desaparecido de los dos sistemas de clasificación, se mantiene la denominación social de síndrome de Asperger por una cuestión identitaria y por el s entimiento de pertenencia que pueden presentar las personas que, en algún momento, han sido diagnosticadas bajo esta categoría. A día de hoy, desconocemos el número exacto de personas que conforman este colectivo, aunque diversos estudios de prevalencia de la discapacidad intelectual en la población infantil y adolescente con autismo (menores de 18 años) apuntan a que podrían representar en torno a un 45-70% del colectivo TEA.`
  }
];

const page = () => {
  return (
    <div className="container mt-10">
      <SimpleAccordion items={simpleAccordion} />
    </div>
  );
};

export default page;
