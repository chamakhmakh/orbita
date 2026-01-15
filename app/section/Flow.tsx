"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

const steps = [
  {
    id: "01",
    title: "Ingest",
    desc: "Plug into unstructured lakes. Orbita embedded vectors are ready for semantic querying instantly.",
  },
  {
    id: "02",
    title: "Reason",
    desc: "Define logic boundaries. Leverage state-of-the-art models to iterate through multi-step reasoning chains.",
  },
  {
    id: "03",
    title: "Execute",
    desc: "Convert outputs to actions. Automate API calls, update CRMs, or generate dynamic front-end assets.",
  },
];

const Flow = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from("#enterprise h2, #enterprise p", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.12,
        clearProps: "opacity,transform",
      });

      gsap.from("#enterprise .text-4xl", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        clearProps: "opacity,transform",
      });

      gsap.from(".flow-step", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          once: true,
        },
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.25,
        ease: "power3.out",
        clearProps: "opacity,transform",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="enterprise"
      ref={sectionRef}
      className="py-40 bg-neutral-900 text-white relative overflow-hidden "
    >
      <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-28 border-b border-white/10 pb-12">
          <div className="max-w-xl">
            <h2 className="text-5xl font-medium tracking-tight mb-4">
              Enterprise standard.
            </h2>
            <p className="text-neutral-400 text-lg">
              Designed for the most demanding cognitive architectures.
            </p>
          </div>
          <div className="flex gap-12 mt-12 md:mt-0">
            <div className="text-right">
              <div className="text-4xl font-light text-white mb-1">92ms</div>
              <div className="text-[10px] text-neutral-500 uppercase tracking-[0.2em] font-bold">
                P99 Latency
              </div>
            </div>
            <div className="text-right">
              <div className="text-4xl font-light text-white mb-1">99.99</div>
              <div className="text-[10px] text-neutral-500 uppercase tracking-[0.2em] font-bold">
                Uptime %
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-24">
          {steps.map((step) => (
            <div key={step.id} className="flow-step group space-y-8">
              <div className="w-16 h-16 rounded-full border border-white/15 flex items-center justify-center text-sm font-semibold text-neutral-400 group-hover:bg-white group-hover:text-neutral-900 transition-all duration-500 group-hover:scale-110 group-hover:border-white">
                {step.id}
              </div>
              <div>
                <h3 className="text-2xl font-medium mb-4 group-hover:text-indigo-400 transition-colors duration-500">
                  {step.title}
                </h3>
                <p className="text-neutral-400 text-base leading-relaxed">
                  {step.desc}
                </p>
              </div>
              <div className="h-0.5 w-0 bg-indigo-500 group-hover:w-full transition-all duration-1000" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Flow;
