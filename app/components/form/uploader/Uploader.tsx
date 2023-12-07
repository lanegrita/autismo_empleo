"use client";
import { ReactSVG } from "react-svg";
import styles from "./Uploader.module.css";

interface UploaderProps {
  title?: string;
  filename?: string;
  variant: "file" | "image" | "profile";
  date?: string;
}

const Uploader = (props: UploaderProps) => {
  if (props.variant === "image") {
    return (
      <div className={styles.image_uploader}>
        <div className={styles.icon_container}>
          <ReactSVG src="/images/icons/pencil.svg" className={styles.icon} />
        </div>
        <p className={styles.title}>Subir imagen</p>
      </div>
    );
  }

  return (
    <div className={styles.container_file_uploader}>
      <h4 className={styles.title}>{props.title}</h4>
      <div className={styles.button_container}>
        <ReactSVG src="/images/icons/pencil.svg" className={styles.icon} />
        <p className={styles.filename}>{props.filename}</p>
        <p className={styles.button_title}>Eliminar</p>
      </div>
      <p className={styles.date}>{props.date}</p>
    </div>
  );
};

export default Uploader;
