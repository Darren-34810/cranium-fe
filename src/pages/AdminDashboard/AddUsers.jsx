import Input from "../../components/Input";
import Button from "../../components/Button";

const AddUsers = () => {
    return (
      <>
<div className="flex-1 bg-primary-700">
            <div className="mx-8 p-8 mb-8 font-bold text-white">
                Add New User
            </div>

            <Button variant="primary" size="large" isCustom={true} className="ml-auto mr-8">User List</Button>
            <div className="w-full bg-grey-lightest">
                <div className="container mx-auto">
                    <div className="py-4 px-8">
                        <div className="flex-col text- mr-4 mt-4">
                            <div className="w-1/2 mr-1">
                                <label className="block text-white text-sm font-bold mb-2 " htmlFor="user_name">Username</label>
                                <Input type="text" placeholder="Username"/>
                            </div>
                            <div className="w-1/2 mt-4">
                                <label className="block text-white text-sm font-bold mb-2" htmlFor="first_name">First Name</label>
                                <Input type="text" placeholder="First"/>
                            </div>
                            <div className="w-1/2 mt-4">
                                <label className="block text-white text-sm font-bold mb-2" htmlFor="last_name">Last Name</label>
                                <Input type="text" placeholder="Last Name"/>
                            </div>
                            <div className="w-1/2 mt-4">
                                <label className="block text-white text-sm font-bold mb-2" htmlFor="email">Email</label>
                                <Input type="text" placeholder="Email"/>
                            </div>
                            <div className="w-1/2 mt-4">
                                <label className="block text-white text-sm font-bold mb-2" htmlFor="password">Password</label>
                                <Input type="password" placeholder="Password"/>
                            </div>
                            <div className="w-1/2 mt-4 mb-8 h-80">
                                <label className="block text-white text-sm font-bold mb-2" htmlFor="last_name">Category</label>
                                    <select class="form-control show-tick text-black" name="group">
                            <option class="text-black" value="">-- Please select --</option>
                            <option class="text-black" value="group">Host</option>
                            <option class="text-black" value="group">Co-host</option>
                            <option class="text-black" value="group">User</option>
                                    </select>

                        <div className="flex mt-8">
                        <Button variant="primary" size="large" isCustom={true} className="mt-8">Add New Users</Button>
                              </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}
    
export default AddUsers