import React, { useEffect, useState } from "react";
import BannerButton from "./bannerButton";

export default function Banner() {
    const banners = [
        {id: 1, video: "/images/test_banner.mp4", showButton: true},
        // {id: 2, video: "/images/test_banner2.png", showButton: false},
    ];
    
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((preIndex) => (preIndex + 1) % banners.length);
        }, 3000);

        return () => {
            clearInterval(timer);
        };
    }, [banners.length]);
    return (
        <>
        <div className="grid gap-4 gird-cols-2 mt-1 overflow-x-auto mb-10 relative">
            <div className="banner-container" >
            {banners[currentIndex].video && (
                    <video
                        src={banners[currentIndex].video}
                        alt="이벤트 동영상"
                        className="banner-video object-contain w-auto h-auto"
                        autoPlay
                        muted
                    />
                )}
            </div>
            {banners[currentIndex].showButton && <BannerButton />}
        </div>
        
        </>
    )    
}