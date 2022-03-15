import Sidebar from "../../layouts/Sidebar";
import React, {useState} from "react";

const Billing = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    return (
        <div class="flex" >
            {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
    <div class="flex flex-col w-64 min-h-screen px-3 py-8 overflow-y-auto bg-primary-600">
        <h2 class="text-3xl font-bold text-center text-white">CRANIUM</h2>
        </div>
    </div>
    )
}

export default Billing