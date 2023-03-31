import React from "react";
import Link from "next/link";

function NavBar() {
  return (
    <div>
      <nav>
        <h1>Raine Gauthier Photography</h1>
        <ul>
          <li>
            <Link href="/">overview</Link>
            <Link href="/">about</Link>
            <Link href="/">contact</Link>
            <Link href="/">galleries</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
