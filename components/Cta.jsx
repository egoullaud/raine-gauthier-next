import Link from "next/link";
import React from "react";

function Cta() {
  return (
    <div className="flex flex-row justify-around items-center text-xl lg:text-2xl md:w-[50%]">
      <Link href="/about">
        <button className="mx-5 my-1 uppercase hover:transition-all hover:underline hover:duration-1000 tracking-wide">
          Meet Me
        </button>
      </Link>
      <Link href="/contact">
        <button className="mx-5 my-1 uppercase hover:transition-all hover:underline hover:duration-1000 tracking-wide">
          Work with Me
        </button>
      </Link>
    </div>
  );
}

export default Cta;
