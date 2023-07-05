import React, {useEffect, useState} from "react";
import Banner from "../components/banner";
import Card from "../components/card";



/*
주석 지우지말고 참고해서 만들면 됨!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
주석 지우지말고 참고해서 만들면 됨!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
주석 지우지말고 참고해서 만들면 됨!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
주석 지우지말고 참고해서 만들면 됨!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
주석 지우지말고 참고해서 만들면 됨!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
주석 지우지말고 참고해서 만들면 됨!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
주석 지우지말고 참고해서 만들면 됨!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
주석 지우지말고 참고해서 만들면 됨!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
주석 지우지말고 참고해서 만들면 됨!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
주석 지우지말고 참고해서 만들면 됨!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
*/


export default function MyFeed() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
      try {
        const response = await fetch(`http://52.78.155.175/user/info/${localStorage.getItem('userId')}`);
        const jsonData = await response.json();
        //console.log(`jsonData!!:${jsonData.articlePreviewInfo[0].title}`)
        const obj = await jsonData.articlePreviewInfo;
        
        console.log("데이터 요청 성공(myFeed):", obj);
        setData(obj);
      } catch (error) {
        console.error("데이터 요청 중 오류(myFeed):", error);
      }
    };
    return (
        <>
            <Banner></Banner> 
            <div className="grid gap-4 grid-cols-1 mb-16">
                <p className="text-3xl font-bold">#나의 글</p>
                <div className="flex flex-row gap-4 border-t border-black">
                    {data && data.length > 0 && data.slice(0,4).map((item) => (
                        <Card
                            key={item.content.articleId} // 각 아이템의 고유한 키 값 필요
                            image={item.thumbnail ? `data:image/png;base64, ${item.thumbnail}` : null}
                            title={`${item.title}`}
                            content={`내용:${item.content}`}
                        />
                    ))}
                </div>
                <div className="flex flex-row gap-4 border-t border-black">
                    {data && data.length > 0 && data.slice(4,8).map((item) => (
                        <Card
                            key={item.content.articleId} // 각 아이템의 고유한 키 값 필요
                            image={item.thumbnail ? `data:image/png;base64, ${item.thumbnail}` : null}
                            title={`${item.title}`}
                            content={`내용:${item.content}`}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}