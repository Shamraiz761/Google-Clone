import React from "react";
import { useStateValue } from "../context/StateProvider";
import useGoogleSearch from "../api_key/useGoogleSearch";
import Response from "../api_key/Response";
import Search from "../components/search/Search";

import SearchIcon from "@mui/icons-material/Search";
import ArticleIcon from "@mui/icons-material/Article";
import ImageSearchIcon from "@mui/icons-material/ImageSearch";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Link } from "react-router-dom";

function SearchPage() {
  const [{ term }, dispatch] = useStateValue();
  // const {data} = useGoogleSearch(term)
  const data = Response;
  console.log(data);
  return (
    <div>
      <div className="flex items-center flex-row mt-3">
        <img
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          alt="google logo"
          className="h-10 ml-5 mt-[-15px] "
        />
        <div className="ml-12 mt-[-13px]">
          <Search hideButtons />
          <div className="flex flex-row justify-between">
            <div className="flex flex-row justify-center text-gray-600 text-sm mt-3">
              <Link to={'/all'} className="mr-5 flex flex-row items-center">
                <SearchIcon className="mr-1 " style={{ fontSize: "15px" }} />
                All
              </Link >
              <Link to={'/images'} className="mr-5 flex flex-row items-center">
                <ImageSearchIcon
                  className="mr-1 "
                  style={{ fontSize: "15px" }}
                />
                Images
              </Link >
              <Link to={'/news'}  className="mr-5 flex flex-row items-center">
                <ArticleIcon className="mr-1 " style={{ fontSize: "15px" }} />
                News
              </Link >
              <Link  to={'/shopping'} className="mr-5 flex flex-row items-center">
                <ShoppingCartIcon Link ingCartIcon
                  className="mr-1 "
                  style={{ fontSize: "15px" }}
                />
                Shopping
              </Link >
              <Link to={'/map'}  className="mr-5 flex flex-row items-center">
                <AddLocationAltIcon
                  className="mr-1 "
                  style={{ fontSize: "15px" }}
                />
                Map
              </Link >
              <Link to={'/more'} className="mr-5 flex flex-row items-center">
                <MoreVertIcon className="mr-1 " style={{ fontSize: "15px" }} />
                More
              </Link >
            </div>
            <div className="flex flex-row justify-center text-gray-600 text-sm mt-3">
              <Link to={'/setting'}  className="mr-5">Settings</Link >
              <Link to={'/tools'} className="mr-5">Tools</Link >
            </div>
          </div>
        </div>
      </div>

      <div>
        {
            true && ( <div>
                <p>About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime} sec) for {term} </p>
            
            <div>
                <a>
                    
                </a>
            </div>
            </div>
                )
        } 


      </div>
    </div>
  );
}

export default SearchPage;
