import React from "react";
import Link from "next/link";

function NavBar() {
  return (
    <div className="mx-2 text-[#363636] mb-[1rem] tracking-wider">
      <nav className="uppercase flex flex-col justify-center items-center border-b-2 border-[#1f1f1f] pb-2">
        <div
          className="text-center my-[2rem]
                      md:my-[3rem]
                        lg:my-[4rem]"
        >
          <Link href="/">
            <h1 className="text-center text-3xl md:text-5xl lg:text-7xl leading-none tracking-widest">
              Raine Gauthier
            </h1>
            <h2 className=" text-xl md:text-3xl lg:text-4xl tracking-widest">
              Photography
            </h2>
          </Link>
        </div>

        <ul className=" hidden md:flex justify-evenly w-[60%] lg:text-xl">
          <li>
            <Link href="/">overview</Link>
          </li>
          <li>
            <Link href="/about">about</Link>
          </li>
          <li>
            <Link href="/contact">contact</Link>
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
