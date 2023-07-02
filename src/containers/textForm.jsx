import React, { useState } from "react";
import { BsPencilFill } from "react-icons/bs"

export default function TextForm() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [selectedBoard, setSelectedBoard] = useState("");
    const [selectedHub, setSelectedHub] = useState("");
    const [file, setFile] = useState(null);

    const handleBoardChange = (event) => {
        setSelectedBoard(event.target.value);
    };
      
    const handleHubChange = (event) => {
        setSelectedHub(event.target.value);
    };

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleContentChange = (event) => {
        setContent(event.target.value);
    };

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
      };

    const handleSubmit = () => {
        const formData = new FormData();
        formData.append("userId", 1);
        formData.append("title", title);
        formData.append("content", content);
        formData.append("articleType", selectedBoard);
        formData.append("herbType", selectedHub);
        formData.append("file", file);

        fetch("http://52.78.155.175/article", {
            method: "POST",
            headers: {
                
            },
            body: formData,
        })
            .then((response) => response.json())
            .then((responseData) => {
                console.log(formData);
                console.log("Data sent successfully:", responseData);
                alert('게시물 작성 완료!');
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
                    {/* <button className="mr-2 px-4 py-1 text-sm font-semibold rounded-lg border border-black hover:text-white hover:bg-black hover:border-transparent">
                        임시등록</button> */}
                    <button onClick={handleSubmit} className="ml-auto px-4 py-1 text-sm font-semibold rounded-lg border border-black hover:text-white hover:bg-black hover:border-transparent">
                        최종등록</button>
                </div>

                <hr className="border-black mt-4" />

                <div className="w-full justify-center">
                    <select className="select select-success my-3 mr-6 w-9/12" value={selectedBoard}
                        onChange={handleBoardChange}>
                        <option value =""disabled selected>게시판 선택</option>
                        <option>NORMAL</option>
                        <option>QNA</option>
                    </select>
                    <select className="select select-success my-3 w-64" value={selectedHub}
                        onChange={handleHubChange}>
                        <option value ="" disabled selected>허브 종류 선택</option>
                        <option>MINT</option>
                        <option>CHAMOMILE</option>
                        <option>ROSEMARY</option>
                        <option>LAVENDER</option>
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


                <input type="file" className="mt-4 file-input file-input-bordered file-input-success w-full max-w-xs"
                 onChange={handleFileChange}/>

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
