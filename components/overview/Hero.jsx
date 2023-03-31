import React from "react";
import Image from "next/image";
import heroImg from "../../public/hero/hero-img.jpg";

function Hero() {
  return (
    <div className="flex flex-col">
      {/* Hero area */}
      <div className="text-xl my-[3rem] flex justify-center items-center text-center">
        <p>
          “When words become unclear, I shall focus with photographs. When
          images become inadequate, I shall be content with silence.”
          <br />
          <span>— Ansel Adams</span>
        </p>
      </div>
      <Image src={heroImg} />
    </div>
  );
}

export default Hero;
