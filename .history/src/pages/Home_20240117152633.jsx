import React from "react";

function Home() {
  return (
    <div
      className="flex justify-center items-center "
      style={{ height: "90vh" }}
    >
      <img
        src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
        alt="google logo"
        className="h-40 "
      />
      <input type="search" className="bg-white my-5 shadow border-gray-800 rounded-md"/>
    </div>
  );
}

export default Home;
