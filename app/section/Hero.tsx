import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Icon } from "@iconify/react";

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const orbRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance Animation
      const tl = gsap.timeline();
      tl.from(".hero-reveal", {
        y: 60,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: "expo.out",
      });

      // Floating Orb logic
      gsap.to(".orb-node", {
        y: -30,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        stagger: 0.4,
      });

      // Scroll Parallax
      gsap.to(orbRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
        },
        y: 300,
        scale: 1.4,
        rotateX: 45,
        opacity: 0.2,
      });

      gsap.to(contentRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "40% top",
          scrub: true,
        },
        y: -100,
        opacity: 0,
        filter: "blur(10px)",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden perspective-[2000px]"
      id="hero"
    >
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[40px_40px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>

      <div
        ref={orbRef}
        className="absolute z-0 w-150 h-150 preserve-3d top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
      >
        <div className="absolute inset-0 m-auto w-32 h-32 bg-linear-to-tr from-indigo-100 to-white rounded-full blur-3xl opacity-40 animate-pulse"></div>
        <div className="absolute inset-0 border border-neutral-200/40 rounded-full transform rotate-x-60 animate-spin-slow"></div>
        <div className="absolute inset-[10%] border border-indigo-100/30 rounded-full transform rotate-y-45 animate-spin-slow-reverse"></div>
        <div className="absolute inset-[25%] border border-neutral-200/50 rounded-full transform rotate-x-45 rotate-y-45 animate-spin-slow"></div>

        <div className="orb-node absolute top-[20%] left-[20%] w-3 h-3 bg-white border border-neutral-200 rounded-full shadow-lg"></div>
        <div className="orb-node absolute bottom-[30%] right-[15%] w-4 h-4 bg-indigo-50 border border-indigo-200 rounded-full shadow-lg"></div>
        <div className="orb-node absolute top-[40%] right-[10%] w-2 h-2 bg-neutral-200 rounded-full"></div>
      </div>

      <div
        ref={contentRef}
        className="relative z-10 text-center max-w-4xl px-6 pt-20"
      >
        <div className="hero-reveal inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100/80 border border-neutral-200 backdrop-blur-sm mb-10">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse"></span>
          <span className="text-xs font-medium text-neutral-600 tracking-wide uppercase">
            System v2.4 Live
          </span>
        </div>

        <h1 className="hero-reveal text-6xl md:text-8xl lg:text-9xl font-medium tracking-tighter text-neutral-900 mb-8 leading-[0.9]">
          Orchestrate <br />
          <span className="text-neutral-400">Intelligence.</span>
        </h1>

        <p className="hero-reveal text-lg md:text-xl text-neutral-500 max-w-xl mx-auto mb-14 leading-relaxed text-balance">
          The cognitive operating system for the enterprise. Unify data, logic,
          and AI agents into a single, breathing workflow.
        </p>

        <div className="hero-reveal flex flex-col md:flex-row items-center justify-center gap-5">
          <button className="group h-14 px-10 rounded-full bg-neutral-900 text-white font-medium text-base flex items-center gap-2 hover:bg-neutral-800 transition-all shadow-xl hover:shadow-2xl hover:scale-[1.03] active:scale-95">
            Start Orchestration
            <Icon
              icon="lucide:arrow-right"
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
            />
          </button>
          <button className="h-14 px-10 rounded-full bg-white border border-neutral-200 text-neutral-600 font-medium text-base hover:bg-neutral-50 transition-colors flex items-center gap-2 hover:scale-[1.03] active:scale-95">
            <Icon icon="lucide:play-circle" className="w-5 h-5" />
            Watch the Flow
          </button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
        <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-medium">
          Initialize Stream
        </span>
        <div className="w-px h-14 bg-linear-to-b from-neutral-300 to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
