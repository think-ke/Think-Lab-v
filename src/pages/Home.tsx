import AboutLab from "../components/home/AboutLab";
import BackgroundShapes from "../components/home/BackgroundShapes";
import Hero from "../components/home/Hero";
import Navbar from "../components/layout/Navbar";
import AssessmentCTA from "../components/home/AssessmentCTA";
import CapFramework from "../components/home/CapFramework";
import InvestmentCycle from "../components/home/InvestmentCycle";
import VerificationHub from "../components/home/VerificationHub";
import Newsletter from "../components/home/Newsletter";
import Footer from "../components/home/Footer";
import Services from "../components/home/Services";
import OrgCarousel from "../components/common/OrgCarousel";
const Home = () => {
  return (
    <>
    <Navbar/>
    <BackgroundShapes />
    <Hero />
    <AboutLab />
    <Services/>
    
    <AssessmentCTA />
    <CapFramework />
    <InvestmentCycle />
    <VerificationHub />
    {/* <MarketplaceCTA /> */}
    <OrgCarousel />
    <Newsletter/>
    <Footer/>

    </>
  );
};

export default Home;