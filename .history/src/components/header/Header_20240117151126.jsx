import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
function Header() {
  return (
    <div>
      <header>
        <nav class="bg-white border-gray-200 px-4 lg:px-6 py-2.5 ">
          <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <div>
              <a
                href="#"
                class="text-gray-800  hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 "
              >
                About
              </a>
              <a
                href="#"
                class="text-gray-800  hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 "
              >
                Store
              </a>
            </div>

            <div class="flex items-center lg:order-2">
              <a
                href="#"
                class="text-gray-800  hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 "
              >
                Gmail
              </a>
              <a
                href="#"
                class=" bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
              >
                Images
              </a>
             
                <FiberManualRecordIcon class="text-white " />

              
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
