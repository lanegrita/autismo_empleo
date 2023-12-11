import Uploader from "@/app/components/form/uploader/Uploader";
import React from "react";

const page = () => {
  return (
    <div className="container">
      <div className="flex flex-col gap-5 max-w-lg mt-10">
        <Uploader
          id="file1"
          title="CV tradicional"
          variant="file"
          filename="manuel_CV_2022.pdf"
          date="Generado el 03/11/23 a las 12:58"
        />
        <Uploader
          id="file2"
          title="Video CV"
          variant="file"
          filename="manuel_videoCV_23.mp4"
          date="Generado el 03/11/23 a las 12:58"
        />
      </div>

      <div className="mt-10">
        <Uploader id="image-1" variant="image" />
      </div>
    </div>
  );
};

export default page;
