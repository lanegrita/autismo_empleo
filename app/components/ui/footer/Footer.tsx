import React from "react";
import Text from "../typography/Typography";
import { cn } from "@/lib/utils";
import Input, { NewsletterInput } from "../../form/input/Input";
import Link from "next/link";

const socialLinks = [
  {
    title: "Twitter",
    link: "#"
  },
  {
    title: "Youtube",
    link: "#"
  },
  {
    title: "Instagram",
    link: "#"
  },
  {
    title: "Facebook",
    link: "#",
    outline: true
  },
  {
    title: "Google",
    link: "#"
  },
  {
    title: "Flickr",
    link: "#"
  }
];

const items1 = [
  {
    title: "Sobre el portal"
  },
  {
    title: "Autismo España"
  },
  {
    title: "¿Tienes un proyecto?"
  }
];
const items2 = [
  {
    title: "Dirección",
    description: `
    Confederacion Autismo España C/ Garibay, 7 3 planta izq. CP 28007. Madrid (Espana)
    `
  },
  {
    title: "Hola",
    description: `
    empleo@autismo.org.es
    `
  },
  {
    title: "¿Hablamos?",
    description: `
    +34 91 591 34 09
    `
  }
];

const bottomLinks = [
  {
    title: "Aviso legal",
    link: "#"
  },
  {
    title: "Política de privacidad",
    link: "#"
  },
  {
    title: "Política de cookies",
    link: "#"
  }
];

const Footer = () => {
  return (
    <footer>
      {/* Top Section Starts */}
      <div className="flex justify-between items-center  py-20 px-0 xl:px-20 border border-gris2">
        <Text
          variant="title-l"
          tag="h6"
          fontWeight="light"
          className="hidden 2xl:block"
        >
          Siguenos
        </Text>
        {/* Social Links */}
        <div className="flex gap-8 lg:gap-30 items-center overflow-auto px-10">
          {socialLinks.map((item, index) => (
            <a href={item.link} key={index}>
              <Text
                variant="title-l"
                tag="h6"
                fontWeight="light"
                className={cn(
                  "cursor-pointer",
                  item?.outline &&
                    "py-4 px-12  border-3 border-azulAe rounded-full"
                )}
              >
                {item.title}
              </Text>
            </a>
          ))}
        </div>
      </div>
      {/* Top Section Ends */}

      {/* Middle Section Starts */}
      <div className="bg-azulAe grid grid-cols-1 xl:grid-cols-3 ">
        {/* Left */}
        <div className="col-span-2 bg-whtie ">
          {/* Top */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 py-20 px-10 md:px-20 md:py-37 gap-10 md:gap-20">
            {items1.map((item, index) => (
              <Text key={index} tag="p" variant="para">
                {item.title}
              </Text>
            ))}
          </div>
          {/* Bottom */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 md:gap-20 py-20 px-10 md:px-20 md:pt-37 md:pb-49 border-t border-azulDark2 border-b xl:border-b-0 ">
            {items2.map((item, index) => (
              <div className="flex flex-col gap-6 md:gap-10" key={index}>
                <Text tag="p" variant="para">
                  {item.title}
                </Text>
                <Text
                  tag="p"
                  variant="para-l"
                  color="white"
                  fontWeight="light"
                  className="break-all"
                >
                  {item.description}
                </Text>
              </div>
            ))}
          </div>
        </div>
        {/* Right */}
        <div className="py-20 px-10 md:p-20 border-l border-azulDark2">
          <Text tag="p" variant="para">
            Newsletter
          </Text>
          <Text tag="p" variant="title-s" color="white" className="mt-10 mb-33">
            Sea el primero en enterarse de todas las novedades del portal en su
            email.
          </Text>
          <NewsletterInput />
        </div>
      </div>
      {/* Middle Section Ends */}

      {/* Bottom Section Starts */}
      <div className="grid grid-cols-1 lg:grid-cols-3">
        {/* Left */}
        <div className="col-span-2 px-10 py-20 md:px-20 md:py-30 flex flex-wrap gap-32 border border-t-0 border-r lg:border-r-0  border-gris2">
          {bottomLinks.map((item, index) => (
            <Link href={item.link} key={index}>
              <Text tag="p" variant="para">
                {item.title}
              </Text>
            </Link>
          ))}
        </div>
        {/* Right */}
        <div className="px-10 py-20 md:px-20 md:py-30 border border-t-0  border-gris2">
          <Text tag="p" variant="para">
            ©2023 Autismo España
          </Text>
        </div>
      </div>

      {/* Bottom Section Ends */}
    </footer>
  );
};

export default Footer;
