import React from "react";
import Image from "next/image";
interface ImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  borderStyle?: "simple" | "rectangle" | "oval" | "circle"; // New border style prop
  maxWidth?: string; // New maxWidth prop
  maxHeight?: string; // New maxHeight prop
}
const ImageComponent: React.FC<ImageProps> = ({
  src,
  alt,
  width,
  height,
  borderStyle = "simple",
  maxWidth,
  maxHeight
}) => {
  const aspectRatio = (height / width) * 100; // Calculate aspect ratio in percentage
  let borderRadiusClass = "";
  // Assign appropriate border radius class based on the provided prop
  switch (borderStyle) {
    case "simple":
      borderRadiusClass = "rounded-none";
      break;
    case "rectangle":
      borderRadiusClass = "rounded-md";
      break;
    case "oval":
      borderRadiusClass = "rounded-full";
      break;
    case "circle":
      borderRadiusClass = "rounded-full";
      break;
    default:
      borderRadiusClass = "rounded-none";
  }
  // Calculate the height based on the maxWidth and aspect ratio
  const calculatedMaxHeight = maxWidth
    ? `calc(${maxWidth} * ${height / width})`
    : "100%";
  const style = {
    maxWidth,
    maxHeight: maxHeight || calculatedMaxHeight
  };
  return (
    <div
      className={`relative w-full flex-1 overflow-hidden ${borderRadiusClass}`}
      style={style}
    >
      <div
        className="relative w-full"
        style={{ paddingTop: `${aspectRatio}%` }}
      >
        <div className="absolute top-0 left-0 w-full h-full">
          <Image src={src} alt={alt} layout="fill" objectFit="cover" />
        </div>
      </div>
    </div>
  );
};
export default ImageComponent;
