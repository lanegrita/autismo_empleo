import React from "react";
import Image from "next/image";
import styles from "./ImageComponent.module.css";
interface ImageProps {
  variant: "simple" | "rectangle" | "oval" | "circle";
  onClick?: () => void;
  width: number;
  height: number;
  src: string;
  alt: string;
}

const ImageComponent = ({ variant, width, height, src, alt }: ImageProps) => {
  return (
    <div
      style={{ maxWidth: width, maxHeight: height }}
      // className={`max-w-[${width}px] max-h-[${height}px]`}
    >
      <div
        className={[
          styles.container,
          variant === "circle" && styles.circle,
          variant === "rectangle" && styles.rectangle,
          variant === "oval" && styles.oval,
        ].join(" ")}
      >
        {/* Image Container */}

        <Image fill src={src} alt={alt} className={styles.image} />
      </div>
    </div>
  );
};

export default ImageComponent;
