import React from "react";

export default function Followers(props){
    return(
        <div className="followers-area w-full h-[85px] bg-[#F6F8FF] rounded-[10px] p-[18px] box-border mt-[23px]">
            <table className="w-full text-center">
                <tbody>
                    <tr className="changeable text-[11px] text-[#4B6A9B]">
                        <th>Repos</th>
                        <th>Followers</th>
                        <th>Following</th>
                    </tr>
                    <tr className="changeable font-bold text-[16px]">
                        <td>{props.repos}</td>
                        <td>{props.followers}</td>
                        <td>{props.following}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}