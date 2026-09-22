import {
  Mail,
  Phone,
  Share2,
} from "lucide-react";

export default function TopBar() {
  return (
    <div className="hidden bg-green-700 text-white md:block">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-sm sm:px-6 lg:px-8">
        {/* Left Side */}
        <div className="flex items-center gap-5">
          <a
            href="tel:+919876543210"
            className="flex items-center gap-2 transition hover:text-green-200"
          >
            <Phone size={15} />
            <span>+91 98765 43210</span>
          </a>

          <a
            href="mailto:info@ngo.org"
            className="flex items-center gap-2 transition hover:text-green-200"
          >
            <Mail size={15} />
            <span>info@ngo.org</span>
          </a>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <span className="hidden lg:inline">Follow us:</span>

          <a
            href="#"
            aria-label="Facebook"
            className="transition hover:text-green-200"
          >
            <Share2 size={16} />
          </a>

          <a
            href="#"
            aria-label="Instagram"
            className="transition hover:text-green-200"
          >
            <Share2 size={16} />
          </a>

          <a
            href="#"
            aria-label="Twitter"
            className="transition hover:text-green-200"
          >
            <Share2 size={16} />
          </a>

          <a
            href="#"
            aria-label="YouTube"
            className="transition hover:text-green-200"
          >
            <Share2 size={16} />
          </a>

          <a
            href="/donate"
            className="ml-2 rounded-full bg-white px-4 py-1.5 font-semibold text-green-700 transition hover:bg-green-50"
          >
            Donate Now
          </a>
        </div>
      </div>
    </div>
  );
}