"use client";

const MAX_DOTS = 7; // how many dots are visible at once
const DOT_STEP = 20; // px per dot slot (click area + spacing)
const ALWAYS_CENTER = true; // true: current dot is always in the middle
// false: the window stops at the first/last dot, so the current dot
//        moves off-center near the ends but there is never empty space

export default function ArticleDots({ total, current, onSelect }) {
  if (total <= 1) return null;

  const half = Math.floor(MAX_DOTS / 2);
  const windowed = total > MAX_DOTS;
  const visibleCount = Math.min(total, MAX_DOTS);

  // index of the first dot inside the window
  let windowStart = 0;
  if (windowed) {
    windowStart = ALWAYS_CENTER
      ? current - half
      : Math.min(Math.max(current - half, 0), total - MAX_DOTS);
  }

  const moreLeft = windowed && windowStart > 0;
  const moreRight = windowed && windowStart + MAX_DOTS < total;

  return (
    <div className="absolute bottom-0 z-40 flex h-[5vh] md:h-[10vh] w-full items-center justify-center">
      {/* viewport: only MAX_DOTS slots wide, everything else is clipped */}
      <div
        className="overflow-hidden"
        style={{ width: visibleCount * DOT_STEP }}
      >
        {/* track: slides so the window follows the current dot */}
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(${-windowStart * DOT_STEP}px)` }}
        >
          {Array.from({ length: total }).map((_, index) => {
            const inWindow =
              !windowed ||
              (index >= windowStart && index < windowStart + MAX_DOTS);

            // shrink the dots at the edges to hint that there are more
            const fromLeft = index - windowStart;
            const fromRight = windowStart + MAX_DOTS - 1 - index;
            let scale = 1;
            if (moreLeft && fromLeft === 0) scale = 0.5;
            else if (moreLeft && fromLeft === 1) scale = 0.75;
            if (moreRight && fromRight === 0) scale = 0.5;
            else if (moreRight && fromRight === 1) scale = 0.75;

            const isCurrent = current === index;

            return (
              <button
                key={index}
                onClick={() => onSelect(index)}
                tabIndex={inWindow ? 0 : -1}
                aria-label={`Article ${index + 1}`}
                aria-current={isCurrent ? "true" : undefined}
                style={{ width: DOT_STEP }}
                className={`flex shrink-0 cursor-pointer items-center justify-center ${
                  inWindow ? "" : "pointer-events-none"
                }`}
              >
                <span
                  className="relative block aspect-square w-3 rounded-full border-2 border-white/70 transition-all duration-500"
                  style={{
                    transform: `scale(${scale})`,
                    opacity: inWindow ? 1 : 0,
                  }}
                >
                  <span
                    className={`absolute left-1/2 top-1/2 aspect-square w-1.5 md:w-2.5
                      -translate-x-1/2 -translate-y-1/2 rounded-full transition-colors duration-500
                      ${isCurrent ? "bg-white/70" : ""}`}
                  />
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
