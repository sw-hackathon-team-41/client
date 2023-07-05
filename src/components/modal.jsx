import React, { useRef } from "react";
import { useEffect ,useState } from "react";

export default function Modal(articleId,image) {
    const modalRef = useRef(null);
    const [data, setData] = useState([]);

    const openModal = () => {
        if (modalRef.current) {
            modalRef.current.showModal();
        }
    };

    const closeModal = () => {
        if (modalRef.current) {
            modalRef.current.close();
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
      try {
        const response = await fetch(`http://52.78.155.175/article/1`);
        const jsonData = await response.json();
        const obj = await jsonData.content;
        
        console.log(`modal data!!:${articleId}`);
        console.log("데이터 요청 성공(Modal):", obj);
        setData(obj);
      } catch (error) {
        console.error("데이터 요청 중 오류 modal:", error);
      }
    };

    return (
        <>
            {/* Open the modal using openModal() method */}
            <button className="btn" onClick={openModal}>자세히 보기</button>


            {/* 현진행 상황 modal창을 card를 통해 불러올때 인자값으로 클릭한 카드의 articleId값과 이미지 값을 전달 받고
                그것을 밑에 있는 태그에 꾸며줘야함!!! + 좋아요 표시도 가능하게 해야함
            */}
            <dialog ref={modalRef} className="modal modal-bottom sm:modal-middle">
                <form method="dialog" className="modal-box">
                    <h3 className="font-bold text-lg">제목:{data.title}</h3>
                    {image && (
                        <figure>
                            <img src={image} className="border border-black rounded-xl" />
                        </figure>
                    )}
                    <p className="py-4">Press ESC key or click the button below to close</p>
                    <div className="modal-action">
                        {/* Close the modal using closeModal() method */}
                        <button className="btn" onClick={closeModal}>Close</button>
                    </div>
                </form>
            </dialog>
        </>
    );
}
