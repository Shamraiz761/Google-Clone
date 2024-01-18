import React from "react";
import Search from "../components/search/Search";

function Home() {
  return (
    <div
      className="flex justify-center items-center flex-col w- "
      style={{ height: "90vh" }}
    >
      <img
        src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
        alt="google logo"
        className="h-40 ml-12 sm:ml-0 "
        style={{maxWidth:'272px'}}
      />
      <Search />
    </div>
  );
}

export default Home;
