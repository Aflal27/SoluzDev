import React from "react";

export default function Card({ data }) {
  return (
    <div>
      <div className=" w-[300px] h-[400px] bg-blue-100 p-4 rounded-xl shadow-sm">
        <div className=" w-[200px] md:w-full h-[80px]  bg-white  rounded-xl">
          <p>Title</p>
          <p>Price</p>
          <p>{data?.cateogry}</p>
        </div>
      </div>
    </div>
  );
}
