import React from "react";
import Board from "../components/board";
import Banner from "../components/banner";

export default function Home() {
  return (
    <>
    <Banner></Banner>
      <div className="mb-10 mx-40">
        <Board value={"#최근의 인기글!"}></Board>
        <Board value={"#팔로잉 소식"}></Board>
      </div>
    </>

  );
}