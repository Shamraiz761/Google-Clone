import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
function Search() {
  return (
    <div>
      <div className="border flex border-gray-200 rounded-full mt-5" style={{width:'75vh' , maxWidth:'560px'}}>
        <SearchIcon className="m-2 text-gray-600"/>
        <input
          type="search"
          className="bg-white  w-full py-2 px-4 outline-none"
        />
        <MicIcon className="m-2  text-gray-800"/>
      </div>

      <div>
        <button className="bg-gray-200"> GOOGLE SEARCH</button>
      </div>
    </div>
  );
}

export default Search;
