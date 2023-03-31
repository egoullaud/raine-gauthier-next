import React from "react";
import Image from "next/image";
import heroImg from "../../public/hero/hero-img.jpg";

function Hero() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero area */}
      <div className="text-3xl my-[5rem] flex justify-center items-center text-center w-[50%]">
        <p className="italic ">
          “When words become unclear, I shall focus with photographs. When
          images become inadequate, I shall be content with silence.”
          <br />
          <span className="not-italic">— Ansel Adams</span>
        </p>
      </div>
      <Image src={heroImg} />
    </div>
  );
}

export default Hero;
