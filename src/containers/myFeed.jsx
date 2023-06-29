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
    // const [data, setData] = useState([]);

    // useEffect(() => {
    //   // 데이터 조회 로직
    //   // 데이터를 가져와서 setData로 상태 업데이트
    //   const fetchData = async () => {
    //     try {
    //       const response = await fetch("API_URL");
    //       const jsonData = await response.json();
    //       setData(jsonData);
    //     } catch (error) {
    //       console.log(error);
    //     }
    //   };
  
    //   fetchData();
    // }, []);
    return (
        <>
            <Banner></Banner> 
            <div className="grid gap-4 grid-cols-1 mb-16">
                <p className="text-3xl font-bold">#나의 글</p>
                <div className="flex flex-row gap-4 border-t border-black">
                   {/* {data.map((item) => (
                        <Card image={item.image} title={item.title} content={item.content} />
                    ))} */}
                </div>
            </div>
        </>
    )
}