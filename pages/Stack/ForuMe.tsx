import axios from "axios";
import { getSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";
// import path from "path";
import React, { useEffect, useState } from "react";
import ReactLoading from "react-loading";
// import Contact from "../components/contact";
import Header from "../../components/Header";
import Question from "../../components/Question";
import LoginPopUp from "../PopUps/Stack/LoginPopUp";
import QuestionAsk from "../PopUps/Stack/QuestionAsk";
// import video from "../../video/v1.mp4";

function ForuMe({ user }) {
  const src =
    "https://res.cloudinary.com/dckyh6od6/video/upload/v1669828329/ritesh_purwar/2022-11-30-22-25-05_Trim_Trim_xadilq.mp4";
  // axios.defaults.withCredentials = true;
  // it's a video url

  const router = useRouter();

  const [queask, setqueask] = useState(false);
  const [num, setNum] = useState(0);
  // const [disapr, setdisapr] = useState(false);
  const [appr, setappr] = useState(false);

  const [Questions, setAllQuestions] = useState();

  useEffect(() => {
    axios
      .get("https://qna-site-server.onrender.com/api/question/allQuestions")
      .then((response) => {
        setAllQuestions(response.data.data);
        console.log("Question Fetched");
      })
      .catch((error) => console.log(error));
  }, []);

  // console.log(Questions, "uiuiiui");

  useEffect(() => {
    axios
      .post("https://qna-site-server.onrender.com/api/coins/getUserCoins", {
        user: user?.email,
      })
      .then(
        (response) => {
          console.log("coinsData ");

          if (response.data.data === 404) {
            axios
              .post(
                "https://qna-site-server.onrender.com/api/coins/createUserCoins",
                {
                  user: user?.email,
                }
              )
              .then((response) => console.log(response))
              .catch((error) => console.log(error));
          } else {
            console.log("User has already logged in");
          }
        }

        // setuserCoins(response.data.data)
      )
      .catch((error) => console.log(error));
    // };
  }, []);

  // const saveScore = () => {
  //   axios

  //     .post("http://localhost:3001/api/question/addScore", { score: num })
  //     .then((response) => console.log(response))
  //     .catch((error) => console.log(error));
  // };

  return (
    <div className="relative h-screen">
      <Header user={user} />
      {/* <div className="m-5 p-7 bg-blue-600 flex justify-center items-center ">
        <input
          className="p-5"
          type="string"
          onChange={(e) => {
            setNum(e.target.value);
          }}
        />
        <button className="bg-red-600 m-5 p-2 rounded-lg" onClick={saveScore}>
          Save Quiz Score
        </button>
      </div> */}

      <main className="md:flex  lg:px-10 xl:px-32 2xl:px-28 md:px-14">
        <section className="text-gray-500 middle mt-16 gap-8 px-4 text-sm sm:px-16 md:px-8 md:w-[70%] xl:w-[79%]">
          {!Questions && (
            <div className="mt-24 ml-24">
              <ReactLoading
                type="spinningBubbles"
                color="#0000FF"
                height={165}
                width={150}
              />
              <h1 className=" text-lg italic font-semibold">
                loading data from server......
              </h1>
            </div>
          )}

          {Questions &&
            Questions.map((questions, index) => (
              <Question user={user} questions={questions} key={index} />
            ))}
        </section>
        <section className="right hidden lg:block mt-16 lg:w-[36%] lg:px-8 xl:w-[26%]">
          <div>
            <ul className="bg-blue-600 text-gray-100 flex justify-center items-center lg:w-48 px-4 py-2 rounded-lg mb-12">
              <li className="mr-2 font-semibold">+</li>
              {user && (
                <li onClick={() => setqueask(true)} className="cursor-pointer">
                  Start a New Topic
                </li>
              )}
              {!user && (
                <li onClick={() => setappr(true)} className="cursor-pointer">
                  Start a New Topic
                </li>
              )}

              <QuestionAsk
                user={user}
                trigger={queask}
                setTrigger={setqueask}
              ></QuestionAsk>

              <LoginPopUp trigger={appr} setTrigger={setappr} />
            </ul>
          </div>
          <div className="shadow-lg w-full text-gray-400 shadow-gray-600 rounded-xl mt-5">
            <video
              muted
              controls
              width="950px"
              height="800px"
              className="rounded-xl"
            >
              <source src={src} type="video/mp4" />
              Sorry, your browser doesn't support embedded videos.
            </video>
          </div>
          <div className="shadow-lg w-full text-gray-400 shadow-gray-600 rounded-xl mt-10 px-4 pt-4 pb-3">
            <p className="font-semibold text-gray-700">Top Users</p>
            <div className="">
              <article className="flex text-xs justify-between items-center mt-3">
                <ul className="flex justify-between items-center">
                  <li className="w-[24px] mr-2">
                    <Image
                      className="rounded-full"
                      src="/p3.png"
                      width={50}
                      height={50}
                    ></Image>
                  </li>
                  <li className="text-xs text-blue-700">rishy</li>
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
                      src="/p1.jpg"
                      width={50}
                      height={50}
                    ></Image>
                  </li>
                  <li className="text-xs text-blue-700">krishna</li>
                </ul>
                <ul className="flex  justify-between items-center">
                  <li className="mr-1 text-gray-400 font-semibold">15k</li>
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
                      src="/p5.jpg"
                      width={50}
                      height={50}
                    ></Image>
                  </li>
                  <li className="text-xs text-blue-700">anmol</li>
                </ul>
                <ul className="flex  justify-between items-center">
                  <li className="mr-1 text-gray-400 font-semibold">12.8k</li>
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
                      src="/p4.png"
                      width={50}
                      height={50}
                    ></Image>
                  </li>
                  <li className="text-xs text-blue-700">sahil</li>
                </ul>
                <ul className="flex  justify-between items-center">
                  <li className="mr-1 text-gray-400 font-semibold">10.5k</li>
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
                      src="/prorile2.jpg"
                      width={50}
                      height={50}
                    ></Image>
                  </li>
                  {console.log("dfkkkkkk")}
                  <li className="text-xs text-blue-700">Rajan N</li>
                </ul>
                <ul className="flex  justify-between items-center">
                  <li className="mr-1 text-gray-400 font-semibold">9.5k</li>
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
              <article className="flex text-xs justify-between items-center mt-3 ">
                <ul className="flex justify-between items-center">
                  <li className="w-[24px] mr-2">
                    <Image
                      className="rounded-full"
                      src="/p6.jpg"
                      width={50}
                      height={50}
                    ></Image>
                  </li>
                  <li className="text-xs text-blue-700">abhishek</li>
                </ul>
                <ul className="flex  justify-between items-center">
                  <li className="mr-1 text-gray-400 font-semibold">6.9k</li>
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
            {user && (
              <div className="you">
                <article className="flex text-xs justify-between items-center my-6 py-4 border-t-[1px] border-gray-300">
                  <ul className="flex justify-between items-center">
                    <li className="w-[30px] mr-2">
                      <Image
                        className="rounded-full"
                        src={user?.image}
                        width={50}
                        height={50}
                      ></Image>
                    </li>
                    <li className="text-sm text-blue-700 mr-2">{user?.name}</li>
                    <li className="text-sm text-gray-400">(17)</li>
                  </ul>
                  <ul className="flex  justify-between items-center">
                    <li className="mr-1">0</li>
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
            )}
          </div>
        </section>
      </main>

      {/* <Contact user={user} /> */}
    </div>
  );
}

export default ForuMe;

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      props: {
        user: null,
      },
    };
  } else {
    return {
      props: {
        user: session?.user,
      },
    };
  }
}
