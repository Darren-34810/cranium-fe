import Button from "../components/Button"
import Input from "../components/Input"

const SignUp = () => {
  return (
    <>
      <div className="min-h-screen bg-from-600-to-500 flex justify-center items-center text-neutral-50 transition-all">
        <div className="max-w-4xl flex flex-col md:flex-row justify-evenly items-center py-16 md:py-0">
      <div className="w-[90%] md:w-2/5 mb-16 md:mb-0 flex flex-col justify-center">
            <p className="mb-6 text-2xl">Sign up to Cranium</p>
            <p className="mb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque adipisci necessitatibus voluptatem accusamus vero deleniti hic dignissimos illum nam.</p>
            <div>
              <p>Get access to:</p>
              <ul className="list-disc ml-5">
                <li>Feature 1</li>
                <li>Feature 2</li>
                <li>Feature 3</li>
              </ul>
            </div>
          </div>
          <div className="w-full md:w-2/5 flex justify-center">
            <form action="/signup" method="POST" className="w-80 text-sm text-center bg-neutral-800 border border-neutral-400 rounded-lg shadow-lg p-6">
              <Input type="email" placeholder="Email" className="mb-5" />
              <Input type="password" placeholder="Password" className="mb-5" />
              <Button type="submit" variant="primary" className="w-full mb-5">Sign in</Button>
              <hr className="border-neutral-400 mb-5" />
              <Button className="w-full mb-5 bg-neutral-50 border-neutral-50 hover:bg-neutral-300 hover:border-neutral-300 hover:shadow-neutral-600">Sign in with Google</Button>
              <p>Don't have an account yet? <a href="/signup" className="btn-tertiary">Sign up</a></p>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignUp