import React from "react";
import BannerButton from "./bannerButton";

export default function Banner() {
    return (
        <>
        <div className="flex flex-row mt-10 overflow-x-auto mb-10">
            <div className="banner-container relative" >
                <img src="/images/test_banner.png" alt="이벤트 배너" className="banner-image object-contain w-full h-full" />
                <BannerButton></BannerButton>
            </div>
        </div>
        </>
    )    
}