import Input from "../../components/Input";
import Button from "../../components/Button";

const UserProfile = () => {
    return (
      <>
<div className="flex-1 bg-primary-700 h-screen">
            <div className="mx-8 p-8 mb-8 font-bold text-white">
                'Username's Profile
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
                                <Input type="text" placeholder="First Name"/>
                            </div>
                            <div className="w-1/2 mt-4">
                                <label className="block text-white text-sm font-bold mb-2" htmlFor="last_name">Last Name</label>
                                <Input type="text" placeholder="Last Name"/>
                            </div>
                            <div className="w-1/2 mt-4">
                                <label className="block text-white text-sm font-bold mb-2" htmlFor="email">Email</label>
                                <Input type="text" placeholder="Email"/>
                            </div>
                            <div className="flex">
                            <Button variant="primary" size="large" isCustom={true} className="mt-8">Add New Users</Button>
                              </div>
                            <div className="w-1/2 mt-4">
                                <label className="block text-white text-sm font-bold mb-2" htmlFor="password">Last Password</label>
                                <Input type="password" placeholder="Password"/>
                            </div>
                            <div className="w-1/2 mt-4">
                                <label className="block text-white text-sm font-bold mb-2" htmlFor="password">New Password</label>
                                <Input type="password" placeholder="Password"/>
                            </div>
                            <div className="flex">
                            <Button variant="primary" size="large" isCustom={true} className="mt-8">Change Password</Button>
                              </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </>
    )
}
    
export default UserProfile