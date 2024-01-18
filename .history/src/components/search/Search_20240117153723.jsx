import React from "react";

function Search() {
  return (
    <div>
      <div className="border border-gray-100 rounded-full" style={{width:'75vh' , maxWidth:'560px'}}>
        <input
          type="search"
          className="bg-white  w-full py-2 px-4 outline-none"
        />
      </div>
    </div>
  );
}

export default Search;
