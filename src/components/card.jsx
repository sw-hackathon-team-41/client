import React from "react";

export default function Card({ image, title, content }) {
    return (
        <>
             <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <figure><img src={image} alt="Card" className="border border-black rounded-xl"/></figure>
                    <div className="flex justify-center border border-black rounded-xl bg-black"><span className="card-title  text-ellipsis text-white">{title}</span></div>
                    <p className="card-content">{content}</p>
                </div>
            </div>
        </>
    );
}