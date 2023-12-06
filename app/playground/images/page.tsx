import ImageComponent from "@/app/components/ui/ImageComponent/ImageComponent";
import React from "react";

const images = () => {
  return (
    <div className="px-10 py-16 bg-blue-600 flex flex-col gap-6">
      <ImageComponent
        variant="simple"
        src="/images/test.webp"
        alt="test image"
        width={860}
        height={646}
      />
      <ImageComponent
        variant="rectangle"
        src="/images/test.webp"
        alt="test image"
        width={860}
        height={646}
      />

      <ImageComponent
        variant="circle"
        src="/images/test.webp"
        alt="test image"
        width={860}
        height={860}
      />
      <ImageComponent
        variant="oval"
        src="/images/test.webp"
        alt="test image"
        width={860}
        height={646}
      />
    </div>
  );
};

export default images;
