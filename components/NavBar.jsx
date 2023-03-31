import React from "react";
import Link from "next/link";

function NavBar() {
  return (
    <div>
      <nav className="uppercase flex flex-col justify-center items-center border-b-2 pb-2">
        <h1 className="text-center my-[5rem] text-5xl">
          Raine Gauthier <br /> Photography
        </h1>
        <ul className="flex justify-evenly w-[60%]">
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
