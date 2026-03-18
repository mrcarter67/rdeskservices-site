import Header from './assets/Header'
import Home from './Home'
import About from './About'
import CompliancyInfo from './compliance/Compliancy-Info'
import EdSolutions from './EducationServices/EdSolutions'
import ITServices from './ITServices/ITServices'
import Footer from './assets/Footer'
import OtherServices from './other-services/OtherServices'
import JunkEWasteSection from './JunkEWaste/JunkEWasteSection'
import Divider from './assets/Divider'
import AnnouncementBanner from './assets/AnnouncementBanner'

/**
 * Component for site landing page. 
 * 
 * @return {JSX.Element} - The MainPage component.
 */
const MainPage = () => {

  return (
      <div>
        <Header />
        <Home />
        <About />
        <AnnouncementBanner
          message="NEW: Junk Removal, E-Waste Disposal &amp; Office Moves — Call 831-529-4490 for a FREE estimate!"
          link='junk-ewaste'
          versionKey="rdesk-junk-ewaste-2025-03"
        />
        <Divider />
        <EdSolutions />
        <ITServices />
        <CompliancyInfo />
        <OtherServices />
        <Divider />
        <JunkEWasteSection />
        <Footer />
      </div>
  )
}

export default MainPage
