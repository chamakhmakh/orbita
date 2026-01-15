"use client";

import { Icon } from "@iconify/react";
import gsap from "gsap";
import { useEffect, useRef } from "react";

const Platform = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "+=300%",
          scrub: 0.8,
          pin: true,
          anticipatePin: 1,
        },
      });

      gsap.set(".v-card", { opacity: 0, scale: 0.8, x: 150, rotateY: 20 });
      gsap.set(".v-card:first-child", {
        opacity: 1,
        scale: 1,
        x: 0,
        rotateY: 0,
      });
      gsap.set(".p-text", { opacity: 0, y: 40 });
      gsap.set(".p-text:first-child", { opacity: 1, y: 0 });

      tl.to(".v-card:nth-child(1)", {
        opacity: 0,
        x: -150,
        scale: 0.8,
        rotateY: -20,
        duration: 1,
      })
        .to(".p-text:nth-child(1)", { opacity: 0, y: -40, duration: 1 }, "<")
        .to(
          ".v-card:nth-child(2)",
          { opacity: 1, x: 0, scale: 1, rotateY: 0, duration: 1 },
          "<0.2"
        )
        .to(".p-text:nth-child(2)", { opacity: 1, y: 0, duartion: 1 }, "<");

      tl.to(".v-card:nth-child(2)", {
        opacity: 0,
        x: -150,
        scale: 0.8,
        rotateY: -20,
        duration: 1,
      })
        .to(".p-text:nth-child(2)", { opacity: 0, y: -40, duration: 1 }, "<")
        .to(
          ".v-card:nth-child(3)",
          { opacity: 1, x: 0, scale: 1, rotateY: 0, duration: 1 },
          "<0.2"
        )
        .to(".p-text:nth-child(3)", { opacity: 1, y: 0, duartion: 1 }, "<");
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={triggerRef}
      className="relative bg-[#FAFAFA] h-screen"
      id="platform"
    >
      <div
        ref={containerRef}
        className="relative h-screen overflow-hidden flex items-center justify-center"
      >
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 bg-indigo-50/40 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="relative w-full max-w-7xl px-8 h-full flex flex-col justify-center">
          {/* Text Content Layer */}
          <div className="absolute left-8 md:left-20 top-1/2 -translate-y-1/2 z-20 w-full md:w-100 pointer-events-none">
            <div className="p-text">
              <h2 className="text-4xl font-medium tracking-tight text-neutral-900 mb-6 leading-tight">
                Unified Logic Layer
              </h2>
              <p className="text-neutral-500 text-lg leading-relaxed">
                Connect disparate data sources into a cohesive neural fabric.
                Orbita standardizes inputs, making every signal actionable.
              </p>
            </div>
            <div className="p-text absolute top-0 left-0 w-full">
              <h2 className="text-4xl font-medium tracking-tight text-neutral-900 mb-6 leading-tight">
                Recursive Learning
              </h2>
              <p className="text-neutral-500 text-lg leading-relaxed">
                The system observes execution patterns, self-optimizing
                workflows in real-time to reduce latency and cost.
              </p>
            </div>
            <div className="p-text absolute top-0 left-0 w-full">
              <h2 className="text-4xl font-medium tracking-tight text-neutral-900 mb-6 leading-tight">
                Autonomous Agents
              </h2>
              <p className="text-neutral-500 text-lg leading-relaxed">
                Deploy purpose-built AI agents that negotiate, execute, and
                verify complex tasks without human intervention.
              </p>
            </div>
          </div>

          {/* Visual Cards Layer */}
          <div className="relative w-full md:w-3/5 ml-auto h-[60vh] perspective-[2000px] flex items-center justify-center">
            {/* Card 1 */}
            <div className="v-card absolute glass w-[320px] md:w-125 aspect-[1.4] rounded-3xl shadow-xl border border-white/60 p-8 flex flex-col justify-between overflow-hidden">
              <div className="flex items-center justify-between border-b border-neutral-100 pb-6 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
                  <span className="text-xs font-semibold text-neutral-400 uppercase tracking-widest">
                    Active Stream
                  </span>
                </div>
                <Icon icon="lucide:cpu" className="w-5 h-5 text-neutral-400" />
              </div>
              <div className="space-y-4">
                <div className="h-2.5 w-3/4 bg-neutral-100 rounded-full"></div>
                <div className="h-2.5 w-1/2 bg-neutral-100 rounded-full"></div>
                <div className="pt-4 flex gap-3">
                  <div className="h-10 w-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600">
                    <Icon icon="lucide:databse" className="w-5 h-5" />
                  </div>
                  <div className="flex-1 h-10 rounded-xl bg-neutral-50 border border-neutral-100 relative overflow-hidden">
                    <div className="absolute inset-0 bg-linear-to-r from-transparent via-neutral-200/40 to-transparent w-full -translate-x-full animate-[shimmer_2s_infinite]"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="v-card absolute glass w-[320px] md:w-125 aspect-[1.4] rounded-3xl shadow-2xl border border-white/60 p-8 flex flex-col">
              <div className="flex items-center justify-between mb-8">
                <span className="text-xs font-semibold text-indigo-600 border border-indigo-100 bg-indigo-50 px-3 py-1 rounded-full uppercase tracking-wider">
                  Neural Tuning
                </span>
              </div>
              <div className="flex-1 flex items-center justify-center">
                <div className="relative w-40 h-40">
                  <svg
                    viewBox="0 0 100 100"
                    className="w-full h-full -rotate-90"
                  >
                    <circle
                      cx="50"
                      cy="50"
                      r="42"
                      stroke="#f1f1f1"
                      strokeWidth="8"
                      fill="transparent"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="42"
                      stroke="#6366f1"
                      strokeWidth="8"
                      fill="transparent"
                      strokeDasharray="263.8"
                      strokeDashoffset="52"
                      strokeLinecap="round"
                      className="transition-all duration-1000"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-4xl font-bold text-neutral-900 tracking-tighter">
                      98.4
                    </span>
                    <span className="text-[10px] font-semibold text-neutral-400 uppercase">
                      Opt-Score
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="v-card absolute glass-dark w-[320px] md:w-125 aspect-[1.4] rounded-3xl shadow-2xl border border-white/10 p-8 flex flex-col">
              <div className="flex items-center gap-4 mb-10 text-white">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10">
                  <Icon icon="lucide:bot" className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-base font-medium">Orion-VII</div>
                  <div className="text-xs text-neutral-400 font-mono">
                    Status: Orchestrating...
                  </div>
                </div>
              </div>
              <div className="space-y-3 font-mono text-xs text-neutral-400 leading-relaxed">
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span>&gt; Analyzing intent</span>{" "}
                  <span className="text-emerald-400 font-bold">ACK</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span>&gt; RAG retrieval</span>{" "}
                  <span className="text-emerald-400 font-bold">ACK</span>
                </div>
                <div className="flex justify-between pb-2">
                  <span>&gt; Generating logic</span>{" "}
                  <span className="animate-pulse text-indigo-400 font-bold">
                    PROCESS...
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  );
};

export default Platform;
