import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="flex flex-col lg:flex-row justify-around border-t-2 border-[#1f1f1f] uppercase mx-2">
      <div className="lg:w-[33%] lg:py-[3rem] flex-col flex justify-center items-center">
        <h4 className="text-center py-5 underline text-xl">Follow Me</h4>
        <ul className="flex justify-around w-[60%]">
          <li>facebook</li>
          <li>instagram</li>
        </ul>
      </div>
      <div className="lg:w-[33%] lg:py-[3rem] lg:border-x-2 border-[#1f1f1f] my-2 flex-col flex justify-center items-center">
        <Link href="/overview">
          <h4 className="text-center py-5 underline text-xl">
            Raine Gauthier Photography
          </h4>
        </Link>
        <p>back to top</p>
      </div>
      <div className="lg:w-[33%] lg:py-[3rem] flex-col flex justify-center items-center">
        <Link href="/contact">
          <h4 className="text-center py-5 underline text-xl">Get in Touch</h4>
        </Link>
        <p>Email me: raineg@gmail.com </p>
      </div>
    </div>
  );
}

export default Footer;
