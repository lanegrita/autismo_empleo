import Image from "next/image";
import React from "react";
import Text from "../typography/Typography";
import Icon from "../icon/Icon";

interface VolunteerProps {
  title: string;
  description?: string;
  image: string;
  icon?: string;
}

const VolunteerCard = ({
  title,
  description,
  image,
  icon = "",
}: VolunteerProps) => {
  return (
    <div className="flex  sm:gap-10 lg:gap-20 py-15 px-10 md:py-20 lg:p-20 items-center">
      {/* Image Container */}
      <div className="relative min-h-[76px] min-w-[76px] sm:w-[100px] sm:h-[100px]  lg:w-[120px]  lg:h-[120px] flex-shrink-0 ">
        <Image
          src={image}
          alt="volunteer image"
          fill
          className="overflow-hidden rounded-full "
        />
      </div>
      {/* Right Container */}
      <div className="flex flex-col gap-5 ml-5 sm:ml-0">
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
      {icon && (
        <div className=" cursor-pointer   ml-auto">
          <Icon url={icon} />
        </div>
      )}
    </div>
  );
};

export default VolunteerCard;
