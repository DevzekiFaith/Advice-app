// import React from "react";
import { useState } from "react";
import Image001 from "/play-fill.svg";

const Button = () => {
  //   const [click, setClick] = useState(false);

  //   const handleClick = () => {
  //     setClick(!click);
  //   };

  return (
    <div className="flex justify-center items-center">
      <div className="flex justify-center items-center border-1 border-blue-300 w-[10rem] rounded-full mt-[2rem] cursor-pointer">
        <button className=" w-[2rem] h-[2rem] active:scale-0 ">
          <img className="w-[2rem]" src={Image001} alt="PlayImage" />
          <i className="bi bi-play-circle-fill"></i>
        </button>
      </div>
    </div>
  );
};

export default Button;
