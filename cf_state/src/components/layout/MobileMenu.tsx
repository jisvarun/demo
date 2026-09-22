import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import {
  X,
  ChevronDown,
  Heart,
  Phone,
  Mail,
} from "lucide-react";

interface DropdownItem {
  label: string;
  path: string;
}

interface NavItem {
  label: string;
  path: string;
  dropdown?: DropdownItem[];
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: NavItem[];
}

export default function MobileMenu({
  isOpen,
  onClose,
  navItems,
}: MobileMenuProps) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  if (!isOpen) {
    return null;
  }

  const toggleDropdown = (label: string) => {
    setOpenDropdown((current) =>
      current === label ? null : label
    );
  };

  return (
    <div className="fixed inset-0 z-[100] bg-black/40 lg:hidden">
      <div className="ml-auto flex h-full w-full max-w-sm flex-col bg-white shadow-2xl">
        {/* Header */}
        <div className="flex h-20 items-center justify-between border-b border-gray-100 px-5">
          <Link
            to="/"
            onClick={onClose}
            className="flex items-center gap-3"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-600 text-white">
              <Heart size={20} fill="currentColor" />
            </div>

            <div>
              <h2 className="text-lg font-bold leading-none text-gray-900">
                Hope Foundation
              </h2>

              <p className="mt-1 text-xs text-gray-500">
                Together We Can
              </p>
            </div>
          </Link>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="rounded-lg p-2 text-gray-600 transition hover:bg-gray-100 hover:text-gray-900"
          >
            <X size={24} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto px-5 py-5">
          <div className="space-y-1">
            {navItems.map((item) => {
              if (item.dropdown) {
                const isDropdownOpen =
                  openDropdown === item.label;

                return (
                  <div key={item.label}>
                    <button
                      type="button"
                      onClick={() =>
                        toggleDropdown(item.label)
                      }
                      className="flex w-full items-center justify-between rounded-lg px-4 py-3.5 text-left text-sm font-medium text-gray-700 transition hover:bg-green-50 hover:text-green-600"
                    >
                      <span>{item.label}</span>

                      <ChevronDown
                        size={18}
                        className={`transition-transform duration-200 ${
                          isDropdownOpen
                            ? "rotate-180 text-green-600"
                            : ""
                        }`}
                      />
                    </button>

                    {/* Dropdown */}
                    <div
                      className={`overflow-hidden transition-all duration-200 ${
                        isDropdownOpen
                          ? "max-h-96 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="ml-4 mt-1 space-y-1 border-l border-gray-200 pl-3">
                        {item.dropdown.map(
                          (dropdownItem) => (
                            <NavLink
                              key={dropdownItem.path}
                              to={dropdownItem.path}
                              onClick={onClose}
                              className={({ isActive }) =>
                                `block rounded-lg px-3 py-2.5 text-sm transition ${
                                  isActive
                                    ? "bg-green-50 font-semibold text-green-600"
                                    : "text-gray-600 hover:bg-gray-50 hover:text-green-600"
                                }`
                              }
                            >
                              {dropdownItem.label}
                            </NavLink>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={onClose}
                  end={item.path === "/"}
                  className={({ isActive }) =>
                    `block rounded-lg px-4 py-3.5 text-sm font-medium transition ${
                      isActive
                        ? "bg-green-50 text-green-600"
                        : "text-gray-700 hover:bg-gray-50 hover:text-green-600"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              );
            })}
          </div>
        </nav>

        {/* Contact Information */}
        <div className="border-t border-gray-100 px-5 py-5">
          <div className="space-y-3">
            <a
              href="tel:+919876543210"
              className="flex items-center gap-3 text-sm text-gray-600 transition hover:text-green-600"
            >
              <Phone
                size={17}
                className="text-green-600"
              />

              <span>+91 98765 43210</span>
            </a>

            <a
              href="mailto:info@ngo.org"
              className="flex items-center gap-3 text-sm text-gray-600 transition hover:text-green-600"
            >
              <Mail
                size={17}
                className="text-green-600"
              />

              <span>info@ngo.org</span>
            </a>
          </div>

          {/* Donate Button */}
          <Link
            to="/donate"
            onClick={onClose}
            className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-green-600 px-5 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-green-700"
          >
            <Heart size={17} fill="currentColor" />
            Donate Now
          </Link>
        </div>
      </div>
    </div>
  );
}