import React from "react";

export default function SearchInput(props){
    function handleClick(){
        let input = document.querySelector(".search");
        if(input.value !== ""){
            props.getInputValue(input.value);
            input.value = "";
        }
    }

    return(
        <div className="search-area w-full m-auto sm:w-[573px] lg:w-[730px]  flex items-center mt-[35px]">
            <input className="search w-full h-[60px] rounded-[15px] sm:h-[69px] cursor-pointer" placeholder="Search GitHub username.." type="text" />
            <button onClick={handleClick} className="search-button -ml-[88px] h-[46px] sm:h-[50px] w-[84px] bg-[#0079FF] rounded-[10px] text-[white] text-[14px] font-bold hover:bg-[#60ABFF]">Search</button>
        </div>
    )
}