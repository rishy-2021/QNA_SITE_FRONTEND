import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { signOut } from "next-auth/react";

function Header(props) {
  const user = props?.user;
  const router = useRouter();
  const [dashvisi, setdashvisi] = useState(false);
  function logout() {
    signOut();
  }
  return (
    <>
      <nav className="text-gray-400 z-50 sticky flex justify-between items-center shadow-md px-8 py-4 top-0 left-0 right-0  bg-white sm:px-16 md:px-24 xl:px-40 2xl:px-48">
        <ul
          onClick={() => {
            router.push("/Stack/ForuMe");
          }}
          className=" mr-4 md:flex justify-between items-center cursor-pointer"
        >
          <li className="mr-2 text-blue-600">
            <Image src="/wave-sound.png" alt="" width="80" height="60"></Image>
          </li>
          <li className="font-bold text-lg text-gray-700">
            foru
            <span className="text-blue-600">Me</span>
          </li>
        </ul>
        <ul className="flex mr-10 w-[56%] items-center px-4 bg-gray-100 rounded-md">
          <li className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 cursor-pointer"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              />
            </svg>
          </li>
          <li className="">
            <input
              className="outline-none bg-transparent px-2 py-2 border-none "
              type="text"
              name=""
              id=""
              placeholder="Search for Topics"
            />
            <span className=" inline-block text-white align-center justify-center ml-2pxh-10 w-10">
              &times;
            </span>
          </li>
        </ul>
        <ul className=" md:flex justify-between items-center relative">
          <li className="mr-10 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
            </svg>
          </li>
          <li className="w-[50px] cursor-pointer">
            {user && (
              <img
                className="rounded-full"
                // loader={myLoader}
                src={user?.image}
                alt={user?.name}
                width={70}
                height={70}
                onClick={() => setdashvisi(!dashvisi)}
              />
            )}
          </li>
          {!user && (
            <li>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                onClick={() => router.push("/Stack/login")}
              >
                Login
              </button>
            </li>
          )}
        </ul>{" "}
        <div
          className={` bg-white z-50 top-16 rounded-lg h-fit  w-36 shadow-2xl drop-shadow-lg absolute  right-6 ${
            dashvisi ? "" : "hidden"
          }`}
        >
          <div
            className=" flex cursor-pointer text-base w-full p-2 group hover:bg-slate-400 hover:bg-opacity-25  hover:text-black hover:rounded-md text-gray-500 font-medium"
            onClick={() => router.push("/Stack/Solar")}
          >
            <h1 className="ml-2 mt-1 ">Dashboard</h1>
          </div>
          <div
            className=" flex cursor-pointer text-base w-full p-2 group hover:bg-slate-400 hover:bg-opacity-25  hover:text-black hover:rounded-md text-gray-500 font-medium"
            onClick={() => router.push("/Stack/Admin_Question")}
          >
            <h1 className="ml-2 mt-1 ">Admin Question</h1>
          </div>
          {/* <div
            className=" flex cursor-pointer text-base w-full p-2 group hover:bg-slate-400 hover:bg-opacity-25  hover:text-black hover:rounded-md text-gray-500 font-medium"
            onClick={() => router.push("/Quiz/QuizHome")}
          >
            <h1 className="ml-2 mt-1 ">Quiz</h1>
          </div> */}
          <div
            className=" flex cursor-pointer text-base w-full p-2 group hover:bg-slate-400 hover:bg-opacity-25  hover:text-black hover:rounded-md text-gray-500 font-medium"
            onClick={() => router.push("/Stack/analytical")}
          >
            <h1 className="ml-2 mt-1 ">Analysis</h1>
          </div>
          <div
            className=" flex cursor-pointer text-base w-full p-2 group hover:bg-slate-400 hover:bg-opacity-25  hover:text-black hover:rounded-md text-gray-500 font-medium"
            onClick={() => router.push("/Stack/Report")}
          >
            <h1 className="ml-2 mt-1 ">Report</h1>
          </div>
          <div className=" flex cursor-pointer text-base w-full p-2 group hover:bg-slate-400 hover:bg-opacity-25  hover:text-black hover:rounded-md text-gray-500 font-medium">
            <h1 className="ml-2 mt-1 " onClick={logout}>
              Logout
            </h1>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
