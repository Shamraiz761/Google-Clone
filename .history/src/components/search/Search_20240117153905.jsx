import React from "react";

function Search() {
  return (
    <div>
      <div className="border border-gray-200 rounded-full mt-5" style={{width:'75vh' , maxWidth:'560px'}}>
        <import SearchIcon from '@mui/icons-material/Search';
        <input
          type="search"
          className="bg-white  w-full py-2 px-4 outline-none"
        />
      </div>
    </div>
  );
}

export default Search;
