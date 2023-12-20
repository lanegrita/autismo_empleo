import React, { ReactNode } from "react";
import { TitleHeader } from "../create-offer/page";
import { SimpleMarquee } from "../components/ui/marquee-section/MarqueeSection";
import Text from "../components/ui/typography/Typography";
import Image from "next/image";

const VolunteerView2 = () => {
  return (
    <div>
      {/* Section 1 Starts */}
      <TitleHeader
        image="/images/test.webp"
        title="Derechos y deberes del voluntario"
      />
      {/* Section 1 Ends */}

      {/* Section 2 Starts */}
      <section className="grid grid-cols-12 border-t border-gris2">
        {/* Left */}
        <div className="hidden lg:block  lg:col-span-2 border-l border-gris2"></div>

        {/* Main */}
        <div className="col-span-12 lg:col-span-8 border-x border-gris2">
          {data.map((item, index) => (
            <>
              <TitleIconSection
                icon={item.icon}
                title1={item.title1}
                title2={item.title2}
              />

              <TextSection content={item.content} />
            </>
          ))}
        </div>
        {/* <div className="col-span-12 lg:col-span-8 border-x border-gris2">
          <TitleIconSection
            icon="/images/icons/news.svg"
            title1="Título"
            title2="Título"
          />
        </div> */}

        {/* Right */}
        <div className="hidden lg:block  lg:col-span-2 border-r border-gris2">
          <div className="mt-[380px]">
            <SimpleMarquee>Derechos y deberes del voluntario</SimpleMarquee>
          </div>
        </div>
      </section>
      {/* Section 2 Ends */}
    </div>
  );
};

const TitleIconSection = ({
  title1,
  title2,
  icon
}: {
  title1: string;
  title2: string;
  icon: string;
}) => {
  return (
    <div className="px-10 py-17 md:py-22 lg:px-20 xl:py-28 border-b border-gris2">
      <div className="flex items-center">
        <Text tag="h4" variant="title-s">
          {title1}
        </Text>
        <div className="relative w-[44px] h-[44px] md:w-[60px] md:h-[60px] xl:w-[68px] xl:h-[68px]">
          <Image src={icon} alt="icon" fill />
        </div>
        <Text tag="h4" variant="title-s">
          {title2}
        </Text>
      </div>
    </div>
  );
};

const data = [
  {
    title1: "Título",
    title2: "Título",
    icon: "/images/icons/news.svg",
    content: `
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et rhoncus nisi. Nullam eu enim luctus, euismod nunc vitae, finibus nisi. Morbi et bibendum turpis. Donec purus nisi, luctus a sem eget, luctus cursus quam. Donec hendrerit luctus consequat. Vestibulum ac molestie purus. Mauris congue, dolor a porta porta, leo ante ultricies elit, vitae tristique sapien urna non turpis.
        </p>
        <p>
        Mauris efficitur massa ut risus porttitor tincidunt. Suspendisse in erat non tortor blandit luctus. Cras sodales nulla vulputate, placerat sem nec, venenatis massa. In auctor velit id malesuada fringilla. Maecenas tempus nisl ac erat tempus, sed accumsan ex ultricies. Praesent non dui quis tortor sodales rhoncus. Nunc molestie finibus tincidunt. Nunc varius mi ante, venenatis porta leo ullamcorper sed. Nunc laoreet elit augue, at hendrerit sapien varius vitae. Mauris tempus dictum metus sit amet ultricies. Fusce sollicitudin consectetur fermentum. Integer pharetra sem diam, sed auctor nunc blandit at. Aliquam molestie lobortis tortor, ut varius tortor cursus a. Suspendisse accumsan tincidunt ante, id venenatis mauris maximus in. Vestibulum quam tortor, pharetra id scelerisque in, dictum ac nisi. Phasellus sed pellentesque odio.
</p>
<p>
Vivamus imperdiet nisl quam, nec pellentesque ligula blandit eu. Suspendisse ultricies euismod dictum. Nulla sit amet purus a nulla tempor lacinia id ut est. Sed non erat bibendum, rutrum urna ac, dictum felis. Integer magna risus, pretium in aliquam non, tempor vel nisi. Maecenas et nibh egestas, volutpat orci sed, convallis metus. Vivamus ultrices arcu sodales nisi vulputate volutpat. Nullam eleifend congue dui vitae congue. Aenean volutpat lorem et nisl venenatis egestas. Suspendisse blandit turpis at odio dapibus mollis.
</p>
<p>
Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean in porta metus. Morbi consectetur at elit eu pharetra. Quisque pulvinar risus ut eros rhoncus sodales. Integer mattis erat metus, vitae molestie risus euismod ut. Praesent eu consectetur tellus, vitae suscipit nibh. Ut pulvinar lobortis metus quis molestie. Aliquam efficitur diam sed nibh viverra, vel finibus mauris ullamcorper. Etiam in est arcu. Quisque finibus est eget vehicula rutrum. Curabitur consectetur quis ex sit amet sagittis. Nulla fermentum ante ut mauris aliquet laoreet. Nam pretium nisi leo, ac posuere erat aliquam a. Pellentesque consequat vitae eros sit amet pellentesque.
</p>
        `
  },
  {
    title1: "Título",
    title2: "primero",
    icon: "/images/icons/news.svg",
    content: `
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et rhoncus nisi. Nullam eu enim luctus, euismod nunc vitae, finibus nisi. Morbi et bibendum turpis. Donec purus nisi, luctus a sem eget, luctus cursus quam. Donec hendrerit luctus consequat. Vestibulum ac molestie purus. Mauris congue, dolor a porta porta, leo ante ultricies elit, vitae tristique sapien urna non turpis.
        </p>
        <p>
        Mauris efficitur massa ut risus porttitor tincidunt. Suspendisse in erat non tortor blandit luctus. Cras sodales nulla vulputate, placerat sem nec, venenatis massa. In auctor velit id malesuada fringilla. Maecenas tempus nisl ac erat tempus, sed accumsan ex ultricies. Praesent non dui quis tortor sodales rhoncus. Nunc molestie finibus tincidunt. Nunc varius mi ante, venenatis porta leo ullamcorper sed. Nunc laoreet elit augue, at hendrerit sapien varius vitae. Mauris tempus dictum metus sit amet ultricies. Fusce sollicitudin consectetur fermentum. Integer pharetra sem diam, sed auctor nunc blandit at. Aliquam molestie lobortis tortor, ut varius tortor cursus a. Suspendisse accumsan tincidunt ante, id venenatis mauris maximus in. Vestibulum quam tortor, pharetra id scelerisque in, dictum ac nisi. Phasellus sed pellentesque odio.
</p>
<p>
Vivamus imperdiet nisl quam, nec pellentesque ligula blandit eu. Suspendisse ultricies euismod dictum. Nulla sit amet purus a nulla tempor lacinia id ut est. Sed non erat bibendum, rutrum urna ac, dictum felis. Integer magna risus, pretium in aliquam non, tempor vel nisi. Maecenas et nibh egestas, volutpat orci sed, convallis metus. Vivamus ultrices arcu sodales nisi vulputate volutpat. Nullam eleifend congue dui vitae congue. Aenean volutpat lorem et nisl venenatis egestas. Suspendisse blandit turpis at odio dapibus mollis.
</p>
<p>
Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean in porta metus. Morbi consectetur at elit eu pharetra. Quisque pulvinar risus ut eros rhoncus sodales. Integer mattis erat metus, vitae molestie risus euismod ut. Praesent eu consectetur tellus, vitae suscipit nibh. Ut pulvinar lobortis metus quis molestie. Aliquam efficitur diam sed nibh viverra, vel finibus mauris ullamcorper. Etiam in est arcu. Quisque finibus est eget vehicula rutrum. Curabitur consectetur quis ex sit amet sagittis. Nulla fermentum ante ut mauris aliquet laoreet. Nam pretium nisi leo, ac posuere erat aliquam a. Pellentesque consequat vitae eros sit amet pellentesque.
</p>
        `
  },
  {
    title1: "Título",
    title2: "primero",
    icon: "/images/icons/news.svg",
    content: `
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et rhoncus nisi. Nullam eu enim luctus, euismod nunc vitae, finibus nisi. Morbi et bibendum turpis. Donec purus nisi, luctus a sem eget, luctus cursus quam. Donec hendrerit luctus consequat. Vestibulum ac molestie purus. Mauris congue, dolor a porta porta, leo ante ultricies elit, vitae tristique sapien urna non turpis.
        </p>
        <p>
        Mauris efficitur massa ut risus porttitor tincidunt. Suspendisse in erat non tortor blandit luctus. Cras sodales nulla vulputate, placerat sem nec, venenatis massa. In auctor velit id malesuada fringilla. Maecenas tempus nisl ac erat tempus, sed accumsan ex ultricies. Praesent non dui quis tortor sodales rhoncus. Nunc molestie finibus tincidunt. Nunc varius mi ante, venenatis porta leo ullamcorper sed. Nunc laoreet elit augue, at hendrerit sapien varius vitae. Mauris tempus dictum metus sit amet ultricies. Fusce sollicitudin consectetur fermentum. Integer pharetra sem diam, sed auctor nunc blandit at. Aliquam molestie lobortis tortor, ut varius tortor cursus a. Suspendisse accumsan tincidunt ante, id venenatis mauris maximus in. Vestibulum quam tortor, pharetra id scelerisque in, dictum ac nisi. Phasellus sed pellentesque odio.
</p>
<p>
Vivamus imperdiet nisl quam, nec pellentesque ligula blandit eu. Suspendisse ultricies euismod dictum. Nulla sit amet purus a nulla tempor lacinia id ut est. Sed non erat bibendum, rutrum urna ac, dictum felis. Integer magna risus, pretium in aliquam non, tempor vel nisi. Maecenas et nibh egestas, volutpat orci sed, convallis metus. Vivamus ultrices arcu sodales nisi vulputate volutpat. Nullam eleifend congue dui vitae congue. Aenean volutpat lorem et nisl venenatis egestas. Suspendisse blandit turpis at odio dapibus mollis.
</p>
<p>
Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean in porta metus. Morbi consectetur at elit eu pharetra. Quisque pulvinar risus ut eros rhoncus sodales. Integer mattis erat metus, vitae molestie risus euismod ut. Praesent eu consectetur tellus, vitae suscipit nibh. Ut pulvinar lobortis metus quis molestie. Aliquam efficitur diam sed nibh viverra, vel finibus mauris ullamcorper. Etiam in est arcu. Quisque finibus est eget vehicula rutrum. Curabitur consectetur quis ex sit amet sagittis. Nulla fermentum ante ut mauris aliquet laoreet. Nam pretium nisi leo, ac posuere erat aliquam a. Pellentesque consequat vitae eros sit amet pellentesque.
</p>
        `
  }
];

const TextSection = ({ content }: { content: string }) => {
  return (
    <div className="px-10 py-20 md:py-30 lg:px-20 xl:px-30 xl:py-40 border-b border-gris2">
      <div
        className="content"
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
    </div>
  );
};

export default VolunteerView2;
