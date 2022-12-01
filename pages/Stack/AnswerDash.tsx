import axios from "axios";
import React, { useEffect, useState } from "react";

function AnswerDash({ qid, user }) {
  const [answers, setAllAnswers] = useState();
  const [data, setData] = useState([]);
  const currentDate = new Date();
  // const answerPd = new Date(answer.created_at);
  //   console.log(answers, qid);

  function getDifferenceInDays(date1, date2) {
    const diffInMs = Math.abs(date2 - date1);
    return diffInMs / (1000 * 60 * 60 * 24);
  }

  // const askedDate = getDifferenceInDays(currentDate, answerPd);

  useEffect(
    function () {
      axios
        .post("https://qna-site-server.onrender.com/api/answer/allAnswers", {
          qid: qid,
        })
        .then((response) => setAllAnswers(response.data.data))
        .catch((error) => console.log(error));
    },
    [answers]
  );

  const likePost = (id, username) => {
    axios
      .put(
        "https://qna-site-server.onrender.com/api/answer/like",
        {
          postId: id,
          username: username,
        }
        // }
      )
      // .then((res) => res.json())
      .then((result) => {
        console.log(result);
        const newData = data.map((answer) => {
          if (answer._id == result._id) {
            return result;
          } else {
            return answer;
          }
        });
        setData(newData);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const unlikePost = (id, username) => {
    axios
      .put(
        "https://qna-site-server.onrender.com/api/answer/dislike",
        {
          postId: id,
          username: username,
        }
        // }
      )
      // .then((res) => res.json())
      .then((result) => {
        console.log(result);
        const newData = data.map((answer) => {
          if (answer._id == result._id) {
            return result;
          } else {
            return answer;
          }
        });
        setData(newData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {answers != undefined &&
        answers.map((answer) => (
          <div className="answer  ml-10 md:ml-14 lg:ml-16 flex flex-col gap-6 mt-6 bg-gray-100 rounded-md ">
            <div className="up mt-2 mr-3 md:mr-6 flex justify-between items-center">
              <ul className="flex items-center">
                <li className="w-[16px] h-[16px] sm:w-[20px] sm:h-[20px] lg:w-[24px] lg:h-[24px] mr-2">
                  <img
                    className="rounded-full"
                    src={answer.user.image}
                    width={70}
                    height={70}
                  ></img>
                </li>
                <li className="text-blue-500 text-xs lg:text-sm font-semibold">
                  {answer.user.name}
                </li>
              </ul>
              <ul className="flex items-center text-xs">
                <li className="mr-2">
                  {getDifferenceInDays(
                    currentDate,
                    new Date(answer.created_at)
                  ).toFixed()}{" "}
                  days ago
                </li>
                {/* <li>days ago</li> */}
              </ul>
            </div>
            <div className="down text-md px-2 flex items-start gap-6">
              <div className="left">
                <ul>
                  {/* <li>
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
                  <li>56</li>
                  <li>
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
                  </li> */}
                  {answer.likes.includes(user.name) ? (
                    <li
                      // onClick={() => {
                      //   likePost(questions._id, user.name);
                      // }}
                      className=" cursor-pointer"
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
                  ) : (
                    <li
                      onClick={() => {
                        likePost(answer._id, user.name);
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
                    {answer.likes.length}
                  </li>
                  {answer.likes.includes(user.name) ? (
                    <li
                      onClick={() => {
                        unlikePost(answer._id, user.name);
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
                    <li
                      // onClick={() => {
                      //   unlikePost(questions._id, user.name);
                      // }}
                      className="cursor-pointer"
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
                  )}
                </ul>
              </div>
              <div className="right">
                <div>
                  <p>{answer.answer}</p>
                </div>
                <div className="my-3 flex items-center justify-between">
                  <ul className="flex gap-4 text-xs">
                    <li className="cursor-pointer">Reply</li>
                    <li className="cursor-pointer">Share</li>
                    <li className="cursor-pointer">Report</li>
                  </ul>
                  <ul>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                      </svg>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
}

export default AnswerDash;
