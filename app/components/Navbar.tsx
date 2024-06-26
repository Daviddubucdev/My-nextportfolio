import React from "react";
import Link from "next/link";
export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 w-full">
      <nav>
        <ul className="flex items-center justify-evenly p-3.5 bg-gradient-to-b from-slate-900 to-stone-900 pt-7 ">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/project">Project</Link>
          </li>
          <li>
            <Link className="line-through	" href="#">Portfolio</Link>
          </li>{" "}
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
