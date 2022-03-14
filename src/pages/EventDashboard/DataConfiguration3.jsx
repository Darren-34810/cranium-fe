const DataConfiguration3 = () => {
    return (
      <>

{/* <!-- DATA CONFIGURATION --> */}
   <section class="flex-1 flex-col bg-primary-700">
        <section class="flex-col">

        
                <div class="flex-1 ">
                    <div class="mx-8 my-6 text-4xl font-bold text-white">
                        Event Name
                    </div>
                </div>

        </section>

        <section class="flex-col">

            <div class="p-16 text-xl font-semibold text-white">
                Booths Configuration
                </div>

            <table class="ml-10 w-2/3 h-60 table-fixed border-2 border-white">
                <thead class="border-2 border-white">
                  <tr>
                    <th class="w-1/4 border-2 border-white text-white text-center bg-slate-400">Booths</th>
                    <th class="w-1/4 border-2 border-white text-white text-center bg-slate-400">Name</th>
                    <th class="w-1/4 border-2 border-white text-white text-center bg-slate-400">Action</th>
                  </tr>
                </thead>
                <tbody class="border-2 border-white">
                  <tr>
                    <td class="border-2 border-white text-white text-center">Booths 1</td>
                    <td class="border-2 border-white text-white text-center">Telkom</td>
                    <td class="border-2 border-whitet text-white text-center">
                        <button class="bg-green-300 hover:bg-white text-black font w-1/2 h-8 rounded-lg">
                            <a class="text-center text-xs">Input</a>
                          </button>
                    </td>
                  </tr>
                  <tr>
                    <td class="border-2 border-white text-white text-center">Booths 2</td>
                    <td class="border-2 border-white text-white text-center">Indosat</td>
                    <td class="border-2 border-white text-white text-center">
                        <button class="bg-green-300 hover:bg-white text-black font w-1/2 h-8 rounded-lg">
                            <a class="text-center text-xs">Input</a>
                          </button>
                    </td>
                  </tr>
                  <tr>
                    <td class="border-2 border-white text-white text-center">Booths 3</td>
                    <td class="border-2 border-white text-white text-center">PLN</td>
                    <td class="border-2 border-white text-white text-center">
                        <button class="bg-green-300 hover:bg-white text-black font w-1/2 h-8 rounded-lg">
                            <a class="text-center text-xs">Input</a>
                          </button>
                    </td>
                  </tr>
                </tbody>
              </table>
        </section>
        <br/>
            <section class="flex-col">
            <div class="flex flex-col mx-9  w-2/3">
            <div class="flex flex-row">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="white">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div class="mx-2 my-2 text-xl font-semibold text-white">
                    Add Booths
                </div>
                </div>
                <div class="mx-8 my-6 text-xl font-semiblod text-white">
                    Booth 1 Configuration
                </div>
                <div class="w-1/2 mr-1">
                    <label class="block text-white text-sm font-bold mb-2" for="first_name"> Name</label>
                    <input class="appearance-none border rounded w-max h-4/5 py-2 px-3 text-grey-darker" id="first_name"
                    type="text" placeholder="Your Booth Name"/>
                </div>
                <div class="my-6 max-w-xs mr-1">
                    <label class="block text-white text-sm font-bold mb-2" for="first_name"> Logo</label>
                    <input class="appearance-none border rounded bg-primary-700 w-full h-52 py-2 text-center text-grey-darker" id="first_name"
                    type="text" placeholder="Preview"/>
                    </div>
                </div>
                <div class="flex flex-col md:flex-row w-full">
                    <div class="mx-8 my-2 md:w-1/4 h-80 border-2 border-white rounded-lg">
                        <h3 class="my-4 text-center text-lg text-white">Hotspot 1</h3>
                            <label class="block text-white text-center text-sm font-thin mb-2" for="first_name">Title</label>
                            <input class="mx-8 border rounded w-max h-10 py-2 px-3 text-grey-darker" id="first_name"
                            type="text"/>
                        <div class="flex flex-row my-6">
                            <div class=" w-1/2">
                                <div class="flex flex-row my-2">
                                    <input type="checkbox" class="mx-4 my-auto rounded text-pink-500" />
                                    <a class="ml-1 text-white">Video</a>
                                </div>
                                <div class="flex flex-row my-2">
                                    <input type="checkbox" class="mx-4 my-auto rounded text-pink-500" />
                                    <a class="ml-1 text-white">PDF</a>
                                </div>
                                <div class="flex flex-row my-2">
                                    <input type="checkbox" class="mx-4 my-auto rounded text-pink-500" />
                                    <a class="ml-1 text-white">URL Link</a>
                                </div>
                            </div>
                            <div class=" w-1/2">
                                <div class="flex flex-col">
                                    <button class="bg-primary 700 border-2 border-white hover:bg-slate-600 text-black font-thin my-2 w-24 h-8 rounded-lg">
                                        <a class="text-center text-white text-xs">Choose video</a>
                                    </button>
                                    <button class="bg-primary-700 border-2 border-white hover:bg-slate-600 text-black font-thin w-24 h-8 rounded-lg">
                                        <a class="text-center text-white text-xs">Choose Image</a>
                                    </button>
                                    <button class="bg-primary-700 border-2 border-white hover:bg-slate-600 text-black font-thin my-2 w-24 h-8 rounded-lg">
                                        <a class="text-center text-white text-xs">Url</a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="mx-8 my-2 md:w-1/4 h-80 border-2 border-white rounded-lg">
                        <h3 class="my-4 text-center text-lg text-white">Hotspot 2</h3>
                            <label class="block text-white text-center text-sm font-thin mb-2" for="first_name">Title</label>
                            <input class="mx-8 border rounded w-max h-10 py-2 px-3 text-grey-darker" id="first_name"
                            type="text"/>
                            <div class="flex flex-row my-6">
                                <div class=" w-1/2">
                                    <div class="flex flex-row my-2">
                                        <input type="checkbox" class="mx-4 my-auto rounded text-pink-500" />
                                        <a class="ml-1 text-white">Video</a>
                                    </div>
                                    <div class="flex flex-row my-2">
                                        <input type="checkbox" class="mx-4 my-auto rounded text-pink-500" />
                                        <a class="ml-1 text-white">PDF</a>
                                    </div>
                                    <div class="flex flex-row my-2">
                                        <input type="checkbox" class="mx-4 my-auto rounded text-pink-500" />
                                        <a class="ml-1 text-white">URL Link</a>
                                    </div>
                                </div>
                                <div class=" w-1/2">
                                    <div class="flex flex-col">
                                        <button class="bg-primary 700 border-2 border-white hover:bg-slate-600 text-black font-thin my-2 w-24 h-8 rounded-lg">
                                            <a class="text-center text-white text-xs">Choose video</a>
                                        </button>
                                        <button class="bg-primary-700 border-2 border-white hover:bg-slate-600 text-black font-thin w-24 h-8 rounded-lg">
                                            <a class="text-center text-white text-xs">Choose Image</a>
                                        </button>
                                        <button class="bg-primary-700 border-2 border-white hover:bg-slate-600 text-black font-thin my-2 w-24 h-8 rounded-lg">
                                            <a class="text-center text-white text-xs">Url</a>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <div class="mx-8 my-2 md:w-1/4 h-80 border-2 border-white rounded-lg">
                        <h3 class="my-4 text-center text-lg text-white">Hotspot 3</h3>
                        <label class="block text-white text-center text-sm font-thin mb-2" for="first_name">Title</label>
                        <input class="mx-8 border rounded w-max h-10 py-2 px-3 text-grey-darker" id="first_name"
                        type="text"/>
                        <div class="flex flex-row my-6">
                            <div class=" w-1/2">
                                <div class="flex flex-row my-2">
                                    <input type="checkbox" class="mx-4 my-auto rounded text-pink-500" />
                                    <a class="ml-1 text-white">Video</a>
                                </div>
                                <div class="flex flex-row my-2">
                                    <input type="checkbox" class="mx-4 my-auto rounded text-pink-500" />
                                    <a class="ml-1 text-white">PDF</a>
                                </div>
                                <div class="flex flex-row my-2">
                                    <input type="checkbox" class="mx-4 my-auto rounded text-pink-500" />
                                    <a class="ml-1 text-white">URL Link</a>
                                </div>
                            </div>
                            <div class=" w-1/2">
                                <div class="flex flex-col">
                                    <button class="bg-primary 700 border-2 border-white hover:bg-slate-600 text-black font-thin my-2 w-24 h-8 rounded-lg">
                                        <a class="text-center text-white text-xs">Choose video</a>
                                    </button>
                                    <button class="bg-primary-700 border-2 border-white hover:bg-slate-600 text-black font-thin w-24 h-8 rounded-lg">
                                        <a class="text-center text-white text-xs">Choose Image</a>
                                    </button>
                                    <button class="bg-primary-700 border-2 border-white hover:bg-slate-600 text-black font-thin my-2 w-24 h-8 rounded-lg">
                                        <a class="text-center text-white text-xs">Url</a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>
        </section>
    </section>
    </>
    )
}

export default DataConfiguration3