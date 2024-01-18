import React from "react";

function Search() {
  return (
    <div>
      <div className="border border-gray-100 rounded-full" style={{width:'75vh' , maxWidth:'560px'}}>
        <input
          type="search"
          className="bg-white  shadow border border-gray-300 rounded-lg w-2/5 py-2 px-4 outline-none"
        />
      </div>
    </div>
  );
}

export default Search;
