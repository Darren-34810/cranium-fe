import React, { useState, useEffect, useRef } from "react";
import DashboardNavbar from "../../components/DashboardNavbar";
import Sidebar from "../../components/Sidebar";

function Billing() {

    const [sidebarOpen, setSidebarOpen] = useState(true);
    const onToggle = () => {
        setSidebarOpen(!sidebarOpen)
    }

    const ref = useRef(null);

    useEffect(() => {
        if (sidebarOpen) ref.current.classList.add('ml-64', 'w-[calc(100vw-16rem)]')
        else ref.current.classList.remove('ml-64', 'w-[calc(100vw-16rem)]')
    }, [ref, sidebarOpen])

    return (


        <div class="bg-primary-700 h-screen" >

            {/* Sidebar */}
            <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            <div ref={ref} className="fixed overflow-y-auto no-scrollbar min-h-screen w-full ml-64 top-0 bottom-0">
                {/*  Site header */}
                <DashboardNavbar onToggle={onToggle} sidebarOpen={sidebarOpen} />
                <div class="flex flex-col w-64 min-h-screen px-3 py-8 overflow-y-auto bg-primary-700">
                    <h2 class="text-3xl font-bold text-center text-white">CRANIUM</h2>
                </div>
            </div>
        </div>
    )
}

export default Billing