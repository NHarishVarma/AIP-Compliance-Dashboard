import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import MainHeader from "../components/MainHeader";
import styles from "./ComplianceOfficerDashboard.module.css";
const ComplianceOfficerDashboard: FunctionComponent = () => {
  const navigate = useNavigate();

  const onGroupContainer41Click = useCallback(() => {
    navigate("/compliance-officer-dashboard-detail");
  }, [navigate]);

  return (
    <div className={styles.complianceOfficerDashboard}>
      <div className={styles.complianceOfficerDashboardChild} />
      <div className={styles.complianceOfficerDashboardItem} />
      <div className={styles.complianceOfficerDashboardInner} />
      <div className={styles.lineDiv} />
      <div className={styles.complianceOfficerDashboardChild1} />
      <div className={styles.complianceOfficerDashboardChild2} />
      <div className={styles.complianceOfficerDashboardChild3} />
      <div className={styles.complianceOfficerDashboardChild4} />
      <div className={styles.complianceOfficerDashboardChild5} />
      <div className={styles.complianceOfficerDashboardChild6} />
      <div className={styles.complianceOfficerDashboardChild7} />
      <div className={styles.complianceOfficerDashboardChild8} />
      <div className={styles.complianceOfficerDashboardChild9} />
      <div className={styles.complianceOfficerDashboardChild10} />
      <b className={styles.approved}>Approved</b>
      <b className={styles.rejected}>Rejected</b>
      <div className={styles.groupParent}>
        <div className={styles.rectangleParent}>
          <div className={styles.groupChild} />
          <div className={styles.label}>
            <b className={styles.labelcontent}>Approved</b>
          </div>
          <div className={styles.smithPartnershipParent}>
            <div className={styles.smithPartnership}>Smith Partnership</div>
            <img className={styles.avatarIcon} alt="" src="/avatar1.svg" />
            <img
              className={styles.iconAwesomeSuitcase}
              alt=""
              src="/icon-awesomesuitcase.svg"
            />
          </div>
        </div>
        <b className={styles.partnership}>Partnership</b>
        <b className={styles.nexusHealthEquity}>Nexus Health Equity Fund</b>
        <b className={styles.b}>$1,500,000</b>
      </div>
      <div className={styles.groupContainer}>
        <div className={styles.rectangleParent}>
          <div className={styles.groupChild} />
          <div className={styles.label1}>
            <b className={styles.labelcontent1}>Rejected</b>
          </div>
          <div className={styles.smithPartnershipParent}>
            <div className={styles.smithPartnership}>Smith Partnership</div>
            <img className={styles.avatarIcon} alt="" src="/avatar1.svg" />
            <img
              className={styles.iconAwesomeSuitcase}
              alt=""
              src="/icon-awesomesuitcase.svg"
            />
          </div>
        </div>
        <b className={styles.partnership}>Partnership</b>
        <b className={styles.nexusHealthEquity}>Nexus Health Equity Fund</b>
        <b className={styles.b}>$1,500,000</b>
      </div>
      <div className={styles.groupDiv}>
        <div className={styles.rectangleContainer}>
          <div className={styles.groupChild} />
          <div className={styles.smithFoundationParent}>
            <div className={styles.smithPartnership}>Smith Foundation</div>
            <img className={styles.avatarIcon} alt="" src="/avatar1.svg" />
            <img
              className={styles.iconAwesomeSuitcase}
              alt=""
              src="/icon-awesomesuitcase.svg"
            />
          </div>
          <div className={styles.label2}>
            <b className={styles.labelcontent}>Approved</b>
          </div>
        </div>
        <b className={styles.partnership}>Foundation</b>
        <b className={styles.nexusHealthEquity}>Nexus Health Equity Fund</b>
        <b className={styles.b}>$1,500,000</b>
      </div>
      <div className={styles.groupParent1}>
        <div className={styles.rectangleContainer}>
          <div className={styles.groupChild} />
          <div className={styles.smithFoundationParent}>
            <div className={styles.smithPartnership}>Smith Foundation</div>
            <img className={styles.avatarIcon} alt="" src="/avatar1.svg" />
            <img
              className={styles.iconAwesomeSuitcase}
              alt=""
              src="/icon-awesomesuitcase.svg"
            />
          </div>
          <div className={styles.label3}>
            <b className={styles.labelcontent1}>Rejected</b>
          </div>
        </div>
        <b className={styles.partnership}>Foundation</b>
        <b className={styles.nexusHealthEquity}>Nexus Health Equity Fund</b>
        <b className={styles.b}>$1,500,000</b>
      </div>
      <div className={styles.groupParent2}>
        <div className={styles.rectangleContainer}>
          <div className={styles.groupChild} />
          <div className={styles.smithGovtAgencyParent}>
            <div className={styles.smithPartnership}>Smith Govt. Agency</div>
            <img className={styles.avatarIcon4} alt="" src="/avatar2.svg" />
            <img
              className={styles.iconAwesomeBuilding}
              alt=""
              src="/icon-awesomebuilding.svg"
            />
          </div>
          <div className={styles.label4}>
            <b className={styles.labelcontent}>Approved</b>
          </div>
        </div>
        <b className={styles.partnership}>Government Entity​</b>
        <b className={styles.nexusHealthEquity}>Nexus Health Equity Fund</b>
        <b className={styles.b}>$1,500,000</b>
      </div>
      <div className={styles.groupParent3}>
        <div className={styles.rectangleContainer}>
          <div className={styles.groupChild} />
          <div className={styles.smithGovtAgencyParent}>
            <div className={styles.smithPartnership}>Smith Govt. Agency</div>
            <img className={styles.avatarIcon4} alt="" src="/avatar2.svg" />
            <img
              className={styles.iconAwesomeBuilding}
              alt=""
              src="/icon-awesomebuilding.svg"
            />
          </div>
          <div className={styles.label5}>
            <b className={styles.labelcontent1}>Rejected</b>
          </div>
        </div>
        <b className={styles.partnership}>Government Entity​</b>
        <b className={styles.nexusHealthEquity}>Nexus Health Equity Fund</b>
        <b className={styles.b}>$1,500,000</b>
      </div>
      <div className={styles.groupParent4}>
        <div className={styles.rectangleContainer}>
          <div className={styles.groupChild} />
          <div className={styles.smithGovtAgencyParent}>
            <div className={styles.smithPartnership}>Smith Capital</div>
            <img className={styles.avatarIcon4} alt="" src="/avatar2.svg" />
            <img
              className={styles.iconAwesomeBuilding}
              alt=""
              src="/icon-awesomebuilding.svg"
            />
          </div>
          <div className={styles.label4}>
            <b className={styles.labelcontent}>Approved</b>
          </div>
        </div>
        <b className={styles.partnership}>Financial Institution</b>
        <b className={styles.nexusHealthEquity}>Nexus Health Equity Fund</b>
        <b className={styles.b}>$1,500,000</b>
      </div>
      <div className={styles.groupParent5}>
        <div className={styles.rectangleContainer}>
          <div className={styles.groupChild} />
          <div className={styles.smithGovtAgencyParent}>
            <div className={styles.smithPartnership}>Smith Capital</div>
            <img className={styles.avatarIcon4} alt="" src="/avatar2.svg" />
            <img
              className={styles.iconAwesomeBuilding}
              alt=""
              src="/icon-awesomebuilding.svg"
            />
          </div>
          <div className={styles.label5}>
            <b className={styles.labelcontent1}>Rejected</b>
          </div>
        </div>
        <b className={styles.partnership}>Financial Institution</b>
        <b className={styles.nexusHealthEquity}>Nexus Health Equity Fund</b>
        <b className={styles.b}>$1,500,000</b>
      </div>
      <div className={styles.groupParent6}>
        <div className={styles.rectangleContainer}>
          <div className={styles.groupChild} />
          <div className={styles.smithGovtAgencyParent}>
            <div className={styles.smithPartnership}>Smith IV Fund</div>
            <img className={styles.avatarIcon4} alt="" src="/avatar2.svg" />
            <img
              className={styles.iconAwesomeBuilding}
              alt=""
              src="/icon-awesomebuilding.svg"
            />
          </div>
          <div className={styles.label4}>
            <b className={styles.labelcontent}>Approved</b>
          </div>
        </div>
        <b className={styles.partnership}>Pension Fund</b>
        <b className={styles.nexusHealthEquity}>Nexus Health Equity Fund</b>
        <b className={styles.b}>$1,500,000</b>
      </div>
      <div className={styles.groupParent7}>
        <div className={styles.rectangleContainer}>
          <div className={styles.groupChild} />
          <div className={styles.smithGovtAgencyParent}>
            <div className={styles.smithPartnership}>Smith IV Fund</div>
            <img className={styles.avatarIcon4} alt="" src="/avatar2.svg" />
            <img
              className={styles.iconAwesomeBuilding}
              alt=""
              src="/icon-awesomebuilding.svg"
            />
          </div>
          <div className={styles.label5}>
            <b className={styles.labelcontent1}>Rejected</b>
          </div>
        </div>
        <b className={styles.partnership}>Pension Fund</b>
        <b className={styles.nexusHealthEquity}>Nexus Health Equity Fund</b>
        <b className={styles.b}>$1,500,000</b>
      </div>
      <div className={styles.groupParent8}>
        <div className={styles.rectangleContainer}>
          <div className={styles.groupChild} />
          <div className={styles.smithEquityFundParent}>
            <div className={styles.smithPartnership}>Smith Equity Fund</div>
            <img className={styles.avatarIcon} alt="" src="/avatar1.svg" />
            <img
              className={styles.iconAwesomeSuitcase}
              alt=""
              src="/icon-awesomesuitcase.svg"
            />
          </div>
          <div className={styles.label4}>
            <b className={styles.labelcontent}>Approved</b>
          </div>
        </div>
        <b className={styles.partnership}>Hedge Fund</b>
        <b className={styles.nexusHealthEquity}>Nexus Health Equity Fund</b>
        <b className={styles.b}>$1,500,000</b>
      </div>
      <div className={styles.groupParent9}>
        <div className={styles.rectangleContainer}>
          <div className={styles.groupChild} />
          <div className={styles.smithEquityFundParent}>
            <div className={styles.smithPartnership}>Smith Equity Fund</div>
            <img className={styles.avatarIcon} alt="" src="/avatar1.svg" />
            <img
              className={styles.iconAwesomeSuitcase}
              alt=""
              src="/icon-awesomesuitcase.svg"
            />
          </div>
          <div className={styles.label5}>
            <b className={styles.labelcontent1}>Rejected</b>
          </div>
        </div>
        <b className={styles.partnership}>Hedge Fund</b>
        <b className={styles.nexusHealthEquity}>Nexus Health Equity Fund</b>
        <b className={styles.b}>$1,500,000</b>
      </div>
      <div className={styles.complianceOfficerDashboardChild11} />
      <div className={styles.complianceOfficerDashboardChild12} />
      <div className={styles.complianceOfficerDashboardChild13} />
      <div className={styles.complianceOfficerDashboardChild14} />
      <div className={styles.complianceOfficerDashboardChild15} />
      <div className={styles.complianceOfficerDashboardChild16} />
      <div className={styles.complianceOfficerDashboardChild17} />
      <div className={styles.complianceOfficerDashboardChild18} />
      <div className={styles.complianceOfficerDashboardChild19} />
      <div className={styles.complianceOfficerDashboardChild20} />
      <div className={styles.subscriptionStatusParent}>
        <div className={styles.subscriptionStatus}>Subscription Status​</div>
        <div className={styles.name}>Name</div>
        <img className={styles.polygonIcon} alt="" src="/polygon-10.svg" />
        <img className={styles.groupChild9} alt="" src="/polygon-10.svg" />
      </div>
      <div className={styles.welcomeBackVenture}>
        Welcome Back, Venture Partners
      </div>
      <div className={styles.complianceOfficerDashboard1}>
        Compliance Officer Dashboard​
      </div>
      <b className={styles.newInvestorKycaml}>
        New Investor KYC/AML Pending List​
      </b>
      <div className={styles.amountParent}>
        <div className={styles.amount}>Amount</div>
        <img className={styles.groupChild10} alt="" src="/polygon-10.svg" />
      </div>
      <div className={styles.fundNameParent}>
        <div className={styles.fundName}>Fund Name</div>
        <img className={styles.groupChild10} alt="" src="/polygon-10.svg" />
      </div>
      <div className={styles.typeParent}>
        <div className={styles.type}>Type</div>
        <img className={styles.groupChild10} alt="" src="/polygon-10.svg" />
      </div>
      <div className={styles.groupParent10} onClick={onGroupContainer41Click}>
        <div className={styles.rectangleContainer}>
          <div className={styles.groupChild} />
          <div className={styles.thomasSmith}>Thomas Smith</div>
          <div className={styles.label12}>
            <b className={styles.labelcontent12}>pending review</b>
          </div>
          <img className={styles.avatarIcon12} alt="" src="/avatar3@2x.png" />
        </div>
        <b className={styles.partnership}>Individual Investor</b>
        <b className={styles.nexusHealthEquity}>Nexus Health Equity Fund</b>
        <b className={styles.b}>$1,500,000</b>
      </div>
      <div className={styles.groupParent11}>
        <div className={styles.rectangleParent11}>
          <div className={styles.groupChild} />
          <div className={styles.label13}>
            <b className={styles.labelcontent13}>On Hold</b>
          </div>
          <div className={styles.ingomaLlcParent}>
            <div className={styles.smithPartnership}>Ingoma LLC</div>
            <img className={styles.avatarIcon4} alt="" src="/avatar2.svg" />
            <img
              className={styles.iconAwesomeBuilding}
              alt=""
              src="/icon-awesomebuilding.svg"
            />
          </div>
        </div>
        <b className={styles.partnership}>Corporate Entity​</b>
        <b className={styles.nexusHealthEquity}>Nexus Health Equity Fund</b>
        <b className={styles.b}>$1,500,000</b>
      </div>
      <div className={styles.groupParent12}>
        <div className={styles.rectangleParent12}>
          <div className={styles.groupChild} />
          <div className={styles.label14}>
            <b className={styles.labelcontent12}>pending review</b>
          </div>
          <div className={styles.smithTrustParent}>
            <div className={styles.smithPartnership}>Smith Trust</div>
            <img className={styles.avatarIcon} alt="" src="/avatar1.svg" />
            <img
              className={styles.iconAwesomeSuitcase}
              alt=""
              src="/icon-awesomesuitcase.svg"
            />
          </div>
        </div>
        <b className={styles.partnership}>Trust</b>
        <b className={styles.nexusHealthEquity}>Nexus Health Equity Fund</b>
        <b className={styles.b}>$1,500,000</b>
      </div>
      <div className={styles.groupParent13}>
        <div className={styles.rectangleParent12}>
          <div className={styles.groupChild} />
          <div className={styles.label14}>
            <b className={styles.labelcontent12}>pending review</b>
          </div>
          <div className={styles.smithPartnershipParent}>
            <div className={styles.smithPartnership}>Smith Partnership</div>
            <img className={styles.avatarIcon} alt="" src="/avatar1.svg" />
            <img
              className={styles.iconAwesomeSuitcase}
              alt=""
              src="/icon-awesomesuitcase.svg"
            />
          </div>
        </div>
        <b className={styles.partnership}>Partnership</b>
        <b className={styles.nexusHealthEquity}>Nexus Health Equity Fund</b>
        <b className={styles.b}>$1,500,000</b>
      </div>
      <div className={styles.groupParent14}>
        <div className={styles.rectangleParent12}>
          <div className={styles.groupChild} />
          <div className={styles.label14}>
            <b className={styles.labelcontent12}>pending review</b>
          </div>
          <div className={styles.smithFoundationContainer}>
            <div className={styles.smithPartnership}>Smith Foundation</div>
            <img className={styles.avatarIcon} alt="" src="/avatar1.svg" />
            <img
              className={styles.iconAwesomeSuitcase}
              alt=""
              src="/icon-awesomesuitcase.svg"
            />
          </div>
        </div>
        <b className={styles.partnership}>Foundation</b>
        <b className={styles.nexusHealthEquity}>Nexus Health Equity Fund</b>
        <b className={styles.b}>$1,500,000</b>
      </div>
      <div className={styles.groupParent15}>
        <div className={styles.rectangleParent12}>
          <div className={styles.groupChild} />
          <div className={styles.label14}>
            <b className={styles.labelcontent12}>pending review</b>
          </div>
          <div className={styles.smithGovtAgencyContainer}>
            <div className={styles.smithPartnership}>Smith Govt. Agency</div>
            <img className={styles.avatarIcon4} alt="" src="/avatar2.svg" />
            <img
              className={styles.iconAwesomeBuilding}
              alt=""
              src="/icon-awesomebuilding.svg"
            />
          </div>
        </div>
        <b className={styles.partnership}>Government Entity​</b>
        <b className={styles.nexusHealthEquity}>Nexus Health Equity Fund</b>
        <b className={styles.b}>$1,500,000</b>
      </div>
      <div className={styles.groupParent16}>
        <div className={styles.rectangleParent12}>
          <div className={styles.groupChild} />
          <div className={styles.label14}>
            <b className={styles.labelcontent12}>pending review</b>
          </div>
          <div className={styles.smithGovtAgencyContainer}>
            <div className={styles.smithPartnership}>Smith Capital</div>
            <img className={styles.avatarIcon4} alt="" src="/avatar2.svg" />
            <img
              className={styles.iconAwesomeBuilding}
              alt=""
              src="/icon-awesomebuilding.svg"
            />
          </div>
        </div>
        <b className={styles.partnership}>Financial Institution</b>
        <b className={styles.nexusHealthEquity}>Nexus Health Equity Fund</b>
        <b className={styles.b}>$1,500,000</b>
      </div>
      <div className={styles.groupParent17}>
        <div className={styles.rectangleParent12}>
          <div className={styles.groupChild} />
          <div className={styles.label14}>
            <b className={styles.labelcontent12}>pending review</b>
          </div>
          <div className={styles.smithGovtAgencyContainer}>
            <div className={styles.smithPartnership}>Smith IV Fund</div>
            <img className={styles.avatarIcon4} alt="" src="/avatar2.svg" />
            <img
              className={styles.iconAwesomeBuilding}
              alt=""
              src="/icon-awesomebuilding.svg"
            />
          </div>
        </div>
        <b className={styles.partnership}>Pension Fund</b>
        <b className={styles.nexusHealthEquity}>Nexus Health Equity Fund</b>
        <b className={styles.b}>$1,500,000</b>
      </div>
      <div className={styles.groupParent18}>
        <div className={styles.rectangleParent12}>
          <div className={styles.groupChild} />
          <div className={styles.label14}>
            <b className={styles.labelcontent12}>pending review</b>
          </div>
          <div className={styles.smithTrustParent}>
            <div className={styles.smithPartnership}>Smith Equity Fund</div>
            <img className={styles.avatarIcon} alt="" src="/avatar1.svg" />
            <img
              className={styles.iconAwesomeSuitcase}
              alt=""
              src="/icon-awesomesuitcase.svg"
            />
          </div>
        </div>
        <b className={styles.partnership}>Hedge Fund</b>
        <b className={styles.nexusHealthEquity}>Nexus Health Equity Fund</b>
        <b className={styles.b}>$1,500,000</b>
      </div>
      <div className={styles.subscriptionStatusParent}>
        <div className={styles.subscriptionStatus}>Subscription Status​</div>
        <div className={styles.name}>Name</div>
        <img className={styles.polygonIcon} alt="" src="/polygon-10.svg" />
        <img className={styles.groupChild9} alt="" src="/polygon-10.svg" />
      </div>
      <div className={styles.groupParent19}>
        <div className={styles.amountGroup}>
          <div className={styles.amount}>Amount</div>
          <img className={styles.groupChild10} alt="" src="/polygon-10.svg" />
        </div>
        <div className={styles.fundNameGroup}>
          <div className={styles.fundName}>Fund Name</div>
          <img className={styles.groupChild10} alt="" src="/polygon-10.svg" />
        </div>
        <div className={styles.typeGroup}>
          <div className={styles.type}>Type</div>
          <img className={styles.groupChild10} alt="" src="/polygon-10.svg" />
        </div>
        <div className={styles.rectangleContainer}>
          <div className={styles.subscriptionStatus}>Subscription Status​</div>
          <div className={styles.name}>Name</div>
          <img className={styles.polygonIcon} alt="" src="/polygon-10.svg" />
          <img className={styles.groupChild9} alt="" src="/polygon-10.svg" />
        </div>
      </div>
      <div className={styles.groupParent20}>
        <div className={styles.amountGroup}>
          <div className={styles.amount}>Amount</div>
          <img className={styles.groupChild10} alt="" src="/polygon-10.svg" />
        </div>
        <div className={styles.fundNameGroup}>
          <div className={styles.fundName}>Fund Name</div>
          <img className={styles.groupChild10} alt="" src="/polygon-10.svg" />
        </div>
        <div className={styles.typeGroup}>
          <div className={styles.type}>Type</div>
          <img className={styles.groupChild10} alt="" src="/polygon-10.svg" />
        </div>
        <div className={styles.rectangleContainer}>
          <div className={styles.subscriptionStatus}>Subscription Status​</div>
          <div className={styles.name}>Name</div>
          <img className={styles.polygonIcon} alt="" src="/polygon-10.svg" />
          <img className={styles.groupChild9} alt="" src="/polygon-10.svg" />
        </div>
      </div>
      <div className={styles.buttonNormal}>
        <div className={styles.buttonNormalChild} />
        <div className={styles.loadMore}>Load More</div>
      </div>
      <div className={styles.buttonNormal1}>
        <div className={styles.buttonNormalChild} />
        <div className={styles.loadMore}>Load More</div>
      </div>
      <MainHeader />
      <img
        className={styles.component2093}
        alt=""
        src="/component-209--5.svg"
      />
      <div className={styles.navDrawerLeft}>
        <div className={styles.rectangleContainer}>
          <div className={styles.rectangleContainer}>
            <img className={styles.path428Icon} alt="" src="/path-428.svg" />
            <div className={styles.leftNavButton}>
              <div className={styles.rectangleContainer} />
              <img
                className={styles.storefrontFill0Wght400Grad0Icon}
                alt=""
                src="/storefront-fill0-wght400-grad0-opsz48.svg"
              />
            </div>
            <div className={styles.leftNavButton1}>
              <div className={styles.rectangleContainer} />
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
              <div className={styles.rectangleContainer}>
                <img
                  className={styles.iconAwesomeTasks}
                  alt=""
                  src="/icon-awesometasks.svg"
                />
              </div>
            </div>
            <div className={styles.leftNavButton3}>
              <div className={styles.rectangleContainer}>
                <img
                  className={styles.manageAccountsFill0Wght400Icon}
                  alt=""
                  src="/manage-accounts-fill0-wght400-grad0-opsz48-1.svg"
                />
              </div>
            </div>
            <div className={styles.leftNavButton4}>
              <div className={styles.rectangleContainer}>
                <img
                  className={styles.homeStorageFill0Wght400GraIcon}
                  alt=""
                  src="/home-storage-fill0-wght400-grad0-opsz48.svg"
                />
              </div>
            </div>
            <div className={styles.leftNavButton5}>
              <div className={styles.rectangleContainer} />
              <img
                className={styles.settingsFill0Wght400Grad0OIcon}
                alt=""
                src="/settings-fill0-wght400-grad0-opsz48.svg"
              />
            </div>
            <div className={styles.leftNavButton6}>
              <div className={styles.rectangleContainer} />
              <img
                className={styles.logoutFill0Wght400Grad0OpsIcon}
                alt=""
                src="/logout-fill0-wght400-grad0-opsz48.svg"
              />
            </div>
            <div className={styles.leftNavButton7}>
              <div className={styles.leftNavButtonChild3} />
              <div className={styles.rectangleContainer}>
                <img
                  className={styles.homeFill1Wght400Grad0Opsz4Icon}
                  alt=""
                  src="/home-fill1-wght400-grad0-opsz48.svg"
                />
              </div>
              <div className={styles.leftNavButtonChild4} />
            </div>
            <div className={styles.leftNavButton8}>
              <div className={styles.rectangleContainer} />
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

export default ComplianceOfficerDashboard;
