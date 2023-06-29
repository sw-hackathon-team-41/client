import React from "react";
import BoardMost from "../components/board"
import BoardQue from "../components/boardQue";
import Banner from "../components/banner";

export default function Home() {
  return (
    <>
    <Banner></Banner>
      <div className="mb-10 mx-40">
        <BoardMost value={"#최근의 인기글!"}></BoardMost>
        <BoardQue value={"#질문글"}></BoardQue>
        <BoardQue value={"#팔로잉의 글"}></BoardQue>
      </div>
    </>

  );
}