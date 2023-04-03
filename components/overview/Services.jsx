import React from "react";
import Image from "next/image";
import photography from "../../public/services/photography.jpg";

import Cta from "../Cta";

function Services() {
  return (
    <div className="bg-[#1f1f1f] text-white py-[2rem] flex flex-col justify-center items-center">
      <h1 className="text-2xl lg:text-4xl text-center  uppercase mb-[2rem]">
        Work with Me
      </h1>
      <div className="flex flex-col md:flex-row justify-center items-center">
        <div
          className="flex flex-col justify-center items-center mx-4
          md:w-[45%] 
          lg:w-[40%]
        xl:w-[30%]"
        >
          <Image src={photography} className=" w-[100%] object-cover" />
        </div>

        <div
          className="flex flex-col justify-center items-center
          md:w-[60%]
          lg:w-[40%]
          xl:w-[30%]"
        >
          <h3 className="lg:text-2xl text-xl font-bold py-4 uppercase tracking-widest">
            Photography
          </h3>
          <p className="w-[90%] text-center tracking-widest">
            I offer a wide range of services, including events, shows,
            festivals, headshots, couple and family portraits.
          </p>
          <h3 className="lg:text-2xl text-xl font-bold py-4 uppercase tracking-widest">
            Videography
          </h3>
          <p className="w-[90%] text-center mb-5  tracking-widest">
            I offer production and post-production services. Looking for someone
            to create your next video for social media? Have an idea for a
            documentary that you would love to see come to life? Let’s chat!
          </p>
        </div>
      </div>
      <Cta />
    </div>
  );
}

export default Services;
