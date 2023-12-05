import styles from "./Dropdown.module.css";

const Dropdown = () => {
  return (
    <select defaultValue="select" className={styles.container}>
      <option value="0">Género</option>
      <option value="1">Nacionalidad</option>
    </select>
  );
};

export default Dropdown;
