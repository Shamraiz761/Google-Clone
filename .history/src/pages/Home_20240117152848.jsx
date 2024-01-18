import React from "react";

function Home() {
  return (
    <div
      className="flex justify-center items-center flex-col "
      style={{ height: "90vh" }}
    >
      <img
        src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
        alt="google logo"
        className="h-40 "
      />
      <input type="search" className="bg-white my-5 shadow border border-gray-400 rounded-lg w-2/5 py-2 px-4"/>
    </div>
  );
}

export default Home;
