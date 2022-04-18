const DashboardNavbar = ({ onToggle }) => {
    return (
        <>
            <div className="flex justify-between w-full px-10 py-8">
                <div className="flex items-center">
                    <div className="block mr-8" onClick={onToggle}>
                        <button className="flex items-center text-white">
                            <svg className="fill-current h-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <title>Menu</title>
                                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                            </svg>
                        </button>
                    </div>
                    <h2 className="text-2xl font-bold mr-8">Overview</h2>
                    <div className="flex items-center">
                        <span className="mr-3">[img]</span>
                        <p className="text-xl font-medium">Action</p>
                    </div>
                </div>
                <div>
                    <span>[img]</span>
                    <span className="ml-8">[img]</span>
                </div>
            </div>
        </>
    )
}

export default DashboardNavbar