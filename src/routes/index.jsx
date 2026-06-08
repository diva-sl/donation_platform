import { Routes, Route } from "react-router-dom";

import PublicLayout from "../layouts/PublicLayout";
import ProtectedLayout from "../layouts/ProtectedLayout";

import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";

import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";

import CampaignList from "../pages/campaigns/CampaignList";
import CampaignDetails from "../pages/campaigns/CampaignDetails";

import StartFundraiser from "../pages/fundraiser/StartFundraiser";

import PrivacyPolicy from "../pages/legal/PrivacyPolicy";
import Terms from "../pages/legal/Terms";
import Supporters from "../pages/campaigns/Supporters";

import NotFound from "../pages/NotFound";
import ScrollToTop from "../components/common/ScrollToTop";
import CauseDetails from "../pages/causes/CauseDetails";
import Disclaimer from "../pages/legal/Disclaimer";
import CookiePolicy from "../pages/legal/CookiePolicy";
import CampaignGuidelines from "../pages/legal/CampaignGuidelines";
import CommunityGuidelines from "../pages/legal/CommunityGuidelines";
import FAQ from "../pages/legal/FAQ";
import RefundPolicy from "../pages/legal/RefundPolicy";

const Router = () => {
  return (
    <>
      <ScrollToTop />

      <Routes>
        {/* Public Routes */}

        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />

          <Route path="/campaigns" element={<CampaignList />} />

          <Route path="/campaign/:slug" element={<CampaignDetails />} />

          <Route path="/about" element={<About />} />

          <Route path="/contact" element={<Contact />} />

          <Route path="/start-fundraiser" element={<StartFundraiser />} />

          <Route path="/login" element={<Login />} />

          <Route path="/register" element={<Register />} />

          <Route path="/privacy-policy" element={<PrivacyPolicy />} />

          <Route path="/terms" element={<Terms />} />
          <Route path="/campaign/:slug/supporters" element={<Supporters />} />
          <Route path="/causes/:slug" element={<CauseDetails />} />
          <Route path="/faq" element={<FAQ />} />

          <Route path="/privacy-policy" element={<PrivacyPolicy />} />

          <Route path="/terms" element={<Terms />} />

          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/campaign-guidelines" element={<CampaignGuidelines />} />
          <Route
            path="/community-guidelines"
            element={<CommunityGuidelines />}
          />
        </Route>

        {/* Protected Routes */}

        <Route element={<ProtectedLayout />}>
          <Route path="/profile" element={<Profile />} />

          <Route path="/dashboard" element={<Dashboard />} />
        </Route>

        {/* 404 */}

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default Router;
