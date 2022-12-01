import React, { useEffect, useState } from "react";

import { getSession, session } from "next-auth/react";
import Header from "./Header";
import {
  IoShareSocialOutline,
  IoEllipsisVerticalOutline,
} from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import { BsHeart } from "react-icons/bs";
import DashNewQue from "./DashNewQue";
import axios from "axios";
import Sharexpop from "../pages/PopUps/Stack/sharexpop";
import ReportPopUp from "../pages/PopUps/Stack/Report";

function DashNewAnswer({ user }) {
  const [answers, setUserAnswers] = useState();
  const [data, setData] = useState();
  const [answer, setAnswer] = useState({ answer: "" });
  const [AnswerInput, setAnswerInput] = useState(false);
  const [sharepop, setsharepop] = useState(false);
  const [disapr, setdisapr] = useState(false);
  const [appr, setappr] = useState(false);
  function handleInput(e) {
    const { name, value } = e.target;
    setAnswer({ ...answer, [name]: value });
  }

  // console.log(answer);

  useEffect(
    function () {
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
    [answers]
  );

  function getDifferenceInDays(date1, date2) {
    const diffInMs = Math.abs(date2 - date1);
    return diffInMs / (1000 * 60 * 60 * 24);
  }

  const likePost = async (answer, user) => {
    // if (answer.user.email !== user.email) {
    //   setScore(score + 1);
    //   console.log(score);
    // }

    await axios
      .put(
        "https://qna-site-server.onrender.com/api/answer/like",
        {
          postId: answer._id,
          useremail: user.email,
          coin: answer.coins + 5,
        }
        // }
      )

      .catch((err) => {
        console.log(err);
      });
  };
  const unlikePost = (answer, user) => {
    axios
      .put(
        "https://qna-site-server.onrender.com/api/answer/dislike",
        {
          postId: answer._id,
          useremail: user.email,
          coin: answer.coins - 5,
        }
        // }
      )

      .catch((err) => {
        console.log(err);
      });
  };
  const deleteAns = (aid) => {
    axios
      .delete(`https://qna-site-server.onrender.com/api/answer/delete/${aid}`)
      .catch((err) => {
        console.log(err);
      });
  };
  const updateAns = (aid) => {
    axios
      .patch(`https://qna-site-server.onrender.com/api/answer/update/${aid}`, {
        answer,
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      {answers !== undefined &&
        answers.map((answer) => (
          <article
            key={answer._id}
            className="mb-8 shadow-md rounded-md px-4 md:px-4 py-3 leading-relaxed"
          >
            <div className="question  flex gap-2">
              <div className="left mt-2 w-full mr-3 md:mr-6">
                <DashNewQue qid={answer.question_id} user={user} />

                <div className="answer w-full  ml-10 md:ml-14 lg:ml-8 flex flex-col gap-6 mt-6 bg-gray-100 rounded-md ">
                  <div className="up mt-2 mr-3 md:mr-6 flex justify-between items-center">
                    <ul className="flex items-center">
                      <li className="w-[16px] h-[16px] sm:w-[20px] sm:h-[20px] lg:w-[24px] lg:h-[24px] ml-2">
                        <img
                          className="rounded-full"
                          src={answer.user.image}
                          width={70}
                          height={70}
                        ></img>
                      </li>
                      <li className="text-blue-500 text-xs lg:text-sm font-semibold">
                        {/* {answer.user.name} */}
                      </li>
                    </ul>
                    <ul className="flex items-center text-xs">
                      <li className="mr-1">
                        {getDifferenceInDays(
                          new Date(),
                          new Date(answer.created_at)
                        ).toFixed()}{" "}
                        day ago
                      </li>
                      {/* <li>day ago</li> */}
                    </ul>
                  </div>
                  <div className="down text-md px-2 flex items-start gap-6 w-full">
                    <div className="left">
                      <ul>
                        {answer.likes.includes(user.email) ? (
                          <li className=" cursor-pointer">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
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
                        ) : (
                          <li
                            onClick={() => {
                              likePost(answer, user);
                            }}
                            className="text-blue-500 cursor-pointer"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
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
                        )}

                        <li className="font-semibold ml-1.5 text-base">
                          {answer.likes.length - answer.dislikes.length}
                        </li>
                        {!answer.dislikes.includes(user.email) ? (
                          <li
                            onClick={() => {
                              unlikePost(answer, user);
                            }}
                            className="cursor-pointer text-blue-500"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </li>
                        ) : (
                          <li className="cursor-pointer ">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </li>
                        )}
                      </ul>
                    </div>
                    <div className="right w-full">
                      <div>
                        <div className={`${AnswerInput ? "hidden" : ""}`}>
                          <p>{answer.answer}</p>
                        </div>
                        <div>
                          <img src={answer?.image} width={50} height={50} />
                        </div>
                        <div
                          className={`flex flex-col gap-y-4 ${
                            AnswerInput ? "" : "hidden"
                          }`}
                        >
                          <input
                            type="text"
                            name="answer"
                            className="w-full h-12 border border-gray-500 focus:outline-none rounded-lg bg-transparent"
                            defaultValue={answer.answer}
                            onChange={(e) => {
                              handleInput(e);
                            }}
                          />
                          <button
                            className="w-fit h-fit px-2 py-1 bg-purple-400 text-white rounded-lg"
                            onClick={() => {
                              setAnswerInput(false);
                              updateAns(answer._id);
                            }}
                          >
                            Done
                          </button>
                        </div>
                      </div>
                      <div className="my-3 flex items-center justify-between">
                        <ul className="flex gap-4 text-xs">
                          <li
                            className="cursor-pointer"
                            onClick={() => setsharepop(true)}
                          >
                            Share
                          </li>
                          <li
                            className="cursor-pointer"
                            onClick={() => setappr(true)}
                          >
                            Report
                          </li>

                          <ReportPopUp
                            user={user}
                            type={"Answer"}
                            trigger={appr}
                            answer={answer}
                            setTrigger={setappr}
                          />
                          <li
                            className="cursor-pointer"
                            onClick={() => {
                              deleteAns(answer._id);
                            }}
                          >
                            delete
                          </li>
                          <li
                            className="cursor-pointer"
                            onClick={() => setAnswerInput(true)}
                          >
                            Edit
                          </li>
                        </ul>
                        <Sharexpop
                          trigger={sharepop}
                          setTrigger={setsharepop}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
    </>
  );
}

export default DashNewAnswer;
