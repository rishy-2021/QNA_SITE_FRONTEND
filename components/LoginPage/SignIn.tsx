import { signIn } from "next-auth/react";
import { useState } from "react";
// import { getCsrfToken } from "next-auth/client";

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <div className="flex justify-center items-center bg-white">
        <form className="bg-white" method="POST" action="/api/auth/signin">
          <h1 className="text-gray-800 font-bold text-3xl py-3">Sign In!</h1>
          <p className="text-gray-400 py-3">
            Sign In with your existing email address
          </p>
          <div className="flex items-center border-2 py-2.5 px-3 rounded-lg mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
              />
            </svg>
            <input
              className="
             
              pl-2
              outline-none
              border-none
              w-full 

                "
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="email"
              name=""
              id=""
              placeholder="Email Address"
            />
          </div>
          {/* <div className="flex items-center border-2 py-2.5 px-3 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clipRule="evenodd"
              />
            </svg>
            <input
              className="pl-2 outline-none border-none
                w-full w-96"
              type="text"
              name=""
              id=""
              placeholder="Password"
            />
          </div> */}
          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              signIn("email", { email: email });
            }}
            className="block w-full mt-4 py-2 rounded-lg text-white font-semibold mb-2 bg-gradient-to-r from-purple-500 to-pink-500"
          >
            Sign In
          </button>
          <div className="mt-3 flex">
            <label
              htmlFor="remember_me"
              className="inline-flex items-center w-full cursor-pointer"
            >
              <input
                id="remember_me"
                type="checkbox"
                className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                name="remember"
              />
              <span className="ml-2 text-sm text-gray-600">Remember me</span>
            </label>

            {/* <div className="w-full text-right">
              <a
                className="underline text-sm text-gray-600 hover:text-gray-900"
                href="#"
              >
                Forgot password?
              </a>
            </div> */}
          </div>
          <div className="flex mt-7 justify-center gap-4">
            <a
              onClick={() => {
                signIn("google");
              }}
              className="flex item-center justify-center social shadow-md hover:-translate-y-1 ease duration-300 h-12 w-12 p-1 cursor-pointer   hover:text-white rounded-full"
            >
              <img src="/google.svg" alt="hhhh" />
            </a>
            <a
              // onClick={() => signIn("facebook")}
              onClick={() =>
                alert("currently Google & Email verification is on service")
              }
              className="flex item-center justify-center social shadow-md hover:-translate-y-1 ease duration-300 h-12 w-12 cursor-pointer  hover:text-white rounded-full"
            >
              <img src="/facebook.svg" alt="hhhh" />
            </a>
            <a
              onClick={() =>
                alert("currently Google & Email verification is on service")
              }
              className="flex item-center justify-center social shadow-md hover:-translate-y-1 ease duration-300 h-12 w-12 cursor-pointer  hover:text-white rounded-full"
            >
              <img src="/twitter.svg" alt="hhhh" />
            </a>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignInForm;
