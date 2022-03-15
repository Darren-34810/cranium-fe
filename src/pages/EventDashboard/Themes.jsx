import Input from "../../components/Input";

const Themes = () => {
    return (
      <>

<div className="flex-1 bg-primary-700">
            <div className="p-8 font-bold text-white">
                Choose Your Templates
            </div>

    <div className="bg-primary-700">
                <div className="p-8 mx-0 text-white">
                    Select a Template
                </div>

    <div className="">
                    <div className="p-8 mx-0 text-white">
                        Sort Templates
                    </div>

                    <div className="w-full bg-grey-lightest ">
                        <div className="container mx-auto">
                            <div className="py-4 px-8">
                              <div className="flex mb-14">
                                <div className="w-1/2 mr-1">
                                  <label className="block text-white text-sm font-bold mb-2" for="hall_number">Hall Numbers you Desired</label>
                                  <Input className="appearance-none border rounded w-3/4 h-4/5 py-2 px-3 text-grey-darker" id="hall_number"
                                    type="text" placeholder=""/>
                                </div>

                                <div className="w-1/2 ml-1">
                                  <label className="block text-white text-sm font-bold mb-2" for="booth_number">Booth Numbers you Desired</label>
                                  <Input className="appearance-none border rounded w-3/4 h-4/5 py-2 px-3 text-grey-darker" id="booth_number"
                                    type="text" placeholder="Maximum 3 booth"/>
                                </div>
                              </div>
                            </div>
                        </div>
                    </div>
                            <div className="flex my-6">
                                    <div className="mr-2 h-40 w-2/3 shadow-xl bg-gray-400 rounded-lg">
                                        </div>
                                    <div className="mx-2 h-40 w-2/3 shadow-xl bg-gray-400 rounded-lg">
                                        </div>
                                    <div className="mx-2 h-40 w-2/3 shadow-xl bg-gray-400 rounded-lg">
                                        </div>
                                    <div className="mx-2 h-40 w-2/3 shadow-xl bg-gray-400 rounded-lg">
                                        </div>
                            </div>



                            <div className="text-white">Virtual Reality</div>
                            <div className="flex">
                                <div>
                              <textarea rows="5" cols="30" className="appearance-none border rounded bg-gray-400 mr-10"></textarea>
                              <textarea rows="5" cols="30" className="appearance-none border rounded bg-gray-400 mr-10"></textarea>
                              </div>
                            </div>

                              <div className="flex items-center justify-between mt-8">
                                <button className="bg-green-300 hover:bg-white text-black font-bold py-2 px-4 rounded-full" type="submit">
                                  Search Templates
                                </button>
                              </div>

                              <div className="flex mt-8">
                                <button className="bg-green-300 hover:bg-white text-black font-bold py-2 w-1/6 ml-auto rounded-full" type="submit">
                                  Next
                                </button>
                              </div>
                            </div>
                        </div>
                    </div>
                </>
    )
}

export default Themes
                              