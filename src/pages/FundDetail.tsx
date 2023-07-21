import { FunctionComponent, useCallback } from "react";
import GroupComponent from "../components/GroupComponent";
import GroupComponent1 from "../components/GroupComponent1";
import { useNavigate } from "react-router-dom";
import MainHeader from "../components/MainHeader";
import styles from "./FundDetail.module.css";
const FundDetail: FunctionComponent = () => {
  const navigate = useNavigate();

  const onBackArrowButton1Click = useCallback(() => {
    navigate("/compliance-officer-dashboard-detail");
  }, [navigate]);

  const onLeftNavButton7Click = useCallback(() => {
    navigate("/compliance-officer-dashboard");
  }, [navigate]);

  return (
    <div className={styles.fundDetail}>
      <GroupComponent />
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.groupItem} />
        <div className={styles.tabNavButton}>
          <div className={styles.tabNavButtonChild} />
          <div className={styles.overview}>Overview</div>
          <img
            className={styles.iconMaterialInfoOutline}
            alt=""
            src="/icon-materialinfooutline1.svg"
          />
        </div>
        <div className={styles.tabNavButton1}>
          <div className={styles.tabNavButtonItem} />
          <div className={styles.rectangleGroup}>
            <div className={styles.groupInner} />
            <div className={styles.performance}>PERForMANCE</div>
            <img
              className={styles.monitoringFill0Wght400Grad0Icon}
              alt=""
              src="/monitoring-fill0-wght400-grad0-opsz48.svg"
            />
          </div>
        </div>
        <div className={styles.tabNavButton2}>
          <div className={styles.tabNavButtonItem} />
          <div className={styles.portfolio}>Portfolio</div>
          <img
            className={styles.domainFill0Wght400Grad0OpsIcon}
            alt=""
            src="/domain-fill0-wght400-grad0-opsz48.svg"
          />
        </div>
        <div className={styles.tabNavButton3}>
          <div className={styles.tabNavButtonItem} />
          <div className={styles.investors}>Investors</div>
          <img
            className={styles.handshakeFill0Wght400Grad0Icon}
            alt=""
            src="/handshake-fill0-wght400-grad0-opsz48.svg"
          />
        </div>
        <div className={styles.tabNavButton4}>
          <div className={styles.tabNavButtonItem} />
          <div className={styles.servicing}>Servicing</div>
          <img
            className={styles.designServicesFill0Wght400Icon}
            alt=""
            src="/design-services-fill0-wght400-grad0-opsz48.svg"
          />
        </div>
        <div className={styles.tabNavButton5}>
          <div className={styles.tabNavButtonItem} />
          <div className={styles.compliance}>Compliance</div>
          <img
            className={styles.factCheckFill0Wght400Grad0Icon}
            alt=""
            src="/fact-check-fill0-wght400-grad0-opsz48.svg"
          />
        </div>
      </div>
      <div className={styles.rectangleContainer}>
        <div className={styles.groupChild1} />
        <b className={styles.financialMetrics}>Financial Metrics</b>
        <img
          className={styles.moreVertFill0Wght400Grad0Icon}
          alt=""
          src="/more-vert-button--lp.svg"
        />
        <div className={styles.lineParent}>
          <div className={styles.lineDiv} />
          <div className={styles.groupChild2} />
          <div className={styles.totalSales}>
            <div className={styles.chart}>
              <div className={styles.value}>
                <div className={styles.div}>
                  <div className={styles.div1}>0</div>
                </div>
                <div className={styles.div2}>
                  <div className={styles.div1}>200</div>
                </div>
                <div className={styles.div4}>
                  <div className={styles.div1}>400</div>
                </div>
                <div className={styles.div6}>
                  <div className={styles.div1}>600</div>
                </div>
                <div className={styles.div8}>
                  <div className={styles.div1}>800</div>
                </div>
                <div className={styles.k}>
                  <div className={styles.div1}>1000</div>
                </div>
              </div>
              <div className={styles.month}>
                <div className={styles.widgetsElementsChart}>
                  <div className={styles.jan}>Dec</div>
                  <img className={styles.shapeIcon} alt="" src="/shape.svg" />
                </div>
                <div className={styles.widgetsElementsChart1}>
                  <div className={styles.jan1}>Nov</div>
                  <img className={styles.shapeIcon} alt="" src="/shape.svg" />
                </div>
                <div className={styles.widgetsElementsChart2}>
                  <div className={styles.jan2}>Oct</div>
                  <img className={styles.shapeIcon} alt="" src="/shape.svg" />
                </div>
                <div className={styles.widgetsElementsChart3}>
                  <b className={styles.jan}>Sep</b>
                  <img className={styles.shapeIcon} alt="" src="/shape1.svg" />
                </div>
                <div className={styles.widgetsElementsChart4}>
                  <div className={styles.jan4}>Aug</div>
                  <img className={styles.shapeIcon} alt="" src="/shape.svg" />
                </div>
                <div className={styles.widgetsElementsChart5}>
                  <div className={styles.jan5}>Jul</div>
                  <img className={styles.shapeIcon} alt="" src="/shape.svg" />
                </div>
                <div className={styles.widgetsElementsChart6}>
                  <div className={styles.jan2}>Jun</div>
                  <img className={styles.shapeIcon} alt="" src="/shape.svg" />
                </div>
                <div className={styles.widgetsElementsChart7}>
                  <div className={styles.jan7}>May</div>
                  <img className={styles.shapeIcon} alt="" src="/shape.svg" />
                </div>
                <div className={styles.widgetsElementsChart8}>
                  <div className={styles.jan1}>Apr</div>
                  <img className={styles.shapeIcon} alt="" src="/shape.svg" />
                </div>
                <div className={styles.widgetsElementsChart9}>
                  <div className={styles.jan}>Mar</div>
                  <img className={styles.shapeIcon} alt="" src="/shape.svg" />
                </div>
                <div className={styles.widgetsElementsChart10}>
                  <div className={styles.jan2}>Feb</div>
                  <img className={styles.shapeIcon} alt="" src="/shape.svg" />
                </div>
                <div className={styles.widgetsElementsChart11}>
                  <div className={styles.jan11}>Jan</div>
                  <img className={styles.shapeIcon} alt="" src="/shape.svg" />
                </div>
              </div>
              <img className={styles.lineIcon} alt="" src="/line.svg" />
              <img className={styles.lineIcon1} alt="" src="/line1.svg" />
              <img className={styles.lineIcon2} alt="" src="/line2.svg" />
              <img className={styles.lineIcon3} alt="" src="/line3.svg" />
              <div className={styles.tooltipPointerDown}>
                <b className={styles.titlee}>September, 2022</b>
                <div className={styles.dataKey}>
                  <div className={styles.data}>
                    <div className={styles.sales} />
                    <div className={styles.div10}>Private Debt</div>
                    <div className={styles.onlineSales}>$1,400,000</div>
                  </div>
                </div>
                <img
                  className={styles.tooltipbgIcon}
                  alt=""
                  src="/tooltipbg.svg"
                />
              </div>
            </div>
            <div className={styles.title}>Capital Deployment 2023</div>
            <div className={styles.company1Parent}>
              <div className={styles.company1}>Company 1</div>
              <div className={styles.company2}>Company 2</div>
              <div className={styles.company3}>Company 3</div>
              <div className={styles.company4}>Company 4</div>
              <div className={styles.company5}>Company 5</div>
              <div className={styles.company6}>Company 6</div>
              <img
                className={styles.purpleellipseIcon}
                alt=""
                src="/purpleellipse.svg"
              />
              <img
                className={styles.purpleellipseIcon1}
                alt=""
                src="/purpleellipse1.svg"
              />
              <img
                className={styles.purpleellipseIcon2}
                alt=""
                src="/purpleellipse2.svg"
              />
              <img
                className={styles.yellowellipseIcon}
                alt=""
                src="/yellowellipse.svg"
              />
              <img
                className={styles.redellipseIcon}
                alt=""
                src="/redellipse.svg"
              />
              <img
                className={styles.blueellipseIcon}
                alt=""
                src="/blueellipse.svg"
              />
            </div>
          </div>
          <div className={styles.selectboxfilter}>
            <div className={styles.selectboxbg} />
            <div className={styles.allCompanies}>2023</div>
            <img className={styles.smallDownIcon} alt="" src="/smalldown.svg" />
          </div>
          <div className={styles.selectboxfilter1}>
            <div className={styles.selectboxbg} />
            <div className={styles.allCompanies}>All Companies</div>
            <img className={styles.smallDownIcon} alt="" src="/smalldown.svg" />
          </div>
        </div>
        <div className={styles.selectboxfilter2}>
          <div className={styles.selectboxbg} />
          <div className={styles.allCompanies}>Select Chart</div>
          <img className={styles.smallDownIcon} alt="" src="/smalldown.svg" />
        </div>
      </div>
      <div className={styles.groupDiv}>
        <div className={styles.groupChild1} />
        <b className={styles.fundPerformance}>Fund Performance</b>
        <div className={styles.lineGroup}>
          <div className={styles.groupChild4} />
          <div className={styles.groupChild5} />
          <div className={styles.groupChild6} />
          <div className={styles.groupChild7} />
          <div className={styles.groupChild8} />
          <div className={styles.groupChild9} />
          <div className={styles.groupChild10} />
          <div className={styles.groupChild2} />
          <div className={styles.netAssetValue}>Net Asset Value (NAV)​</div>
          <div className={styles.internalRateOf}>
            Internal Rate of Return (IRR)​
          </div>
          <div className={styles.multipleOfInvested}>
            Multiple of Invested Capital (MOIC)​
          </div>
          <div className={styles.paidInCapital}>Paid In Capital (PIC)​</div>
          <div className={styles.distributedToPaid}>
            Distributed to Paid in Capital (DPI)​
          </div>
          <div className={styles.residualValueTo}>
            Residual Value to Paid in Capital (RVPI)​
          </div>
          <div className={styles.totalValueTo}>
            Total Value to Paid in Capital (TVPI)​
          </div>
          <b className={styles.b}>$81,702</b>
          <b className={styles.b1}>24.5%</b>
          <b className={styles.b2}>0</b>
          <b className={styles.b3}>106.3%</b>
          <b className={styles.b4}>0.59</b>
          <b className={styles.b5}>0.70</b>
          <b className={styles.b6}>1.29</b>
        </div>
        <div className={styles.selectboxfilter3}>
          <div className={styles.selectboxbg} />
          <div className={styles.allCompanies}>2023</div>
          <img className={styles.smallDownIcon} alt="" src="/smalldown.svg" />
        </div>
        <img
          className={styles.moreVertFill0Wght400Grad0Icon1}
          alt=""
          src="/more-vert-button--lp.svg"
        />
        <div className={styles.componeseeMoreButtonnt254}>
          <div className={styles.seeMore}>See More</div>
          <img
            className={styles.iconMaterialArrowForward}
            alt=""
            src="/icon-materialarrowforward.svg"
          />
        </div>
      </div>
      <div className={styles.fundDetailChild} />
      <div className={styles.rectangleParent1}>
        <div className={styles.groupChild1} />
        <div className={styles.scrollGroup13}>
          <img className={styles.path455Icon} alt="" src="/path-455.svg" />
          <div className={styles.reneeWilliams}>Renee Williams</div>
          <img className={styles.path455Icon1} alt="" src="/path-455.svg" />
          <div className={styles.reneeWilliams1}>Renee Williams</div>
          <img className={styles.path455Icon2} alt="" src="/path-455.svg" />
          <div className={styles.steeleAndersen}>Steele Andersen</div>
          <img className={styles.path455Icon3} alt="" src="/path-455.svg" />
          <div className={styles.steeleAndersen1}>Steele Andersen</div>
          <img className={styles.path455Icon4} alt="" src="/path-455.svg" />
          <div className={styles.reneeWilliams2}>Renee Williams</div>
          <img className={styles.path455Icon5} alt="" src="/path-455.svg" />
          <div className={styles.reneeWilliams3}>Renee Williams</div>
          <img className={styles.path473Icon} alt="" src="/path-4551.svg" />
          <div className={styles.allanFrank}>Allan Frank</div>
          <img className={styles.path455Icon7} alt="" src="/path-4551.svg" />
          <div className={styles.hecklerLlp}>Heckler LLP</div>
          <img className={styles.path455Icon8} alt="" src="/path-4551.svg" />
          <div className={styles.hecklerLlp1}>Heckler LLP</div>
          <img className={styles.path455Icon9} alt="" src="/path-4551.svg" />
          <div className={styles.alfredTigTrust}>Alfred Tig Trust</div>
          <img className={styles.path455Icon10} alt="" src="/path-4551.svg" />
          <div className={styles.alfredTigTrust1}>Alfred Tig Trust</div>
          <img className={styles.path455Icon11} alt="" src="/path-4551.svg" />
          <div className={styles.montgomeryWill}>Montgomery Will…</div>
          <img className={styles.path455Icon12} alt="" src="/path-4551.svg" />
          <div className={styles.montgomeryWill1}>Montgomery Will…</div>
          <div className={styles.individualParent}>
            <div className={styles.individual}>Individual</div>
            <div className={styles.profileProcess}>Individual</div>
            <div className={styles.legalReview}>Individual</div>
            <div className={styles.individual3}>Individual</div>
            <div className={styles.complete}>Individual</div>
            <div className={styles.individual5}>Individual</div>
            <div className={styles.individual6}>Individual</div>
            <div className={styles.pensionFund}>Pension Fund</div>
            <div className={styles.pensionFund1}>Pension Fund</div>
            <div className={styles.trust}>Trust</div>
            <div className={styles.trust1}>Trust</div>
            <div className={styles.fundsCommitted}>Individual</div>
            <div className={styles.individual8}>Individual</div>
          </div>
          <div className={styles.waitingOnFundsParent}>
            <div className={styles.individual}>Waiting on Funds</div>
            <div className={styles.profileProcess}>Profile Process</div>
            <div className={styles.legalReview}>Legal Review</div>
            <div className={styles.individual3}>—</div>
            <div className={styles.complete}>Complete</div>
            <div className={styles.individual5}>—</div>
            <div className={styles.individual6}>Profile Process</div>
            <div className={styles.pensionFund}>Docs to Sign</div>
            <div className={styles.pensionFund1}>Docs to Sign</div>
            <div className={styles.trust}>FM Approval</div>
            <div className={styles.trust1}>—</div>
            <div className={styles.fundsCommitted}>Funds Committed</div>
            <div className={styles.individual8}>—</div>
          </div>
          <img
            className={styles.scrollGroup13Child}
            alt=""
            src="/ellipse-92.svg"
          />
          <img
            className={styles.scrollGroup13Item}
            alt=""
            src="/ellipse-92.svg"
          />
          <img
            className={styles.scrollGroup13Inner}
            alt=""
            src="/ellipse-92.svg"
          />
          <img className={styles.ellipseIcon} alt="" src="/ellipse-92.svg" />
          <img
            className={styles.scrollGroup13Child1}
            alt=""
            src="/ellipse-97.svg"
          />
          <img
            className={styles.scrollGroup13Child2}
            alt=""
            src="/ellipse-97.svg"
          />
          <img
            className={styles.scrollGroup13Child3}
            alt=""
            src="/ellipse-93.svg"
          />
          <img
            className={styles.scrollGroup13Child4}
            alt=""
            src="/ellipse-93.svg"
          />
          <img
            className={styles.scrollGroup13Child5}
            alt=""
            src="/ellipse-93.svg"
          />
        </div>
        <b className={styles.alertsNotifications}>{`Alerts & Notifications`}</b>
        <div className={styles.groupChild13} />
        <img
          className={styles.moreVertFill0Wght400Grad0Icon2}
          alt=""
          src="/more-vert-button--lp.svg"
        />
        <div className={styles.filterButton}>
          <div className={styles.status}>Status</div>
          <img
            className={styles.filterButtonChild}
            alt=""
            src="/polygon-101.svg"
          />
        </div>
        <div className={styles.filterButton1}>
          <div className={styles.status}>Name</div>
          <img
            className={styles.filterButtonChild}
            alt=""
            src="/polygon-101.svg"
          />
        </div>
        <div className={styles.filterButton2}>
          <div className={styles.status}>TYPE</div>
          <img
            className={styles.filterButtonChild}
            alt=""
            src="/polygon-101.svg"
          />
        </div>
        <div className={styles.groupChild14} />
      </div>
      <b className={styles.fundStatus}>Fund Status</b>
      <div className={styles.label}>
        <b className={styles.labelcontent}>Open</b>
      </div>
      <div className={styles.overview1}>Overview</div>
      <GroupComponent1 portfolioCompanies="Portfolio Companies" prop="12" />
      <div className={styles.rectangleParent2}>
        <div className={styles.groupChild15} />
        <div className={styles.currentIrr}>Current IRR</div>
        <div className={styles.targetIrr}>Target IRR</div>
        <b className={styles.b7}>18.5%</b>
        <b className={styles.b8}>24.5%</b>
      </div>
      <GroupComponent1
        portfolioCompanies="Goal Fund Amount"
        prop="$275,000,000"
        propLeft="1306px"
      />
      <GroupComponent1
        portfolioCompanies="Total Funded"
        prop="$138,000,000"
        propLeft="391px"
      />
      <GroupComponent1
        portfolioCompanies="Total Capital Committed"
        prop="$180,000,000"
        propLeft="162px"
      />
      <GroupComponent1
        portfolioCompanies="Capital Remaining"
        prop="$42,000,000"
        propLeft="620px"
      />
      <div className={styles.lineContainer}>
        <div className={styles.groupChild16} />
        <div className={styles.groupChild17} />
        <div className={styles.groupChild18} />
        <div className={styles.groupChild19} />
        <div className={styles.groupChild20} />
        <div className={styles.groupChild21} />
        <div className={styles.groupChild22} />
        <div className={styles.groupChild23} />
        <div className={styles.groupChild24} />
        <div className={styles.groupChild25} />
        <div className={styles.vintage}>Vintage</div>
        <div className={styles.firstClosingDate}>First Closing Date</div>
        <div className={styles.strategy}>Strategy</div>
        <div className={styles.geography}>Geography</div>
        <div className={styles.sector}>Sector</div>
        <div className={styles.currency}>Currency</div>
        <div className={styles.generalPartner}>General Partner</div>
        <div className={styles.fundManager}>Fund Manager</div>
        <b className={styles.b9}>2023</b>
        <b className={styles.jan2023}>Jan. 2023</b>
        <b className={styles.growth}>Growth</b>
        <b className={styles.unitedStates}>United States</b>
        <b className={styles.healthCare}>Health Care</b>
        <b className={styles.usd}>USD</b>
        <b className={styles.osageVenturePartners}>Osage Venture Partners</b>
        <b className={styles.williamSmith}>William Smith</b>
      </div>
      <div className={styles.rectangleParent3}>
        <div className={styles.groupChild1} />
        <div className={styles.moreVertFill0Wght400Grad0Parent}>
          <img
            className={styles.moreVertFill0Wght400Grad0Icon3}
            alt=""
            src="/more-vert-button--lp.svg"
          />
          <b className={styles.fundTransactions}>Fund Transactions</b>
        </div>
        <div className={styles.scrollGroup15Parent}>
          <div className={styles.scrollGroup15}>
            <img className={styles.path475Icon} alt="" src="/path-4551.svg" />
            <img className={styles.path477Icon} alt="" src="/path-4551.svg" />
            <img className={styles.path479Icon} alt="" src="/path-4551.svg" />
            <img className={styles.path476Icon} alt="" src="/path-4551.svg" />
            <img className={styles.path478Icon} alt="" src="/path-4551.svg" />
            <img className={styles.path474Icon} alt="" src="/path-4551.svg" />
            <img className={styles.path455Icon} alt="" src="/path-455.svg" />
            <img className={styles.path468Icon} alt="" src="/path-455.svg" />
            <img className={styles.path469Icon} alt="" src="/path-455.svg" />
            <img className={styles.path470Icon} alt="" src="/path-455.svg" />
            <img className={styles.path471Icon} alt="" src="/path-455.svg" />
            <img className={styles.path472Icon} alt="" src="/path-455.svg" />
            <img className={styles.path473Icon} alt="" src="/path-4551.svg" />
            <div className={styles.capitalCall}>Capital Call</div>
            <div className={styles.capitalCall1}>Capital Call</div>
            <div className={styles.capitalCall2}>Capital Call</div>
            <div className={styles.capitalCall3}>Capital Call</div>
            <div className={styles.capitalCall4}>Capital Call</div>
            <div className={styles.capitalCall5}>Capital Call</div>
            <div className={styles.distribution}>Distribution</div>
            <div className={styles.distribution1}>Distribution</div>
            <div className={styles.distribution2}>Distribution</div>
            <div className={styles.distribution3}>Distribution</div>
            <div className={styles.distribution4}>Distribution</div>
            <div className={styles.distribution5}>Distribution</div>
            <div className={styles.distribution6}>Distribution</div>
            <div className={styles.nexusHealthcareEquity}>
              Nexus Healthcare Equity
            </div>
            <div className={styles.nexusHealthcareEquity1}>
              Nexus Healthcare Equity
            </div>
            <div className={styles.nexusHealthcareEquity2}>
              Nexus Healthcare Equity
            </div>
            <div className={styles.nexusHealthcareEquity3}>
              Nexus Healthcare Equity
            </div>
            <div className={styles.nexusHealthcareEquity4}>
              Nexus Healthcare Equity
            </div>
            <div className={styles.nexusHealthcareEquity5}>
              Nexus Healthcare Equity
            </div>
            <div className={styles.nexusHealthcareEquity6}>
              Nexus Healthcare Equity
            </div>
            <div className={styles.nexusHealthcareEquity7}>
              Nexus Healthcare Equity
            </div>
            <div className={styles.nexusHealthcareEquity8}>
              Nexus Healthcare Equity
            </div>
            <div className={styles.nexusHealthcareEquity9}>
              Nexus Healthcare Equity
            </div>
            <div className={styles.nexusHealthcareEquity10}>
              Nexus Healthcare Equity
            </div>
            <div className={styles.nexusHealthcareEquity11}>
              Nexus Healthcare Equity
            </div>
            <div className={styles.nexusHealthcareEquity12}>
              Nexus Healthcare Equity
            </div>
            <div className={styles.aFrank}>A. Frank</div>
            <div className={styles.aFrank1}>A. Frank</div>
            <div className={styles.aFrank2}>A. Frank</div>
            <div className={styles.aFrank3}>A. Frank</div>
            <div className={styles.aFrank4}>A. Frank</div>
            <div className={styles.aFrank5}>A. Frank</div>
            <div className={styles.aFrank6}>A. Frank</div>
            <div className={styles.aFrank7}>A. Frank</div>
            <div className={styles.aFrank8}>A. Frank</div>
            <div className={styles.aFrank9}>A. Frank</div>
            <div className={styles.aFrank10}>A. Frank</div>
            <div className={styles.aFrank11}>A. Frank</div>
            <div className={styles.aFrank12}>A. Frank</div>
            <div className={styles.div17}>$500,000</div>
            <div className={styles.div18}>$500,000</div>
            <div className={styles.div19}>$500,000</div>
            <div className={styles.div20}>$500,000</div>
            <div className={styles.div21}>$500,000</div>
            <div className={styles.div22}>$500,000</div>
            <div className={styles.div23}>($25,000)</div>
            <div className={styles.div24}>($25,000)</div>
            <div className={styles.div25}>($25,000)</div>
            <div className={styles.div26}>($25,000)</div>
            <div className={styles.div27}>($25,000)</div>
            <div className={styles.div28}>($25,000)</div>
            <div className={styles.div29}>($25,000)</div>
            <div className={styles.div30}>09/23/22</div>
            <div className={styles.div31}>09/23/22</div>
            <div className={styles.div32}>09/23/22</div>
            <div className={styles.div33}>09/23/22</div>
            <div className={styles.div34}>09/23/22</div>
            <div className={styles.div35}>09/23/22</div>
            <div className={styles.div36}>08/10/22</div>
            <div className={styles.div37}>08/10/22</div>
            <div className={styles.div38}>08/10/22</div>
            <div className={styles.div39}>08/10/22</div>
            <div className={styles.div40}>08/10/22</div>
            <div className={styles.div41}>08/10/22</div>
            <div className={styles.div42}>08/10/22</div>
          </div>
          <div className={styles.groupChild27} />
          <div className={styles.filterButton3}>
            <div className={styles.status}>Amount</div>
            <img
              className={styles.filterButtonChild}
              alt=""
              src="/polygon-101.svg"
            />
          </div>
          <div className={styles.filterButton4}>
            <div className={styles.status}>Date</div>
            <img
              className={styles.filterButtonChild}
              alt=""
              src="/polygon-101.svg"
            />
          </div>
          <div className={styles.filterButton5}>
            <div className={styles.status}>Name</div>
            <img
              className={styles.filterButtonChild}
              alt=""
              src="/polygon-101.svg"
            />
          </div>
          <div className={styles.filterButton6}>
            <div className={styles.status}>Type</div>
            <img
              className={styles.filterButtonChild}
              alt=""
              src="/polygon-101.svg"
            />
          </div>
          <div className={styles.filterButton7}>
            <div className={styles.status}>Investor Name</div>
            <img
              className={styles.filterButtonChild}
              alt=""
              src="/polygon-101.svg"
            />
          </div>
          <div className={styles.groupChild28} />
        </div>
        <div className={styles.selectboxfilter4}>
          <div className={styles.selectboxbg} />
          <div className={styles.allCompanies}>2023</div>
          <img className={styles.smallDownIcon} alt="" src="/smalldown.svg" />
        </div>
      </div>
      <div className={styles.selectboxfilter5}>
        <div className={styles.selectboxbg} />
        <div className={styles.allCompanies}>2023</div>
        <img className={styles.smallDownIcon} alt="" src="/smalldown.svg" />
      </div>
      <div className={styles.componeseeMoreButtonnt2541}>
        <div className={styles.seeMore}>See More</div>
        <img
          className={styles.iconMaterialArrowForward}
          alt=""
          src="/icon-materialarrowforward.svg"
        />
      </div>
      <div className={styles.groupParent}>
        <div className={styles.maskGroup35Parent}>
          <div className={styles.groupChild1} />
          <div className={styles.scrollGroup14Parent}>
            <div className={styles.scrollGroup14}>
              <div className={styles.expandedWeightLossDrugCoveParent}>
                <b className={styles.expandedWeightLossContainer}>
                  <p
                    className={styles.expandedWeightLoss}
                  >{`Expanded weight loss drug coverage could cost Medicare `}</p>
                  <p className={styles.expandedWeightLoss}>billions</p>
                </b>
                <img
                  className={styles.rectangleIcon}
                  alt=""
                  src="/rectangle-2145@2x.png"
                />
                <div className={styles.healthCare1}>Health Care</div>
                <div className={styles.byJacobRobbins}>By Jacob Robbins</div>
                <div className={styles.may52023}>May 5, 2023</div>
              </div>
              <div className={styles.weightWatchersEntersTeleheaParent}>
                <b className={styles.weightWatchersEntersContainer}>
                  <p
                    className={styles.expandedWeightLoss}
                  >{`Weight Watchers enters telehealth prescription drug `}</p>
                  <p className={styles.expandedWeightLoss}>
                    space with Sequence acquisition
                  </p>
                </b>
                <img
                  className={styles.groupChild30}
                  alt=""
                  src="/rectangle-21451@2x.png"
                />
                <div className={styles.healthCare2}>Health Care</div>
                <div className={styles.byJordanRubio}>{`By Jordan Rubio `}</div>
                <div className={styles.may32023}>May 3, 2023</div>
              </div>
              <div className={styles.israelIvfStartupLooksToDeParent}>
                <b className={styles.weightWatchersEntersContainer}>
                  <p
                    className={styles.expandedWeightLoss}
                  >{`Israel IVF startup looks to democratize infertility coverage `}</p>
                  <p className={styles.expandedWeightLoss}>in the US</p>
                </b>
                <img
                  className={styles.groupChild30}
                  alt=""
                  src="/rectangle-2144@2x.png"
                />
                <div className={styles.healthCareTech}>Health Care Tech</div>
                <div className={styles.bySusanMorse}>By Susan Morse</div>
                <div className={styles.may192023}>May 19, 2023</div>
              </div>
              <div className={styles.rectangleParent5}>
                <img
                  className={styles.groupChild30}
                  alt=""
                  src="/rectangle-21441@2x.png"
                />
                <div className={styles.healthCare3}>Health Care</div>
                <div className={styles.byMarinaTemkin}>By Marina Temkin</div>
                <div className={styles.may42023}>May 4, 2023</div>
                <b className={styles.weightWatchersEntersContainer}>
                  <p
                    className={styles.expandedWeightLoss}
                  >{`CVS and Signify’s $8 billion deal expected to close this `}</p>
                  <p className={styles.expandedWeightLoss}>week</p>
                </b>
              </div>
            </div>
            <img className={styles.path460Icon} alt="" src="/path-460.svg" />
            <img className={styles.path461Icon} alt="" src="/path-461.svg" />
          </div>
          <b className={styles.fundNews}>Fund News</b>
          <img
            className={styles.moreVertButtonIcon}
            alt=""
            src="/more-vert-button--lp.svg"
          />
        </div>
        <div className={styles.selectboxfilter6}>
          <div className={styles.selectboxbg} />
          <div className={styles.allCompanies}>Topics</div>
          <img className={styles.smallDownIcon} alt="" src="/smalldown.svg" />
        </div>
        <div className={styles.componeseeMoreButtonnt2542}>
          <div className={styles.seeMore}>See More</div>
          <img
            className={styles.iconMaterialArrowForward}
            alt=""
            src="/icon-materialarrowforward.svg"
          />
        </div>
      </div>
      <div className={styles.rectangleParent6}>
        <div className={styles.groupChild} />
        <div className={styles.groupItem} />
        <div className={styles.tabNavButton}>
          <div className={styles.tabNavButtonChild} />
          <div className={styles.overview}>Overview</div>
          <img
            className={styles.iconMaterialInfoOutline}
            alt=""
            src="/icon-materialinfooutline1.svg"
          />
        </div>
        <div className={styles.tabNavButton1}>
          <div className={styles.tabNavButtonItem} />
          <div className={styles.rectangleGroup}>
            <div className={styles.groupInner} />
            <div className={styles.performance}>PERForMANCE</div>
            <img
              className={styles.monitoringFill0Wght400Grad0Icon}
              alt=""
              src="/monitoring-fill0-wght400-grad0-opsz48.svg"
            />
          </div>
        </div>
        <div className={styles.tabNavButton2}>
          <div className={styles.tabNavButtonItem} />
          <div className={styles.portfolio}>Portfolio</div>
          <img
            className={styles.domainFill0Wght400Grad0OpsIcon}
            alt=""
            src="/domain-fill0-wght400-grad0-opsz48.svg"
          />
        </div>
        <div className={styles.tabNavButton3}>
          <div className={styles.tabNavButtonItem} />
          <div className={styles.investors}>Investors</div>
          <img
            className={styles.handshakeFill0Wght400Grad0Icon}
            alt=""
            src="/handshake-fill0-wght400-grad0-opsz48.svg"
          />
        </div>
        <div className={styles.tabNavButton4}>
          <div className={styles.tabNavButtonItem} />
          <div className={styles.servicing}>Servicing</div>
          <img
            className={styles.designServicesFill0Wght400Icon}
            alt=""
            src="/design-services-fill0-wght400-grad0-opsz48.svg"
          />
        </div>
        <div className={styles.tabNavButton5}>
          <div className={styles.tabNavButtonItem} />
          <div className={styles.compliance}>Compliance</div>
          <img
            className={styles.factCheckFill0Wght400Grad0Icon}
            alt=""
            src="/fact-check-fill0-wght400-grad0-opsz48.svg"
          />
        </div>
      </div>
      <div className={styles.fundDetailItem} />
      <div className={styles.fundDetailInner}>
        <div className={styles.maskGroup35Parent}>
          <img
            className={styles.maskGroup35}
            alt=""
            src="/mask-group-35@2x.png"
          />
          <div className={styles.path466Parent}>
            <img className={styles.path466Icon} alt="" src="/path-466.svg" />
            <div className={styles.nexusHealthEquity}>
              Nexus Health Equity Fund
            </div>
            <img
              className={styles.backArrowButton}
              alt=""
              src="/back-arrow-button1.svg"
            />
            <div className={styles.maskGroup38Wrapper}>
              <img
                className={styles.maskGroup38}
                alt=""
                src="/mask-group-381@2x.png"
              />
            </div>
            <div className={styles.vintage2023}>Vintage: 2023</div>
          </div>
        </div>
      </div>
      <div className={styles.groupContainer}>
        <img className={styles.groupIcon} alt="" src="/group-35@2x.png" />
        <div className={styles.path465Parent}>
          <img className={styles.path466Icon} alt="" src="/path-465.svg" />
          <div className={styles.nexusHealthEquity1}>
            Nexus Health Equity Fund
          </div>
          <img
            className={styles.backArrowButton1}
            alt=""
            src="/back-arrow-button1.svg"
            onClick={onBackArrowButton1Click}
          />
          <div className={styles.maskGroup38Container}>
            <img
              className={styles.maskGroup381}
              alt=""
              src="/mask-group-38@2x.png"
            />
          </div>
        </div>
      </div>
      <img
        className={styles.moreVertFill0Wght400Grad0Icon4}
        alt=""
        src="/more-vert-button--lp.svg"
      />
      <div className={styles.sector1}>Sector</div>
      <div className={styles.navDrawerLeft}>
        <div className={styles.maskGroup35Parent}>
          <div className={styles.maskGroup35Parent}>
            <img className={styles.path428Icon} alt="" src="/path-428.svg" />
            <div className={styles.leftNavButton}>
              <div className={styles.leftNavButtonChild} />
              <div className={styles.maskGroup35Parent} />
              <div className={styles.leftNavButtonInner} />
              <img
                className={styles.storefrontFill1Wght400Grad0Icon}
                alt=""
                src="/storefront-fill1-wght400-grad0-opsz48.svg"
              />
            </div>
            <div className={styles.leftNavButton1}>
              <div className={styles.maskGroup35Parent} />
              <img
                className={styles.notificationsFill0Wght400GrIcon}
                alt=""
                src="/notifications-fill0-wght400-grad0-opsz48.svg"
              />
              <img
                className={styles.leftNavButtonChild2}
                alt=""
                src="/ellipse-58.svg"
              />
              <div className={styles.div45}>4</div>
            </div>
            <div className={styles.leftNavButton2}>
              <div className={styles.maskGroup35Parent}>
                <img
                  className={styles.iconAwesomeTasks}
                  alt=""
                  src="/icon-awesometasks.svg"
                />
              </div>
            </div>
            <div className={styles.leftNavButton3}>
              <div className={styles.maskGroup35Parent}>
                <img
                  className={styles.manageAccountsFill0Wght400Icon}
                  alt=""
                  src="/manage-accounts-fill0-wght400-grad0-opsz48-1.svg"
                />
              </div>
            </div>
            <div className={styles.leftNavButton4}>
              <div className={styles.maskGroup35Parent}>
                <img
                  className={styles.homeStorageFill0Wght400GraIcon}
                  alt=""
                  src="/home-storage-fill0-wght400-grad0-opsz48.svg"
                />
              </div>
            </div>
            <div className={styles.leftNavButton5}>
              <div className={styles.maskGroup35Parent} />
              <img
                className={styles.settingsFill0Wght400Grad0OIcon}
                alt=""
                src="/settings-fill0-wght400-grad0-opsz48.svg"
              />
            </div>
            <div className={styles.leftNavButton6}>
              <div className={styles.maskGroup35Parent} />
              <img
                className={styles.logoutFill0Wght400Grad0OpsIcon}
                alt=""
                src="/logout-fill0-wght400-grad0-opsz48.svg"
              />
            </div>
            <div
              className={styles.leftNavButton7}
              onClick={onLeftNavButton7Click}
            >
              <div className={styles.maskGroup35Parent} />
              <img
                className={styles.homeFill0Wght300Grad0Opsz4Icon}
                alt=""
                src="/home-fill0-wght300-grad0-opsz40.svg"
              />
            </div>
            <div className={styles.leftNavButton8}>
              <div className={styles.maskGroup35Parent} />
              <img
                className={styles.domainFill0Wght400Grad0OpsIcon2}
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
        className={styles.component2094}
        alt=""
        src="/component-209--4.svg"
      />
      <div className={styles.list}>
        <div className={styles.div46}>
          <div className={styles.maskGroup35Parent}>
            <div className={styles.elevation} />
            <div className={styles.lightDevider}>
              <div className={styles.deviderLight} />
            </div>
            <div className={styles.iconActionFavorite24px}>
              <div className={styles.maskGroup35Parent} />
              <img className={styles.colorIcon} alt="" src="/-color1.svg" />
            </div>
            <div className={styles.states} />
            <div className={styles.subtitle1}>{`Subtitle 1 `}</div>
          </div>
        </div>
        <div className={styles.div47}>
          <div className={styles.maskGroup35Parent}>
            <div className={styles.elevation} />
            <div className={styles.lightDevider}>
              <div className={styles.deviderLight} />
            </div>
            <div className={styles.iconActionFavorite24px}>
              <div className={styles.maskGroup35Parent} />
              <img className={styles.colorIcon} alt="" src="/-color1.svg" />
            </div>
            <div className={styles.states} />
            <div className={styles.subtitle1}>{`Subtitle 1 `}</div>
          </div>
        </div>
        <div className={styles.div48}>
          <div className={styles.maskGroup35Parent}>
            <div className={styles.elevation} />
            <div className={styles.lightDevider}>
              <div className={styles.deviderLight} />
            </div>
            <div className={styles.iconActionFavorite24px}>
              <div className={styles.maskGroup35Parent} />
              <img className={styles.colorIcon} alt="" src="/-color1.svg" />
            </div>
            <div className={styles.states} />
            <div className={styles.subtitle1}>{`Subtitle 1 `}</div>
          </div>
        </div>
      </div>
      <div className={styles.scrollbar} />
    </div>
  );
};

export default FundDetail;
