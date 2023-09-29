"use client";

import { IconClose, IconHumberger } from "@/assets/svg/icon";
import React, { useState, useEffect } from "react";
import Link from "../../../node_modules/next/link";
import Buttons from "../UI/Buttons";
const Datas = [
  {
    id: 1,
    link: "#",
    title: "School",
  },
  {
    id: 2,
    link: "#",
    title: "Work",
  },
  {
    id: 3,
    link: "#",
    title: "Home",
  },
  {
    id: 4,
    link: "#",
    title: "Study",
  },
  {
    id: 5,
    link: "#",
    title: "Academy",
  },
  {
    id: 4,
    link: "#",
    title: "Marketplace",
  },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const OpenHandler = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav
        className={`w-full px-4 py-3 bg-neutral-50 flex justify-between items-center`}
      >
        <div className={`flex gap-6 items-center `}>
          {/* mobile */}
          <div className="hidden">
            <button className="flex" onClick={OpenHandler}>
              <div className={`${isOpen ? "block" : "hidden"}`}>
                <IconHumberger />
              </div>
              <div className={`${isOpen ? "hidden" : "block"}`}>
                <IconClose />
              </div>
            </button>
          </div>
          <h4>QuizMe?</h4>

          {/* desktop */}
          <div className={`sm:flex sm:flex-row gap-4 `}>
            {Datas.map((item, index) => (
              <Link href={item.link} key={index}>
                <Buttons variant="text" className="px-0">
                  {item.title}
                </Buttons>
              </Link>
            ))}
          </div>
        </div>
        <div>
          <Link href="#">
            <Buttons className="w-[60px]">Play</Buttons>
          </Link>
        </div>

        <div>
          {/* <div
            className={`absolute z-100 top-11 left-0 w-full ${
              !isOpen ? "h-[460px]" : "hidden"
            }`}
          >
            <div>
              {Datas.map((item, index) => (
                <Link href={item.link} key={index}>
                  <Buttons variant="text" className="px-0">
                    {item.title}
                  </Buttons>
                </Link>
              ))}
            </div>
          </div> */}
        </div>
      </nav>
    </>
  );
};

export default Header;
