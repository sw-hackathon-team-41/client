import React, { useEffect, useState } from "react";
import BannerButton from "./bannerButton";

export default function Banner() {
    const banners = [
        {id: 1, video: "/images/welcome.mp4", showButton: true},
        // {id: 2, video: "", showButton: false},
    ];
    
    
    const [currentIndex, setCurrentIndex] = useState(0);
    const [data, setData] = useState([]); //날씨 정보를 담을 변수
    
    const fetchData = async () => {
        try {
          const response = await fetch(`http://52.78.155.175/videoType`);
          const jsonData = await response.json();
          const obj = await jsonData.content;

          console.log("데이터 요청 성공(basic):", obj);
          setData(obj);
        } catch (error) {
          console.error("데이터 요청 중 오류:", error);
        }
      };

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((preIndex) => (preIndex + 1) % banners.length);
        }, 3000);
        fetchData();
        // banners[1].video = "/images/weather/" + data + ".mp4";

        return () => {
            clearInterval(timer);
        };
        
    }, [banners.length]);
    //날씨 정보 가져옴(2)

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