// import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Image003desktop from "./../../../public/pattern-divider-desktop.svg";
import Image004mobile from "./../../../public/pattern-divider-mobile.svg";
import Image005DM from "./../../../public/icon-dice.svg";

const AdviceApp = () => {
  const [advice, setAdvice] = useState("");
  const [timer, setTimer] = useState(0);
  //   console.log(advice);

  useEffect(() => {
    const interval = setInterval(() => {
      // Fetch advice initially

      fetch("https://api.adviceslip.com/advice")
        .then((response) => response.json())
        .then((data) => setAdvice(data.slip.advice))
        .catch((error) => console.log(error));

      // Update advice every 2 seconds
      setTimer(timer + 1);
    }, 2000);

    // Clear timer when component unmounts

    return () => clearInterval(interval);
  }, [timer]);

  return (
    <div className="flex justify-center items-center flex-col relative mt-[4rem]">
      <div className="text-center border-2 w-[22rem] bg-green-500 bg-transparent h-[3rem] flex justify-center items-center rounded-3xl">
        <h1 className="font-bold ">Daily Advice</h1>
      </div>
      <div className="bg-slate-400 mt-[1rem] h-[16rem] w-[22rem] flex justify-center items-center rounded-3xl shadow-2xl">
        {/* // Add the Advice setter to the Line for Changes */}

        <q className="text-center text-white w-[16rem] ">{advice}</q>
      </div>
      <div className="xl:block hidden w-[18rem]">
        <img
          className="w-[18rem] absolute top-[17rem]"
          src={Image003desktop}
          alt="desktop Image"
        />
      </div>
      <div className="w-[18rem]  xl:hidden">
        <img
          className="w-[18rem] absolute top-[17rem]"
          src={Image004mobile}
          alt="mobile Image"
        />
      </div>

      <div className="absolute top-[19rem]">
        <img src={Image005DM} alt="icon-dice" />
      </div>
    </div>
  );
};

export default AdviceApp;
