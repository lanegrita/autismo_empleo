"use client";
import Text from "../../ui/typography/Typography";
import styles from "./Progress.module.css";
import { default as ReactProgressBar } from "@ramonak/react-progress-bar";

interface ProgressBarProps {
  maxValue: number;
  value: number;
}

const ProgressBar = ({ maxValue, value }: ProgressBarProps) => {
  return (
    <ReactProgressBar
      bgColor="#1a9eda"
      baseBgColor="#c2e5f5"
      height="4px"
      isLabelVisible={false}
      completed={value}
      maxCompleted={maxValue}
    />
  );
};

interface ProgressBarProps {
  maxValue: number;
  value: number;
}

const FormProgressBar = ({ maxValue, value }: ProgressBarProps) => {
  return (
    <div className={styles.form_progress_bar}>
      <ProgressBar value={value} maxValue={maxValue} />
      <div className={styles.form_progress_bar_content}>
        <Text tag="p" variant="subtitle-s" fontWeight="medium" color="blue">
          DATOS PERSONALES 1
        </Text>
        <Text tag="p" variant="subtitle-s" color="blue" fontWeight="medium">
          {value}/{maxValue}
        </Text>
      </div>
    </div>
  );
};

export { ProgressBar, FormProgressBar };
