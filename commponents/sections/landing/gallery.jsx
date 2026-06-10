"use client";
import Image from "next/image";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Gallery() {
  return (
    <div
      style={{ backgroundImage: `url(/home/Gallery.png)` }}
      className="flex flex-col bg-white   gap-0   bg-no-repeat bg-cover bg-center relative   w-screen h-[90vh]  items-start   justify-start "
    ></div>
  );
}
