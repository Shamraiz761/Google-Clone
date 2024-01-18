import React from "react";
import Search from "../components/search/Search";

function Home() {
  return (
    <div>
    <div
      className="flex justify-center items-center flex-col "
      style={{ height: "90vh" , width:'100%' }}
    >
      <img
        src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
        alt="google logo"
        className="h-24"
        style={{maxWidth:'272px'}}
      />
      <Search hideButtons/>
    </div>
  );
}

export default Home;
