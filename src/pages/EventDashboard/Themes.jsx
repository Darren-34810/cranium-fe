const Themes = () => {
    return (
      <>

<div class="flex-1 bg-primary-700">
            <div class="p-8 font-bold text-white">
                Choose Your Templates
            </div>

    <div class="bg-primary-700">
                <div class="p-8 mx-0 text-white">
                    Select a Template
                </div>

    <div class="">
                    <div class="p-8 mx-0 text-white">
                        Sort Templates
                    </div>

                    <div class="w-full bg-grey-lightest ">
                        <div class="container mx-auto">
                            <div class="py-4 px-8">
                              <div class="flex mb-14">
                                <div class="w-1/2 mr-1">
                                  <label class="block text-white text-sm font-bold mb-2" for="hall_number">Hall Numbers you Desired</label>
                                  <input class="appearance-none border rounded w-3/4 h-4/5 py-2 px-3 text-grey-darker" id="hall_number"
                                    type="text" placeholder=""/>
                                </div>

                                <div class="w-1/2 ml-1">
                                  <label class="block text-white text-sm font-bold mb-2" for="booth_number">Booth Numbers you Desired</label>
                                  <input class="appearance-none border rounded w-3/4 h-4/5 py-2 px-3 text-grey-darker" id="booth_number"
                                    type="text" placeholder="Maximum 3 booth"/>
                                </div>
                              </div>
                            </div>
                        </div>
                    </div>
                            <div class="flex my-6">
                                    <div class="mr-2 h-40 w-2/3 shadow-xl bg-gray-400 rounded-lg">
                                        </div>
                                    <div class="mx-2 h-40 w-2/3 shadow-xl bg-gray-400 rounded-lg">
                                        </div>
                                    <div class="mx-2 h-40 w-2/3 shadow-xl bg-gray-400 rounded-lg">
                                        </div>
                                    <div class="mx-2 h-40 w-2/3 shadow-xl bg-gray-400 rounded-lg">
                                        </div>
                            </div>



                            <div class="text-white">Virtual Reality</div>
                            <div class="flex">
                                <div>
                              <textarea rows="5" cols="30" class="appearance-none border rounded bg-gray-400 mr-10"></textarea>
                              <textarea rows="5" cols="30" class="appearance-none border rounded bg-gray-400 mr-10"></textarea>
                              </div>
                            </div>

                              <div class="flex items-center justify-between mt-8">
                                <button class="bg-green-300 hover:bg-white text-black font-bold py-2 px-4 rounded-full" type="submit">
                                  Search Templates
                                </button>
                              </div>

                              <div class="flex mt-8">
                                <button class="bg-green-300 hover:bg-white text-black font-bold py-2 w-1/6 ml-auto rounded-full" type="submit">
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
                              