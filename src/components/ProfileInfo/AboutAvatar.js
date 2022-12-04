import React, {useState,useEffect} from "react";

export default function AboutAvatar(props){
    const [printableDate, setPrintableDate] = useState([])

    useEffect(()=>{
        const date = props.joined.split("T");
        const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
        const d = new Date(date[0]);
        let monthName = month[d.getMonth()];
        let day = d.getDate();
        let year = d.getFullYear();
        setPrintableDate([monthName,day,year])
    }, [])

    return(
        <>
            <div className="flex items-center">
                <img className="w-[70px] h-[70px] lg:w-[117px] lg:h-[117px] lg:-ml-[135px] rounded-[50%]" src={props.userImg} alt="" />
                <div className="ml-[20px]">
                    <h1 className="info changeable font-bold text-[16px] lg:text-[26px]">{props.userName}</h1>
                    <p className="info text-[#0079FF] text-[13px] lg:text-[16px]">@{props.login}</p>
                    <span className="info changeable text-[#697C9A] text-[13px lg:text-[15px] lg:relative lg:-top-[55px] lg:left-[290px]">Joined {printableDate[1]} {printableDate[0]} {printableDate[2]} </span>
                </div>
            </div>
            <p className="info changeable leading-[25px] mt-[34px] text-[13px] text-[#4B6A9B]">{props.bio}</p>
        </>
    )
}