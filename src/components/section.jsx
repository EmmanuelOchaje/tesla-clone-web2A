export default function Section({
  title,
  subtitle,
  bg,
  showScroll = false,
  darkBtns = false,
}) {
  return (
    <section
      className="relative h-screen flex flex-col items-center justify-between bg-cover bg-center snap-start"
      style={{ background: bg }}
    >
      <div className="text-center pt-28 px-4 animate-fadeIn">
        <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-md tracking-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-2 text-sm md:text-base text-white/90 font-light">
            {subtitle}
          </p>
        )}
      </div>

      <div className="pb-10 flex flex-col items-center gap-4">
        <div className="flex flex-wrap gap-3 justify-center">
          <button
            className={`min-w-[160px] py-3 px-7 rounded text-[13px] font-medium tracking-wide transition-opacity hover:opacity-80 ${
              darkBtns
                ? "bg-[#171a20]/80 text-white"
                : "bg-[#171a20]/80 text-white"
            }`}
          >
            Order Now
          </button>
          <button
            className={`min-w-[160px] py-3 px-7 rounded text-[13px] font-medium tracking-wide transition-opacity hover:opacity-80 ${
              darkBtns
                ? "bg-white/85 text-[#171a20]"
                : "bg-white/85 text-[#171a20]"
            }`}
          >
            Learn More
          </button>
        </div>

        {showScroll && (
          <div className="flex flex-col items-center gap-1 animate-bounce mt-2">
            <span className="text-white/60 text-[10px] tracking-widest">
              SCROLL
            </span>
            <div className="w-4 h-4 border-r-2 border-b-2 border-white/60 rotate-45 mt-1" />
          </div>
        )}
      </div>
    </section>
  );
}
