import React from 'react'
import { useStateValue } from '../context/StateProvider'
import useGoogleSearch from '../api_key/useGoogleSearch';
import Response from '../api_key/Response';
import
function SearchPage() {
    const [{term} , dispatch] = useStateValue()
    // const {data} = useGoogleSearch(term)
    const data = Response
console.log(data);
  return (
    <div>
          <div
      className="flex justify-center items-center flex-row "
      
    >
      <img
        src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
        alt="google logo"
        className="h-24"
        style={{maxWidth:'272px'}}
      />
      <Search hideButtons/>
    </div>
    </div>
  )
}

export default SearchPage