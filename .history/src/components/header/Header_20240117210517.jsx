import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
function Header() {
  return (
    <div>
      <header>
        <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 ">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <div>
              <a
                href="#"
                className="text-gray-800  hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 "
              >
                About
              </a>
              <a
                href="#"
                className="text-gray-800  hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 "
              >
                Store
              </a>
            </div>

            <div className="flex items-center lg:order-2">
              <a
                href="#"
                className="text-gray-800  hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 "
              >
                Gmail
              </a>
              <a
                href="#"
                className="hover:bg-gray-50 bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 "
              >
                Images
              </a>
             
                <DashboardIcon classNameName="h-6 w-6 hover:bg-gray-50 mr-2" />
                <AccountCircleIcon classNameName="h-16 w-16 hover:bg-gray-50 mr-2 ml-3 text-gray-400" style={{fontSize:'40px'}}/>


              
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
