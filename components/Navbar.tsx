"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, FileText, Cpu } from "lucide-react";
import { navLinks, hero } from "@/content/site";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isOpen,   setIsOpen]   = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active,   setActive]   = useState("");
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      // Find active section by scroll position (only on home page)
      if (pathname !== "/") return;
      const ids = navLinks.map((l) => l.href.replace("#", "")).filter(Boolean);
      for (const id of [...ids].reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 130) { setActive(id); return; }
      }
      setActive("");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  useEffect(() => { setIsOpen(false); }, [pathname]);

  const handleAnchorClick = (href: string) => {
    setIsOpen(false);
    if (href.startsWith("#")) {
      if (pathname !== "/") { window.location.href = "/" + href; return; }
      const el = document.getElementById(href.replace("#", ""));
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const isAnchor   = (href: string) => href.startsWith("#");
  const isActiveLink = (href: string) => {
    if (isAnchor(href)) return active === href.replace("#", "");
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      scrolled || isOpen ? "border-b border-white/[0.06] backdrop-blur-2xl shadow-[0_4px_30px_rgba(0,0,0,0.5)] bg-bg-base/75" : "bg-transparent"
    )}>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between h-16 md:h-[4.5rem]">
          {/* Logo */}
          <button onClick={() => handleAnchorClick("#hero")} className="flex items-center gap-2 group">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-accent to-cyan-300 flex items-center justify-center shadow-glow-accent opacity-90 group-hover:opacity-100 transition-opacity">
              <Cpu size={14} className="text-bg-base" />
            </div>
            <span className="font-display font-bold text-white text-sm tracking-tight">AM<span className="text-accent">.</span></span>
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-0.5">
            {navLinks.map((link) => (
              isAnchor(link.href) ? (
                <button key={link.href} onClick={() => handleAnchorClick(link.href)}
                  className={cn("relative px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200",
                    isActiveLink(link.href) ? "text-accent" : "text-muted hover:text-white hover:bg-white/5")}>
                  {link.label}
                  {isActiveLink(link.href) && <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-accent" />}
                </button>
              ) : (
                <Link key={link.href} href={link.href}
                  className={cn("relative px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200",
                    isActiveLink(link.href) ? "text-accent bg-accent/8" : "text-muted hover:text-white hover:bg-white/5")}>
                  {link.label}
                </Link>
              )
            ))}
          </div>

          {/* CV + Hamburger */}
          <div className="flex items-center gap-3">
            <a href={hero.cvUrl} target="_blank" rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg border border-accent/40 text-accent hover:bg-accent/8 hover:border-accent hover:shadow-glow-accent transition-all duration-200">
              <FileText size={13} /> View CV
            </a>
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-muted hover:text-white rounded-lg hover:bg-white/5" aria-label="Toggle menu">
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile */}
        <div className={cn("md:hidden overflow-hidden transition-all duration-300", isOpen ? "max-h-96 pb-4" : "max-h-0")}>
          <div className="flex flex-col gap-1 pt-2 border-t border-white/[0.06]">
            {navLinks.map((link) => (
              isAnchor(link.href) ? (
                <button key={link.href} onClick={() => handleAnchorClick(link.href)}
                  className={cn("text-left px-4 py-3 text-sm rounded-lg font-medium transition-colors",
                    isActiveLink(link.href) ? "text-accent bg-accent/8" : "text-muted hover:text-white hover:bg-white/5")}>
                  {link.label}
                </button>
              ) : (
                <Link key={link.href} href={link.href}
                  className={cn("px-4 py-3 text-sm rounded-lg font-medium transition-colors",
                    isActiveLink(link.href) ? "text-accent bg-accent/8" : "text-muted hover:text-white hover:bg-white/5")}>
                  {link.label}
                </Link>
              )
            ))}
            <a href={hero.cvUrl} target="_blank" rel="noopener noreferrer"
              className="mt-2 mx-4 inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg border border-accent/40 text-accent">
              <FileText size={13} /> View CV
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
