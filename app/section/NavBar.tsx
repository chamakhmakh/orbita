"use client";

import gsap from "gsap";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from("nav", {
        y: -30,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".orbita-logo", {
        rotate: -90,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
      });

      gsap.from(".orbita-link", {
        y: -10,
        opacity: 0,
        stagger: 0.08,
        delay: 0.4,
        duration: 0.6,
        ease: "power2.out",
      });

      gsap.from(".orbita-cta", {
        scale: 0.9,
        opacity: 0,
        delay: 0.8,
        duration: 0.6,
        ease: "power3.out",
      });
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    gsap.to("nav", {
      height: isScrolled ? 64 : 80,
      duration: 0.35,
      ease: "power2.out",
    });
  }, [isScrolled]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass h-16" : "bg-transparent h-20"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        <div className="flex items-center gap-2">
          <a
            href="#"
            className="orbita-logo text-lg font-medium tracking-tighter text-neutral-900 flex items-center gap-2 group"
          >
            <div className="w-5 h-5 bg-neutral-900 rounded-sm flex items-center justify-center group-hover:rotate-45 transition-transform duration-500">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            ORBITA
          </a>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {["Platform", "Intelligence", "Enterprise", "Changelog"].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="orbita-link text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors"
              >
                {item}
              </a>
            )
          )}
        </div>

        <div className="orbita-cta flex items-center gap-4">
          <button className="text-sm font-medium text-neutral-900 hover:opacity-70 transition-opacity hidden sm:block">
            Login
          </button>
          <button className="text-sm font-medium bg-neutral-900 text-white px-5 py-2 rounded-full hover:bg-neutral-800 transition-all hover:scale-105 active:scale-95">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
