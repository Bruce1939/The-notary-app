// Styles import
import styles from "./error.module.css";

const Error = ({ error }) => {
  return <div className={styles.error}>{error}</div>;
};

export default Error;
