import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0C0A08] border-t border-[#D4AF37]/10">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-[1px] h-5 bg-[#D4AF37]/50" />
              <span className="font-[family-name:var(--font-nav)] text-[11px] tracking-[0.3em] uppercase text-[#F5F0E8]">
                Eighteen <span className="text-[#D4AF37]">Stories</span>
              </span>
            </Link>
            <p className="text-[#F5F0E8]/30 text-sm max-w-xs leading-relaxed">
              Eighteen Stories. One Unforgettable Experience. Tavra Road, Bharuch.
            </p>
          </div>

          <div className="flex flex-wrap gap-12">
            <div>
              <h4 className="font-[family-name:var(--font-nav)] text-[10px] tracking-[0.3em] uppercase text-[#F5F0E8]/50 mb-4">
                Navigate
              </h4>
              <ul className="space-y-2.5">
                {[
                  { href: "/menu", label: "Menu" },
                  { href: "/gallery", label: "Gallery" },
                  { href: "/about", label: "Our Story" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[#F5F0E8]/30 hover:text-[#D4AF37] text-sm transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-[family-name:var(--font-nav)] text-[10px] tracking-[0.3em] uppercase text-[#F5F0E8]/50 mb-4">
                Connect
              </h4>
              <ul className="space-y-2.5">
                <li>
                  <a
                    href="tel:+919876543210"
                    className="text-[#F5F0E8]/30 hover:text-[#D4AF37] text-sm transition-colors duration-300"
                  >
                    +91 98765 43210
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:hello@eighteenstories.in"
                    className="text-[#F5F0E8]/30 hover:text-[#D4AF37] text-sm transition-colors duration-300"
                  >
                    hello@eighteenstories.in
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#D4AF37]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#F5F0E8]/20 text-xs">
            &copy; {new Date().getFullYear()} Eighteen Stories
          </p>
          <div className="flex items-center gap-6">
            {[
              { name: "Instagram", href: "https://instagram.com/eighteenstories" },
              { name: "Zomato", href: "https://zomato.com/bharuch/eighteen-stories-tavra-road" },
              { name: "Facebook", href: "https://facebook.com/eighteenstories" },
            ].map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F5F0E8]/20 hover:text-[#D4AF37] text-[10px] uppercase tracking-[0.3em] transition-colors duration-300 font-[family-name:var(--font-nav)]"
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
