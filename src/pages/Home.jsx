import HeroSection from "../components/home/HeroSection";
import TrustedSection from "../components/home/TrustedSection";
import ImpactStats from "../components/home/ImpactStats";
import CategorySection from "../components/home/CategorySection";
import FeaturedCampaigns from "../components/home/FeaturedCampaigns";
import SuccessStories from "../components/home/SuccessStories";
import Partners from "../components/home/Partners";
import Testimonials from "../components/home/Testimonials";
import RecentDonations from "../components/home/RecentDonations";
import Newsletter from "../components/home/Newsletter";

const Home = () => {
  return (
    <>
      <HeroSection />
      <TrustedSection />
      <ImpactStats />
      <CategorySection />
      <FeaturedCampaigns />
      <SuccessStories />
      <Testimonials />
      <Partners />
      <RecentDonations />
      <Newsletter />
    </>
  );
};

export default Home;
