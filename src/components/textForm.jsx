import React, { useState } from "react";

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
            userId: 1,
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
            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">제목</span>
                </label>
                <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs"
                    value={title}
                    onChange={handleTitleChange}
                />
            </div>

            <div className="form-control">
                <label className="label">
                    <span className="label-text">내용</span>
                </label>
                <textarea
                    className="textarea textarea-bordered h-24 w-3/4 mb-4"
                    placeholder="Bio"
                    value={content}
                    onChange={handleContentChange}
                ></textarea>
            </div>

            <div className="flex justify-center">
                <input
                    type="file"
                    className="mr-20 file-input file-input-bordered file-input-success w-full max-w-xs"
                />

                <button className="btn btn-success" onClick={handleSubmit}>SubMit</button>

            </div>

        </>
    );
}
