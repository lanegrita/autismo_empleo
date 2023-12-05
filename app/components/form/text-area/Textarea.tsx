import styles from "./Textarea.module.css";

const Textarea = () => {
  return (
    <div>
      <textarea
        className={styles.container}
        name=""
        id=""
        placeholder="Placeholder que explica como debes contarnos brevemente tus intereses, un texto de ejemplo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis ligula eget ligula porttitor aliquam consequat sit amet sem. Vivamus convallis nulla in fringilla blandit. Pellentesque in lorem nisl. Curabitur et luctus urna."
      ></textarea>
      <div className={styles.characters}>142/400 caracteres</div>
    </div>
  );
};

export default Textarea;
