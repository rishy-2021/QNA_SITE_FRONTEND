import React, { useEffect, useState } from "react";
import Image from "next/image";
import { getSession } from "next-auth/react";
import axios from "axios";
function ScoreCard({ user }) {
  const [qnum, setQnum] = useState(0);
  const [anum, setAnum] = useState(0);
  const [qsnum, setQsnum] = useState(0);
  const [score, setScore] = useState([]);

  useEffect(function () {
    axios

      .post("http://localhost:3001/api/question/getQuesNum", {
        email: user,
      })
      .then((response) => setQnum(response.data.data))
      .catch((error) => console.log(error));

    axios

      .get("http://localhost:3001/api/question/getScore")
      .then((response) => setScore(response.data.data))
      .catch((error) => console.log(error));

    axios
      .post("http://localhost:3001/api/answer/getAnsNum", {
        email: user,
      })
      .then((response) => {
        // const [anum, setAnum] = useState(0);
        let inum = 0;

        response.data.data.map((ans, index) => {
          inum = inum + ans.coins;
        });
        setAnum(inum);
      })
      .catch((error) => console.log(error));

    axios
      .post("http://localhost:3001/api/question/getQuesScoreNum", {
        email: user,
      })
      .then((response) => {
        // const [anum, setAnum] = useState(0);
        let inum = 0;

        response.data.data.map((ques, index) => {
          inum = inum + ques.coins;
        });
        setQsnum(inum);
      })
      .catch((error) => console.log(error));
  }, []);

  let progresiveScore = ((anum + qsnum) / 80000) * 100;
  let pScore = progresiveScore.toFixed();
  console.log(pScore);

  return (
    <main className=" px-4 py-4 w-screen">
      <div className="px-2 lg:px-8 lg:py-8 md:px-6 md:py-6 py-2 bg-[#FFFFFF] shadow-lg rounded-2xl lg:flex justify-between">
        <section className="right lg:w-[76%] ">
          <div className="text-sm grid grid-cols-4 grid-rows-2 mt-16 mr-12">
            <div className="  w-full md:row-span-2  ml-8 relative">
              <Image
                className="rounded-xl outline-none"
                src="/profile3.jpg"
                width={100}
                height={100}
              ></Image>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 fill-yellow-700 absolute bottom-14 left-20"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="row-start-1 col-start-2 flex flex-col items-between justify-evenly col-span-3 md:col-start-2 ">
              <div className="mb-1 ">
                <p className="text-3xl font-semibold ">John Willis</p>
              </div>
              <div className="mb-2 mx-4">
                <ul className="">
                  <li className="text-sm text-right text-gray-400  mb-2">
                    {anum + qsnum}/80,000 Scores
                  </li>
                  <li className="h-[7px] bg-gray-200 rounded-lg">
                    <div
                      className={`relative drop-shadow-lg w-${pScore} h-[100%]  bg-gradient-to-r from-pink-400 to-orange-400 rounded-lg`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 fill-yellow-700 absolute left-[300px] -top-3"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 fill-gray-500 absolute left-[500px] -top-3"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 fill-yellow-400 absolute left-[650px] -top-3"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex items-center justify-evenly px-0 text-xs col-start-1 row-start-2 col-span-4 md:col-span-3 md:row-start-2 md:col-start-2">
              <ul className="flex justify-center items-center">
                <li className="mr-2 shadow-md rounded-lg px-2 py-2 mb-2 md:px-4 md:py-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </li>
                <li className="flex flex-col text-gray-400 md:text-sm">
                  <span className="text-xl text-gray-600 font-semibold md:text-2xl">
                    270
                  </span>
                  Competitive Quiz
                  {user.coins}
                </li>
              </ul>
              <ul className="flex justify-center items-center">
                <li className="mr-2 shadow-md px-2 py-2 mb-2 rounded-lg md:px-4 md:py-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </li>
                <li className="flex flex-col text-gray-400 md:text-sm">
                  <span className="text-xl text-gray-600 font-semibold md:text-2xl">
                    {qnum}
                  </span>
                  Questions
                </li>
              </ul>
              <ul className="flex justify-center items-center">
                <li className="mr-2 shadow-md px-2 py-2 mb-2 rounded-lg md:px-4 md:py-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </li>
                <li className="flex flex-col text-gray-400 md:text-sm">
                  <span className="text-xl text-gray-600 font-semibold md:text-2xl">
                    218
                  </span>
                  Job Posts
                </li>
              </ul>
            </div>
          </div>

          <div className=" flex flex-col gap-6 justify-center items-center mt-20">
            <h1 className="text-6xl text-gray-800 font-bold -ml-80  mb-10">
              Transaction
            </h1>
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-blue-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              <div className="relative flex flex-col gap-3 bg-white px-16 py-8  rounded-lg ">
                <h1 className="text-3xl font-semibold  mb-4 mt-10 ">January</h1>
                <div className="border border-gray-800 p-4 rounded-lg mb-10">
                  <h1 className="text-lg flex ml-6 mt-4 ">
                    07/09/2022 <span className="ml-2"> (Saturday)</span>
                  </h1>
                  <div className="ml-8 mb-12">
                    <div className="grid grid-cols-3 gap-32 text-xl  mt-8 items-center">
                      <img
                        src="./job.svg"
                        className="h-10 w-10 -mt-4 rounded-full"
                      />
                      <h2 className="font-semibold">Job</h2>
                      <p className=" flex flex-col mr-2">
                        <span className="text-sm text-center">Points:</span>{" "}
                        +1000
                      </p>
                    </div>
                    <h3 className="text-base font-semibold mt-4  ">
                      <span className="font-[400] ">Time:</span> 21:00
                    </h3>
                  </div>
                  <div className="ml-8 mb-12">
                    <div className="grid grid-cols-3 gap-32 text-xl  mt-8 items-center">
                      <img
                        src="./message.svg"
                        className="h-10 w-10 -mt-4 rounded-full"
                      />
                      <h2 className="font-semibold">Message</h2>
                      <p className=" flex flex-col mr-2">
                        <span className="text-sm text-center">Points:</span>{" "}
                        +1000
                      </p>
                    </div>
                    <h3 className="text-base font-semibold mt-4  ">
                      <span className="font-[400] ">Time:</span> 21:00
                    </h3>
                  </div>
                  <div className="ml-8 mb-12">
                    <div className="grid grid-cols-3 gap-32 text-xl  mt-8 items-center">
                      <img
                        src="./quiz.svg"
                        className="h-10 w-10 -mt-4 rounded-full"
                      />
                      <h2 className="font-semibold">Quiz</h2>
                      <p className=" flex flex-col mr-2">
                        <span className="text-sm text-center">Points:</span>{" "}
                        +1000
                      </p>
                    </div>
                    <h3 className="text-base font-semibold mt-4  ">
                      <span className="font-[400] ">Time:</span> 21:00
                    </h3>
                  </div>
                  <div className="ml-8 mb-12">
                    <div className="grid grid-cols-3 gap-32 text-xl  mt-8 items-center">
                      <img
                        src="./question.svg"
                        className="h-10 w-10 -mt-4 rounded-full"
                      />
                      <h2 className="font-semibold">Question</h2>
                      <p className=" flex flex-col mr-2">
                        <span className="text-sm text-center">Points:</span>{" "}
                        +1000
                      </p>
                    </div>
                    <h3 className="text-base font-semibold mt-4  ">
                      <span className="font-[400] ">Time:</span> 21:00
                    </h3>
                  </div>
                  <div className="ml-8 mb-12">
                    <div className="grid grid-cols-3 gap-32 text-xl  mt-8 items-center">
                      <img
                        src="./promocode.svg"
                        className="h-10 w-10 -mt-4 rounded-full"
                      />
                      <h2 className="font-semibold">Promocode</h2>
                      <p className=" flex flex-col mr-2">
                        <span className="text-sm text-center">Points:</span>{" "}
                        +1000
                      </p>
                    </div>
                    <h3 className="text-base font-semibold mt-4  ">
                      <span className="font-[400] ">Time:</span> 21:00
                    </h3>
                  </div>
                  <div className="ml-8 mb-12">
                    <div className="grid grid-cols-3 gap-32 text-xl  mt-8 items-center">
                      <img
                        src="./ads.svg"
                        className="h-10 w-10 -mt-4 rounded-full"
                      />
                      <h2 className="font-semibold">Ads</h2>
                      <p className=" flex flex-col mr-2">
                        <span className="text-sm text-center">Points:</span>{" "}
                        +1000
                      </p>
                    </div>
                    <h3 className="text-base font-semibold mt-4  ">
                      <span className="font-[400] ">Time:</span> 21:00
                    </h3>
                  </div>
                </div>
                <div className="border border-gray-800 p-4 rounded-lg mb-10">
                  <h1 className="text-lg flex ml-6 mt-4 ">
                    07/09/2022 <span className="ml-2"> (Saturday)</span>
                  </h1>
                  <div className="ml-8 mb-12">
                    <div className="flex gap-32 text-xl  mt-8 items-center">
                      <img
                        src="./facebook.svg"
                        className="h-10 w-10 -mt-4 rounded-full"
                      />
                      <h2 className="font-semibold">Quiz</h2>
                      <p className=" flex flex-col mr-2">
                        <span className="text-sm text-center">Points:</span>
                        +1000
                      </p>
                    </div>
                    <h3 className="text-base font-semibold mt-4  ">
                      <span className="font-[400] ">Time:</span> 21:00
                    </h3>
                  </div>
                  <div className="ml-8 mb-12">
                    <div className="flex gap-32 text-xl  mt-8 items-center">
                      <img
                        src="./facebook.svg"
                        className="h-10 w-10 -mt-4 rounded-full"
                      />
                      <h2 className="font-semibold">Quiz</h2>
                      <p className=" flex flex-col mr-2">
                        <span className="text-sm text-center">Points:</span>{" "}
                        +1000
                      </p>
                    </div>
                    <h3 className="text-base font-semibold mt-4  ">
                      <span className="font-[400] ">Time:</span> 21:00
                    </h3>
                  </div>
                  <div className="ml-8 mb-12">
                    <div className="flex gap-32 text-xl  mt-8 items-center">
                      <img
                        src="./facebook.svg"
                        className="h-10 w-10 -mt-4 rounded-full"
                      />
                      <h2 className="font-semibold">Quiz</h2>
                      <p className=" flex flex-col mr-2">
                        <span className="text-sm text-center">Points:</span>{" "}
                        +1000
                      </p>
                    </div>
                    <h3 className="text-base font-semibold mt-4  ">
                      <span className="font-[400] ">Time:</span> 21:00
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="w-[24%] mt-24">
          <div className="shadow-lg px-4 w-full text-gray-400 rounded-xl pt-4 shadow-gray-500">
            <p className="font-semibold text-gray-700">Top Users</p>
            <div className="">
              <article className="flex text-xs justify-between items-center mt-3">
                <ul className="flex justify-between items-center">
                  <li className="w-[24px] mr-2">
                    <Image
                      className="rounded-full"
                      src="/profile1.jpg"
                      width={50}
                      height={50}
                    ></Image>
                  </li>
                  <li className="text-xs text-blue-700">Rajan N</li>
                </ul>
                <ul className="flex  justify-between items-center">
                  <li className="mr-1 text-gray-400 font-semibold">15.5k</li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3 w-3 text-blue-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </li>
                </ul>
              </article>
              <article className="flex text-xs justify-between items-center mt-3">
                <ul className="flex justify-between items-center">
                  <li className="w-[24px] mr-2">
                    <Image
                      className="rounded-full"
                      src="/profile1.jpg"
                      width={50}
                      height={50}
                    ></Image>
                  </li>
                  <li className="text-xs text-blue-700">Rajan N</li>
                </ul>
                <ul className="flex  justify-between items-center">
                  <li className="mr-1 text-gray-400 font-semibold">15.5k</li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3 w-3 text-blue-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </li>
                </ul>
              </article>
              <article className="flex text-xs justify-between items-center mt-3">
                <ul className="flex justify-between items-center">
                  <li className="w-[24px] mr-2">
                    <Image
                      className="rounded-full"
                      src="/profile1.jpg"
                      width={50}
                      height={50}
                    ></Image>
                  </li>
                  <li className="text-xs text-blue-700">Rajan N</li>
                </ul>
                <ul className="flex  justify-between items-center">
                  <li className="mr-1 text-gray-400 font-semibold">15.5k</li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3 w-3 text-blue-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </li>
                </ul>
              </article>
              <article className="flex text-xs justify-between items-center mt-3">
                <ul className="flex justify-between items-center">
                  <li className="w-[24px] mr-2">
                    <Image
                      className="rounded-full"
                      src="/profile1.jpg"
                      width={50}
                      height={50}
                    ></Image>
                  </li>
                  <li className="text-xs text-blue-700">Rajan N</li>
                </ul>
                <ul className="flex  justify-between items-center">
                  <li className="mr-1 text-gray-400 font-semibold">15.5k</li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3 w-3 text-blue-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </li>
                </ul>
              </article>
              <article className="flex text-xs justify-between items-center mt-3">
                <ul className="flex justify-between items-center">
                  <li className="w-[24px] mr-2">
                    <Image
                      className="rounded-full"
                      src="/profile1.jpg"
                      width={50}
                      height={50}
                    ></Image>
                  </li>
                  <li className="text-xs text-blue-700">Rajan N</li>
                </ul>
                <ul className="flex  justify-between items-center">
                  <li className="mr-1 text-gray-400 font-semibold">15.5k</li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3 w-3 text-blue-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </li>
                </ul>
              </article>
              <article className="flex text-xs justify-between items-center mt-3">
                <ul className="flex justify-between items-center">
                  <li className="w-[24px] mr-2">
                    <Image
                      className="rounded-full"
                      src="/profile1.jpg"
                      width={50}
                      height={50}
                    ></Image>
                  </li>
                  <li className="text-xs text-blue-700">Rajan N</li>
                </ul>
                <ul className="flex  justify-between items-center">
                  <li className="mr-1 text-gray-400 font-semibold">15.5k</li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3 w-3 text-blue-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </li>
                </ul>
              </article>
            </div>
            <div className="you">
              <article className="flex text-xs justify-between items-center my-6 p-6 border-t-[1px] border-gray-300  mb-12">
                <ul className="flex justify-between items-center">
                  <li className="w-[30px] mr-2">
                    <Image
                      className="rounded-full"
                      src={user.image}
                      width={25}
                      height={25}
                    />
                  </li>
                  <li className="text-base text-blue-700 mr-2">You</li>
                  <li className="text-sm text-gray-400">(330)</li>
                </ul>
                <ul className="flex  justify-between items-center">
                  <li className="mr-1 text-base">{anum + qsnum}</li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3 w-3 text-blue-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </li>
                </ul>
              </article>
            </div>
          </div>
          <article className="px-4 py-4 shadow-lg rounded-2xl shadow-gray-500">
            <div className="flex flex-col  text-xs">
              <ul className="flex items-center mr-8 mb-4">
                <li className="text-lg font-bold mr-4 text-gray-700">
                  PAID COINS
                </li>
              </ul>
              <ul className="flex flex-col relative w-full">
                <li className="text-gray-400 text-base absolute right-4 -top-8">
                  8/20,000
                </li>
                <li className="ml-3 h-[8px] w-[100%] bg-gray-200 rounded-lg">
                  <div className="drop-shadow-lg w-[70%] h-[8px] bg-gradient-to-r from-pink-400 to-orange-400 rounded-lg"></div>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-center gap-8 justify-evenly my-8">
              <ul className="flex flex-col items-center justify-center">
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-20 w-20"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </li>
                <li className="text-gray-700 text-xs font-semibold shadow-inner">
                  PromoCode
                </li>
              </ul>
              <ul className="flex flex-col items-center justify-center">
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-20 w-20"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </li>
                <li className="text-gray-700 text-xs font-semibold shadow-inner">
                  Advertisement
                </li>
              </ul>
              <ul className="flex flex-col items-center justify-center">
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-20 w-20"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </li>
                <li className="text-gray-700 text-xs font-semibold shadow-inner">
                  Payment
                </li>
              </ul>
            </div>
          </article>
        </div>
      </div>
    </main>
  );
}

export default ScoreCard;

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/Stack/login",
        permanent: false,
      },
    };
  }

  return {
    props: {
      user: session?.user,
    },
  };
}
