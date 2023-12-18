import styles from "./Textarea.module.css";

interface TextareaProps {
  placeholder: string;
  variant: "single-line" | "multi-line";
}

const Textarea: React.FC<TextareaProps> = ({
  placeholder,
  variant = "multi-line"
}) => {
  return (
    <div className="w-full">
      <textarea
        className={styles.container}
        name=""
        id=""
        placeholder={placeholder}
        rows={variant === "single-line" ? 1 : 5}
      ></textarea>
      <div className={styles.characters}>142/400 caracteres</div>
    </div>
  );
};

export default Textarea;
