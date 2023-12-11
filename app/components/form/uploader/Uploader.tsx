"use client";
import { ReactSVG } from "react-svg";
import styles from "./Uploader.module.css";
import { useState } from "react";

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

  if (props.variant === "image") {
    return (
      <label htmlFor={props.id} className={styles.image_uploader}>
        <div className={styles.icon_container}>
          <ReactSVG src="/images/icons/pencil.svg" className={styles.icon} />
        </div>
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
        <p className={styles.title}>{filename ? filename : "Subir imagen"}</p>
      </label>
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
