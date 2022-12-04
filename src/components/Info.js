import React, {useEffect} from "react";
import AboutAvatar from "./ProfileInfo/AboutAvatar";
import Followers from "./ProfileInfo/Followers";
import Links from "./ProfileInfo/Links";
import ValidateFunction from "./ValidateFunction";

export default function Info(props){
    useEffect(() => {
        ValidateFunction()
    });

    return(       
        <div className="about w-full sm:w-[573px] lg:w-[730px] lg:pl-[202px] m-auto rounded-[15px] min-h-[400px] px-[24px] py-[32px] box-border mt-[16px]">
            <AboutAvatar userImg = {props.info.avatar_url} userName = {props.info.name} login = {props.info.login} joined = {props.info.created_at} bio={props.info.bio}    />
            <Followers repos={props.info.public_repos} followers={props.info.followers} following = {props.info.following}  />
            <Links location = {props.info.location} website={props.info.blog} twitter={props.info.twitter_username} company={props.info.company}   />
        </div>
    )
}