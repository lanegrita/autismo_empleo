import Uploader from "@/app/components/form/uploader/Uploader";
import React from "react";

const page = () => {
  return (
    <div className="container">
      <div className="flex flex-col gap-5 max-w-lg mt-10">
        <Uploader
          title="CV tradicional"
          variant="file"
          filename="manuel_CV_2022.pdf"
          date="Generado el 03/11/23 a las 12:58"
        />
        <Uploader
          title="Video CV"
          variant="file"
          filename="manuel_videoCV_23.mp4"
          date="Generado el 03/11/23 a las 12:58"
        />
      </div>

      <div className="mt-10">
        <Uploader variant="image" />
      </div>
    </div>
  );
};

export default page;
