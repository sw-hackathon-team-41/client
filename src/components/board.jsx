import React, { useEffect, useState } from "react";
import Card from "./card";

export default function Board({ value }) {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const id = 1; // 게시물 번호

    const fetchData = async () => {
      try {
        const response = await fetch(`http://52.78.155.175/article/${id}`);
        const jsonData = await response.json();
        console.log("데이터 요청 성공:", jsonData);
        setData(jsonData);
      } catch (error) {
        console.error("데이터 요청 중 오류:", error);
      }
    };
    return (
        <>
            <div className="grid gap-4 grid-cols-1 mb-16">
                <p className="text-3xl font-bold">{value}</p>
                <div className="flex flex-row gap-4 border-t border-black">
                    <Card 
                    image="/images/test_hub.png"
                    title={data.title}
                    content={data.content}
                />
                <Card
                    image="/images/test_hub.png"
                    title={data.content}
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                />
                <Card
                    image="/images/test_hub.png"
                    title="Example Card"
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                />
                <Card
                    image="/images/test_hub.png"
                    title="Example Card"
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                />
                    {/* {data.map((item) => (
                        <Card
                            image="/images/test_hub.png"
                            title={item.title}
                            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                        />
                    ))} */}
                </div>
            </div>
        </>
    );
}