"use client";
import { ReactSVG } from "react-svg";
import styles from "./Uploader.module.css";
import { useState } from "react";
import Image from "next/image";
import Text from "../../ui/typography/Typography";
import { cn } from "@/lib/utils";

interface UploaderProps {
  id: string;
  title?: string;
  filename?: string;
  variant: "file" | "image" | "profile";
  date?: string;
}

const Uploader = (props: UploaderProps) => {
  const [filename, setFilename] = useState("");
  const [date, setDate] = useState<number>();
  const [image, setImage] = useState("");

  const FileInput = () => {
    return (
      <input
        type="file"
        id={props.id}
        hidden
        onChange={(e) => {
          if (e.target?.files?.length) {
            setFilename(e.target.files[0].name);
            setDate(e.target.files[0].lastModified);
            const file = e.target.files[0];
            const img = URL.createObjectURL(file);
            setImage(img);
          }
          console.log("Files: ", e.target.files);
        }}
      />
    );
  };

  if (props.variant === "image") {
    return (
      <>
        {image ? (
          <div className={styles.selected_image_container}>
            <Image src={image} alt="" fill style={{ objectFit: "cover" }} />
            <div
              className={cn(
                "z-10 absolute right-9 top-5 flex  gap-5 items-center",
                styles.image_actions
              )}
            >
              <label
                htmlFor={props.id}
                className="relative bg-azulLight3 py-7 px-12 rounded-full"
              >
                <Text tag="p" variant="para">
                  {filename}
                </Text>
              </label>
              <div
                className="w-11 h-11 bg-azulLight3 rounded-full flex justify-center items-center cursor-pointer"
                onClick={() => setImage("")}
              >
                <ReactSVG src="/images/icons/cross.svg" />
              </div>
            </div>
          </div>
        ) : (
          <label htmlFor={props.id} className={styles.image_uploader}>
            <div className={styles.icon_container}>
              <ReactSVG
                src="/images/icons/pencil.svg"
                className={styles.icon}
              />
            </div>
            <FileInput />
            <p className={styles.title}>{"Subir imagen"}</p>
          </label>
        )}
      </>
    );
  }

  return (
    <div className={styles.container_file_uploader}>
      <h4 className={styles.title}>{props.title}</h4>
      <div className={styles.button_container}>
        <ReactSVG src="/images/icons/pencil.svg" className={styles.icon} />
        <p className={styles.filename}>
          {filename ? filename : "No File Selected"}
        </p>
        <input
          type="file"
          id={props.id}
          hidden
          onChange={(e) => {
            if (e.target?.files?.length) {
              setFilename(e.target.files[0].name);
              setDate(e.target.files[0].lastModified);
            }
            console.log("Files: ", e.target.files);
          }}
        />
        <label htmlFor={props.id} className={styles.button_title}>
          Eliminar
        </label>
      </div>
      <p className={styles.date}>{props.date}</p>
    </div>
  );
};

export default Uploader;
