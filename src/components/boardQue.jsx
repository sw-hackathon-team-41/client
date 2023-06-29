import React, { useEffect, useState } from "react";
import Card from "./card";

export default function BoardQue({ value }) {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
      try {
        const response = await fetch(`http://52.78.155.175/article/list/qna`);
        const jsonData = await response.json();
        const obj = await jsonData.content;
        
        console.log("데이터 요청 성공(QNA):", obj);
        setData(obj);
      } catch (error) {
        console.error("데이터 요청 중 오류:", error);
      }
    };
    return (
        <>
            <div className="grid gap-4 grid-cols-1 mb-16">
                <p className="text-3xl font-bold">{value}</p>
                <div className="flex flex-row gap-4 border-t border-black">
                    {data.length > 0 && data.slice(0, 4).map((item) => (
                        <Card
                            key={item.content.articleId} // 각 아이템의 고유한 키 값 필요
                            image={item.thumbnail ? `data:image/png;base64, ${item.thumbnail}` : null}
                            title={`제목:${item.title}`}
                            content={`내용:${item.content}`}
                            articleId={item.articleId}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}