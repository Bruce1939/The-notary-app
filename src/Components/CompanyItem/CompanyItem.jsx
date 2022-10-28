// Styles import
import styles from "./companyitem.module.css";

const CompanyItem = ({ company }) => {
  const { name, email, status } = company;

  return (
    <div className={`${styles.companyitem} flex`}>
      <div className={styles.companyitem__companyname}>
        <p>{name}</p>
      </div>
      <div className={styles.companyitem__companyemail}>
        <p>{email}</p>
      </div>
      <div className={styles.companyitem__companystatus}>
        <div className={styles.companyitem__container}>
          <div className={styles.companyitem__dot}></div>
          <div>{status}</div>
        </div>
      </div>
    </div>
  );
};

export default CompanyItem;
