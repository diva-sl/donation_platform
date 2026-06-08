import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

import {
  HeartHandshake,
  ShieldCheck,
  BadgeCheck,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import Logo from "../../assets/logos/logo.png";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white">
      {/* Donation CTA */}
      <section className="border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 py-10">
          <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-3xl p-8 md:p-12 flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">
                Together We Can Make a Difference
              </h2>

              <p className="mt-3 text-orange-50 max-w-2xl">
                Support education, healthcare, food donation, elderly care,
                emergency relief, and community welfare through trusted
                fundraising campaigns.
              </p>
            </div>

            <div className="flex gap-3">
              <button className="bg-white text-orange-600 px-6 py-3 rounded-full font-semibold hover:scale-105 transition">
                Donate Now
              </button>

              <button className="bg-slate-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-black transition">
                Start Fundraiser
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Footer */}
      <section>
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div
            className="
  grid
  lg:grid-cols-[1.6fr_1fr_1fr_1fr_1.2fr]
  md:grid-cols-2
  gap-8
"
          >
            {/* Company */}
            <div className="max-w-sm">
              {/* Logo */}

              <div className="flex items-center mb-4">
                <img
                  src={Logo}
                  alt="Mysticpace"
                  className="
      h-14
      md:h-16
      w-auto
      object-contain
    "
                />
              </div>

              {/* Description */}

              <p
                className="
    text-slate-400
    text-sm
    leading-7
  "
              >
                Mysticpace is a trusted crowdfunding platform connecting donors,
                individuals, NGOs, and communities to support education,
                healthcare, emergency relief, food assistance, and social impact
                initiatives.
              </p>

              {/* Social Media */}

              <div className="flex gap-3 mt-5">
                <a
                  href="#"
                  className="
      bg-slate-800
      w-10
      h-10
      rounded-full
      flex
      items-center
      justify-center
      hover:bg-orange-500
      transition-all
      duration-300
    "
                >
                  <FaFacebookF />
                </a>

                <a
                  href="#"
                  className="
      bg-slate-800
      w-10
      h-10
      rounded-full
      flex
      items-center
      justify-center
      hover:bg-orange-500
      transition-all
      duration-300
    "
                >
                  <FaInstagram />
                </a>

                <a
                  href="#"
                  className="
      bg-slate-800
      w-10
      h-10
      rounded-full
      flex
      items-center
      justify-center
      hover:bg-orange-500
      transition-all
      duration-300
    "
                >
                  <FaLinkedinIn />
                </a>

                <a
                  href="#"
                  className="
      bg-slate-800
      w-10
      h-10
      rounded-full
      flex
      items-center
      justify-center
      hover:bg-orange-500
      transition-all
      duration-300
    "
                >
                  <FaYoutube />
                </a>

                <a
                  href="#"
                  className="
      bg-slate-800
      w-10
      h-10
      rounded-full
      flex
      items-center
      justify-center
      hover:bg-orange-500
      transition-all
      duration-300
    "
                >
                  <FaWhatsapp />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3
                className="
text-lg
font-semibold
mb-4
text-white
"
              >
                Quick Links
              </h3>

              <ul className="space-y-3">
                <li>
                  <Link to="/" className="text-slate-400 hover:text-orange-400">
                    Home
                  </Link>
                </li>

                <li>
                  <Link
                    to="/campaigns"
                    className="text-slate-400 hover:text-orange-400"
                  >
                    Campaigns
                  </Link>
                </li>

                <li>
                  <Link
                    to="/about"
                    className="text-slate-400 hover:text-orange-400"
                  >
                    About Us
                  </Link>
                </li>

                <li>
                  <Link
                    to="/contact"
                    className="text-slate-400 hover:text-orange-400"
                  >
                    Contact
                  </Link>
                </li>

                <li>
                  <Link
                    to="/faq"
                    className="text-slate-400 hover:text-orange-400"
                  >
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            {/* Causes */}
            <div>
              <h3 className="text-xl font-semibold mb-5">Popular Causes</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/causes/temple-renovation"
                    className="text-slate-400 hover:text-orange-400"
                  >
                    Temple Renovation
                  </Link>
                </li>

                <li>
                  <Link
                    to="/causes/education"
                    className="text-slate-400 hover:text-orange-400"
                  >
                    Education Support
                  </Link>
                </li>

                <li>
                  <Link
                    to="/causes/medical"
                    className="text-slate-400 hover:text-orange-400"
                  >
                    Medical Support
                  </Link>
                </li>

                <li>
                  <Link
                    to="/causes/food"
                    className="text-slate-400 hover:text-orange-400"
                  >
                    Food Donation
                  </Link>
                </li>

                <li>
                  <Link
                    to="/causes/old-age"
                    className="text-slate-400 hover:text-orange-400"
                  >
                    Old Age Care
                  </Link>
                </li>
              </ul>
            </div>
            {/* Legal */}

            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Legal</h3>

              <ul className="space-y-3">
                <li>
                  <Link
                    to="/privacy-policy"
                    className="text-slate-400 hover:text-orange-400"
                  >
                    Privacy Policy
                  </Link>
                </li>

                <li>
                  <Link
                    to="/terms"
                    className="text-slate-400 hover:text-orange-400"
                  >
                    Terms & Conditions
                  </Link>
                </li>

                <li>
                  <Link
                    to="/refund-policy"
                    className="text-slate-400 hover:text-orange-400"
                  >
                    Refund Policy
                  </Link>
                </li>

                <li>
                  <Link
                    to="/cookie-policy"
                    className="text-slate-400 hover:text-orange-400"
                  >
                    Cookie Policy
                  </Link>
                </li>

                <li>
                  <Link
                    to="/disclaimer"
                    className="text-slate-400 hover:text-orange-400"
                  >
                    Disclaimer
                  </Link>
                </li>

                <li>
                  <Link
                    to="/campaign-guidelines"
                    className="text-slate-400 hover:text-orange-400"
                  >
                    Campaign Guidelines
                  </Link>
                </li>

                <li>
                  <Link
                    to="/community-guidelines"
                    className="text-slate-400 hover:text-orange-400"
                  >
                    Community Guidelines
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-xl font-semibold mb-5">
                Contact Information
              </h3>

              <div className="space-y-4">
                <div className="flex gap-3">
                  <Phone className="text-orange-500" />
                  <span className="text-slate-400 text-sm">+91 7676931982</span>
                </div>

                <div className="flex gap-3">
                  <Mail className="text-orange-500" />
                  <span className="text-slate-400 text-sm">
                    support@Mysticpace.com
                  </span>
                </div>

                <div className="flex gap-3">
                  <MapPin className="text-orange-500" />
                  <span className="text-slate-400 text-sm">
                    Bangalore, Karnataka, India
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* Trust Badges */}
          <div className="grid md:grid-cols-3 gap-5 mt-16">
            <div className="bg-slate-900 rounded-2xl p-5 flex items-center gap-4">
              <ShieldCheck className="text-green-500" size={32} />

              <div>
                <h4 className="font-semibold">Secure Donations</h4>
                <p className="text-slate-400 text-sm">
                  SSL encrypted payment security.
                </p>
              </div>
            </div>

            <div className="bg-slate-900 rounded-2xl p-5 flex items-center gap-4">
              <BadgeCheck className="text-blue-500" size={32} />

              <div>
                <h4 className="font-semibold">Verified Campaigns</h4>
                <p className="text-slate-400 text-sm">
                  Every campaign goes through verification.
                </p>
              </div>
            </div>

            <div className="bg-slate-900 rounded-2xl p-5 flex items-center gap-4">
              <HeartHandshake className="text-orange-500" size={32} />

              <div>
                <h4 className="font-semibold">Trusted Community</h4>
                <p className="text-slate-400 text-sm">
                  Thousands of donors support causes daily.
                </p>
              </div>
            </div>
          </div>
          {/* Copyright */}
          <div className="border-t border-slate-800 mt-14 pt-8 text-center">
            <p className="text-slate-500">
              © {new Date().getFullYear()} Mysticpace Platform. All Rights
              Reserved.
            </p>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
