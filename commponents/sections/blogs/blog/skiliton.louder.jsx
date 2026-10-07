"use client";

export default function SkilitonLouder({ article }) {
  if (article.content) return;

  const categories = Array(6);
  return (
    <>
      {" "}
      {/*titel and subtitel  */}
      <div className="w-[95%] gap-2.5 flex flex-col min-h-[10svh] ">
        <div className=" w-full a min-h-[7svh] animate-shimmer  "></div>
        <div className="  min-w-1/2 w-1/2 min-h-[7svh] animate-shimmer  "></div>
      </div>
      {/* artical skiliton loader Image  */}
      <div className="w-[95%] gap-2.5 flex flex-col min-h-[50svh] animate-shimmer  "></div>
      {/*artical skiliton loader metadata */}
      <div className="w-[95%] gap-2.5 flex flex-row min-h-[10svh] ">
        <div className=" min-w-[15svw] flex self-start min-h-[5svh] animate-shimmer  "></div>
        <div className="  min-w-[15svw] flex self-start   min-h-[5svh] animate-shimmer  "></div>
        <div className="  min-w-[15svw] flex self-start   min-h-[5svh] animate-shimmer  "></div>
      </div>
      {/*artical skiliton loader content   */}
      <div className="w-[95%] relative gap-2.5  min-h-[10svh] ">
        {/*catigory  sidebar  */}
        <div className="float-left w-auto min-h-[70svh] ">
          {" "}
          <div className="justify-center border-r border-[#A4A4A4] gap-[2svh] text-[#403E37] flex flex-col w-[20svw] mr-[5svw] items-center h-[70svh] mb-[5svh]">
            <div className="uppercase text-[clamp(1rem,3dvw,1.2rem)] font-semibold w-[90%]">
              Les Titres
            </div>
            <div className="w-[80%] flex flex-col gap-[0.8rem]">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setSelectedCategory(category);
                  }}
                  className={`w-full flex flex-row h-[5svh] animate-shimmer  lowercase text-start cursor-pointer items-center gap-2 ${
                    selectedCategory === category
                      ? "text-[#A47B27] font-semibold"
                      : ""
                  }`}
                ></button>
              ))}
            </div>
          </div>
        </div>

        {/*content    */}
        <div className="w-[100%]  text-black  min-h-full">
          {[, 1, 1, 1, , 1, 1, 1, 1, 4, 2, 1, 1, 1, 1].map((_, idx) => (
            <div
              key={idx}
              className="  min-w-[15svw] flex self-start my-5  min-h-[5svh] animate-shimmer  "
            />
          ))}
        </div>
      </div>
    </>
  );
}
