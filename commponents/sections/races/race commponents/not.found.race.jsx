import Link from "next/link";

export default function RaceNotFound() {
  return (
    <div className="flex min-h-screen w-screen items-center justify-center bg-black px-6 text-white">
      <div className="flex max-w-2xl flex-col items-center gap-5 text-center">
        <h1 className="text-4xl font-bold font-serif72 text-primary">
          This Race Doesn't Exist Yet
        </h1>

        <p className="text-lg text-gray-400">
          We couldn't find a race matching this type. Have an idea for a new
          race you'd like to see in our world? Let us know!
        </p>

        <Link
          href="/contact"
          className="rounded-lg bg-primary font-serif72  px-12 py-6 font-semibold text-white transition hover:scale-105 "
        >
          Suggest a New Race
        </Link>
      </div>
    </div>
  );
}
