"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { name: "首頁", href: "/" },
    { name: "核心產品 (NAD+)", href: "/products/nad-plus" },
    { name: "所有產品", href: "/products" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full glass-card border-b-0 rounded-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-3xl font-bold tracking-tighter text-primary">
              KAYAJ
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${
                  pathname === link.href
                    ? "text-primary font-semibold"
                    : "text-foreground hover:text-primary transition-colors"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glass-card absolute w-full rounded-b-2xl">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  pathname === link.href
                    ? "bg-primary-light text-primary"
                    : "text-foreground hover:bg-slate-100 dark:hover:bg-slate-800"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
