import Link from "next/link";
import React from "react";

function Cta() {
  return (
    <div className="flex flex-col md:flex-row justify-around items-center mt-[4rem] mb-[2rem] text-xl lg:text-2xl w-[50%]">
      <Link href="/about">
        <button className="mx-5 uppercase hover:transition-all hover:underline hover:duration-1000">
          Meet Raine
        </button>
      </Link>
      <Link href="/contact">
        <button className="mx-5 uppercase hover:transition-all hover:underline hover:duration-1000">
          Get in Touch
        </button>
      </Link>
    </div>
  );
}

export default Cta;
