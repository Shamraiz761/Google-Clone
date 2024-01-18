import React from 'react'
import { useStateValue } from '../context/StateProvider'
import useGoogleSearch from '../api_key/useGoogleSearch';
import Response from '../api_key/Response';
import Search from '../components/search/Search';

import SearchIcon from '@mui/icons-material/Search';
import ArticleIcon from '@mui/icons-material/Article';
import ImageSearchIcon from '@mui/icons-material/ImageSearch';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import MoreVertIcon from '@mui/icons-material/MoreVert';

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
        className="h-10 ml-5 mt-[-15px] "
       
      />
      <div className='ml-12 mt-[-13px]'>
      <Search hideButtons />
      <div className='flex flex-row justify-between'>
        <div className="flex flex-row justify-center text-gray-600 text-sm mt-3">
          <p className="mr-5 flex flex-row items-center"><SearchIcon className='h-3 w-3 ' style={{fontSize:'15px'}}/>All</p>
          <p className="mr-5 "><ImageSearchIcon  style={{fontSize:'15px'}}/>Images</p>
          <p className="mr-5 "><ArticleIcon  style={{fontSize:'15px'}}/>News</p>
          <p className="mr-5 "><ShoppingCartIcon  style={{fontSize:'15px'}}/>Shopping</p>
          <p className="mr-5 "><AddLocationAltIcon  style={{fontSize:'15px'}}/> Maps</p>
          <p className="mr-5 "><MoreVertIcon  style={{fontSize:'15px'}}/>More</p>
         
        </div>
        <div className="flex flex-row justify-center text-gray-600 text-sm mt-3">
      
          <p className="mr-5">Settings</p>
          <p className="mr-5">Tools</p>
        </div>
      </div>
      </div>
    </div>
    </div>
  )
}

export default SearchPage