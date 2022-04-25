import Button from "../components/Button"
import Input from "../components/Input"
import {useState} from "react";
import axios from "axios";
import {useHistory} from "react-router-dom";

const SignUp = () => {
  // const [firstName, setFirstName] = useState('')
  // const [lastName, setLastName] = useState('')
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  // const [number, setNumber] = useState('')
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');
  const [msg, setMsg] = useState('');
  const history = useHistory()

  const SignUpForm = async (e) => {
    e.preventDefault()
    try {
      console.log(name)
      console.log(email)
      console.log(password)
      console.log(confPassword)
      // await axios.post('http://localhost:5000/users', {
      //   name: name,
      //   email: email,
      //   password: password,
      //   confPassword: confPassword,
      // }).then(function (res) {
      //   console.log(res)
      // })
      // history.push("/signin")
    } catch (error) {
      if (error.res) {
        setMsg(error.response.data.msg)
      }
    }
  }
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
            <form action="/signup" method="POST"
                  className="w-80 text-sm text-center bg-neutral-800 border border-neutral-400 rounded-lg shadow-lg p-6"
                  onSubmit={SignUpForm}
            >
              <p className="has-text-centered">{msg}</p>
              {/*<Input type="text" placeholder="First Name" className="mb-4" value={firstName} onChange={(e) => {*/}
              {/*  setFirstName(e.target.value)*/}
              {/*}}/>*/}
              {/*<Input type="text" placeholder="Last Name" className="mb-4"*/}
              {/*       value={lastName} onChange={(e) => {*/}
              {/*  setLastName(e.target.value)*/}
              {/*}}/>*/}
              <Input type="text" placeholder="Name" className="mb-4"
                     value={name} onChange={(e) => {

              }}/>
              {/*<Input type="text" placeholder="Phone Number" className="mb-4"*/}
              {/*       value={number} onChange={(e) => {*/}
              {/*  setNumber(e.target.value)*/}
              {/*}}/>*/}
              <Input type="email" placeholder="Email" className="mb-4"
                     value={email} onChange={(e) => {
                setEmail(e.target.value)
              }}/>

              <Input type="password" placeholder="Password" className="mb-4"
                     value={password} onChange={(e) => {
                setPassword(e.target.value)
              }}/>
              <Input type="password" placeholder=" Confirm Password" className="mb-4"
                     value={confPassword} onChange={(e) => {
                setConfPassword(e.target.value)
              }}/>

              <Button size="large" type="submit" variant="primary" className="w-full mb-4">Sign Up</Button>
              <hr className="border-neutral-400 mb-4"/>
              <Button size="large" type="button" variant="primary"
                      className="w-full mb-4 bg-neutral-50 border-neutral-50 hover:bg-neutral-300 hover:border-neutral-300 hover:shadow-neutral-600"><img
                className="w-10 mr-4" src="./images/jpeg/logogoogle.png"/>Sign in with Google</Button>
              <p className="text-xs -mb-1">Already have an account? <Button href="/signin" variant="tertiary"
                                                                            className="inline text-xs">Sign in</Button>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignUp
