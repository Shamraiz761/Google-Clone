import React from 'react'
import { useStateValue } from '../context/StateProvider'
import useGoogleSearch from '../api_key/useGoogleSearch';
import Response from '../api_key/Response';
import Search from '../components/search/Search';

import SearchIcon from '@mui/icons-material/Search';
import ArticleIcon from '@mui/icons-material/Article';
import ArticleIcon from '@mui/icons-material/Article';

function SearchPage() {
    const [{term} , dispatch] = useStateValue()
    // const {data} = useGoogleSearch(term)
    const data = Response
console.log(data);
  return (
    <div>
          <div
      className="flex items-center flex-row mt-3"
      
    >
      <img
        src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
        alt="google logo"
        className="h-10 ml-5 "
       
      />
      <div className='ml-12 mt-[-13px]'>
      <Search hideButtons />
      </div>
    </div>
    </div>
  )
}

export default SearchPage