import React from "react";
import Board from "../components/board";
import Banner from "../components/banner";

export default function Home() {
  return (
    <>
    <Banner></Banner>
      <div className="mb-10 mx-40">
        <Board value={"#오늘의 인기글"}></Board>
        <Board value={"#이 식물 궁금해요!"}></Board>
      </div>
    </>

  );
}