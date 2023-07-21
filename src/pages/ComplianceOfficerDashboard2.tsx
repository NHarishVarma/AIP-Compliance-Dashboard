import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import GroupComponent from "../components/GroupComponent";
import MainHeader from "../components/MainHeader";
import styles from "./ComplianceOfficerDashboard2.module.css";
const ComplianceOfficerDashboard2: FunctionComponent = () => {
  const navigate = useNavigate();

  const onEditSaveButtonClick = useCallback(() => {
    navigate("/compliance-officer-dashboard-detail");
  }, [navigate]);

  const onBackArrowButtonClick = useCallback(() => {
    navigate("/compliance-officer-dashboard");
  }, [navigate]);

  return (
    <div className={styles.complianceOfficerDashboard}>
      <div className={styles.path501Parent}>
        <img className={styles.path501Icon} alt="" src="/path-501.svg" />
        <div className={styles.groupChild} />
        <div className={styles.nexusHealthEquity}>Nexus Health Equity Fund</div>
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
        <div className={styles.groupItem} />
        <b className={styles.b}>$1,500,000</b>
        <div className={styles.subscriptionAmount}>Subscription Amount​</div>
        <div className={styles.label11}>
          <b className={styles.labelcontent}>Pending Review</b>
        </div>
        <div className={styles.editSaveButton} onClick={onEditSaveButtonClick}>
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
        <div className={styles.labelDropdown}>
          <div className={styles.subscriptionStatus}>Subscription Status</div>
          <img className={styles.path297Icon} alt="" src="/path-297.svg" />
          <div className={styles.thomaSmith}>Pending Review</div>
          <img
            className={styles.labelDropdownChild}
            alt=""
            src="/polygon-62.svg"
          />
        </div>
        <b className={styles.bankingInformation}>Banking information</b>
      </div>
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
      <GroupComponent path500IconTop="1230px" />
      <div className={styles.path502Parent}>
        <img className={styles.path502Icon} alt="" src="/path-5021.svg" />
        <div className={styles.notesAndCommentsWrapper}>
          <b className={styles.notesAndComments}>Notes and Comments</b>
        </div>
      </div>
      <img
        className={styles.component2096}
        alt=""
        src="/component-209--5.svg"
      />
      <div className={styles.ndaForNexusHealthEquityFuParent}>
        <div className={styles.ndaForNexus}>
          NDA for Nexus Health Equity Fund 2023
        </div>
        <img
          className={styles.descriptionFill0Wght400GradIcon}
          alt=""
          src="/description-fill0-wght400-grad0-opsz48-1.svg"
        />
        <img className={styles.groupInner} alt="" src="/group-17837.svg" />
      </div>
      <img
        className={styles.moreVertButtonLp}
        alt=""
        src="/more-vert-button--lp.svg"
      />
      <MainHeader />
      <div className={styles.navDrawerLeft}>
        <div className={styles.boundary}>
          <div className={styles.boundary}>
            <img className={styles.path428Icon} alt="" src="/path-428.svg" />
            <div className={styles.leftNavButton}>
              <div className={styles.boundary} />
              <img
                className={styles.storefrontFill0Wght400Grad0Icon}
                alt=""
                src="/storefront-fill0-wght400-grad0-opsz48.svg"
              />
            </div>
            <div className={styles.leftNavButton1}>
              <div className={styles.boundary} />
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
              <div className={styles.div6}>4</div>
            </div>
            <div className={styles.leftNavButton2}>
              <div className={styles.boundary}>
                <img
                  className={styles.iconAwesomeTasks}
                  alt=""
                  src="/icon-awesometasks.svg"
                />
              </div>
            </div>
            <div className={styles.leftNavButton3}>
              <div className={styles.boundary}>
                <img
                  className={styles.manageAccountsFill0Wght400Icon}
                  alt=""
                  src="/manage-accounts-fill0-wght400-grad0-opsz48-1.svg"
                />
              </div>
            </div>
            <div className={styles.leftNavButton4}>
              <div className={styles.boundary}>
                <img
                  className={styles.homeStorageFill0Wght400GraIcon}
                  alt=""
                  src="/home-storage-fill0-wght400-grad0-opsz48.svg"
                />
              </div>
            </div>
            <div className={styles.leftNavButton5}>
              <div className={styles.boundary} />
              <img
                className={styles.settingsFill0Wght400Grad0OIcon}
                alt=""
                src="/settings-fill0-wght400-grad0-opsz48.svg"
              />
            </div>
            <div className={styles.leftNavButton6}>
              <div className={styles.boundary} />
              <img
                className={styles.logoutFill0Wght400Grad0OpsIcon}
                alt=""
                src="/logout-fill0-wght400-grad0-opsz48.svg"
              />
            </div>
            <div className={styles.leftNavButton7}>
              <div className={styles.rectangleDiv} />
              <div className={styles.boundary}>
                <img
                  className={styles.homeFill1Wght400Grad0Opsz4Icon}
                  alt=""
                  src="/home-fill1-wght400-grad0-opsz48.svg"
                />
              </div>
              <div className={styles.leftNavButtonChild2} />
            </div>
            <div className={styles.leftNavButton8}>
              <div className={styles.boundary} />
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
    </div>
  );
};

export default ComplianceOfficerDashboard2;
