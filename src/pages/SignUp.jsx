import Button from "../components/Button";
import Input from "../components/Input";
import {useState} from "react";
import axios from "axios";
import {useHistory} from "react-router-dom";

const SignUp = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  // const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState('')
  const [password, setPassword] = useState("");
  // const [confPassword, setConfPassword] = useState("");
  const [msg, setMsg] = useState("");
  const history = useHistory();

  const SignUpForm = async (e) => {
    e.preventDefault();
    try {
      // console.log(name);
      // console.log(email);
      // console.log(password);
      // console.log(confPassword);
      await axios.post('http://localhost:5000/users', {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phoneNumber : phoneNumber,
        password: password,
      }).then(function (res) {
        console.log(res)
      })
      history.push("/signin")
    } catch (error) {
      if (error.res) {
        setMsg(error.response.data);
      }
    }
  };
  return (
    <>
      <div className="min-h-screen bg-primary-800 flex justify-center items-center text-neutral-50 transition-all">
        <div className="max-w-4xl flex flex-col md:flex-row justify-evenly items-center py-16 md:py-0">
          <div className="w-[85%] md:w-2/5 mb-10 md:mb-0 flex flex-col justify-center">
            <div className="flex flex-col lg:flex-row justify-center items-center lg:items-stretch mt-8">
              <div className="hl lg:vl"/>
              <h2 className="text-neutral-50 text-2xl sm:text-4xl font-bold py-1 lg:mr-8 xl:mr-0">
                Sign Up to TEMU-
              </h2>
            </div>
            <p className="mt-8 mb-4">
              Ciptakan pengalaman unik dan bermakna dengan menjelajahi virtual
              space milik Anda
            </p>
            <div>
              <p>Mengapa menggunakan virtual reality?</p>
              <ul className="list-disc ml-5">
                <li>Membuat acara hybrid yang variatif</li>
                <li>
                  Meningkatkan konversi dalam acara untuk mendukung tujuan
                  bisnis/event
                </li>
                <li>Memperoleh data yang lebih relevan dengan lebih mudah</li>
              </ul>
            </div>
          </div>
          <div className="w-full md:w-2/5 flex justify-center">
            <form
              action="/signup"
              method="POST"
              className="w-80 text-sm text-center bg-neutral-800 border border-neutral-400 rounded-lg shadow-lg p-6"
              onSubmit={SignUpForm}
            >
              <p className="has-text-centered">{msg}</p>
              <Input
                type="text"
                placeholder="First Name"
                className="border-none mb-4"
                value={firstName}
                  inputHandler={(valueCallback) => setFirstName(valueCallback)}
              />
              <Input
                type="text"
                placeholder="Last Name"
                className="border-none mb-4"
                value={lastName}
                inputHandler={(valueCallback) => setLastName(valueCallback)}
              />
              {/* <Input type="text" placeholder="Name" className="border-none mb-4" */}
              {/* value={name} onChange={(e) => {setName(e.target.value)}} /> */}
              {/*<Input*/}
              {/*  type="text"*/}
              {/*  placeholder="Name"*/}
              {/*  className="border-none mb-4"*/}
              {/*  value={name}*/}
              {/*  inputHandler={(valueCallback) => setName(valueCallback)}*/}
              {/*/>*/}

              <Input
                type="email"
                placeholder="Email"
                className="border-none mb-4"
                value={email}
                inputHandler={(valueCallback) => setEmail(valueCallback)}
              />
              <Input
                type="text"
                placeholder="Phone Number"
                className="border-none mb-4"
                value={phoneNumber}
                inputHandler={(valueCallback) => setPhoneNumber(valueCallback)}
              />
              <Input
                type="password"
                placeholder="Password"
                className="border-none mb-4"
                value={password}
                inputHandler={(valueCallback) => setPassword(valueCallback)}
              />
              {/*<Input*/}
              {/*  type="password"*/}
              {/*  placeholder=" Confirm Password"*/}
              {/*  className="border-none mb-4"*/}
              {/*  value={confPassword}*/}
              {/*  inputHandler={(valueCallback) => setConfPassword(valueCallback)}*/}
              {/*/>*/}

              <Button
                size="large"
                type="submit"
                variant="primary"
                className="w-full mb-4"
              >
                Sign Up
              </Button>
              <p className="text-xs -mb-1">
                Already have an account?{" "}
                <Button
                  href="/signin"
                  variant="tertiary"
                  className="inline text-xs"
                >
                  Sign in
                </Button>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
