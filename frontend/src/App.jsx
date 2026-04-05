import MainPage from './components/MainPage';
import GovHomePage from './components/GovHomePage';
import CompliancePage from './components/compliance/Compliance-Page';
import ComplianceLanding from './components/compliance/ComplianceLanding';
import ITLanding from './components/ITServices/ITLanding';
import FullStackDevelopmentLanding from './components/FullStackDevelopment/FullStackDevelopmentLanding';
import FullStackDevelopmentPage from './components/FullStackDevelopment/FullStackDevelopmentPage';
import WebsiteDevelopmentSetup from './components/FullStackDevelopment/WebsiteDevelopmentSetup';
import BusinessSolutions from './components/FullStackDevelopment/BusinessSolutions';
import OtherLanding from './components/other-services/OtherLanding';
import Contact from './components/contact/Contact';
import ITPage from './components/ITServices/ITPage';
import EdSolutions from './components/EducationServices/EdSolutionsPage';
import JunkEWasteLanding from './components/JunkEWaste/JunkEWasteLanding';
import JunkEWasteServicePage from './components/JunkEWaste/JunkEWasteServicePage';
import servicesData from './data/services.json';
import AdminLogin from './components/AdminLogin';
import AdminPage from './components/AdminPage';
import GovernmentLanding from './components/government/GovernmentLanding';

import {
  BrowserRouter as Router,
  Routes, Route
} from 'react-router-dom';

import './css/style.css';
import './css/bootstrap.min.css';

const App = () => {

  return (
    <Router>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/solutions' element={<ITLanding />} />
          <Route path='/full-stack-development' element={<FullStackDevelopmentLanding />} />
          <Route path='/full-stack-development/website-setup' element={<WebsiteDevelopmentSetup />} />
          <Route path='/full-stack-development/business-solutions' element={<BusinessSolutions />} />
          <Route path='/education-technology-solutions' element={<EdSolutions edsolutions={servicesData["Education Technology Solutions"]}/>} />
          <Route path='/compliance' element={<ComplianceLanding />} />
          <Route path='/other_services' element={<OtherLanding otherServices={servicesData['Office / Other Services']}/>} />
          <Route path='/contact' element={<Contact />} />


          {/* Compliance routes */}
          {servicesData["Compliance Services"].map(iso => (
            <Route 
              key={iso.name} 
              path={iso["page-link"]} 
              element={<CompliancePage iso={iso} />} 
            />
          ))}

          {/* IT Services routes */}
          {servicesData["IT Solutions"].map(service => (
            <Route
              key={service.name}
              path={service["page-link"]}
              element={service.id === 'full-stack-development' ? <FullStackDevelopmentPage service={service} /> : <ITPage service={service} />}
            />
          ))}

          {/* Junk & E-Waste routes */}
          <Route path='/junk-ewaste' element={<JunkEWasteLanding />} />
          {servicesData["Junk & E-Waste Services"].map(service => (
            <Route
              key={service.name}
              path={service["page-link"]}
              element={<JunkEWasteServicePage service={service} />}
            />
          ))}

          <Route path='/government' element={<GovernmentLanding />}/>
          <Route path='/admin/login' element={<AdminLogin />}/>
          <Route path='/admin/view/requests' element={<AdminPage />}/>
        </Routes>
    </Router>
  );
};

export default App;
