import Button from "../components/Button"
import Input from "../components/Input"

const SignUp = () => {
  return (
    <>
      <div className="min-h-screen bg-from-600-to-500 flex justify-center items-center text-neutral-50 transition-all">
        <div className="max-w-4xl flex flex-col md:flex-row justify-evenly items-center py-16 md:py-0">
          <div className="w-[85%] md:w-2/5 mb-16 md:mb-0 flex flex-col justify-center">
            <p className="w-full mb-6 text-3xl font-bold">Sign up to Cranium</p>
            <p className="mb-4">Ciptakan pengalaman unik dan bermakna dengan menjelajahi virtual space milik Anda</p>
            <div>
              <p>Mengapa menggunakan virtual reality?</p>
              <ul className="list-disc ml-5">
                <li>Membuat acara hybrid yang variatif</li>
                <li>Meningkatkan konversi dalam acara untuk mendukung tujuan bisnis/event</li>
                <li>Memperoleh data yang lebih relevan dengan lebih mudah</li>
              </ul>
            </div>
          </div>
          <div className="w-full md:w-2/5 flex justify-center">
            <form action="/signup" method="POST" className="w-80 text-sm text-center bg-neutral-800 border border-neutral-400 rounded-lg shadow-lg p-6">
              <Input type="text" placeholder="First Name" className="mb-4" />
              <Input type="text" placeholder="Last Name" className="mb-4" />
              <Input type="text" placeholder="Phone Number" className="mb-4" />
              <Input type="email" placeholder="Email" className="mb-4" />
              <Input type="password" placeholder="Password" className="mb-4" />
              <Button size="large" type="submit" variant="primary" className="w-full mb-4">Sign Up</Button>
              <hr className="border-neutral-400 mb-4" />
              <Button size="large" type="button" variant="primary" className="w-full mb-4 bg-neutral-50 border-neutral-50 hover:bg-neutral-300 hover:border-neutral-300 hover:shadow-neutral-600"><img className="w-10 mr-4" src="./images/jpeg/logogoogle.png"/>Sign in with Google</Button>
              <p className="text-xs -mb-1">Already have an account? <a href="/signin" className="btn-tertiary text-xs hover:-translate-y-0.5">Sign in</a></p>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignUp