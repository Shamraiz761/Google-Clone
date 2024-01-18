import React from "react";
import Search from "../components/search/Search";

function Home() {
  return (
    <div
      className="flex justify-center items-center flex-col "
      style={{ height: "90vh" , width:'100%' }}
    >
      <img
        src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
        alt="google logo"
        className="h-36"
        style={{maxWidth:'272px'}}
      />
      <Search />
    </div>
  );
}

export default Home;
