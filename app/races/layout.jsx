import Decouvrir from "@/commponents/layout/dcouvrir.jsx";

export default function RootLayout({ children }) {
  return (
    <div className={` h-full overflow-hidden w-full antialiased`}>
      {children}
      <Decouvrir className="mb-[10vh] border-white/20 border-l-0" />
    </div>
  );
}
