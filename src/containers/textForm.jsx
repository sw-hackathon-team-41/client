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


                <input type="file" className="my-2 mr-20 file-input file-input-bordered file-input-success w-full max-w-xs"/>


                <ul className="menu menu-horizontal px-1 flex">
                    <li>
                        <details className="w-96 border border-gray-300 rounded-lg mr-4">
                            <summary>
                                게시판 선택
                            </summary>
                            <ul className="p-2 bg-base-100">
                                <li><a>Link 1</a></li>
                                <li><a>Link 2</a></li>
                            </ul>
                        </details>
                    </li>
                    <li>
                    <details className="w-64 border border-gray-300 rounded-lg">
                            <summary>
                                허브 종류 선택
                            </summary>
                            <ul className="p-2 bg-base-100">
                                <li><a>Link 1</a></li>
                                <li><a>Link 2</a></li>
                            </ul>
                        </details>
                    </li>
                </ul>





                <div className="form-control w-full max-w-xs mt-10 border border-gray-300 rounded-lg">
                    <input
                        type="text"
                        placeholder="제목 입력"
                        className="input "
                        value={title}
                        onChange={handleTitleChange}
                    />
                </div>

                <div className="form-control mt-10">
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
