import React from "react";

function Search() {
  return (
    <div>
      <div className="border border-gray-1" style={{width:'75vh' , maxWidth:'560px'}}>
        <input
          type="search"
          className="bg-white my-5 shadow border border-gray-300 rounded-lg w-2/5 py-2 px-4"
        />
      </div>
    </div>
  );
}

export default Search;
