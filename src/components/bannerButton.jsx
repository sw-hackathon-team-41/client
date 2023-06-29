import React from "react";
import { NavLink } from "./navElements";

export default function BannerButton() {
    return (
        <>
            <NavLink to='/survey' className="btn bg-white text-lime-900 font-bold text-xl absolute top-2/3 left-20 w-40 h-20 rounded-lg ">테스트하기</NavLink>
        </>
    )
}