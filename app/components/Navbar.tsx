"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { useState } from "react";


export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);


  function getMenuClasses() {
    let menuClasses = [];
    if (isOpen) {
      menuClasses = [
        "flex",
        "absolute",
        "top-(60px)",
        "bg-gray-800",
        "text-white", "w-full",
        "p-4",
        "sm:p-6",
        "md:flex",
        "md:justify-between",
        "md:hidden-center,"
      ];
    } else {
      menuClasses.push("hidden");
    }
    return menuClasses.join(" ");
  }


  return (

    <nav className=" bg-gray-800 text-white p-4 sm:p-6 md:flex md:justify-between md:hidden-center">
      <div className="container mx-auto flex justify-between items-center">
        <a href="">ADHDAV</a>
        <div className={`${isOpen ? "flex" : "hidden"} flex-col md:flex-row`}>
          <Link href="/" className=" mx-2 hover:text-gray-300 ">Home</Link>
          <Link href="/project" className="mx-2 hover:text-gray-300">Project</Link>
          <Link className="mx-2 hover:text-gray-300" href="#">
            Portfolio
          </Link>
          <Link href="/about" className="mx-2 hover:text-gray-300">About</Link>
        </div>

        <div className="md:hidden flex items-center">
          <button onClick={() => {
            setIsOpen(!isOpen);
          }}>

            <svg viewBox="0 0 100 80" width="40" height="40">
              <rect width="100" height="20"></rect>
              <rect y="30" width="100" height="20"></rect>
              <rect y="60" width="100" height="20"></rect>
            </svg>
          </button>
        </div>
      </div >
    </nav>

  );
}
