import React, { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import { useHistory } from "react-router-dom";
import axios from "axios";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const [msg, setMsg] = useState("");

  const Auth = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post("http://localhost:5000/login", {
          email: email,
          password: password,
        })
        .then(function (res) {
          console.log(res);
        });
      history.push("/homepagefirst");
    } catch (error) {
      if (error.res) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <>
      <div className="min-h-screen bg-primary-700 flex flex-col justify-center items-center text-neutral-50">
        <div className="flex flex-col items-center mt-8">
          <div className="hl"></div>
          <h2 className="text-neutral-50 text-2xl sm:text-4xl font-bold py-1 lg:mr-8 xl:mr-0">
            Sign In to TEMU-
          </h2>
        </div>
        <form
          action="/signin"
          method="POST"
          onSubmit={Auth}
          className="w-80 text-sm text-center bg-neutral-800 border border-neutral-400 rounded-lg shadow-lg p-6 mt-8"
        >
          <p className="has-text-centered">{msg}</p>
          <Input
            type="email"
            placeholder="Email"
            className="border-none mb-4"
            value={email}
            inputHandler={(valueCallback) => setEmail(valueCallback)}
          />
          <Input
            type="password"
            placeholder="Password"
            className="border-none mb-4"
            value={password}
            inputHandler={(valueCallback) => setPassword(valueCallback)}
          />
          <Button
            size="large"
            type="submit"
            variant="primary"
            className="w-full mb-4"
          >
            Sign in
          </Button>
          <hr className="border-neutral-400 mb-4" />
          <Button
            size="large"
            type="button"
            variant="primary"
            className="w-full mb-4 bg-neutral-50 border-neutral-50 hover:bg-neutral-300 hover:border-neutral-300 hover:shadow-neutral-600"
          >
            <img
              className="w-10 mr-4"
              src="./images/jpeg/logogoogle.png"
              alt="Google sign-in"
            />
            Sign in with Google
          </Button>
          <p className="text-xs -mb-1">
            Don't have an account yet?{" "}
            <Button
              href="/signup"
              variant="tertiary"
              className="inline text-xs"
            >
              Sign up
            </Button>
          </p>
        </form>
      </div>
    </>
  );
};

export default SignIn;
