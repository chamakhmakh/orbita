"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

const CTA = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
      });

      gsap.from("#cta h2", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        clearProps: "opacity,transform",
      });

      gsap.from("#cta p", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 72%",
          once: true,
        },
        y: 40,
        opacity: 0,
        duration: 0.9,
        delay: 0.1,
        ease: "power3.out",
        clearProps: "opacity,transform",
      });

      gsap.from("#cta button", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          once: true,
        },
        y: 30,
        opacity: 0,
        scale: 0.96,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        clearProps: "opacity,transform",
      });
      gsap.to("#cta > div:first-child", {
        y: -40,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.4,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="relative py-48 flex items-center justify-center bg-white overflow-hidden"
      id="cta"
      ref={sectionRef}
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-size-[32px_32px]" />

      <div className="relative z-10 text-center x-8">
        <h2 className="text-6xl md:text-8xl font-medium tracking-tighter text-neutral-900 mb-10 leading-tight">
          Ready to <span className="text-neutral-400">orchestrate?</span>
        </h2>
        <p className="text-xl text-neutral-500 mb-14 max-w-xl mx-auto leading-relaxed">
          Join the elite teams building the next generation of autonomous
          enterprise software on Orbita.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button className="h-16 px-12 rounded-full bg-neutral-900 text-white font-medium text-lg hover:bg-neutral-800 transition-all hover:scale-105 active:scale-95 shadow-2xl">
            Request Early Access
          </button>
          <button className="h-16 px-12 rounded-full bg-transparent border border-neutral-200 text-neutral-900 font-medium text-lg hover:bg-neutral-50 transition-all hover:scale-105 active:scale-95">
            Documentation
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
