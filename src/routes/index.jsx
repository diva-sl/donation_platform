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

import NotFound from "../pages/NotFound";

const Router = () => {
  return (
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
      </Route>

      {/* Protected Routes */}

      <Route element={<ProtectedLayout />}>
        <Route path="/profile" element={<Profile />} />

        <Route path="/dashboard" element={<Dashboard />} />
      </Route>

      {/* 404 */}

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
