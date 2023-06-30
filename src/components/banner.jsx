import React, { useEffect, useState } from "react";
import BannerButton from "./bannerButton";

export default function Banner() {
    const banners = [
        {id: 1, video: "/images/welcome.mp4", showButton: true},
        {id: 2, video: "/images/weather/", showButton: false},
    ];
    
    
    const [currentIndex, setCurrentIndex] = useState(0);
    const [data, setData] = useState([]); //날씨 정보를 담을 변수

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((preIndex) => (preIndex + 1) % banners.length);
        }, 3000);
        //fetchData 불러오기(1)
        fetchData();

        return () => {
            clearInterval(timer);
        };
        
    }, [banners.length]);

    //날씨 정보 가져옴(2)
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
                <div className="banner-text absolute top-0 left-0 text-white p-4">
                        <h2 className="text-2xl font-bold">Banner Text</h2>
                        <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                
            </div>
            {banners[currentIndex].showButton && <BannerButton />}
        </div>
        
        </>
    )    
}