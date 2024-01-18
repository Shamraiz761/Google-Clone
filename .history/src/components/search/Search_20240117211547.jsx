import React, { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import { useNavigate } from "react-router-dom";
function Search( {hideButtons = false}) {
    const [input , setInput] = useState('')
    const [{} ,]
    const navigate = useNavigate()

    const search = (e) => {
        e.preventDefault()
        navigate('/search')
        console.log('you hit the search button', input)
    }
  
  return (
    <form>

      <div className="border flex border-gray-200 rounded-full mt-5" style={{width:'75vw' , maxWidth:'560px'}}>
        <SearchIcon className="m-3 text-gray-600"/>
        <input
          type="search"
          value={input}
          onChange={(e) => {setInput(e.target.value)}}
          className="bg-white  w-full py-2 px-4 outline-none"
        />
        <MicIcon className="m-3  text-gray-800"/>
      </div>
{
    !hideButtons ? (
        <div className="flex flex-row justify-center my-5">
        <button onClick={search} className="bg-gray-100 hover:bg-gray-200 text-gray-600 p-2 rounded-md text-xs font-medium mr-2"> GOOGLE SEARCH</button>
        <button className="bg-gray-100 hover:bg-gray-200 text-gray-600 p-2 rounded-md text-xs font-medium ">I'm Feeling Lucky</button>

      </div>
    ) : (
        <div className=" hidden">
        <button onClick={search} className="bg-gray-100 hover:bg-gray-200 text-gray-600 p-2 rounded-md text-xs font-medium mr-2"> GOOGLE SEARCH</button>
        <button className="bg-gray-100 hover:bg-gray-200 text-gray-600 p-2 rounded-md text-xs font-medium ">I'm Feeling Lucky</button>

      </div>
    )
}
     
    </form>
  );
}

export default Search;
