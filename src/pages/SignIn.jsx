import React, {useState} from "react";
import Button from "../components/Button"
import Input from "../components/Input"
import {useHistory} from "react-router-dom";
import axios from "axios";

const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()
  const [msg, setMsg] = useState('')

  const Auth = async (e) => {
    e.preventDefault()
    try {
      await axios.post('http://localhost:5000/login', {
        email: email,
        password: password,
      }).then(function (res) {
        console.log(res)
      })
      history.push("/homepagefirst")
    } catch (error) {
      if (error.res) {
        setMsg(error.response.data.msg)
      }
    }
  }

  return (
    <>
      <div className="min-h-screen bg-from-600-to-500 flex flex-col justify-center items-center text-neutral-50">
        <p className="mb-6 text-2xl">Sign in to Cranium</p>
        <form action="/signin" method="POST"
              onSubmit={Auth}
              className="w-80 text-sm text-center bg-neutral-800 border border-neutral-400 rounded-lg shadow-lg p-6">
          <p className="has-text-centered">{msg}</p>
          <Input type="email" placeholder="Email" className="mb-4"
                 value={email} onChange={(e) => {
            setEmail(e.target.value)
          }}
          />
          <Input type="password" placeholder="Password" className="mb-4"
                 value={password} onChange={(e) => {
            setPassword(e.target.value)
          }}
          />
          <Button size="large" type="submit" variant="primary" className="w-full mb-4">Sign in</Button>
          <hr className="border-neutral-400 mb-4"/>
          <Button size="large" type="button" variant="primary"
                  className="w-full mb-4 bg-neutral-50 border-neutral-50 hover:bg-neutral-300 hover:border-neutral-300 hover:shadow-neutral-600"><img
            className="w-10 mr-4" src="./images/jpeg/logogoogle.png"/>Sign in with Google</Button>
          <p className="text-xs -mb-1">Don't have an account yet? <Button href="/signup" variant="tertiary"
                                                                          className="inline text-xs">Sign up</Button>
          </p>
        </form>
      </div>
    </>
  )
}

export default SignIn
