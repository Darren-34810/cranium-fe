import Button from "../components/Button"
import Input from "../components/Input"

const SignIn = () => {
  return (
    <>
      <div className="min-h-screen bg-from-600-to-500 flex flex-col justify-center items-center text-neutral-50">
        <p className="mb-6 text-2xl">Sign in to Cranium</p>
        <form action="/signin" method="POST" className="w-80 text-sm text-center bg-neutral-800 border border-neutral-400 rounded-lg shadow-lg p-6">
          <Input type="email" placeholder="Email" className="mb-4" />
          <Input type="password" placeholder="Password" className="mb-4" />
          <Button size="large" type="submit" variant="primary" className="w-full mb-4">Sign in</Button>
          <hr className="border-neutral-400 mb-4" />
          <Button size="large"type="button" variant="primary" className="w-full mb-4 bg-neutral-50 border-neutral-50 hover:bg-neutral-300 hover:border-neutral-300 hover:shadow-neutral-600"><img className="w-10 mr-4" src="./images/jpeg/logogoogle.png"/>Sign in with Google</Button>
          <p className="text-xs -mb-1">Don't have an account yet? <Button href="/signup" variant="tertiary" className="inline text-xs">Sign up</Button></p>
        </form>
      </div>
    </>
  )
}

export default SignIn