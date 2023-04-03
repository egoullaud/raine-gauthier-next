import Link from "next/link";
import React from "react";

function Cta() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center mt-[2rem] mb-[5rem] text-xl">
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
