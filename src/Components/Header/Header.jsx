// Styles import
import styles from "./header.module.css";

const Header = ({ companiesNo }) => {
  return (
    <div className={`${styles.header} flex`}>
      <div>
        <h1>Companies</h1>
        <p>{companiesNo} Companies</p>
      </div>
      <button>+ Invite Companies</button>
    </div>
  );
};

export default Header;
