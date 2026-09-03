import { Github, Linkedin, Mail, Cpu } from "lucide-react";
import { contact } from "@/content/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/[0.06] overflow-hidden">
      {/* Subtle background glow */}
      <div aria-hidden="true" className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-accent/5 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-6">

          {/* Logo + tagline */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-gradient-to-br from-accent to-cyan-300 flex items-center justify-center">
                <Cpu size={12} className="text-bg-base" />
              </div>
              <span className="font-display font-bold text-white text-sm">
                AM<span className="text-accent">.</span>
              </span>
            </div>
            <p className="text-muted text-xs mt-1">AI & Machine Learning Engineer</p>
          </div>

          {/* Social links — centered */}
          <div className="flex items-center justify-center gap-3">
            {[
              { href: `https://${contact.github}`, Icon: Github, label: "GitHub" },
              { href: `https://${contact.linkedin}`, Icon: Linkedin, label: "LinkedIn" },
              { href: `mailto:${contact.email}`, Icon: Mail, label: "Email" },
            ].map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2.5 rounded-xl border border-white/10 text-muted hover:text-accent hover:border-accent/30 hover:bg-accent/5 transition-all duration-200"
              >
                <Icon size={17} />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-muted text-[11px] text-center md:text-right">
            &copy; {year} Abdelrahman Mahmoud Mohammed
          </p>
        </div>

        {/* Bottom line */}
        <div className="mt-8 pt-6 border-t border-white/[0.05] flex justify-center">
          <p className="text-muted-2 text-[11px] font-mono">
            Built with Next.js · Tailwind · Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
