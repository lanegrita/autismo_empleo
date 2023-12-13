import Image from "next/image";
import React from "react";
import Text from "../typography/Typography";

interface VolunteerProps {
  title: string;
  description?: string;
  image: string;
}

const VolunteerCard = ({ title, description, image }: VolunteerProps) => {
  return (
    <div className="flex gap-10 md:gap-20 px-10 py-20 lg:p-20 items-center">
      {/* Image Container */}
      <div className="relative min-h-[100px] min-w-[100px] lg:w-[120px]  lg:h-[120px] ">
        <Image
          src={image}
          alt="volunteer image"
          fill
          className="overflow-hidden rounded-full"
        />
      </div>
      {/* Right Container */}
      <div className="flex flex-col gap-5 ">
        <Text tag="h6" variant="title-s" fontWeight="medium">
          {title}
        </Text>
        {/* Link */}
        <Text
          tag="p"
          variant="para"
          underline
          color="blue"
          className="cursor-pointer"
        >
          {description}
        </Text>
      </div>
    </div>
  );
};

export default VolunteerCard;
