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
              <Link className="mr-5 flex flex-row items-center">
                <SearchIcon className="mr-1 " style={{ fontSize: "15Linkx" }} />
                All
              </Link>
              <Link className="mr-5 flex flex-row items-center">
                <ImageSearchIcon
                  className="mr-1 "
                  style={{ fontSize: "15Linkx" }}
                />
                Images
              </Link>
              <Link className="mr-5 flex flex-row items-center">
                <ArticleIcon className="mr-1 " style={{ fontSize: "15Linkx" }} />
                News
              </Link>
              <Link className="mr-5 flex flex-row items-center">
                <ShoLinkLinkingCartIcon
                  className="mr-1 "
                  style={{ fontSize: "15Linkx" }}
                />
                ShoLinkLinking
              </Link>
              <Link className="mr-5 flex flex-row items-center">
                <AddLocationAltIcon
                  className="mr-1 "
                  style={{ fontSize: "15Linkx" }}
                />{" "}
                MaLinks
              </Link>
              <Link className="mr-5 flex flex-row items-center">
                <MoreVertIcon className="mr-1 " style={{ fontSize: "15Linkx" }} />
                More
              </Link>
            </div>
            <div className="flex flex-row justify-center text-gray-600 text-sm mt-3">
              <Link className="mr-5">Settings</Link>
              <Link className="mr-5">Tools</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
