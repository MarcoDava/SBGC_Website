import { Link } from "react-router";
import Logo from "../../assets/Logo.jpg";
import {
  Home,
  CalendarDays,
  Mail,
  UserPlus,
  Scale,
  Users,
  MapPin,
  Facebook,
  Instagram,
  // Music2,
} from "lucide-react";

const navLinks = [
  { to: "/", label: "Home", Icon: Home },
  { to: "/events", label: "Events", Icon: CalendarDays },
  { to: "/contact", label: "Contact", Icon: Mail },
  { to: "/register", label: "Register", Icon: UserPlus },
  { to: "/codeofethics", label: "Code of Ethics", Icon: Scale },
  { to: "/aboutus", label: "About Us", Icon: Users },
];

const socialLinks = [
  { href: "https://www.facebook.com/groups/2052647094761701", label: "Facebook", Icon: Facebook },
  // // { href: "https://www.tiktok.com/", label: "TikTok", Icon: Music2 },
   { href: "https://www.instagram.com/sbgc_official/", label: "Instagram", Icon: Instagram },
];

const iconSize = 18;

export default function Footer() {
  return (
    <footer className="relative z-10 flex-shrink-0 w-full border-t border-[#4a3636]/40 bg-[#2a1f1f]">
      <div className="mx-auto w-full max-w-6xl px-6 py-12 md:py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Logo & tagline */}
          <div className="flex flex-col items-start gap-3 text-left lg:col-span-1">
            <img
              src={Logo}
              alt="SBGC Logo"
              width={96}
              height={96}
              className="h-20 w-auto object-contain md:h-24"
              decoding="async"
              loading="lazy"
            />
            <p className="text-left text-sm text-white/80">
              Sunday Badminton Group Club — community, sport, and shared joy.
            </p>
          </div>

          {/* Navigation */}
          <div className="text-left">
            <h3 className="mb-4 text-left text-sm font-semibold uppercase tracking-wider text-white/90">
              Navigation
            </h3>
            <ul className="flex flex-col gap-2">
              {navLinks.map(({ to, label, Icon }) => (
                <li key={to} className="flex items-center gap-2">
                  <Icon size={iconSize} className="flex-shrink-0 text-white/70" aria-hidden />
                  <Link
                    to={to}
                    className="text-left text-white/80 transition hover:text-white focus:outline-none focus:ring-2 focus:ring-[#4a3636] focus:ring-offset-2 focus:ring-offset-[#2a1f1f] rounded"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="text-left">
            <h3 className="mb-4 text-left text-sm font-semibold uppercase tracking-wider text-white/90">
              Contact Us
            </h3>
            <ul className="flex flex-col gap-3 text-white/80">
              <li className="flex items-start gap-2">
                <Mail size={iconSize} className="mt-0.5 flex-shrink-0 text-white/70" aria-hidden />
                <a
                  href="mailto:agnes.v.cruz@gmail.com"
                  className="text-left transition hover:text-white focus:outline-none focus:ring-2 focus:ring-[#4a3636] focus:ring-offset-2 focus:ring-offset-[#2a1f1f] rounded"
                >
                  agnes.v.cruz@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={iconSize} className="mt-0.5 flex-shrink-0 text-white/70" aria-hidden />
                <a
                  href="https://www.google.com/maps/search/?api=1&query=134+Kennedy+Rd+S+Brampton"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-left transition hover:text-white focus:outline-none focus:ring-2 focus:ring-[#4a3636] focus:ring-offset-2 focus:ring-offset-[#2a1f1f] rounded"
                >
                  134 Kennedy Rd S, Brampton
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="text-left">
            <h3 className="mb-4 text-left text-sm font-semibold uppercase tracking-wider text-white/90">
              Follow Us
            </h3>
            <ul className="flex flex-wrap gap-4">
              {socialLinks.map(({ href, label, Icon }) => (
                <li key={label} className="flex items-center gap-2">
                  <Icon size={iconSize} className="flex-shrink-0 text-white/70" aria-hidden />
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-left text-white/80 transition hover:text-white focus:outline-none focus:ring-2 focus:ring-[#4a3636] focus:ring-offset-2 focus:ring-offset-[#2a1f1f] rounded text-sm"
                    aria-label={label}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-left">
          <p className="text-left text-sm text-white/60">
            © {new Date().getFullYear()} Sunday Badminton Group Club. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
