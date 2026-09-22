import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import MobileMenu from "./MobileMenu";
import {
  Menu,
  X,
  Heart,
  ChevronDown,
} from "lucide-react";

const navItems = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "About Us",
    path: "/about",
  },
  {
    label: "Our Work",
    path: "/our-work",
    dropdown: [
      { label: "Education", path: "/our-work/education" },
      { label: "Healthcare", path: "/our-work/healthcare" },
      { label: "Women Empowerment", path: "/our-work/women-empowerment" },
      { label: "Child Welfare", path: "/our-work/child-welfare" },
      { label: "Environment", path: "/our-work/environment" },
    ],
  },
  {
    label: "Campaigns",
    path: "/campaigns",
  },
  {
    label: "Events",
    path: "/events",
  },
  {
    label: "Gallery",
    path: "/gallery",
  },
  {
    label: "Contact",
    path: "/contact",
  },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3"
            onClick={() => setMobileMenuOpen(false)}
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-green-600 text-white">
              <Heart size={23} fill="currentColor" />
            </div>

            <div>
              <h1 className="text-xl font-bold leading-none text-gray-900">
                Hope Foundation
              </h1>

              <p className="mt-1 text-xs text-gray-500">
                Together We Can
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => {
              if (item.dropdown) {
                return (
                  <div
                    key={item.label}
                    className="group relative"
                  >
                    <button
                      type="button"
                      className="flex items-center gap-1 py-7 text-sm font-medium text-gray-700 transition hover:text-green-600"
                    >
                      {item.label}
                      <ChevronDown
                        size={15}
                        className="transition-transform group-hover:rotate-180"
                      />
                    </button>

                    {/* Dropdown */}
                    <div className="invisible absolute left-0 top-full w-56 translate-y-2 rounded-xl border border-gray-100 bg-white p-2 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                      {item.dropdown.map((dropdownItem) => (
                        <NavLink
                          key={dropdownItem.path}
                          to={dropdownItem.path}
                          className={({ isActive }) =>
                            `block rounded-lg px-4 py-2.5 text-sm transition ${
                              isActive
                                ? "bg-green-50 font-semibold text-green-600"
                                : "text-gray-600 hover:bg-green-50 hover:text-green-600"
                            }`
                          }
                        >
                          {dropdownItem.label}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `relative py-7 text-sm font-medium transition ${
                      isActive
                        ? "text-green-600"
                        : "text-gray-700 hover:text-green-600"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {item.label}
                      <span
                        className={`absolute bottom-0 left-0 h-0.5 bg-green-600 transition-all ${
                          isActive ? "w-full" : "w-0"
                        }`}
                      />
                    </>
                  )}
                </NavLink>
              );
            })}
          </nav>

          {/* Desktop Donate Button */}
          <Link
            to="/donate"
            className="hidden items-center gap-2 rounded-full bg-green-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-green-700 hover:shadow-md lg:flex"
          >
            <Heart size={17} fill="currentColor" />
            Donate Now
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-lg p-2 text-gray-700 transition hover:bg-gray-100 lg:hidden"
          >
            {mobileMenuOpen ? <X size={25} /> : <Menu size={25} />}
          </button>
        </div>
      </div>

      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navItems={navItems}
      />
    </header>
  );
}