import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
function Search() {
  return (
    <div>
      <div className="border flex border-gray-200 rounded-full mt-5" style={{width:'75vh' , maxWidth:'560px'}}>
        <SearchIcon className="mt-1.5 ml-1.5"/>
        <input
          type="search"
          className="bg-white  w-full py-2 px-4 outline-none"
        />
        <MicIcon />
      </div>
    </div>
  );
}

export default Search;
