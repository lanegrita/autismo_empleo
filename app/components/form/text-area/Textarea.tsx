import { ChangeEvent } from "react";
import styles from "./Textarea.module.css";

interface TextareaProps {
  rows?: number;
  placeholder: string;
  variant: "single-line" | "multi-line";
  value?: string;
  setValue?: (value: string) => void;
}

const Textarea: React.FC<TextareaProps> = ({
  placeholder,
  variant = "multi-line",
  rows = 0,
  value,
  setValue = () => {}
}) => {
  return (
    <div className="w-full">
      <textarea
        value={value}
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
          setValue(e.target.value.toString())
        }
        className={styles.container}
        placeholder={placeholder}
        rows={variant === "single-line" ? 1 : rows || 5}
      ></textarea>
      <div className={styles.characters}>142/400 caracteres</div>
    </div>
  );
};

export default Textarea;
