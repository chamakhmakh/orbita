const Footer = () => {
  return (
    <footer className="bg-white border-t border-neutral-300 py-20">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-start gap-16">
        <div className="max-w-xs">
          <a
            href="#"
            className="text-lg font-medium tracking-tighter text-neutral-900 flex items-center gap-2 group"
          >
            <div className="w-5 h-5 bg-neutral-900 rounded-sm flex items-center justify-center group-hover:rotate-45 transition-transform duration-500">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            ORBITA
          </a>
          <p className="text-sm text-neutral-400 leading-relaxed mb-6">
            The intelligent orchestration layer for modern enterprises. Unifying
            logic, data, and action.
          </p>
          <div className="text-[11px] text-neutral-300 font-semibold uppercase tracking-widest">
            &copy; 2024 Orbita Inc. • SF/NYC
          </div>
        </div>

        <div className="flex gap-24">
          <div className="flex flex-col gap-4">
            <span className="text-[13px] font-bold text-neutral-900 uppercase tracking-[0.2em] mb-2">
              Platform
            </span>
            {["Engine", "Agents", "Workflows", "Security"].map((l) => (
              <a
                key={l}
                href="#"
                className="text-[11px] text-neutral-500 hover:text-neutral-900 transition-colors"
              >
                {l}
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-[13px] font-bold text-neutral-900 uppercase tracking-[0.2em] mb-2">
              Company
            </span>
            {["Intelligence", "Enterprise", "Changelog", "Careers"].map((l) => (
              <a
                key={l}
                href="#"
                className="text-[11px] text-neutral-500 hover:text-neutral-900 transition-colors"
              >
                {l}
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-[13px] font-bold text-neutral-900 uppercase tracking-[0.2em] mb-2">
              Legal
            </span>
            {["Privacy", "Terms", "Security", "Compliance"].map((l) => (
              <a
                key={l}
                href="#"
                className="text-[11px] text-neutral-500 hover:text-neutral-900 transition-colors"
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
