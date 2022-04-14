import React from "react";
import { NavLink } from "react-router-dom";

const Media = () => {
    return (
        <>
            <section class="bg-primary-700 min-h-full">

                <section class="flex flex-row">

                    <div>
                        <select class="form-control show-tick text-black mx-4 my-4 w-40 h-10" name="group">
                            <option class="text-black" value="">Bulk Action</option>
                            <option class="text-black" value="group">Add Media</option>
                        </select>
                    </div>
                    <div class=" mx-4 my-4">
                        <button class="bg-green-300 border-2 hover:bg-white text-black font w-40 h-8 rounded-lg">
                            <a class="text-center text-green-300">Apply</a>
                        </button>
                    </div>
                </section>

                <section class="flex-col">
                    <table class="ml-10 w-2/3 h-2/4 table-fixed border-2 border-white">
                        <thead class="border-2 border-white">
                            <tr>
                                <th class="w-1/4 border-2 border-white text-white text-center"><input type="checkbox"
                                    class="mx-4 my-auto rounded text-pink-500" /> File</th>
                                <th class="w-1/4 border-2 border-white text-white text-center">Author</th>
                                <th class="w-1/4 border-2 border-white text-white text-center">Date</th>
                                <th class="w-1/4 border-2 border-white text-white text-center">Position</th>
                            </tr>
                        </thead>

                        <tbody class="border-2 border-white">
                            <tr>
                                <td class="flex flex-row border-2 h-1/2 border-white text-white text-center">
                                    <input type="checkbox" class="mx-2 my-auto rounded text-pink-500" />
                                    <div class="mx-2 my-2 w-3/4 h-60 shadow-xl bg-gray-400 rounded-lg">
                                        <label class="block text-white text-sm font-bold mb-2" for="choose_image">Choose
                                            Image</label>
                                    </div>
                                </td>
                                <td class="border-2 border-white text-white text-center">Author Hasn't Assign yet</td>
                                <td class="border-2 border-whitet text-white text-center">None</td>
                                <td class="border-2 border-white text-white text-center">
                                    <button class="bg-green-300 hover:bg-white text-black font w-1/2 h-8 rounded-lg">
                                        <a class="text-center text-xs">Landing Page</a>
                                    </button>
                                </td>
                            </tr>

                            <tr>
                                <td class="flex flex-row border-2 h-1/2 border-white text-white text-center">
                                    <input type="checkbox" class="mx-2 my-auto rounded text-pink-500" />
                                    <div class="mx-2 my-2 w-3/4 h-60 shadow-xl bg-gray-400 rounded-lg">
                                        <label class="block text-white text-sm font-bold mb-2" for="choose_image">Choose
                                            Image</label>
                                    </div>
                                </td>
                                <td class="border-2 border-white text-white text-center">Author Hasn't Assign yet</td>
                                <td class="border-2 border-white text-white text-center">None</td>
                                <td class="border-2 border-white text-white text-center">
                                    <button class="bg-green-300 hover:bg-white text-black font w-1/2 h-8 rounded-lg">
                                        <a class="text-center text-xs">Homepage</a>
                                    </button>
                                </td>
                            </tr>

                            <tr>
                                <td class="flex flex-row border-2 h-1/2 border-white text-white text-center">
                                    <input type="checkbox" class="mx-2 my-auto rounded text-pink-500" />
                                    <div class="mx-2 my-2 w-3/4 h-60 shadow-xl bg-gray-400 rounded-lg">
                                        <label class="block text-white text-sm font-bold mb-2" for="choose_image">Choose
                                            Image</label>
                                    </div>
                                </td>
                                <td class="border-2 border-white text-white text-center">Author Hasn't Assign yet</td>
                                <td class="border-2 border-white text-white text-center">None</td>
                                <td class="border-2 border-white text-white text-center">
                                    <button class="my-2 bg-green-300 hover:bg-white text-black font w-1/2 h-8 rounded-lg">
                                        <a class="text-center text-xs">Landing Page</a>
                                    </button>
                                    <button class="my-2 bg-green-300 hover:bg-white text-black font w-1/2 h-8 rounded-lg">
                                        <a class="text-center text-xs">Homepage</a>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <br />
                </section>

            </section>
        </>
    )
}

export default Media 