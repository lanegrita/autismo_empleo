"use client";
import Icon, { IconProps } from "@/app/components/ui/icon/Icon";
import { useState } from "react";

const page = () => {
  return (
    <div className="container ">
      <Icons />
    </div>
  );
};

const Icons = () => {
  const [index, setIndex] = useState(0);

  const icons: IconProps[] = [
    {
      tooltip: "Document File",
      tooltipPosition: "left",
      url: "/images/icons/download.svg"
    },
    {
      tooltip: "Arrow",
      url: "/images/icons/arrow-right.svg",
      tooltipPosition: "top"
    },
    {
      tooltip: "Link",
      tooltipPosition: "bottom",
      url: "/images/icons/link.svg"
    },
    {
      tooltip: "News",
      url: "/images/icons/news.svg",
      tooltipPosition: "top"
    },
    {
      url: "/images/icons/pencil.svg"
    },
    {
      tooltip: "Edit",
      tooltipPosition: "right",
      url: "/images/icons/pencil.svg"
    }
  ];

  return (
    <div className="flex  gap-10 mt-96">
      {icons.map((icon, i) => (
        <div key={icon.tooltip} onClick={() => setIndex(i)}>
          <Icon
            url={icon.url}
            tooltip={icon.tooltip}
            tooltipPosition={icon.tooltipPosition}
            selected={index === i}
          />
        </div>
      ))}
    </div>
  );
};

export default page;
