import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./GroupComponent4.module.css";

type GroupComponent4Type = {
  /** Style props */
  polygonIconCursor?: Property.Cursor;
  propCursor?: Property.Cursor;

  /** Action props */
  onNexusHealthEquityClick?: () => void;
  onEditSaveButtonClick?: () => void;
};

const GroupComponent4: FunctionComponent<GroupComponent4Type> = ({
  polygonIconCursor,
  propCursor,
  onNexusHealthEquityClick,
  onEditSaveButtonClick,
}) => {
  const nexusHealthEquityStyle: CSS.Properties = useMemo(() => {
    return {
      cursor: polygonIconCursor,
    };
  }, [polygonIconCursor]);

  const editSaveButtonStyle: CSS.Properties = useMemo(() => {
    return {
      cursor: propCursor,
    };
  }, [propCursor]);

  return (
    <div className={styles.path501Parent}>
      <img className={styles.path501Icon} alt="" src="/path-501.svg" />
      <div
        className={styles.nexusHealthEquity}
        style={nexusHealthEquityStyle}
        onClick={onNexusHealthEquityClick}
      >
        Nexus Health Equity Fund
      </div>
      <div className={styles.maskGroup38Wrapper}>
        <img
          className={styles.maskGroup38}
          alt=""
          src="/mask-group-38@2x.png"
        />
      </div>
      <div className={styles.label}>
        <div className={styles.accountNo}>Address Line 2</div>
        <img className={styles.path297Icon} alt="" src="/path-297.svg" />
      </div>
      <div className={styles.label1}>
        <div className={styles.accountHolderName}>ACCOUNT HOLDER NAME</div>
        <img className={styles.path297Icon} alt="" src="/path-297.svg" />
        <div className={styles.thomaSmith}>Thoma Smith</div>
      </div>
      <div className={styles.label2}>
        <div className={styles.accountNo}>Account No.​</div>
        <img className={styles.path297Icon} alt="" src="/path-297.svg" />
        <div className={styles.thomaSmith}>98000167555141</div>
      </div>
      <div className={styles.label3}>
        <div className={styles.accountNo}>Bank Name​</div>
        <img className={styles.path297Icon} alt="" src="/path-297.svg" />
        <div className={styles.thomaSmith}>Bank Name​</div>
      </div>
      <div className={styles.label4}>
        <div className={styles.accountNo}>Address Line 1</div>
        <img className={styles.path297Icon} alt="" src="/path-297.svg" />
        <div className={styles.thomaSmith}>{`1234 First Ave. `}</div>
      </div>
      <div className={styles.label5}>
        <div className={styles.accountNo}>BIC/SWIFT Code</div>
        <img className={styles.path297Icon} alt="" src="/path-297.svg" />
        <div className={styles.thomaSmith}>—</div>
      </div>
      <div className={styles.label6}>
        <div className={styles.accountNo}>IBAN</div>
        <img className={styles.path297Icon} alt="" src="/path-297.svg" />
        <div className={styles.thomaSmith}>—</div>
      </div>
      <div className={styles.label7}>
        <div className={styles.accountNo}>{`City `}</div>
        <img className={styles.path297Icon} alt="" src="/path-297.svg" />
        <div className={styles.thomaSmith}>New York</div>
      </div>
      <div className={styles.labelParent}>
        <div className={styles.boundary}>
          <div className={styles.accountNo}>State</div>
          <img className={styles.path297Icon} alt="" src="/path-297.svg" />
          <div className={styles.thomaSmith}>NY</div>
        </div>
        <div className={styles.iconNavigationArrowDropDow}>
          <div className={styles.boundary} />
          <img className={styles.colorIcon} alt="" src="/-color.svg" />
        </div>
      </div>
      <div className={styles.label9}>
        <div className={styles.accountNo}>Zip Code</div>
        <img className={styles.path297Icon} alt="" src="/path-297.svg" />
        <div className={styles.thomaSmith}>98765</div>
      </div>
      <div className={styles.label10}>
        <div className={styles.sortCoderoutingNumberContainer}>
          <p className={styles.sortCoderoutingNumber}>
            Sort Code/Routing Number​
          </p>
        </div>
        <img className={styles.path297Icon} alt="" src="/path-297.svg" />
        <div className={styles.thomaSmith}>10001115648900</div>
      </div>
      <div className={styles.groupChild} />
      <b className={styles.b}>$1,500,000</b>
      <div className={styles.subscriptionAmount}>Subscription Amount​</div>
      <div className={styles.label11}>
        <b className={styles.labelcontent}>Pending Review</b>
      </div>
      <div
        className={styles.editSaveButton}
        style={editSaveButtonStyle}
        onClick={onEditSaveButtonClick}
      >
        <div className={styles.editSaveButtonChild} />
        <div className={styles.edit}>Edit</div>
        <img
          className={styles.editFill0Wght400Grad0Opsz4Icon}
          alt=""
          src="/edit-fill0-wght400-grad0-opsz48-1.svg"
        />
      </div>
      <div className={styles.thomasSmithParent}>
        <div className={styles.thomasSmith}>Thomas Smith</div>
        <img className={styles.avatarIcon} alt="" src="/avatar@2x.png" />
        <b className={styles.individualInvestor}>Individual Investor</b>
      </div>
      <div className={styles.label12}>
        <div className={styles.accountNo}>Transaction Date</div>
        <img className={styles.path297Icon} alt="" src="/path-297.svg" />
        <div className={styles.thomaSmith}>July 12, 2023</div>
      </div>
      <div className={styles.label13}>
        <div className={styles.accountNo}>Funding Method</div>
        <img className={styles.path297Icon} alt="" src="/path-297.svg" />
        <div className={styles.thomaSmith}>Wire Transfer</div>
      </div>
      <div className={styles.label14}>
        <div className={styles.accountNo}>Reference Number/ID​</div>
        <img className={styles.path297Icon} alt="" src="/path-297.svg" />
        <div className={styles.thomaSmith}>100000495-002</div>
      </div>
      <div className={styles.label15}>
        <div className={styles.accountNo}>Country of Residence</div>
        <img className={styles.path297Icon} alt="" src="/path-297.svg" />
        <div className={styles.thomaSmith}>United States</div>
      </div>
      <div className={styles.label16}>
        <div className={styles.accountNo}>Currency​ of Transaction</div>
        <img className={styles.path297Icon} alt="" src="/path-297.svg" />
        <div className={styles.thomaSmith}>USD</div>
      </div>
      <div className={styles.subscriptionStatus}>Subscription Status</div>
      <img className={styles.path297Icon16} alt="" src="/path-297.svg" />
      <div className={styles.pendingReview}>Pending Review</div>
      <img className={styles.groupItem} alt="" src="/polygon-62.svg" />
      <b className={styles.bankingInformation}>Banking information</b>
    </div>
  );
};

export default GroupComponent4;
