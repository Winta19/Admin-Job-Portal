//import Main from "./Main";
import { useContext } from "react";
// import MyHeader from "./MyHeader";
import Nav from "./Nav";
import Side from "./Side";
import { SidebarContext } from "../SidebarContext";
import { Outlet } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function Layout() {
  const { state, toggleSidebar } = useContext(SidebarContext);
  return (
    <div className="flex flex-col w-full h-screen overflow-y-auto">
      <div className="flex justify-between py-4  px-4">
        <div className="flex items-center ">
          <h1 className="text-2xl ">AA </h1>

          <div className=" cursor-pointer " onClick={toggleSidebar}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
        </div>
        <Nav />
      </div>
      <div className="flex h-full overflow-y-auto">
        {state.isSidebarOpen && <Side className="h-full bg-red-400" />}
        <main className="flex-1 bg-gray-100 p-4 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Layout;

//  {style={{
//           marginTop: "2px", // Matches top-16
//           marginLeft: "250px", // Matches w-60
//         }}}
