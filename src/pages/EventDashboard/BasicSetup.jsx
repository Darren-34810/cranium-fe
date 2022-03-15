import Input from "../../components/Input";

const Overview1 = () => {
    return (
      <>

<div className="flex-1 bg-primary-700">
            <div className="mx-0 p-8 font-bold text-white">
                Event Name
            </div>

            <div className="w-full bg-grey-lightest">
                <div className="container mx-auto">
                    <div className="py-4 px-8">
                        <div className="flex mb-4">
                            <div className="w-1/2 mr-1">
                                <label className="block text-white text-sm font-bold mb-2" htmlFor="first_name">Event
                                    Name</label>
                                <Input type="text"/>
                            </div>
                            <div className="w-1/2 ml-1">
                                <label className="block text-white text-sm font-bold mb-2" htmlFor="last_name">Category</label>
                                <Input type="text"/>
                            </div>
                        </div>
                        <div className="mb-4 mt-8">
                            <label className="block text-white text-sm font-bold mb-2" htmlFor="description">Description</label>
                            <Input type="text"/>
                        </div>

                        <div className="flex items-center">
                            <div className="mb-4 mr-10">
                                <label className="block text-white text-sm font-bold mb-2" htmlFor="start_date">Start Date &
                                    Time</label>
                                    <Input type="text"/>
                            </div>
                            <p className="text-2xl font-bold mr-10">-</p>
                            <div className="mb-4">
                                <label className="block text-white text-sm font-bold mb-2" htmlFor="end_date">End Date &
                                    Time</label>
                                    <Input type="text"/>
                            </div>
                        </div>

                        <div className="flex items-center mb-6">
                            <div className="mb-4 mr-10">
                                <label className="block text-white text-sm font-bold mb-2" htmlFor="event_type">Event
                                    Type</label>
                                    <Input type="text"/>
                            </div>
                            <p className="text-2xl font-bold mr-10">-</p>
                            <div className="mb-4">
                                <label className="block text-white text-sm font-bold mb-2" htmlFor="company_name">Company
                                    Name</label>
                                    <Input type="text"/>
                            </div>
                        </div>

                        <h1 className="text-white">Thumbnail</h1>
                        <div className="flex my-6">
                            <div className="mr-6 h-64 w-1/2 shadow-xl bg-gray-400 rounded-lg">
                                <label className="block text-white text-sm font-bold mb-2" htmlFor="choose_image">Choose
                                    Image</label>
                            </div>
                            <div className="ml-6 h-64 w-1/2 shadow-xl bg-gray-400 rounded-lg">
                                <label className="block text-white text-sm font-bold mb-2" htmlFor="choose_image">Choose
                                    Image</label>
                            </div>
                        </div>
                        <div className="w-1/2 mr-1">
                            <label className="block text-white text-sm font-bold mb-2" htmlFor="custom_link">Custom Link htmlFor
                                Visitor</label>
                                <Input type="text"/>
                        </div>

                        <div className="flex items-center justify-between mt-8">
                            <button className="bg-white hover:bg-green-600 text-black font-bold py-2 px-4 rounded-full"
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