import React, { useState } from "react";
import { BsPencilFill } from "react-icons/bs"

export default function TextForm() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleContentChange = (event) => {
        setContent(event.target.value);
    };

    const handleSubmit = () => {
        const data = {
            userId: 1, //유저 아이디 번호
            title: title,
            content: content,
        };

        fetch("http://52.78.155.175/article", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((responseData) => {
                console.log("Data sent successfully:", responseData);
            })
            .catch((error) => {
                console.error("Error sending data:", error);
            });
    };

    return (
        <>
            <div className="mb-10 mx-40">
                <div className="text-2xl mt-10 flex items-center">
                    <span className="mr-4"><BsPencilFill /></span>글 쓰기
                    <button onClick={handleSubmit} className="ml-auto px-4 py-1 text-sm font-semibold rounded-lg border border-black hover:text-white hover:bg-black hover:border-transparent">
                        임시등록</button>
                    <button className="ml-2 px-4 py-1 text-sm font-semibold rounded-lg border border-black hover:text-white hover:bg-black hover:border-transparent">
                        최종등록</button>
                </div>

                <hr className="border-black mt-4" />
                
                <div className="w-full justify-center">
                    <select className="select select-success my-3 mr-6 w-9/12">
                        <option disabled selected>게시판 선택</option>
                        <option>일상</option>
                        <option>Q&A</option>
                    </select>
                    <select className="select select-success my-3 w-64">
                        <option disabled selected>허브 종류 선택</option>
                        <option>민트</option>
                        <option>카모마일</option>
                        <option>로즈마리</option>
                        <option>라벤더</option>
                        <option>기타</option>
                    </select>
                </div>




                <div className="form-control border border-gray-300 rounded-lg">
                    <input
                        type="text"
                        placeholder="제목 입력"
                        className="input w-full"
                        value={title}
                        onChange={handleTitleChange}
                    />
                </div>


                <input type="file" className="mt-4 file-input file-input-bordered file-input-success w-full max-w-xs" />

                <div className="form-control mt-5">
                    <textarea
                        className="textarea h-96 w-full mb-4 border border-gray-300 rounded-lg"
                        placeholder="내용을 입력해주세요."
                        value={content}
                        onChange={handleContentChange}
                    ></textarea>
                </div>

                <div className="flex justify-center mt-5">

                </div>
            </div>

        </>
    );
}
