"use client";
import Button from "@/app/components/ui/button/Button";
import slides, {
  advancedSlides,
  videosSlides
} from "@/app/components/ui/lightbox/slides";
import useLightbox from "@/app/components/ui/lightbox/useLightbox";

import React from "react";

const LightboxPage = () => {
  const { openLightbox, renderLightbox } = useLightbox();
  return (
    <div className="flex justify-center items-center h-screen">
      <Button
        title="Open Lightbox"
        variant="primary"
        type="button"
        onClick={openLightbox}
      ></Button>

      {renderLightbox({
        slides: videosSlides
      })}
    </div>
  );
};

export default LightboxPage;
