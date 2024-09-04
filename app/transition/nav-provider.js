"use client";

import { createContext, Dispatch, SetStateAction, useContext, useState } from "react";


const NavContext = createContext({
  activeLink: "",
  setActiveLink:()=>"",
})

export default function NavProvider({
  children
}) {  
  const [activeLink, setActiveLink] = useState("")

  return (
    <NavContext.Provider value={{ activeLink, setActiveLink}}>
      {children}
    </NavContext.Provider>
  )
}

export const useNavProvider = () => useContext(NavContext)