import React, {useState} from "react";
import SunIcon from "../assets/icon-sun.svg"
import MoonIcon from "../assets/icon-moon.svg"

export default function Header(props){
    const [isDarkMode, setIsDarkMode] = useState(false)

    function toggleSwitch(){
        const body = document.body
        if(body.className === "active"){
          body.className = ""
          setIsDarkMode(false);
        }
        else{
          body.className = "active"
          setIsDarkMode(true)
        }
      }

    return(
        <nav className="flex sm:w-[573px] lg:w-[730px] m-auto justify-between items-center">
            <h1 className="text-[26px] font-bold">devfinder</h1>
            <div onClick={toggleSwitch} className="flex items-center font-bold cursor-pointer">
                <p className="mr-[10px] text-[#4B6A9B] tracking-[2.5px] text-[13px]">{isDarkMode ? "SUN" : "LIGHT"}</p>
                <img src={isDarkMode ? SunIcon : MoonIcon} alt="" />
            </div>
        </nav>
    )
}