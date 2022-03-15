import React from "react";
import { NavLink } from "react-router-dom";


const Attendance = () => {
    return (
        <>
            <div class="flex text-1xl my-2" ref={NavLink}>
                <ul class="flex">
                    <li class="mx-0">
                        <div class="flex flex-row w-1/5">
                            <input type="checkbox" class="my-4 checked:bg-blue-500" />
                            <div class="flex flex-row mx-5 ml-28">
                                <div class="my-auto w-14 h-10 bg-slate-400 rounded-full"></div>
                                <a href=""
                                    class="text-white inline-block px-2  mx-10 my-auto no-underline hover:text-blue-300">Gilang Satria
                                </a>
                            </div>
                        </div>
                    </li>
                    <li class="ml-14">
                        <a href="" class="text-white inline-block py-2 px-2  no-underline hover:text-blue-300">VIP
                        </a>
                    </li>
                    <li class="ml-32 mx-10 ">
                        <a href="" class="text-white inline-block py-2 px-2  no-underline hover:text-blue-300">Unapproved
                        </a>
                    </li>
                </ul>
            </div>
            <hr class="w-9/12 justify-center items-center"></hr>
        </>
    )
}

export default Attendance