import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import ComplianceOfficerDashboard1 from "./pages/ComplianceOfficerDashboard1";
import FundDetail from "./pages/FundDetail";
import ComplianceOfficerDashboard4 from "./pages/ComplianceOfficerDashboard4";
import ComplianceOfficerDashboard3 from "./pages/ComplianceOfficerDashboard3";
import ComplianceOfficerDashboard2 from "./pages/ComplianceOfficerDashboard2";
import ComplianceOfficerDashboard from "./pages/ComplianceOfficerDashboard";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/fund-detail":
        title = "";
        metaDescription = "";
        break;
      case "/compliance-officer-dashboard-edit-status":
        title = "";
        metaDescription = "";
        break;
      case "/compliance-officer-dashboard-detail":
        title = "";
        metaDescription = "";
        break;
      case "/compliance-officer-dashboard-document-uploaded":
        title = "";
        metaDescription = "";
        break;
      case "/compliance-officer-dashboard":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<ComplianceOfficerDashboard1 />} />
      <Route path="/fund-detail" element={<FundDetail />} />
      <Route
        path="/compliance-officer-dashboard-edit-status"
        element={<ComplianceOfficerDashboard4 />}
      />
      <Route
        path="/compliance-officer-dashboard-detail"
        element={<ComplianceOfficerDashboard3 />}
      />
      <Route
        path="/compliance-officer-dashboard-document-uploaded"
        element={<ComplianceOfficerDashboard2 />}
      />
      <Route
        path="/compliance-officer-dashboard"
        element={<ComplianceOfficerDashboard />}
      />
    </Routes>
  );
}
export default App;
