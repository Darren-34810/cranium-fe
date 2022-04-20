import React from "react";
import { NavLink } from "react-router-dom";

const MediaInput = () => {
    return (
        <>
            <section class="bg-primary-700">
                <section class="flex flex-col md:flex-row">
                    <div class="flex flex-col w-2/3">
                        {/* <!-- Button Atas --> */}
                        <div class="flex flex-row">
                            <select class="bg-gray-500 form-control show-tick text-black mx-4 my-4 w-40 h-10" name="group">
                                <option class="text-white" value="">Bulk Action</option>
                                <option class="text-black" value="group">Add Media</option>
                            </select>
                            <div class=" mx-4 my-5">
                                <button class="border-white border-2 hover:bg-white text-black font w-40 h-8 rounded-lg">
                                    <a class="text-center text-white">Apply</a>
                                </button>
                            </div>
                            <div class=" mx-4 my-4">
                                <button class="bg-green-300 border-2 hover:bg-white text-black font w-40 h-10 rounded-lg">
                                    <a class="text-center text-green-300">View</a>
                                </button>
                            </div>
                        </div>

                        {/* <!-- Place Holder Media --> */}
                        <div class="mx-4">
                            <input class="appearance-none border rounded w-3/4 h-4/5 py-2 px-3 text-grey-darker" id="Source_Id"
                                type="text" placeholder="Media Source File"/>
                        </div>
                        <div class="mx-4 mt-8">
                            <div class="h-80 shadow-xl bg-gray-400 rounded-lg">
                                <label class="block text-white text-sm font-bold mb-2" for="choose_image">Choose
                                    Image</label>
                            </div>
                        </div>
                        <div class="flex flex-row">
                            <div class="mx-4 my-2">
                                <label class="block text-white text-sm font-bold mb-2" for="first_name">Title</label>
                                <input class="appearance-none border rounded max-w-screen-md h-4/5 py-2 px-3 text-grey-darker"
                                    id="title_name" type="text" placeholder="Input your Title"/>
                            </div>
                            <div class="mx-2 my-2">

                            </div>
                        </div>
                    </div>

                    {/* <!-- Page Sampingnya --> */}
                    <div class="flex flex-col">
                        <div>
                            <div class="sm:max-w-xs md:max-w-md mt-10 mx-10 bg-white p-16 rounded">

                                <div id="accordion-flush" data-accordion="collapse"
                                    data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                                    data-inactive-classes="text-gray-500 dark:text-gray-400">
                                    <h2 id="accordion-flush-heading-1">
                                        <button type="button"
                                            class="flex justify-between items-center py-5 w-full font-medium text-left text-gray-900 rounded-t-xl border-b border-gray-200 dark:border-gray-700 dark:text-white"
                                            data-accordion-target="#accordion-flush-body-1" aria-expanded="true"
                                            aria-controls="accordion-flush-body-1">
                                            <span>Save</span>
                                            <svg data-accordion-icon class="w-6 h-6 rotate-180 shrink-0" fill="currentColor"
                                                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd"
                                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                    clip-rule="evenodd"></path>
                                            </svg>
                                        </button>
                                    </h2>
                                    <div id="accordion-flush-body-1" aria-labelledby="accordion-flush-heading-1">
                                        <div class="flex flex-row py-5 border-b border-gray-200 dark:border-gray-700">
                                            <a class="flex items-center px-4 py-2 mt-5 text-gray-600 rounded-md hover:bg-gray-200"
                                                href="#"/>
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                                                    viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M7 11l5-5m0 0l5 5m-5-5v12" />
                                                </svg>
                                                <a class="px-4 py-2 text-blue-600 hover:underline" href="#"
                                                    target="_blank">Uploaded On : -</a>
                                        </div>
                                    </div>
                                    <div id="accordion-flush-body-1" aria-labelledby="accordion-flush-heading-1">
                                        <div class="flex flex-row py-5 border-b border-gray-200 dark:border-gray-700">
                                            <a class="flex items-center px-4 py-2 mt-5 text-gray-600 rounded-md hover:bg-gray-200"
                                                href="#"/>
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                                                    viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                                </svg>
                                                <a class="px-4 py-2 text-blue-600 hover:underline" href="#"
                                                    target="_blank">Uploaded By : -</a>
                                        </div>
                                    </div>
                                    <div id="accordion-flush-body-1" aria-labelledby="accordion-flush-heading-1">
                                        <div class="flex flex-row py-5 border-b border-gray-200 dark:border-gray-700">
                                            <a class="flex items-center px-4 py-2 mt-5 text-gray-600 rounded-md hover:bg-gray-200"
                                                href="#"/>
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                                                    viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                                                </svg>
                                                <a class="px-4 py-2 text-blue-600 hover:underline" href="#"
                                                    target="_blank">Uploaded To : -</a>
                                        </div>
                                    </div>
                                    <div class="mx-4 my-2">
                                        <label class="block text-black text-sm font-bold mb-2" for="first_name">File Url</label>
                                        <input class="appearance-none border rounded h-4/5 py-2 px-3 text-grey-darker"
                                            id="title_name" type="text" placeholder="URL"/>
                                    </div>
                                </div>
                                <p class="mt-5 text-gray-300 text-sm">File Name :</p>
                                <p class="mt-5 text-gray-300 text-sm">File Type :</p>
                                <p class="mt-5 text-gray-300 text-sm">Dimension :</p>
                                <p class="mt-5 text-gray-300 text-sm">Original Image :</p>
                            </div>
                        </div>
                        <div class="mt-3 mx-4 text-left text-lg font-light text-white">
                            <h1>Position Selection</h1>
                        </div>
                        <div class="flex flex-row">
                            <div class=" mx-4 my-5">
                                <button class="border-white border-2 hover:bg-white text-black font w-40 h-8 rounded-lg">
                                    <a class="text-center text-white">Landing Page</a>
                                </button>
                            </div>
                            <div class=" mx-4 my-5">
                                <button class="border-white border-2 hover:bg-white text-black font w-40 h-8 rounded-lg">
                                    <a class="text-center text-white">Home Page</a>
                                </button>
                            </div>
                        </div>
                        <div>
                            <select
                                class="bg-green-300 form-control show-tick text-black mx-4 my-4 w-2/3 h-14 text-center font-medium"
                                name="group">
                                <option class="bg-white text-black" value="">Selection</option>
                                <option class="bg-white text-black" value="group">Add Media</option>
                            </select>
                        </div>
                    </div>
                </section>
            </section>
        </>
    )
}

export default MediaInput 