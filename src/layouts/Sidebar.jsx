import React, {useRef} from "react";
import {useLocation} from "react-router-dom";

const Sidebar = ({sidebarOpen, setSidebarOpen}) => {

  const location = useLocation();
  const { pathname } = location;

  const trigger = useRef(null);
  const sidebar = useRef(null);



  return (
    <div>

      {/* Sidebar backdrop (mobile only) */}
      <div className={`fixed inset-0 bg-slate-900 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} aria-hidden="true"></div>

      {/*Sidebar*/}
      <div
        id={'sidebar'}
        ref={sidebar}
        className={`flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 transform h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 lg:w-20 lg:sidebar-expanded:!w-64 2xl:!w-64 shrink-0 bg-slate-800 p-4 transition-all duration-200 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-64'}`}
      >

        {/*Sidebar Header*/}
        <div className="flex justify-between mb-10 pr-3 sm:px-2">
          {/*Close Button*/}
          <button
            ref={trigger}
            className="lg:hidden text-slate-500 hover:text-slate-400"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-controls="sidebar"
            aria-expanded={sidebarOpen}
            >
            <span className={'sr-only'}>Close Sidebar</span>
          </button>
        </div>

      </div>

    </div>
  )
}


export default Sidebar;
