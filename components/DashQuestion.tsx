import React, { useEffect, useState } from "react";

import Link from "next/link";
import axios from "axios";

const DashQuestion = ({ question, user }) => {
  const [qanswers, setQuesAnswers] = useState({});
  const [data, setData] = useState();
  const [disableLike, setDisableLike] = useState(false);
  const [disableDislike, setDisableDislike] = useState(false);
  const [totalImpression, setTotalImpression] = useState(
    question?.likes?.length - question?.dislikes?.length
  );

  const [appr, setappr] = useState(false);
  const [like, setLike] = useState(question?.likes);
  const [dislike, setDisLike] = useState(question.dislikes);

  const currentDate = new Date();
  const questionPd = new Date(question.created_at);

  function getDifferenceInDays(date1, date2) {
    const diffInMs = Math.abs(date2 - date1);
    return diffInMs / (1000 * 60 * 60 * 24);
  }

  useEffect(() => {
    axios
      .post("https://qna-site-server.onrender.com/api/answer/allAnswers", {
        qid: question._id,
      })
      .then((response) => setQuesAnswers(response.data.data))
      .catch((error) => console.log(error));
  }, []);
  console.log(qanswers);

  const likePost = (questions, user) => {
    axios
      .put("https://qna-site-server.onrender.com/api/question/like", {
        postId: questions._id,
        useremail: user.email,
        coin: questions.coins + 5,
      })
      .then((response) => {
        setTotalImpression(
          response?.data?.data?.likes.length -
            response?.data?.data?.dislikes.length
        );
        setLike(response?.data?.data?.likes);
        setDisLike(response?.data?.data?.dislikes);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const unlikePost = (questions, user) => {
    axios
      .put(
        "https://qna-site-server.onrender.com/api/question/dislike",
        {
          postId: questions._id,
          useremail: user.email,
          coin: questions.coins - 5,
        }
        // }
      )
      .then((response) => {
        setTotalImpression(
          response?.data?.data?.likes.length -
            response?.data?.data?.dislikes.length
        );
        setLike(response?.data?.data?.likes);
        setDisLike(response?.data?.data?.dislikes);
      })

      .catch((err) => {
        console.log(err);
      });
  };

  function deleteQues(sqid) {
    axios
      .delete(
        `https://qna-site-server.onrender.com/api/question/delete/${sqid}`
      )
      // .then((response) => setData())
      .catch((error) => console.log(error));
  }

  return (
    <>
      {/* {question.user.name === user.name && ( */}
      <article className="flex flex-wrap justify-between bg-white py-3 mb-8 shadow-md">
        <div className="left_part flex items-center">
          <div className="mr-8 mb-2 pl-6">
            <ul className="">
              {like.includes(user.email) ? (
                <li
                  // onClick={() => {
                  //   likePost(question._id, user.name);
                  // }}
                  className=" cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </li>
              ) : (
                <li
                  onClick={() => {
                    likePost(question, user);
                    setDisableLike(true);
                  }}
                  className="text-blue-800 cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </li>
              )}

              <li className="pl-2 text-base">{totalImpression}</li>
              {!dislike.includes(user?.email) ? (
                <li
                  onClick={() => {
                    unlikePost(question, user);
                    setDisableDislike(true);
                  }}
                  className="cursor-pointer text-blue-800"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </li>
              ) : (
                <li className="cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </li>
              )}
            </ul>
          </div>
          <div className="px-2">
            <ul>
              <li className="text-blue-900 flex text-3xl font-semibold mb-4">
                {question.title}
              </li>
            </ul>

            <ul className=" text-[10px] w-[70%] flex justify-between">
              {question.tags[0] &&
                question?.tags.map((tags) => (
                  <li className="bg-gray-100 px-2 py-1 mr-1 mb-2 rounded-md cursor-pointer">
                    {tags}
                  </li>
                ))}
            </ul>
          </div>
        </div>
        <div className="right_part">
          <ul className="flex flex-col items-center px-2 py-1 border-[1px] border-gray-300 rounded-md text-blue-900 mr-6">
            <Link
              href={{
                pathname: "/Stack/QueAnsPage",
                query: {
                  id: question._id,
                  ad: getDifferenceInDays(
                    currentDate,
                    question.created_at
                  ).toFixed(),
                },
              }}
              className=" font-semibold  rounded-lg p-1 cursor-pointer   hover:text-green-400"
            >
              <li className="text-lg cursor-pointer">
                <b> {qanswers !== undefined && qanswers.length} </b>
                answers
              </li>
            </Link>
          </ul>
          <button
            className=" mt-2 flex flex-col items-center px-4 py-1 border-[1px] border-gray-300 rounded-md text-blue-900 mr-6"
            onClick={() => {
              deleteQues(question._id);
            }}
          >
            Delete
          </button>
        </div>
      </article>
      {/* )} */}
    </>
  );
};

export default DashQuestion;
