import React from "react";
import Link from "next/link";

function NavBar() {
  return (
    <div className="mx-2 text-[#363636]">
      <nav className="uppercase flex flex-col justify-center items-center border-b-2 border-[#1f1f1f] pb-2">
        <div className="text-center my-[6rem]">
          <Link href="/">
            <h1 className="text-center  text-7xl leading-none">
              Raine Gauthier
            </h1>
            <h2 className="text-4xl">Photography</h2>
          </Link>
        </div>

        <ul className="flex justify-evenly w-[60%] lg:text-xl">
          <li>
            <Link href="/">overview</Link>
          </li>
          <li>
            <Link href="/">about</Link>
          </li>
          <li>
            <Link href="/">contact</Link>
          </li>
          <li>
            <Link href="/">galleries</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
