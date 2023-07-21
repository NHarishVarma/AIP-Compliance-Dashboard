import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./GroupComponent.module.css";

type GroupComponentType = {
  /** Style props */
  path500IconTop?: Property.Top;
};

const GroupComponent: FunctionComponent<GroupComponentType> = ({
  path500IconTop,
}) => {
  const groupDivStyle: CSS.Properties = useMemo(() => {
    return {
      top: path500IconTop,
    };
  }, [path500IconTop]);

  return (
    <div className={styles.path500Parent} style={groupDivStyle}>
      <img className={styles.path500Icon} alt="" src="/path-500.svg" />
      <b className={styles.virtualDataRoom}>Virtual Data Room</b>
      <div className={styles.filesAndAssets}>
        Files and assets that have been attached and required for this fund.
      </div>
      <div className={styles.scrollGroup17}>
        <div className={styles.folderExpand2}>
          <div className={styles.lineParent}>
            <div className={styles.groupChild} />
            <div className={styles.groupItem} />
            <div className={styles.nonDisclosureAgreement}>
              Non Disclosure Agreement
            </div>
          </div>
          <img
            className={styles.iconMaterialFolderOpen}
            alt=""
            src="/icon-materialfolderopen1.svg"
          />
          <img className={styles.colorIcon} alt="" src="/color.svg" />
          <div className={styles.iconMaterialFolderOpenParent}>
            <img
              className={styles.iconMaterialFolderOpen1}
              alt=""
              src="/icon-materialfolderopen1.svg"
            />
            <div className={styles.lineGroup}>
              <div className={styles.groupInner} />
              <div className={styles.pitchDocuments}>Pitch Documents</div>
            </div>
            <img className={styles.colorIcon1} alt="" src="/color.svg" />
          </div>
          <div className={styles.iconMaterialFolderOpenGroup}>
            <img
              className={styles.iconMaterialFolderOpen1}
              alt=""
              src="/icon-materialfolderopen1.svg"
            />
            <div className={styles.lineGroup}>
              <div className={styles.groupInner} />
              <div className={styles.pitchDocuments}>
                Investment Track Record
              </div>
            </div>
            <img className={styles.colorIcon1} alt="" src="/color.svg" />
          </div>
          <div className={styles.iconMaterialFolderOpenContainer}>
            <img
              className={styles.iconMaterialFolderOpen1}
              alt=""
              src="/icon-materialfolderopen1.svg"
            />
            <div className={styles.lineGroup}>
              <div className={styles.groupInner} />
              <div
                className={styles.pitchDocuments}
              >{`Audited Financial Statements `}</div>
            </div>
            <img className={styles.colorIcon3} alt="" src="/color.svg" />
          </div>
          <div className={styles.iconMaterialFolderOpenParent1}>
            <img
              className={styles.iconMaterialFolderOpen1}
              alt=""
              src="/icon-materialfolderopen1.svg"
            />
            <div className={styles.lineGroup}>
              <div className={styles.groupInner} />
              <div className={styles.pitchDocuments}>
                Previous Investment Memos
              </div>
            </div>
            <img className={styles.colorIcon3} alt="" src="/color.svg" />
          </div>
          <div className={styles.iconMaterialFolderOpenParent2}>
            <img
              className={styles.iconMaterialFolderOpen1}
              alt=""
              src="/icon-materialfolderopen1.svg"
            />
            <div className={styles.lineGroup}>
              <div className={styles.groupInner} />
              <div className={styles.pitchDocuments}>Case Studies</div>
            </div>
            <img className={styles.colorIcon3} alt="" src="/color.svg" />
          </div>
          <div className={styles.iconMaterialFolderOpenParent3}>
            <img
              className={styles.iconMaterialFolderOpen1}
              alt=""
              src="/icon-materialfolderopen1.svg"
            />
            <div className={styles.lineGroup}>
              <div className={styles.groupInner} />
              <div className={styles.pitchDocuments}>ESG Policy</div>
            </div>
            <img className={styles.colorIcon3} alt="" src="/color.svg" />
          </div>
          <div className={styles.iconMaterialFolderOpenParent4}>
            <img
              className={styles.iconMaterialFolderOpen1}
              alt=""
              src="/icon-materialfolderopen1.svg"
            />
            <div className={styles.lineGroup}>
              <div className={styles.groupInner} />
              <div
                className={styles.pitchDocuments}
              >{`Private Placement Memorandum `}</div>
            </div>
            <img className={styles.colorIcon3} alt="" src="/color.svg" />
          </div>
          <div className={styles.iconMaterialFolderOpenParent5}>
            <img
              className={styles.iconMaterialFolderOpen1}
              alt=""
              src="/icon-materialfolderopen1.svg"
            />
            <div className={styles.lineGroup}>
              <div className={styles.groupInner} />
              <div
                className={styles.pitchDocuments}
              >{`Limited Partnership Agreement `}</div>
            </div>
            <img className={styles.colorIcon3} alt="" src="/color.svg" />
          </div>
          <div className={styles.iconMaterialFolderOpenParent6}>
            <img
              className={styles.iconMaterialFolderOpen1}
              alt=""
              src="/icon-materialfolderopen1.svg"
            />
            <div className={styles.lineGroup}>
              <div className={styles.groupInner} />
              <div className={styles.pitchDocuments}>Fund Allocation Model</div>
            </div>
            <img className={styles.colorIcon3} alt="" src="/color.svg" />
          </div>
        </div>
      </div>
      <div className={styles.groupChild8} />
      <div className={styles.groupChild9} />
      <div className={styles.serachOnCard}>
        <div className={styles.serachOnCardChild} />
        <div className={styles.search}>Search</div>
        <img
          className={styles.iconactionsearch24px}
          alt=""
          src="/iconactionsearch-24px.svg"
        />
      </div>
      <div className={styles.filterbutton}>
        <div className={styles.serachOnCardChild} />
        <div className={styles.filters}>Filters</div>
        <img
          className={styles.filterListFill0Wght400GradIcon}
          alt=""
          src="/filter-list-fill0-wght400-grad0-opsz48.svg"
        />
      </div>
      <img
        className={styles.moreVertButtonLp}
        alt=""
        src="/more-vert-button--lp.svg"
      />
      <img className={styles.colorIcon10} alt="" src="/color.svg" />
      <img className={styles.polygonIcon} alt="" src="/polygon-10.svg" />
    </div>
  );
};

export default GroupComponent;
