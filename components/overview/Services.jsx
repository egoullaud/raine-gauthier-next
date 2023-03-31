import React from "react";
import Image from "next/image";
import photography from "../../public/services/photography.jpg";
import videography from "../../public/services/videography6.jpg";

function Services() {
  return (
    <div className="bg-[#1f1f1f] text-white  py-[3rem]">
      <div className="flex justify-center">
        <div
          className="flex flex-col justify-start items-center
        lg:w-[30%]"
        >
          <Image
            src={photography}
            className="max-h-[18rem] w-[75%] object-cover"
          />
          <h3 className="lg:text-2xl py-4 uppercase">Photography</h3>
          <p className="w-[70%] text-center">
            I offer a wide range of services, including events, shows,
            festivals, headshots, couple and family portraits.
          </p>
        </div>

        <div
          className="flex flex-col justify-center items-center
        lg:w-[30%]"
        >
          <Image src={videography} className="max-h-72 w-[75%] object-cover " />
          <h3 className="lg:text-2xl py-4 uppercase">Videography</h3>
          <p className="w-[70%] text-center">
            I offer production and post-production services. Looking for someone
            to create your next video for social media? Have an idea for a
            documentary that you would love to see come to life? Let’s chat!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
