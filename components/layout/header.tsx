"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Accueil", path: "/" },
  { name: "Vente", path: "/vente" },
  { name: "Location", path: "/location" },
  { name: "Garage", path: "/garage" },
  { name: "À propos", path: "/a-propos" },
  { name: "Contact", path: "/contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const isCurrentPath = (path: string) => {
    return pathname === path;
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-md py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className={cn(
            "text-2xl font-bold transition-colors duration-300",
            scrolled ? "text-blue-700" : "text-white"
          )}
        >
          Lootha General Trading
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={cn(
                "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                isCurrentPath(link.path)
                  ? scrolled
                    ? "text-blue-700 bg-blue-50"
                    : "text-white bg-white/20"
                  : scrolled
                    ? "text-gray-800 hover:text-blue-700 hover:bg-blue-50"
                    : "text-white/90 hover:text-white hover:bg-white/10"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link href="https://wa.me/25377214992" className="ml-4">
            <Button variant="primary" size="default">
              Demander un devis
            </Button>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={cn(
            "md:hidden z-50 focus:outline-none",
            scrolled ? "text-blue-700" : "text-white"
          )}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="fixed inset-0 bg-blue-900/95 flex flex-col justify-center items-center md:hidden">
            <nav className="flex flex-col items-center space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className={cn(
                    "px-3 py-2 text-lg font-medium text-white hover:text-blue-200 transition-colors",
                    isCurrentPath(link.path) && "text-blue-200 font-bold"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="https://wa.me/25377331664"
                className="mt-6"
                onClick={() => setIsOpen(false)}
              >
                <Button variant="accent" size="lg">
                  Demander un devis
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}