import React from "react";

export default function TextFrom() {
    return (
        <>
            <div className="form-control w-full max-w-xs ">
                <label className="label">
                    <span className="label-text">제목</span>
                </label>
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
            </div>


            <div className="form-control">
                <label className="label">
                    <span className="label-text ">내용</span>
                </label>
                <textarea className="textarea textarea-bordered h-24 w-3/4 mb-4" placeholder="Bio"></textarea>
            </div>

            <input type="file" className="file-input file-input-bordered file-input-success w-full max-w-xs" />
        </>

    )
}

