import AboutLab from "../components/home/AboutLab";
import BackgroundShapes from "../components/home/BackgroundShapes";
import Hero from "../components/home/Hero";
import Navbar from "../components/layout/Navbar";
import AssessmentCTA from "../components/home/AssessmentCTA";
import CapFramework from "../components/home/CapFramework";
import InvestmentCycle from "../components/home/InvestmentCycle";
import VerificationHub from "../components/home/VerificationHub";
import MarketplaceCTA from "../components/home/MarketplaceCTA";
import Newsletter from "../components/home/Newsletter";
import Footer from "../components/home/Footer";
import Services from "../components/home/Services";

const Home = () => {
  return (
    <>
    <Navbar/>
    <BackgroundShapes />
    <Hero />
    <Services/>
    <AboutLab />
    <AssessmentCTA />
    <CapFramework />
    <InvestmentCycle />
    <VerificationHub />
    <MarketplaceCTA />
    <Newsletter/>
    <Footer/>

    </>
  );
};

export default Home;