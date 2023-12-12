import ImageComponent from "@/app/components/ui/ImageComponent/ImageComponent";
import ModalComponent from "@/app/components/ui/modal-component/ModalComponent";
import Text from "@/app/components/ui/typography/Typography";
import React from "react";

const modal = () => {
  return (
    <div className="p-20 flex flex-col gap-20">
      <div className="flex flex-col gap-20">
        <Text tag="h3" variant="title">
          Default Modal
        </Text>
        <ModalComponent
          button1Title="Button 1"
          button2Title="Cancel"
          button2Varient="simple"
          button2Icon="/images/icons/arrow-right.svg"
          title="Pendiente de verificación"
          description="Para poder publicar la oferta, y que esta sea visible para los candidatos, necesitamos que nuestro equipo la verifique. En un máximo de 48 horas recibirás noticias nuestras. Muchas gracias y disculpa las molestias."
          image="/images/test.webp"
        />
        <ModalComponent
          button1Title="Button 1"
          button2Title="Cancel"
          button2Varient="simple"
          button2Icon="/images/icons/arrow-right.svg"
          title="Pendiente de verificación"
          description="Para poder publicar la oferta, y que esta sea visible para los candidatos, necesitamos que nuestro equipo la verifique. En un máximo de 48 horas recibirás noticias nuestras. Muchas gracias y disculpa las molestias."
          topIcon="/images/icons/love.svg"
          topIconText="Aviso"
        />
        {/* Error */}
        <ModalComponent
          button1Title="Button 1"
          button2Title="Cancel"
          button2Varient="simple"
          button2Icon="/images/icons/arrow-right.svg"
          title="Pendiente de verificación"
          description="Para poder publicar la oferta, y que esta sea visible para los candidatos, necesitamos que nuestro equipo la verifique. En un máximo de 48 horas recibirás noticias nuestras. Muchas gracias y disculpa las molestias."
          topIcon="/images/icons/love.svg"
          topIconText="Aviso"
          error
          errorMessage="Estás a punto de eliminar tu cuenta para siempre"
        />
        {/* Form */}
        <ModalComponent
          button1Title="Button 1"
          button2Title="Cancel"
          button2Varient="simple"
          button2Icon="/images/icons/arrow-right.svg"
          title="Pendiente de verificación"
          description="Para poder publicar la oferta, y que esta sea visible para los candidatos, necesitamos que nuestro equipo la verifique. En un máximo de 48 horas recibirás noticias nuestras. Muchas gracias y disculpa las molestias."
          topIcon="/images/icons/love.svg"
          topIconText="Aviso"
          form
          error
          errorMessage="Estás a punto de eliminar tu cuenta para siempre"
        />
        <ModalComponent
          button1Title="Button 1"
          title="Pendiente de verificación"
          description="Para poder publicar la oferta, y que esta sea visible para los candidatos, necesitamos que nuestro equipo la verifique. En un máximo de 48 horas recibirás noticias nuestras .</br> </br> Muchas gracias y disculpa las molestias."
        />
        <ModalComponent
          button1Title="Button 1"
          title="Pendiente de verificación"
          description="Para poder publicar la oferta, y que esta sea visible para los candidatos, necesitamos que nuestro equipo la verifique. En un máximo de 48 horas recibirás noticias nuestras. Muchas gracias y disculpa las molestias."
        />
      </div>
      <div className="flex flex-col gap-20">
        <Text tag="h3" variant="title" color="blue">
          Azul Modal
        </Text>
        <ModalComponent
          title="Pendiente de verificación"
          description="Para poder publicar la oferta, y que esta sea visible para los candidatos, necesitamos que nuestro equipo la verifique. En un máximo de 48 horas recibirás noticias nuestras. Muchas gracias y disculpa las molestias."
          variant="azul"
          image="/images/test.webp"
          button1Title="Button 1"
          button2Title="Cancel"
          button2Icon="/images/icons/arrow-right.svg"
        />
        <ModalComponent
          title="Pendiente de verificación"
          description="Para poder publicar la oferta, y que esta sea visible para los candidatos, necesitamos que nuestro equipo la verifique. En un máximo de 48 horas recibirás noticias nuestras. Muchas gracias y disculpa las molestias."
          variant="azul"
          button1Title="Button 1"
          button2Title="Cancel"
        />
      </div>
      {/* <ImageComponent
        src={"/images/test.webp"}
        alt="componentImage"
        width={400}
        height={368}
        maxHeight="368px"
        maxWidth="400px"
      /> */}
    </div>
  );
};

export default modal;
