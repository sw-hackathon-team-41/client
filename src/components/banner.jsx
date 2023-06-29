import React, { useEffect, useState } from "react";
import BannerButton from "./bannerButton";

export default function Banner() {
    const banners = [
        {id: 1, image: "/images/test_banner.png", showButton: true},
        {id: 2, image: "/images/test_banner2.png", showButton: false},
    ];
    
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((preIndex) => (preIndex + 1) % banners.length);
        }, 2000);

        return () => {
            clearInterval(timer);
        };
    }, [banners.length]);
    return (
        <>
        <div className="grid gap-4 gird-cols-2 mt-10 overflow-x-auto mb-10">
            <div className="banner-container" >
                <img src={banners[currentIndex].image} alt="이벤트 배너" className="banner-image object-contain w-full h-full" />
            </div>
            <div>
                {banners[currentIndex].showButton && <BannerButton />}
            </div>
        </div>
        </>
    )    
}