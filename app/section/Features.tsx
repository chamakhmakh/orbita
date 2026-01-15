"use client";

import { Icon } from "@iconify/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

const Features = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from("#intelligence h2, #intelligence p", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          once: true,
        },
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.15,
        clearProps: "opacity,transform",
      });

      gsap.from(".f-card", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          once: true,
        },
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.12,
        ease: "power3.out",
        clearProps: "opacity,transform",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="intelligence"
      className="relative py-32 px-6 bg-white z-10"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-24 max-w-2xl">
          <h2 className="text-5xl font-medium tracking-tight text-neutral-900 mb-8 leading-tight">
            Engineered for precision.
          </h2>
          <p className="text-xl text-neutral-500 leading-relaxed">
            Complexity shouldn&apos;t be a hurdle. ORBITA simplifies the heavy
            lifting of AI infrastructure into a sleek, highly-controllable
            interface.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-[450px]">
          {/* Main Large Card */}
          <div className="f-card md:col-span-2 group relative rounded-3xl bg-neutral-50 border border-neutral-100 overflow-hidden transition-all duration-700 hover:shadow-2xl hover:border-neutral-200">
            <div className="absolute inset-0 p-10 flex flex-col z-10">
              <h3 className="text-2xl font-medium text-neutral-900 mb-3">
                Visual Workflow Designer
              </h3>
              <p className="text-base text-neutral-500 max-w-sm leading-relaxed">
                Drag, drop, and interconnect logic nodes to create complex
                autonomous systems in minutes.
              </p>
            </div>
            <div className="absolute inset-0 top-32 left-10 bg-white rounded-tl-[40px] border-t border-l border-neutral-200 shadow-2xl transition-transform duration-700 group-hover:translate-y-4 group-hover:translate-x-4">
              <div className="p-8 grid grid-cols-4 gap-6 opacity-40 group-hover:opacity-100 transition-all">
                <div className="col-span-1 h-24 border-2 border-dashed border-neutral-200 rounded-2xl flex items-center justify-center text-neutral-300 ">
                  <Icon icon="lucide:plus" className="w-8 h-8" />
                </div>
                <div className="col-span-3 space-y-4 pt-24">
                  <div className="h-5 w-1/3 bg-neutral-100 rounded-lg" />
                  <div className="h-3 w-full bg-neutral-100 rounded-full" />
                  <div className="h-3 w-2/3 bg-neutral-100 rounded-full" />
                </div>
              </div>
              <svg
                className="absolute top-1/2 left-1/2 w-full h-full pointer-events-none stroke-neutral-200"
                style={{ transform: "translate(-30%, -30%)" }}
              >
                <path
                  d="M50,50 Q150,50 200,150"
                  fill="none"
                  strokeWidth="2.5"
                  strokeDasharray="8 8"
                />
              </svg>
            </div>
          </div>

          {/* Security Card */}
          <div className="f-card md:col-span-1 group relative rounded-3xl bg-neutral-900 text-white overflow-hidden hover:shadow-2xl transition-shadow duration-700">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(79,70,229,0.15),transparent)]" />
            <div className="absolute inset-0 p-10 flex flex-col z-10">
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-auto border border-white/10 group-hover:bg-white group-hover:text-neutral-900 transition-all duration-500">
                <Icon icon="heroicons:shield-check" className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-medium mb-3">Enterprise Grade</h3>
              <p className="text-base text-neutral-400 leading-relaxed">
                SOC2 Type II certified. Zero-trust architecture with end-to-end
                neural encryption.
              </p>
            </div>
            <div className="absolute inset-0 bg-linear-to-b from-transparent via-white/3 to-transparent h-[15%] w-full animate-scan pointer-events-none" />
          </div>

          {/* API Card */}
          <div className="f-card md:col-span-1 group relative rounded-3xl bg-white border border-neutral-200 overflow-hidden hover:border-indigo-300 transition-all duration-500">
            <div className="p-10">
              <div className="flex items-center gap-3 mb-4">
                <Icon icon="lucide:zap" className="h-5 w-5 text-indigo-500" />
                <h3 className="text-xl font-medium text-neutral-900">
                  Universal API
                </h3>
              </div>
              <p className="text-sm text-neutral-500 leading-relaxed mb-8">
                Deploy production-ready workflows as highly scalable endpoints
                with a single click.
              </p>

              <div className="font-mono text-[11px] leading-relaxed group-hover:scale-105 transition-transform duration-700">
                <div className="bg-neutral-900 text-neutral-300 p-5 rounded-2xl border border-neutral-800 shadow-inner overflow-hidden ">
                  <div className="flex gap-2 mb-2">
                    <span className="text-emerald-400">$</span>
                    <span className="text-neutral-500">curl -X POST</span>
                  </div>
                  <div className="text-white truncate">
                    https://api.orbita.ai/v1/run
                  </div>
                  <div className="text-neutral-500 mt-2">
                    -H &quot;Auth: Bearer ...&quot;
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Analytics Card */}
          <div className="f-card md:col-span-2 group relative rounded-3xl bg-indigo-50/40 border border-indigo-100 overflow-hidden hover:shadow-xl transition-all duration-500">
            <div className="p-10 flex flex-col h-full relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <Icon
                  icon="lucide:activity"
                  className="w-5 h-5 text-indigo-600"
                />
                <h3 className="text-2xl font-medium text-indigo-950">
                  Deep Observability
                </h3>
              </div>
              <p className="text-base text-indigo-900/60 max-w-sm leading-relaxed">
                Trace every token, monitor latency in real-time, and audit agent
                decision-making pathways with granular precision.
              </p>

              <div className="mt-auto flex gap-2 items-end h-32 w-full px-2">
                {[40, 70, 55, 85, 60, 95, 75, 50, 90, 65].map((h, i) => (
                  <div
                    key={i}
                    className="w-full bg-indigo-200 rounded-t-lg transition-all duration-700 ease-out"
                    style={{
                      height: `${h}%`,
                      opacity: 0.3 + i * 0.07,
                      backgroundColor: i > 7 ? "#4F46E5" : undefined,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scan {
          0% { top: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        .animate-scan {
          animation: scan 4s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Features;
