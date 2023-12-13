import Image from "next/image";
import React from "react";
import Text from "../typography/Typography";
import Button from "../button/Button";
import Icon from "../icon/Icon";

interface ApplicantHeaderProps {
  name: string;
  image: string;
  address?: string;
  date?: string;
  number1?: string;
  number2?: string;
  email?: string;
}

const ApplicantHeader = ({ ...props }: ApplicantHeaderProps) => {
  return (
    <div className="  md:flex-row gap-20 md:gap-0 bg-azulLight3 py-20 px-10 xl:px-20 2xl:py-30 2xl:px-20 justify-between">
      <div className="  flex   gap-6 md:gap-16 lg:gap-20">
        {/* Image Container */}
        <div className="relative flex-shrink-0 min-w-[76px] min-h-[76px] w-[76px] h-[76px] md:w-[120px] md:h-[120px] lg:w-[160px] lg:h-[160px] xl:w-[200px] xl:h-[200px]">
          <Image
            src={props.image}
            alt="applicant image"
            fill
            className="overflow-hidden rounded-full"
          />
        </div>
        {/* Right Container */}
        <div className="w-full flex-1">
          {/* Top Container */}
          <div className="flex w-full justify-between gap-10 ">
            <div className="flex flex-col gap-4">
              <Text tag="h5" variant="title-l" fontWeight="medium">
                {props.name}
              </Text>
              {/* Date Container */}
              <div className="flex gap-10">
                <Text tag="p" variant="para" color="blue" fontWeight="medium">
                  {props.date}
                </Text>
                <Text tag="p" variant="para" color="blue" fontWeight="medium">
                  25487452-K
                </Text>
              </div>
            </div>
            <div className=" gap-4 hidden md:flex md:justify-end ">
              <Icon url="/images/icons/love.svg" />
              <Button title="En proceso asdwd " variant="outline" />
            </div>
          </div>
          {/* Bottom Container */}
          <div className="mt-20  gap-20 hidden md:flex">
            <Text
              tag="p"
              variant="para"
              className="max-w-[206px]"
              fontWeight="medium"
            >
              {props.address}
            </Text>
            <div>
              <Text
                tag="p"
                variant="para"
                className="max-w"
                fontWeight="medium"
              >
                {props.number1}
              </Text>
              <Text
                tag="p"
                variant="para"
                className="max-w"
                fontWeight="medium"
              >
                {props.number2}
              </Text>
              <Text
                tag="p"
                variant="para"
                className="max-w break-all"
                fontWeight="medium"
              >
                {props.email}
              </Text>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile Container */}
      <div className="mt-20 flex flex-col gap-20">
        <div className="gap-9  flex md:hidden">
          <Text
            tag="p"
            variant="para"
            className="max-w-[206px]"
            fontWeight="medium"
          >
            {props.address}
          </Text>
          <div>
            <Text tag="p" variant="para" className="max-w" fontWeight="medium">
              {props.number1}
            </Text>
            <Text tag="p" variant="para" className="max-w" fontWeight="medium">
              {props.number2}
            </Text>
            <Text
              tag="p"
              variant="para"
              className="break-all"
              fontWeight="medium"
            >
              {props.email}
            </Text>
          </div>
        </div>
        <div className=" gap-4 flex md:hidden md:justify-end ">
          <Icon url="/images/icons/love.svg" />
          <Button title="En proceso asdwd " variant="outline" />
        </div>
      </div>
    </div>
  );
};

export default ApplicantHeader;
