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
    title: "Portal de voluntariado",
    imageUrl: "/images/test.webp",
  },
];

export default function Home() {
  return (
    <div>
      <Link href={"/select-registration"}>
        <MarqueeSection items={firstMarquee} variant="default" />
      </Link>
      <MarqueeSection items={firstMarquee} variant="azul" />
    </div>
  );
}
