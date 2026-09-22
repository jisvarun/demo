import { Link } from "react-router-dom";
import {
  Heart,
  MapPin,
  Phone,
  Mail,
  Share2,
  ArrowRight,
} from "lucide-react";

const quickLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Our Work", path: "/our-work" },
  { label: "Campaigns", path: "/campaigns" },
  { label: "Events", path: "/events" },
  { label: "Gallery", path: "/gallery" },
];

const focusAreas = [
  { label: "Education", path: "/our-work/education" },
  { label: "Healthcare", path: "/our-work/healthcare" },
  {
    label: "Women Empowerment",
    path: "/our-work/women-empowerment",
  },
  {
    label: "Child Welfare",
    path: "/our-work/child-welfare",
  },
  {
    label: "Environment",
    path: "/our-work/environment",
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 text-gray-300">
      {/* Donation CTA */}
      <div className="border-b border-gray-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 py-10 text-center sm:px-6 md:flex-row md:text-left lg:px-8">
          <div>
            <h2 className="text-2xl font-bold text-white">
              Together, We Can Make a Difference
            </h2>

            <p className="mt-2 max-w-xl text-sm leading-6 text-gray-400">
              Your support can help us create better opportunities and a
              brighter future for communities in need.
            </p>
          </div>

          <Link
            to="/donate"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700"
          >
            <Heart size={18} fill="currentColor" />
            Donate Now
            <ArrowRight size={17} />
          </Link>
        </div>
      </div>

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <div>
            <Link to="/" className="inline-flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-green-600 text-white">
                <Heart size={23} fill="currentColor" />
              </div>

              <div>
                <h2 className="text-lg font-bold text-white">
                  Hope Foundation
                </h2>

                <p className="text-xs text-gray-500">
                  Together We Can
                </p>
              </div>
            </Link>

            <p className="mt-5 text-sm leading-7 text-gray-400">
              We work with communities to create sustainable change through
              education, healthcare, empowerment, and humanitarian support.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex items-center gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-800 transition hover:bg-green-600 hover:text-white"
              >
                <Share2 size={17} />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-800 transition hover:bg-green-600 hover:text-white"
              >
                <Share2 size={17} />
              </a>

              <a
                href="#"
                aria-label="Twitter"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-800 transition hover:bg-green-600 hover:text-white"
              >
                <Share2 size={17} />
              </a>

              <a
                href="#"
                aria-label="YouTube"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-800 transition hover:bg-green-600 hover:text-white"
              >
                <Share2 size={17} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-semibold text-white">
              Quick Links
            </h3>

            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-gray-400 transition hover:text-green-500"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Focus Areas */}
          <div>
            <h3 className="text-base font-semibold text-white">
              Our Focus Areas
            </h3>

            <ul className="mt-5 space-y-3">
              {focusAreas.map((area) => (
                <li key={area.path}>
                  <Link
                    to={area.path}
                    className="text-sm text-gray-400 transition hover:text-green-500"
                  >
                    {area.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-base font-semibold text-white">
              Contact Us
            </h3>

            <ul className="mt-5 space-y-5">
              <li className="flex gap-3">
                <MapPin
                  size={19}
                  className="mt-0.5 shrink-0 text-green-500"
                />

                <span className="text-sm leading-6 text-gray-400">
                  123 Hope Street,
                  <br />
                  Ranchi, Jharkhand, India
                </span>
              </li>

              <li>
                <a
                  href="tel:+919876543210"
                  className="flex items-center gap-3 text-sm text-gray-400 transition hover:text-green-500"
                >
                  <Phone size={18} className="text-green-500" />
                  +91 98765 43210
                </a>
              </li>

              <li>
                <a
                  href="mailto:info@ngo.org"
                  className="flex items-center gap-3 text-sm text-gray-400 transition hover:text-green-500"
                >
                  <Mail size={18} className="text-green-500" />
                  info@ngo.org
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-14 rounded-2xl border border-gray-800 bg-gray-900 p-6">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
            <div>
              <h3 className="font-semibold text-white">
                Stay Connected
              </h3>

              <p className="mt-1 text-sm text-gray-400">
                Subscribe to receive updates about our work and campaigns.
              </p>
            </div>

            <form className="flex w-full max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                aria-label="Email address"
                className="min-w-0 flex-1 rounded-l-lg border border-gray-700 bg-gray-800 px-4 py-3 text-sm text-white outline-none placeholder:text-gray-500 focus:border-green-500"
              />

              <button
                type="submit"
                className="rounded-r-lg bg-green-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-green-700"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-5 text-center text-sm sm:px-6 md:flex-row md:items-center md:justify-between md:text-left lg:px-8">
          <p className="text-gray-500">
            © {currentYear} Hope Foundation. All rights reserved.
          </p>

          <div className="flex justify-center gap-5 md:justify-end">
            <Link
              to="/privacy-policy"
              className="text-gray-500 transition hover:text-green-500"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms"
              className="text-gray-500 transition hover:text-green-500"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}