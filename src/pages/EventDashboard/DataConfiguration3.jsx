const DataConfiguration3 = () => {
    return (
      <>

{/* <!-- DATA CONFIGURATION --> */}
   <section className="flex-1 flex-col bg-primary-700">
        <section className="flex-col">

        
                <div className="flex-1 ">
                    <div className="mx-8 my-6 text-4xl font-bold text-white">
                        Event Name
                    </div>
                </div>

        </section>

        <section className="flex-col">

            <div className="p-16 text-xl font-semibold text-white">
                Booths Configuration
                </div>

            <table className="ml-10 w-2/3 h-60 table-fixed border-2 border-white">
                <thead className="border-2 border-white">
                  <tr>
                    <th className="w-1/4 border-2 border-white text-white text-center bg-slate-400">Booths</th>
                    <th className="w-1/4 border-2 border-white text-white text-center bg-slate-400">Name</th>
                    <th className="w-1/4 border-2 border-white text-white text-center bg-slate-400">Action</th>
                  </tr>
                </thead>
                <tbody className="border-2 border-white">
                  <tr>
                    <td className="border-2 border-white text-white text-center">Booths 1</td>
                    <td className="border-2 border-white text-white text-center">Telkom</td>
                    <td className="border-2 border-whitet text-white text-center">
                        <button className="bg-green-300 hover:bg-white text-black font w-1/2 h-8 rounded-lg">
                            <a className="text-center text-xs">Input</a>
                          </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="border-2 border-white text-white text-center">Booths 2</td>
                    <td className="border-2 border-white text-white text-center">Indosat</td>
                    <td className="border-2 border-white text-white text-center">
                        <button className="bg-green-300 hover:bg-white text-black font w-1/2 h-8 rounded-lg">
                            <a className="text-center text-xs">Input</a>
                          </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="border-2 border-white text-white text-center">Booths 3</td>
                    <td className="border-2 border-white text-white text-center">PLN</td>
                    <td className="border-2 border-white text-white text-center">
                        <button className="bg-green-300 hover:bg-white text-black font w-1/2 h-8 rounded-lg">
                            <a className="text-center text-xs">Input</a>
                          </button>
                    </td>
                  </tr>
                </tbody>
              </table>
        </section>
        <br/>
            <section className="flex-col">
            <div className="flex flex-col mx-9  w-2/3">
            <div className="flex flex-row">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="white">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div className="mx-2 my-2 text-xl font-semibold text-white">
                    Add Booths
                </div>
                </div>
                <div className="mx-8 my-6 text-xl font-semiblod text-white">
                    Booth 1 Configuration
                </div>
                <div className="w-1/2 mr-1">
                    <label className="block text-white text-sm font-bold mb-2" for="first_name"> Name</label>
                    <input className="appearance-none border rounded w-max h-4/5 py-2 px-3 text-grey-darker" id="first_name"
                    type="text" placeholder="Your Booth Name"/>
                </div>
                <div className="my-6 max-w-xs mr-1">
                    <label className="block text-white text-sm font-bold mb-2" for="first_name"> Logo</label>
                    <input className="appearance-none border rounded bg-primary-700 w-full h-52 py-2 text-center text-grey-darker" id="first_name"
                    type="text" placeholder="Preview"/>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row w-full">
                    <div className="mx-8 my-2 md:w-1/4 h-80 border-2 border-white rounded-lg">
                        <h3 className="my-4 text-center text-lg text-white">Hotspot 1</h3>
                            <label className="block text-white text-center text-sm font-thin mb-2" for="first_name">Title</label>
                            <input className="mx-8 border rounded w-max h-10 py-2 px-3 text-grey-darker" id="first_name"
                            type="text"/>
                        <div className="flex flex-row my-6">
                            <div className=" w-1/2">
                                <div className="flex flex-row my-2">
                                    <input type="checkbox" className="mx-4 my-auto rounded text-pink-500" />
                                    <a className="ml-1 text-white">Video</a>
                                </div>
                                <div className="flex flex-row my-2">
                                    <input type="checkbox" className="mx-4 my-auto rounded text-pink-500" />
                                    <a className="ml-1 text-white">PDF</a>
                                </div>
                                <div className="flex flex-row my-2">
                                    <input type="checkbox" className="mx-4 my-auto rounded text-pink-500" />
                                    <a className="ml-1 text-white">URL Link</a>
                                </div>
                            </div>
                            <div className=" w-1/2">
                                <div className="flex flex-col">
                                    <button className="bg-primary 700 border-2 border-white hover:bg-slate-600 text-black font-thin my-2 w-24 h-8 rounded-lg">
                                        <a className="text-center text-white text-xs">Choose video</a>
                                    </button>
                                    <button className="bg-primary-700 border-2 border-white hover:bg-slate-600 text-black font-thin w-24 h-8 rounded-lg">
                                        <a className="text-center text-white text-xs">Choose Image</a>
                                    </button>
                                    <button className="bg-primary-700 border-2 border-white hover:bg-slate-600 text-black font-thin my-2 w-24 h-8 rounded-lg">
                                        <a className="text-center text-white text-xs">Url</a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mx-8 my-2 md:w-1/4 h-80 border-2 border-white rounded-lg">
                        <h3 className="my-4 text-center text-lg text-white">Hotspot 2</h3>
                            <label className="block text-white text-center text-sm font-thin mb-2" for="first_name">Title</label>
                            <input className="mx-8 border rounded w-max h-10 py-2 px-3 text-grey-darker" id="first_name"
                            type="text"/>
                            <div className="flex flex-row my-6">
                                <div className=" w-1/2">
                                    <div className="flex flex-row my-2">
                                        <input type="checkbox" className="mx-4 my-auto rounded text-pink-500" />
                                        <a className="ml-1 text-white">Video</a>
                                    </div>
                                    <div className="flex flex-row my-2">
                                        <input type="checkbox" className="mx-4 my-auto rounded text-pink-500" />
                                        <a className="ml-1 text-white">PDF</a>
                                    </div>
                                    <div className="flex flex-row my-2">
                                        <input type="checkbox" className="mx-4 my-auto rounded text-pink-500" />
                                        <a className="ml-1 text-white">URL Link</a>
                                    </div>
                                </div>
                                <div className=" w-1/2">
                                    <div className="flex flex-col">
                                        <button className="bg-primary 700 border-2 border-white hover:bg-slate-600 text-black font-thin my-2 w-24 h-8 rounded-lg">
                                            <a className="text-center text-white text-xs">Choose video</a>
                                        </button>
                                        <button className="bg-primary-700 border-2 border-white hover:bg-slate-600 text-black font-thin w-24 h-8 rounded-lg">
                                            <a className="text-center text-white text-xs">Choose Image</a>
                                        </button>
                                        <button className="bg-primary-700 border-2 border-white hover:bg-slate-600 text-black font-thin my-2 w-24 h-8 rounded-lg">
                                            <a className="text-center text-white text-xs">Url</a>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <div className="mx-8 my-2 md:w-1/4 h-80 border-2 border-white rounded-lg">
                        <h3 className="my-4 text-center text-lg text-white">Hotspot 3</h3>
                        <label className="block text-white text-center text-sm font-thin mb-2" for="first_name">Title</label>
                        <input className="mx-8 border rounded w-max h-10 py-2 px-3 text-grey-darker" id="first_name"
                        type="text"/>
                        <div className="flex flex-row my-6">
                            <div className=" w-1/2">
                                <div className="flex flex-row my-2">
                                    <input type="checkbox" className="mx-4 my-auto rounded text-pink-500" />
                                    <a className="ml-1 text-white">Video</a>
                                </div>
                                <div className="flex flex-row my-2">
                                    <input type="checkbox" className="mx-4 my-auto rounded text-pink-500" />
                                    <a className="ml-1 text-white">PDF</a>
                                </div>
                                <div className="flex flex-row my-2">
                                    <input type="checkbox" className="mx-4 my-auto rounded text-pink-500" />
                                    <a className="ml-1 text-white">URL Link</a>
                                </div>
                            </div>
                            <div className=" w-1/2">
                                <div className="flex flex-col">
                                    <button className="bg-primary 700 border-2 border-white hover:bg-slate-600 text-black font-thin my-2 w-24 h-8 rounded-lg">
                                        <a className="text-center text-white text-xs">Choose video</a>
                                    </button>
                                    <button className="bg-primary-700 border-2 border-white hover:bg-slate-600 text-black font-thin w-24 h-8 rounded-lg">
                                        <a className="text-center text-white text-xs">Choose Image</a>
                                    </button>
                                    <button className="bg-primary-700 border-2 border-white hover:bg-slate-600 text-black font-thin my-2 w-24 h-8 rounded-lg">
                                        <a className="text-center text-white text-xs">Url</a>
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