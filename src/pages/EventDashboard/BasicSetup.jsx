const Overview1 = () => {
    return (
      <>

<div class="flex-1 bg-primary-700">
            <div class="mx-0 p-8 font-bold text-white">
                Event Name
            </div>

            <div class="w-full bg-grey-lightest">
                <div class="container mx-auto">
                    <div class="py-4 px-8">
                        <div class="flex mb-4">
                            <div class="w-1/2 mr-1">
                                <label class="block text-white text-sm font-bold mb-2" for="first_name">Event
                                    Name</label>
                                <input class="appearance-none border rounded w-3/4 h-4/5 py-2 px-3 text-grey-darker"
                                    id="first_name" type="text" placeholder="Your Event Name"/>
                            </div>
                            <div class="w-1/2 ml-1">
                                <label class="block text-white text-sm font-bold mb-2" for="last_name">Category</label>
                                <input class="appearance-none border rounded w-1/2 h-4/5 py-2 px-3 text-grey-darker"
                                    id="category" type="text" placeholder=""/>
                            </div>
                        </div>
                        <div class="mb-4 mt-8">
                            <label class="block text-white text-sm font-bold mb-2" for="description">Description</label>
                            <input class="appearance-none border rounded w-2/3 h-48 py-2 px-3 text-grey-darker"
                                id="desc" type="desc" placeholder="Description"/>
                        </div>

                        <div class="flex items-center">
                            <div class="mb-4 mr-10">
                                <label class="block text-white text-sm font-bold mb-2" for="start_date">Start Date &
                                    Time</label>
                                <input class="appearance-none border rounded h-16 px-4 text-grey-darker" id="startdate"
                                    type="startdate" placeholder="12-02-2021 12:00:00"/>
                            </div>
                            <p class="text-2xl font-bold mr-10">-</p>
                            <div class="mb-4">
                                <label class="block text-white text-sm font-bold mb-2" for="end_date">End Date &
                                    Time</label>
                                <input class="appearance-none border rounded h-16 px-4 text-grey-darker" id="enddate"
                                    type="enddate" placeholder="12-02-2021 12:00:00"/>
                            </div>
                        </div>

                        <div class="flex items-center mb-6">
                            <div class="mb-4 mr-10">
                                <label class="block text-white text-sm font-bold mb-2" for="event_type">Event
                                    Type</label>
                                <input class="appearance-none border rounded h-16 px-4 text-grey-darker" id="eventtype"
                                    type="eventtype" placeholder=""/>
                            </div>
                            <p class="text-2xl font-bold mr-10">-</p>
                            <div class="mb-4">
                                <label class="block text-white text-sm font-bold mb-2" for="company_name">Company
                                    Name</label>
                                <input class="appearance-none border rounded h-16 px-4 text-grey-darker"
                                    id="companyname" type="companyname" placeholder="Your Company Name"/>
                            </div>
                        </div>

                        <h1 class="text-white">Thumbnail</h1>
                        <div class="flex my-6">
                            <div class="mr-6 h-64 w-1/2 shadow-xl bg-gray-400 rounded-lg">
                                <label class="block text-white text-sm font-bold mb-2" for="choose_image">Choose
                                    Image</label>
                            </div>
                            <div class="ml-6 h-64 w-1/2 shadow-xl bg-gray-400 rounded-lg">
                                <label class="block text-white text-sm font-bold mb-2" for="choose_image">Choose
                                    Image</label>
                            </div>
                        </div>
                        <div class="w-1/2 mr-1">
                            <label class="block text-white text-sm font-bold mb-2" for="custom_link">Custom Link for
                                Visitor</label>
                            <input class="appearance-none border rounded w-3/4 py-4 px-4 text-grey-darker"
                                id="custom_link" type="text" placeholder="cranium.com/myevent"/>
                        </div>

                        <div class="flex items-center justify-between mt-8">
                            <button class="bg-white hover:bg-green-600 text-black font-bold py-2 px-4 rounded-full"
                                type="submit">
                                Save
                            </button>
                        </div>

                    </div>
                </div>
        </div>
    </div>
    </>
    )
}

export default Overview1