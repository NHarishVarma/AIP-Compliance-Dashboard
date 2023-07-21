import { FunctionComponent } from "react";
import styles from "./MainHeader.module.css";
const MainHeader: FunctionComponent = () => {
  return (
    <div className={styles.navbarbgParent}>
      <img className={styles.navbarbgIcon} alt="" src="/navbarbg.svg" />
      <img className={styles.userMenuIcon} alt="" src="/user-menu.svg" />
      <div className={styles.groupParent}>
        <img className={styles.groupChild} alt="" src="/group-330.svg" />
        <div className={styles.groupWrapper}>
          <div className={styles.groupWrapper}>
            <div className={styles.alternativeInvestmentPlatforContainer}>
              Al
              <span className={styles.t}>t</span>ernati
              <span className={styles.v}>v</span>e
            </div>
          </div>
        </div>
      </div>
      <div className={styles.searchParent}>
        <div className={styles.search}>Search</div>
        <img
          className={styles.iconactionsearch24px}
          alt=""
          src="/iconactionsearch-24px1.svg"
        />
      </div>
    </div>
  );
};

export default MainHeader;
