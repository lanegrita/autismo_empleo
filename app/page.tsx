import Link from "next/link";
import MarqueeSection, {
  MarqueeItemProps,
} from "./components/ui/marquee-section/MarqueeSection";
import Text from "./components/ui/typography/Typography";
const firstMarquee: MarqueeItemProps[] = [
  {
    title: "Portal de empleo",
    imageUrl: "/images/test.webp",
  },
  {
    title: "Portal de empleo",
    imageUrl: "/images/test.webp",
  },
];

const secondMarquee: MarqueeItemProps[] = [
  {
    title: "Portal de voluntariado",
    imageUrl: "/images/test.webp",
  },
  {
    title: "Portal de voluntariado",
    imageUrl: "/images/test.webp",
  },
];

export default function Home() {
  return (
    <div>
      <Link href={"/select-registration"}>
        <MarqueeSection
          items={firstMarquee}
          variant="default"
          leftText={
            "Si estás buscando empleo o eres empresa que busca empleados…"
          }
          rightText={"Ir al portal de empleo"}
        />
      </Link>
      <Link href={"/volunteer"}>
        <MarqueeSection
          items={secondMarquee}
          variant="azul"
          leftText={
            "Si eres voluntario y tu propósito es hacer un voluntariado con nosotros…"
          }
          rightText={"Ir al portal de voluntariado"}
        />
      </Link>
    </div>
  );
}
