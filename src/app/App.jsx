import React from "react";

const App = () => {
  return (
    <div className="relative bg-[rgba(0,82,63,1)] h-screen flex justify-between">
      <div className="w-[606px] h-[549px] self-center ml-40 shadow-custom-gray flex flex-col justify-center">
        <div className="font-[700] text-[100px] text-[#FFFFFF] text-opacity-80 ml-12 mb-2">
          LOGIN
        </div>
        <form className="flex flex-col justify-center gap-10 items-center mb-10">
          <input
            type="text"
            placeholder="Username"
            class="placeholder-roboto"
            style={{
              width: "512px",
              height: "75px",
              backgroundColor: "inherit",
              border: "solid",
              borderColor: "rgba(255,255,255,0.5)",
              borderRadius: "10px",
              paddingLeft: "30px",
              borderWidth: "3px",
            }}
          />
          <input
            type="text"
            placeholder="Password"
            class="placeholder-roboto"
            style={{
              width: "512px",
              height: "75px",
              backgroundColor: "inherit",
              border: "solid",
              borderColor: "rgba(255,255,255,0.5)",
              borderRadius: "10px",
              paddingLeft: "30px",
              borderWidth: "3px",
            }}
          />
        </form>
        <button className="w-[512px] h-[75px] bg-[rgba(255,255,255,0.8)] font-[600] text-[25px] text-[rgba(24,7,7,1)] rounded-xl self-center">
          LOGIN
        </button>
      </div>
      <div className="rotate-16 absolute right-[70px] top-[160px]">
        <img src="./titled.png" alt="Running kid" />
      </div>
      <div className="flex h-screen">
        <img src="./Untitled.png" alt="Yellow bg" />
      </div>
    </div>
  );
};

export default App;
