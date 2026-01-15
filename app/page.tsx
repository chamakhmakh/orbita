"use client";

import { useEffect } from "react";
import Features from "./section/Features";
import Hero from "./section/Hero";
import Navbar from "./section/NavBar";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Platform from "./section/Platform";
import Flow from "./section/Flow";
import CTA from "./section/CTA";
import Footer from "./section/Footer";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const timer = setTimeout(() => {
        ScrollTrigger.refresh();
      }, 500);

      return () => clearTimeout(timer);
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative overflow-x-hidden">
      <Navbar />
      <main className="relative z-0">
        <Hero />
        <Platform />
        <Features />
        <Flow />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;
