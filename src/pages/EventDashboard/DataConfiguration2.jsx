const DataConfiguration2 = () => {
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

            <div class="flex flex-col">
                <div class="text-xl font-thin text-white">
                    <p class="mx-8">Event Promo (Optional)</p>
                </div>
                <div class="flex flex-row">
                    <div class="flex flex-col md:flex-row w-full h-96 ">
                        <div class="ml-10 my-4 w-80 h-60 shadow-xl bg-white rounded-lg"></div>

                        <div class="flex flex-row my-auto w-2/3 h-56">
                            <div class="flex flex-col mx-8 w-24 h-56">
                                <div class="flex flex-row my-2">
                                    <input type="checkbox" class="my-auto rounded text-pink-500" />
                                    <a class="ml-1 text-white">Video</a>
                                </div>
                                <div class="flex flex-row my-2">
                                    <input type="checkbox" class="my-auto rounded text-pink-500" />
                                    <a class="ml-1 text-white">Image</a>
                                </div>
                                <div class="flex flex-row my-2">
                                    <input type="checkbox" class="my-auto rounded text-pink-500" />
                                    <a class="ml-1 text-white">Stage</a>
                                </div>
                            </div>
                            <div class="flex flex-col w-48 h-56">
                                    <button class="bg-primary 700 border-2 border-white hover:bg-slate-600 text-black font my-2 w-max h-8 rounded-lg">
                                    <a class="text-center text-white text-xs">Choose video</a>
                                  </button>
                                  <button class="bg-primary-700 border-2 border-white hover:bg-slate-600 text-black font w-max h-8 rounded-lg">
                                    <a class="text-center text-white text-xs">Choose Image</a>
                                  </button>
                            </div>
                        </div>
                    </div>
                    
                    </div>
                </div>
           
        </section>

        <section class="flex-col ">

            <div class="p-16 text-xl font-semibold text-white">
                Boothss Configuration
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
        <section>
        <div class="flex flex-col mx-9  w-2/3 h-60">
          <div class="flex flex-row">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="white">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div class="mx-2 my-2 text-xl font-semibold text-white">
                Add Booths
              </div>
            </div>
            <button class="my-auto bg-green-300 hover:bg-white text-black font-bold w-1/6 py-4 text-center rounded-lg" type="submit">
                Back
            </button> 
        </div>
        </section>
    </section>
    </>
    )
}

export default DataConfiguration2