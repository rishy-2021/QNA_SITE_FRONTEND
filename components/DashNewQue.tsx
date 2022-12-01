import React, { useEffect, useState } from "react";
// import React from "react";
import { getSession, session } from "next-auth/react";
import Header from "./Header";
import {
  IoShareSocialOutline,
  IoEllipsisVerticalOutline,
} from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import { BsHeart } from "react-icons/bs";
// import DashNewAnswer from "./DashNewAnswer";
import axios from "axios";

function DashNewQue({ qid, user }) {
  const [sq, setSq] = useState();
  const [data, setData] = useState([]);
  useEffect(
    function () {
      axios
        .post("https://qna-site-server.onrender.com/api/question/sq", {
          qid: qid,
        })

        .then((response) => setSq(response.data.data))
        .catch((error) => console.log(error));
    },
    [data]
  );

  function getDifferenceInDays(date1, date2) {
    const diffInMs = Math.abs(date2 - date1);
    return diffInMs / (1000 * 60 * 60 * 24);
  }

  const likePost = (id, username) => {
    axios
      .put(
        "https://qna-site-server.onrender.com/api/question/like",
        {
          postId: id,
          username: username,
        }
        // }
      )
      // .then((res) => res.json())
      .then((result) => {
        console.log(result);
        const newData = data.map((question) => {
          if (question._id == result._id) {
            return result;
          } else {
            return question;
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
        "https://qna-site-server.onrender.com/api/question/dislike",
        {
          postId: id,
          username: username,
        }
        // }
      )
      // .then((res) => res.json())
      .then((result) => {
        console.log(result);
        const newData = data.map((question) => {
          if (question._id == result._id) {
            return result;
          } else {
            return question;
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
      {/* <article
        // key={answer._id}
        className="mb-8 shadow-md rounded-md px-4 md:px-4 py-3 leading-relaxed"
      > */}
      {sq !== undefined && (
        <div className="question flex gap-2 w-full">
          <div className="left w mt-2 mr-3 md:mr-6 ">
            {/* <div> */}
            <ul className="flex flex-col items-center">
              {/* <li className="text-blue-500 cursor-pointer">
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
              <li className="font-semibold my-2 text-base">56</li>
              <li className="cursor-pointer">
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
              {sq.likes.includes(user.name) ? (
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
                    likePost(sq._id, user.name);
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

              <li className="font-semibold my-2 text-base">
                {sq.likes.length}
              </li>
              {sq.likes.includes(user.name) ? (
                <li
                  onClick={() => {
                    unlikePost(sq._id, user.name);
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
          <div className="right w-full text-sm px-2 ">
            <div className="">
              <div className="flex flex-row relative ">
                {/* <h2 className="text-2xl mb-4 text-gray-800">{question.title}</h2> */}
                <h2 className="text-lg mb-4 text-gray-600">{sq.title}</h2>
                <BsHeart
                  className="absolute right-0 mt-3 mr-8 hover:fill-red-400"
                  size={18}
                />
              </div>
              <p className="leading-7 pb-3">{sq.body}</p>
              <div className="flex gap-2">
                {sq.tags.map((tags) => (
                  <p className=" rounded-2xl w-fit px-2 bg-gray-400 bg-opacity-20 text-blue-500 border-gray-400 border-[1px] drop-shadow-lg">
                    {tags}
                  </p>
                ))}
              </div>
              <div>
                <img src={sq?.image} width={50} height={50} />
              </div>
              {/* <p className="leading-7 pb-3">question.body</p> */}
            </div>
            <div className="flex justify-between items-center mt-4 border-t-[1px] border-gray-400  py-4">
              <ul className="flex justify-between items-center text-xs ">
                <li className="w-[26px] mr-2 cursor-pointer">
                  <img
                    className="rounded-full"
                    src={sq.user.image}
                    width={70}
                    height={70}
                  ></img>
                </li>
                <li className="text-[10px] mr-6">
                  Posted by{" "}
                  <span className="text-xs text-blue-500 font-semibold">
                    {sq.user.name}
                  </span>
                </li>

                <li>
                  {getDifferenceInDays(
                    new Date(),
                    new Date(sq.created_at)
                  ).toFixed()}
                  day ago
                </li>
              </ul>

              <ul className="flex justify-between items-center text-xs ">
                <li className="text-base"></li>
              </ul>

              <ul className="flex justify-between items-center">
                <ul className="flex justify-between items-center text-xs mr-8 ml-4">
                  <li className="text-base">
                    <IoEllipsisVerticalOutline />
                  </li>
                </ul>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default DashNewQue;
