import React from "react";
import LocationIcon from "../../assets/icon-location.svg"
import WebsiteIcon from "../../assets/icon-website.svg"
import TwitterIcon from "../../assets/icon-twitter.svg"
import CompanyIcon from "../../assets/icon-company.svg"

export default function Links(props){

    return(
        <ul className="changeable links w-full sm:flex flex-wrap justify-between  mt-[24px] text-[#4B6A9B]">
            <li>
                    <div><img src={LocationIcon} alt="" /></div>
                <p className="info">
                    {props.location}
                </p>
            </li>
            <li>
                   <div><img src={WebsiteIcon} alt="" /></div>
                <a href={props.website} className="info">
                    {props.website}
                </a>
            </li>
            <li>
                   <div> <img src={TwitterIcon} alt="" /></div>
                <a href={props.twitter} className="info">
                    {props.twitter}
                </a>
            </li>
            <li>
                   <div> <img src={CompanyIcon} alt="" /></div>
                <p className="info">
                    {props.company}
                </p>
            </li>
        </ul>
    )
}