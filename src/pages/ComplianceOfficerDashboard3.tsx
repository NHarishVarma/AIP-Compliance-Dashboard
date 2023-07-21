import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import GroupComponent4 from "../components/GroupComponent4";
import MainHeader from "../components/MainHeader";
import styles from "./ComplianceOfficerDashboard3.module.css";
const ComplianceOfficerDashboard3: FunctionComponent = () => {
  const navigate = useNavigate();

  const onNexusHealthEquityClick = useCallback(() => {
    navigate("/fund-detail");
  }, [navigate]);

  const onEditSaveButtonClick = useCallback(() => {
    navigate("/compliance-officer-dashboard-edit-status");
  }, [navigate]);

  const onBackArrowButtonClick = useCallback(() => {
    navigate("/compliance-officer-dashboard");
  }, [navigate]);

  return (
    <div className={styles.complianceOfficerDashboard}>
      <div className={styles.path500Parent}>
        <img className={styles.path500Icon} alt="" src="/path-500.svg" />
        <b className={styles.virtualDataRoom}>Virtual Data Room</b>
        <div className={styles.filesAndAssets}>
          Files and assets that have been attached and required for this fund.
        </div>
        <div className={styles.groupChild} />
        <div className={styles.groupItem} />
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
        <img className={styles.colorIcon} alt="" src="/color.svg" />
        <img className={styles.groupInner} alt="" src="/polygon-10.svg" />
        <div className={styles.scrollGroup17}>
          <div className={styles.folderExpand2}>
            <div className={styles.lineParent}>
              <div className={styles.lineDiv} />
              <div className={styles.groupChild1} />
              <div className={styles.nonDisclosureAgreement}>
                Non Disclosure Agreement
              </div>
            </div>
            <img
              className={styles.iconMaterialFolderOpen}
              alt=""
              src="/icon-materialfolderopen1.svg"
            />
            <img className={styles.colorIcon1} alt="" src="/color.svg" />
            <div className={styles.iconMaterialFolderOpenParent}>
              <img
                className={styles.iconMaterialFolderOpen1}
                alt=""
                src="/icon-materialfolderopen1.svg"
              />
              <div className={styles.lineGroup}>
                <div className={styles.groupChild2} />
                <div className={styles.pitchDocuments}>Pitch Documents</div>
              </div>
              <img className={styles.colorIcon2} alt="" src="/color.svg" />
            </div>
            <div className={styles.iconMaterialFolderOpenGroup}>
              <img
                className={styles.iconMaterialFolderOpen1}
                alt=""
                src="/icon-materialfolderopen1.svg"
              />
              <div className={styles.lineGroup}>
                <div className={styles.groupChild2} />
                <div className={styles.pitchDocuments}>
                  Investment Track Record
                </div>
              </div>
              <img className={styles.colorIcon2} alt="" src="/color.svg" />
            </div>
            <div className={styles.iconMaterialFolderOpenContainer}>
              <img
                className={styles.iconMaterialFolderOpen1}
                alt=""
                src="/icon-materialfolderopen1.svg"
              />
              <div className={styles.lineGroup}>
                <div className={styles.groupChild2} />
                <div
                  className={styles.pitchDocuments}
                >{`Audited Financial Statements `}</div>
              </div>
              <img className={styles.colorIcon4} alt="" src="/color.svg" />
            </div>
            <div className={styles.iconMaterialFolderOpenParent1}>
              <img
                className={styles.iconMaterialFolderOpen1}
                alt=""
                src="/icon-materialfolderopen1.svg"
              />
              <div className={styles.lineGroup}>
                <div className={styles.groupChild2} />
                <div className={styles.pitchDocuments}>
                  Previous Investment Memos
                </div>
              </div>
              <img className={styles.colorIcon4} alt="" src="/color.svg" />
            </div>
            <div className={styles.iconMaterialFolderOpenParent2}>
              <img
                className={styles.iconMaterialFolderOpen1}
                alt=""
                src="/icon-materialfolderopen1.svg"
              />
              <div className={styles.lineGroup}>
                <div className={styles.groupChild2} />
                <div className={styles.pitchDocuments}>Case Studies</div>
              </div>
              <img className={styles.colorIcon4} alt="" src="/color.svg" />
            </div>
            <div className={styles.iconMaterialFolderOpenParent3}>
              <img
                className={styles.iconMaterialFolderOpen1}
                alt=""
                src="/icon-materialfolderopen1.svg"
              />
              <div className={styles.lineGroup}>
                <div className={styles.groupChild2} />
                <div className={styles.pitchDocuments}>ESG Policy</div>
              </div>
              <img className={styles.colorIcon4} alt="" src="/color.svg" />
            </div>
            <div className={styles.iconMaterialFolderOpenParent4}>
              <img
                className={styles.iconMaterialFolderOpen1}
                alt=""
                src="/icon-materialfolderopen1.svg"
              />
              <div className={styles.lineGroup}>
                <div className={styles.groupChild2} />
                <div
                  className={styles.pitchDocuments}
                >{`Private Placement Memorandum `}</div>
              </div>
              <img className={styles.colorIcon4} alt="" src="/color.svg" />
            </div>
            <div className={styles.iconMaterialFolderOpenParent5}>
              <img
                className={styles.iconMaterialFolderOpen1}
                alt=""
                src="/icon-materialfolderopen1.svg"
              />
              <div className={styles.lineGroup}>
                <div className={styles.groupChild2} />
                <div
                  className={styles.pitchDocuments}
                >{`Limited Partnership Agreement `}</div>
              </div>
              <img className={styles.colorIcon4} alt="" src="/color.svg" />
            </div>
            <div className={styles.iconMaterialFolderOpenParent6}>
              <img
                className={styles.iconMaterialFolderOpen1}
                alt=""
                src="/icon-materialfolderopen1.svg"
              />
              <div className={styles.lineGroup}>
                <div className={styles.groupChild2} />
                <div className={styles.pitchDocuments}>
                  Fund Allocation Model
                </div>
              </div>
              <img className={styles.colorIcon4} alt="" src="/color.svg" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.path502Parent}>
        <img className={styles.path502Icon} alt="" src="/path-502.svg" />
        <div className={styles.notesAndCommentsWrapper}>
          <b className={styles.notesAndComments}>Notes and Comments</b>
        </div>
        <img
          className={styles.moreVertButtonLp1}
          alt=""
          src="/more-vert-button--lp.svg"
        />
      </div>
      <GroupComponent4
        polygonIconCursor="pointer"
        propCursor="pointer"
        onNexusHealthEquityClick={onNexusHealthEquityClick}
        onEditSaveButtonClick={onEditSaveButtonClick}
      />
      <div className={styles.welcomeBackVenture}>
        Welcome Back, Venture Partners
      </div>
      <div className={styles.complianceOfficerDashboard1}>
        Compliance Officer Dashboard​
      </div>
      <img
        className={styles.backArrowButton}
        alt=""
        src="/back-arrow-button.svg"
        onClick={onBackArrowButtonClick}
      />
      <b className={styles.newInvestorKycaml}>
        New Investor KYC/AML Pending List​
      </b>
      <div className={styles.navDrawerLeft}>
        <div className={styles.leftNavClosedWrapper}>
          <div className={styles.leftNavClosedWrapper}>
            <img className={styles.path428Icon} alt="" src="/path-428.svg" />
            <div className={styles.leftNavButton}>
              <div className={styles.leftNavClosedWrapper} />
              <img
                className={styles.storefrontFill0Wght400Grad0Icon}
                alt=""
                src="/storefront-fill0-wght400-grad0-opsz48.svg"
              />
            </div>
            <div className={styles.leftNavButton1}>
              <div className={styles.leftNavClosedWrapper} />
              <img
                className={styles.notificationsFill0Wght400GrIcon}
                alt=""
                src="/notifications-fill0-wght400-grad0-opsz48.svg"
              />
              <img
                className={styles.leftNavButtonInner}
                alt=""
                src="/ellipse-58.svg"
              />
              <div className={styles.div}>4</div>
            </div>
            <div className={styles.leftNavButton2}>
              <div className={styles.leftNavClosedWrapper}>
                <img
                  className={styles.iconAwesomeTasks}
                  alt=""
                  src="/icon-awesometasks.svg"
                />
              </div>
            </div>
            <div className={styles.leftNavButton3}>
              <div className={styles.leftNavClosedWrapper}>
                <img
                  className={styles.manageAccountsFill0Wght400Icon}
                  alt=""
                  src="/manage-accounts-fill0-wght400-grad0-opsz48-1.svg"
                />
              </div>
            </div>
            <div className={styles.leftNavButton4}>
              <div className={styles.leftNavClosedWrapper}>
                <img
                  className={styles.homeStorageFill0Wght400GraIcon}
                  alt=""
                  src="/home-storage-fill0-wght400-grad0-opsz48.svg"
                />
              </div>
            </div>
            <div className={styles.leftNavButton5}>
              <div className={styles.leftNavClosedWrapper} />
              <img
                className={styles.settingsFill0Wght400Grad0OIcon}
                alt=""
                src="/settings-fill0-wght400-grad0-opsz48.svg"
              />
            </div>
            <div className={styles.leftNavButton6}>
              <div className={styles.leftNavClosedWrapper} />
              <img
                className={styles.logoutFill0Wght400Grad0OpsIcon}
                alt=""
                src="/logout-fill0-wght400-grad0-opsz48.svg"
              />
            </div>
            <div className={styles.leftNavButton7}>
              <div className={styles.rectangleDiv} />
              <div className={styles.leftNavClosedWrapper}>
                <img
                  className={styles.homeFill1Wght400Grad0Opsz4Icon}
                  alt=""
                  src="/home-fill1-wght400-grad0-opsz48.svg"
                />
              </div>
              <div className={styles.leftNavButtonChild3} />
            </div>
            <div className={styles.leftNavButton8}>
              <div className={styles.leftNavClosedWrapper} />
              <img
                className={styles.domainFill0Wght400Grad0OpsIcon}
                alt=""
                src="/domain-fill0-wght400-grad0-opsz48-1.svg"
              />
            </div>
            <div className={styles.leftNavClosedChild} />
            <div className={styles.closedMenuIcon}>
              <div className={styles.closedMenuIconChild} />
              <div className={styles.closedMenuIconItem} />
              <div className={styles.closedMenuIconInner} />
              <img
                className={styles.chevronRightFill0Wght400GrIcon}
                alt=""
                src="/chevron-right-fill0-wght400-grad0-opsz48-1.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <MainHeader />
      <img
        className={styles.component2092}
        alt=""
        src="/component-209--5.svg"
      />
    </div>
  );
};

export default ComplianceOfficerDashboard3;
