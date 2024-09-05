"use client";

import { useRef, useState, useEffect } from "react";
import { useNavProvider } from "./nav-provider";
import Link from "next/link";
import { motion } from "framer-motion";

export default function NavigationMenu({
  links,
}) {
  const [activeLink, setActiveLink] = useState("")
  const activeLinkRef = useRef(null);
  const [animationProps, setAnimationProps] = useState({
    left: 0,
    width: 0,
  });  

  // check if the url has a hash and if so, set the active link
  useEffect(() => {
    console.log(
      window.location.pathname
    );
    
    const url = window.location.pathname;
      setActiveLink(url);      
  }, []);  

  // update the position and width of the active link underline
  useEffect(() => {
    
    const updateActiveLink = () => {
      if (activeLinkRef.current) {
        const { width } = activeLinkRef.current.getBoundingClientRect();
        const left = activeLinkRef.current.offsetLeft;
        setAnimationProps({
          left,
          width,
        });
      }
    };

    updateActiveLink();
    window.addEventListener('resize', updateActiveLink);

    return () => {
      window.removeEventListener('resize', updateActiveLink);
    };
  }, [activeLink]);  
  console.log(activeLink);

  return (
    <header className="fixed top-0 md:top-2 w-full z-30">
      <div className="max-w-5xl mx-auto lg:px-40 sm:px-0">
        <div className="flex h-14 w-full items-center justify-center gap-3 lg:rounded-full border border-gray-100 bg-white px-3 shadow-lg shadow-black/[0.04]">
         
          <nav className="relative flex justify-between w-full">
            <motion.div 
              className="absolute left-0 inset-y-0 bg-indigo-100 rounded-full"
              aria-hidden="true"
              animate={{
                ...animationProps,
              }}
              transition={{ type: "spring", duration: 0.5 }}
            ></motion.div>
            <ul className="relative flex flex-wrap items-center justify-between w-full gap-3 text-sm font-medium  lg:gap-8 px-10">
              {links.map((link) => (
                <li key={link.slug}>
                  <Link
                    href={`${link.slug}`}
                    onClick={() => setActiveLink(link.slug)}
                    ref={activeLink == link.slug ? activeLinkRef : null}
                    className={`inline-flex rounded-full lg:px-3 lg:py-1.5 text-slate-500 hover:text-indigo-500 [&.active]:text-indigo-600 ${activeLink === link.slug ? "active" : ""}`}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}