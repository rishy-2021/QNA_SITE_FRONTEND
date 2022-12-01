import React, { useEffect, useState } from "react";
import Image from "next/image";
// import { url } from "inspector";
import { useRouter, withRouter } from "next/router";
import axios from "axios";
import { getSession } from "next-auth/react";
import QuestionAsk from "../PopUps/Stack/QuestionAsk";
import TitleCoverPopUp from "../PopUps/Stack/Title_Cover";

import DashQuestion from "../../components/DashQuestion";
export default function Solar(props) {
  const router = useRouter();
  // const questions = props.data.data;
  const user = props.user;
  const [titlecover, settitlecover] = useState(false);
  const [ques, setQuestions] = useState([]);

  const [answers, setUserAnswers] = useState({});
  const [qanswers, setQuesAnswers] = useState({});
  const [data, setData] = useState();
  const [disableLike, setDisableLike] = useState(false);
  const [disableDislike, setDisableDislike] = useState(false);
  const [userCoins, setuserCoins] = useState();

  var questions = [...ques].reverse();

  useEffect(
    function () {
      axios

        .post(
          "https://qna-site-server.onrender.com/api/question/allUserQuestions",
          {
            user: user,
          }
        )
        .then((response) => setQuestions(response.data.data))
        .catch((error) => console.log(error));
      axios
        .post(
          "https://qna-site-server.onrender.com/api/answer/allUserAnswers",
          {
            user: user,
          }
        )
        .then((response) => setUserAnswers(response.data.data))
        .catch((error) => console.log(error));
    },
    [DashQuestion]
  );
  useEffect(() => {
    axios
      .post("http://localhost:3001/api/coins/getUserCoins", { user: user })
      .then((response) => {
        console.log("coinsData ", response);
        setuserCoins(response.data.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const [quespop, setquespop] = useState(false);
  return (
    <main className="flex lg:px-2 h-screen bg-gray-100">
      <div className="hidden lg:block lefts bg-[#29348e] text-gray-400 lg:my-4 rounded-lg text-center text-sm lg:w-[16%]">
        <section className="py-14">
          <ul className="px-2 py-2 rounded-lg text-left flex justify-start mb-4 items-center hover:bg-[#628bf8] hover:text-gray-100  cursor-pointer mx-3">
            <li className="mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 lg:h-5 lg:w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
            </li>
            <li className="" onClick={() => router.push("/Stack/ForuMe")}>
              Home
            </li>
          </ul>

          <ul className="px-2 py-2 rounded-lg text-left flex justify-start mb-4 items-center hover:bg-[#628bf8] hover:text-gray-100  cursor-pointer mx-3">
            <li className="mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 lg:h-5 lg:w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z"
                  clipRule="evenodd"
                />
              </svg>
            </li>
            <li className="" onClick={() => router.push("/Stack/NewQueAns")}>
              My Answer
            </li>
          </ul>
          <ul className="px-2 py-2 rounded-lg text-left flex justify-start mb-4 items-center hover:bg-[#628bf8] hover:text-gray-100  cursor-pointer mx-3">
            <li className="mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 lg:h-5 lg:w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z"
                  clipRule="evenodd"
                />
              </svg>
            </li>
            <li
              className="text-white"
              onClick={() => router.push("/Stack/Wishlist")}
            >
              Wishlist
            </li>
          </ul>
        </section>
      </div>
      <div className="right w-full text-gray-100 sm:px-4 md:px-8 sm:py-4 lg:w-full">
        <section className="bg-[url('/city.jpg')] bg-cover bg-center relative shadow-md top sm:rounded-lg bg-[#29348e] px-4 pt-10 pb-4 md:px-6 sm:mb-8 lg:px-10">
          <div className="mt-6">
            <h1 className="text-4xl font-semibold mb-8 sm:text-5xl lg:text-7xl">
              Solar eclipses: <br />
              When is the next one?
            </h1>
          </div>
          <div className="flex items-center mt-4 mb-8 text-xl">
            <ul className="mr-6 bg-blue-400 text-white px-2 py-1 rounded-lg">
              <li className="text-xl font-semibold">
                {questions?.length || 0}
                {/* {getNumQues()} */}
              </li>
              <li className="text-base">Questions</li>
            </ul>
            <ul className="mr-6 bg-blue-400 text-white px-2 py-1 rounded-lg">
              <li className="text-xl font-semibold">{answers?.length || 0}</li>
              <li className="text-base">Answers</li>
            </ul>
            <ul className="mr-6 bg-blue-400 text-white px-2 py-1 rounded-lg">
              <li className="text-xl font-semibold px-3">
                {/* {userCoins && userCoins[j0]?.total} */}0
              </li>
              <li className="text-base px-3"> Scores </li>
            </ul>
          </div>
          <div className="flex flex-wrap my-4 gap-2">
            <ul className="rounded-lg flex mb-1 items-center w-full sm:w-[160px] font-semibold cursor-pointer mr-4">
              <li
                className="px-2 py-2 text-center bg-orange-400 rounded-lg max-w-[180px] min-w-[160px]"
                onClick={() => setquespop(true)}
              >
                Ask a question
              </li>
            </ul>
            <QuestionAsk trigger={quespop} setTrigger={setquespop} />
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
            onClick={() => settitlecover(true)}
          >
            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
          </svg>
          <TitleCoverPopUp trigger={titlecover} setTrigger={settitlecover} />
        </section>

        <section className="bottom my-8 sm:flex justify-between ">
          <div className="left md:w-[70%] text-gray-400 px-2 mr-4">
            {questions.map((question, index) => (
              <DashQuestion user={user} question={question} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {};
  }

  return {
    props: {
      // data: res.data      ,
      user: session.user,
    },
  };
}
