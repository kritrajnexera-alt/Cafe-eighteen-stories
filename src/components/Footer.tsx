import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#2A1A10] border-t border-[#3A2518]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-full bg-[#E8A045] flex items-center justify-center">
                <span className="text-[#1C0F0A] text-sm font-bold font-[family-name:var(--font-heading)]">18</span>
              </div>
              <span className="font-[family-name:var(--font-heading)] text-lg tracking-tight text-[#F5F0EB]">
                Eighteen <span className="text-[#E8A045]">Stories</span>
              </span>
            </Link>
            <p className="text-[#F5F0EB]/60 text-sm leading-relaxed max-w-sm">
              Eighteen Stories. One Unforgettable Experience. A premium literary cafe for coffee lovers, creators, and dreamers in Bharuch.
            </p>
          </div>

          <div>
            <h4 className="font-[family-name:var(--font-heading)] text-sm font-semibold text-[#F5F0EB] mb-4">Navigate</h4>
            <ul className="space-y-3">
              {[
                { href: "/menu", label: "Menu" },
                { href: "/gallery", label: "Gallery" },
                { href: "/about", label: "About" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#F5F0EB]/50 hover:text-[#E8A045] text-sm transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-[family-name:var(--font-heading)] text-sm font-semibold text-[#F5F0EB] mb-4">Visit</h4>
            <ul className="space-y-3 text-[#F5F0EB]/50 text-sm">
              <li>Tavra Road, Bharuch</li>
              <li>Gujarat, India</li>
              <li className="pt-2">
                <a href="tel:+919876543210" className="hover:text-[#E8A045] transition-colors duration-300">
                  +91 98765 43210
                </a>
              </li>
              <li>
                <a href="mailto:hello@eighteenstories.in" className="hover:text-[#E8A045] transition-colors duration-300">
                  hello@eighteenstories.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#3A2518]/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#F5F0EB]/50 text-xs">
            &copy; {new Date().getFullYear()} Eighteen Stories. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {["Instagram", "Zomato", "Spotify"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-[#F5F0EB]/30 hover:text-[#E8A045] text-xs uppercase tracking-widest transition-colors duration-300"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
