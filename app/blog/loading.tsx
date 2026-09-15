export default function Loading() {
  const progress = 65;

  return (
    <div className="fixed inset-0 z-[9999] flex h-svh w-screen items-center justify-center bg-black">
      <div
        className="text-3xl font-serif72"
        style={{
          background: `linear-gradient(
            to right,
            white ${progress}%,
            #444 ${progress}%
          )`,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        ASCENDIA RISE
      </div>
    </div>
  );
}
