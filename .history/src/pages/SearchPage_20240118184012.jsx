import React from 'react'
import { useStateValue } from '../context/StateProvider'
import useGoogleSearch from '../api_key/useGoogleSearch';
import Response from '../api_key/Response';
import Search from '../components/search/Search';
function SearchPage() {
    const [{term} , dispatch] = useStateValue()
    // const {data} = useGoogleSearch(term)
    const data = Response
console.log(data);
  return (
    <div>
          <div
      className="flex items-center flex-row "
      
    >
      <img
        src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
        alt="google logo"
        className="h-12 "
       
      />
      <Search hideButtons className=""/>
    </div>
    </div>
  )
}

export default SearchPage