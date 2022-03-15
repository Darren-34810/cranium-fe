import React from "react";

const Attendance =  () => {
    return (
        <>
           <div class="bg-gray-50 min-h-screen">
                {/* <!--Sidebar--> */}
                <div class="flex">
                    <div class="flex flex-col w-64 min-h-screen px-3 py-8 overflow-y-auto bg-primary-600">
                        <h2 class="text-3xl font-bold text-center text-white">CRANIUM</h2>

                        <div class="flex flex-col justify-between mt-6">
                            <aside>
                                <ul>
                                    <li>
                                        <a class="flex items-center px-4 py-2 mt-5 text-gray-600 rounded-md hover:bg-gray-200" href="#">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                                            </svg>

                                            <span class="mx-4 font-medium text-white">Overview</span>
                                        </a>
                                    </li>

                                    <li>
                                        <a class="flex items-center px-4 py-2 mt-5 text-gray-600 rounded-md hover:bg-gray-200" href="#">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>

                                            <span class="mx-4 font-medium text-white">Basic Setup</span>
                                        </a>
                                    </li>

                                    <li>
                                        <a class="flex items-center px-4 py-2 mt-5 text-gray-600 rounded-md hover:bg-gray-200" href="#">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>

                                            <span class="mx-4 font-medium text-white">Registration</span>
                                        </a>

                                        <li>
                                            <a class="flex items-center px-4 py-2 mt-5 text-gray-600 rounded-md hover:bg-gray-200" href="#">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                        d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                                                </svg>

                                                <span class="mx-4 font-medium text-white">Schedule</span>
                                            </a>
                                        </li>
                                        <a class="flex items-center px-4 py-2 mt-5 text-gray-600 rounded-md hover:bg-gray-200" href="#">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                                            </svg>

                                            <span class="mx-4 font-medium text-white">Venue</span>
                                        </a>
                                    </li>

                                    <li>
                                        <a class="flex items-center px-4 py-2 mt-5 text-gray-600 rounded-md hover:bg-gray-200" href="#">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>

                                            <span class="mx-4 font-medium text-white">People</span>
                                        </a>
                                    </li>

                                    <li>
                                        <a class="flex items-center px-4 py-2 mt-5 text-gray-600 rounded-md hover:bg-gray-200" href="#">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                                            </svg>

                                            <span class="mx-4 font-medium text-white">Marketing</span>

                                        </a>
                                    </li>

                                    <li>
                                        <a class="flex items-center px-4 py-2 mt-5 text-gray-600 rounded-md hover:bg-gray-200" href="#">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>

                                            <span class="mx-4 font-medium text-white">Recording</span>
                                        </a>
                                    </li>


                                    <li>
                                        <a class="flex items-center px-4 py-2 mt-5 text-gray-600 rounded-md hover:bg-gray-200" href="#">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                                            </svg>

                                            <span class="mx-4 font-medium text-white">Analytics</span>

                                        </a>
                                    </li>

                                </ul>

                            </aside>

                        </div>
                    </div>
                </div>

                {/* <!-- Main content --> */}
                <div class="flex-1 bg-primary-700">
                    <div class="mx-0 p-8 font-bold text-white">
                        Event Name
                    </div>

                    <section>
                        <div class="text-2xl w-full flex-grow lg:flex lg:items-center lg:w-auto hidden py-6" ref={NavLink}>
                            <ul class="lg:flex ml-20">
                                <li class="mr-6">
                                    <InertiaLink href="" class="text-white inline-block py-2 px-2  no-underline hover:text-blue-300">Attendance
                                    </InertiaLink>
                                </li>
                                <li class="mx-6">
                                    <InertiaLink href="" class="text-white inline-block py-2 px-2  no-underline hover:text-blue-300">Team
                                    </InertiaLink>
                                </li>
                                <li class="mx-6">
                                    <InertiaLink href="" class="text-white inline-block py-2 px-2  no-underline hover:text-blue-300">Speakers
                                    </InertiaLink>
                                </li>
                            </ul>
                        </div>
                    </section>
                </div>

                {/* <!-- Baris sub Judul --> */}
                <div class="mx-10">
                    <div class="flex text-1xl my-2" ref={NavLink}>
                        <ul class="flex">
                            <li class="mx-0">
                                <div class="flex flex-row w-1/5">
                                    <div class="flex flex-row mx-10 ml-28">
                                        <InertiaLink href=""
                                            class="text-white inline-block py-2 px-2 mx-16 my-auto no-underline hover:text-blue-300">Name
                                        </InertiaLink>
                                    </div>
                                </div>
                            </li>
                            <li class="ml-14">
                                <InertiaLink href="" class="text-white inline-block py-2 px-2  no-underline hover:text-blue-300">Tier
                                </InertiaLink>
                            </li>
                            <li class="ml-32 mx-10 ">
                                <InertiaLink href="" class="text-white inline-block py-2 px-2  no-underline hover:text-blue-300">Role
                                </InertiaLink>
                            </li>
                        </ul>
                    </div>
                    <hr class="w-9/12 justify-center items-center" />

                    {/* <!-- baris list 1 test--> */}

                    <div class="flex text-1xl my-2" ref={NavLink}>
                        <ul class="flex">
                            <li class="mx-0">
                                <div class="flex flex-row w-1/5">
                                    <input type="checkbox" class="my-4 checked:bg-blue-500" />
                                    <div class="flex flex-row mx-5 ml-28 ">
                                        <div class="my-auto w-14 h-10 bg-slate-400 rounded-full "></div>
                                        <InertiaLink href=""
                                            class="text-white inline-block px-2  mx-10 my-auto no-underline hover:text-blue-300 ">Gilang Satria
                                        </InertiaLink>
                                    </div>
                                </div>
                            </li>
                            <li class="ml-14">
                                <InertiaLink href="" class="text-white inline-block py-2 px-2  no-underline hover:text-blue-300">VIP
                                </InertiaLink>
                            </li>
                            <li class="ml-32 mx-10 ">
                                <InertiaLink href="" class="text-white inline-block py-2 px-2  no-underline hover:text-blue-300">Unapproved
                                </InertiaLink>
                            </li>
                        </ul>
                    </div>
                    <hr class="w-9/12 justify-center items-center" />



                    {/* <!-- baris list 2--> */}
                    <div class="flex text-1xl my-2" ref={NavLink}>
                        <ul class="flex">
                            <li class="mx-0">
                                <div class="flex flex-row w-1/5">
                                    <input type="checkbox" class="my-4 checked:bg-blue-500" />
                                    <div class="flex flex-row mx-5 ml-28">
                                        <div class="my-auto w-14 h-10 bg-slate-400 rounded-full"></div>
                                        <InertiaLink href=""
                                            class="text-white inline-block px-2  mx-10 my-auto no-underline hover:text-blue-300">Gilang Satria
                                        </InertiaLink>
                                    </div>
                                </div>
                            </li>
                            <li class="ml-14">
                                <InertiaLink href="" class="text-white inline-block py-2 px-2  no-underline hover:text-blue-300">VIP
                                </InertiaLink>
                            </li>
                            <li class="ml-32 mx-10 ">
                                <InertiaLink href="" class="text-white inline-block py-2 px-2  no-underline hover:text-blue-300">Unapproved
                                </InertiaLink>
                            </li>
                        </ul>
                    </div>
                    <hr class="w-9/12 justify-center items-center" />


                    {/* <!-- baris list 3--> */}
                    <div class="flex text-1xl my-2" ref={NavLink}>
                        <ul class="flex">
                            <li class="mx-0">
                                <div class="flex flex-row w-1/5">
                                    <input type="checkbox" class="my-4 checked:bg-blue-500" />
                                    <div class="flex flex-row mx-5 ml-28">
                                        <div class="my-auto w-14 h-10 bg-slate-400 rounded-full"></div>
                                        <InertiaLink href=""
                                            class="text-white inline-block px-2  mx-10 my-auto no-underline hover:text-blue-300">Gilang Satria
                                        </InertiaLink>
                                    </div>
                                </div>
                            </li>
                            <li class="ml-14">
                                <InertiaLink href="" class="text-white inline-block py-2 px-2  no-underline hover:text-blue-300">VIP
                                </InertiaLink>
                            </li>
                            <li class="ml-32 mx-10 ">
                                <InertiaLink href="" class="text-white inline-block py-2 px-2  no-underline hover:text-blue-300">Unapproved
                                </InertiaLink>
                            </li>
                        </ul>
                    </div>
                    <hr class="w-9/12 justify-center items-center" />




                    {/* <!-- baris list 4--> */}
                    <div class="flex text-1xl my-2" ref={NavLink}>
                        <ul class="flex">
                            <li class="mx-0">
                                <div class="flex flex-row w-1/5">
                                    <input type="checkbox" class="my-4 checked:bg-blue-500" />
                                    <div class="flex flex-row mx-5 ml-28">
                                        <div class="my-auto w-14 h-10 bg-slate-400 rounded-full"></div>
                                        <InertiaLink href=""
                                            class="text-white inline-block px-2  mx-10 my-auto no-underline hover:text-blue-300">Gilang Satria
                                        </InertiaLink>
                                    </div>
                                </div>
                            </li>
                            <li class="ml-14">
                                <InertiaLink href="" class="text-white inline-block py-2 px-2  no-underline hover:text-blue-300">VIP
                                </InertiaLink>
                            </li>
                            <li class="ml-32 mx-10 ">
                                <InertiaLink href="" class="text-white inline-block py-2 px-2  no-underline hover:text-blue-300">Unapproved
                                </InertiaLink>
                            </li>
                        </ul>
                    </div>
                    <hr class="w-9/12 justify-center items-center"/>


                        {/* <!-- baris list 5--> */}
                        <div class="flex text-1xl my-2" ref={NavLink}>
                            <ul class="flex">
                                <li class="mx-0">
                                    <div class="flex flex-row w-1/5">
                                        <input type="checkbox" class="my-4 checked:bg-blue-500" />
                                        <div class="flex flex-row mx-5 ml-28">
                                            <div class="my-auto w-14 h-10 bg-slate-400 rounded-full"></div>
                                            <InertiaLink href=""
                                                class="text-white inline-block px-2  mx-10 my-auto no-underline hover:text-blue-300">Gilang Satria
                                            </InertiaLink>
                                        </div>
                                    </div>
                                </li>
                                <li class="ml-14">
                                    <InertiaLink href="" class="text-white inline-block py-2 px-2  no-underline hover:text-blue-300">VIP
                                    </InertiaLink>
                                </li>
                                <li class="ml-32 mx-10 ">
                                    <InertiaLink href="" class="text-white inline-block py-2 px-2  no-underline hover:text-blue-300">Unapproved
                                    </InertiaLink>
                                </li>
                            </ul>
                        </div>
                        <hr class="w-9/12 justify-center items-center" />
                </div>
            </div>
        </>
    )

}

export default Attendance