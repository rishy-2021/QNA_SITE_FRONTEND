import axios from "axios";
import React, { useEffect, useState } from "react";
import LoginPopUp from "../pages/PopUps/Stack/LoginPopUp";

function Answernewpage({ ans, user }) {
  const [data, setData] = useState([]);
  const [score, setScore] = useState(0);
  const [totalImpression, setTotalImpression] = useState(
    ans?.likes?.length - ans?.dislikes?.length
  );

  const [like, setLike] = useState(ans?.likes);
  const [dislike, setDisLike] = useState(ans.dislikes);
  const [appear, setappear] = useState(false);

  // console.log("score", score);

  const currentDate = new Date();
  // const answerPd = new Date(answer.created_at);
  // console.log(answers, qid);

  function getDifferenceInDays(date1, date2) {
    const diffInMs = Math.abs(date2 - date1);
    return diffInMs / (1000 * 60 * 60 * 24);
  }

  // const askedDate = getDifferenceInDays(currentDate, answerPd);

  // useEffect(
  //   function () {
  //     axios
  //       .post("http://localhost:3001/api/answer/allAnswers", {
  //         qid: qid,
  //       })
  //       .then((response) => setAllAnswers(response.data.data))
  //       .catch((error) => console.log(error));
  //   },
  //   []
  // );

  const likePost = async (answer, user) => {
    // if (answer.user.email !== user.email) {
    //   setScore(score + 1);
    //   console.log(score);
    // }

    await axios
      .put(
        "http://localhost:3001/api/answer/like",
        {
          postId: answer._id,
          useremail: user?.email,
          coin: answer?.coins + 5,
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
  const unlikePost = (answer, user) => {
    // if (answer.user.email !== user.email) {
    //   setScore(score - 1);
    //   console.log(score);
    // }
    // console.log(score);
    axios
      .put(
        "http://localhost:3001/api/answer/dislike",
        {
          postId: answer._id,
          useremail: user?.email,
          coin: answer?.coins - 5,
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

  return (
    <div className="answer  ml-10 md:ml-14 lg:ml-16 flex flex-col gap-6 mt-6 bg-gray-100 rounded-md ">
      {/* <h1>{answer.likes.length * 5 - answer.dislikes.length * 5}</h1> */}

      <div className="up mt-2 mr-3 md:mr-6 flex justify-between items-center">
        <ul className="flex items-center">
          <LoginPopUp trigger={appear} setTrigger={setappear} />

          <li className="w-[16px] h-[16px] sm:w-[20px] sm:h-[20px] lg:w-[24px] lg:h-[24px] mr-2">
            <img
              className="rounded-full"
              src={ans.user.image}
              width={70}
              height={70}
            ></img>
          </li>
          <li className="text-blue-500 text-xs lg:text-sm font-semibold">
            {ans.user.name}
          </li>
        </ul>
        <ul className="flex items-center text-xs">
          <li className="mr-2">
            {getDifferenceInDays(
              currentDate,
              new Date(ans.created_at)
            ).toFixed()}{" "}
            days ago
          </li>
          {/* <li>days ago</li> */}
        </ul>
      </div>
      <div className="down relative text-md px-2 py-2 flex items-start gap-6">
        <div className="left ">
          <ul>
            {like.includes(user?.email) ? (
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
                  user && likePost(ans, user);
                  !user && setappear(true);
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
              {totalImpression}
            </li>
            {!dislike.includes(user?.email) ? (
              <li
                onClick={() => {
                  {
                    user && unlikePost(ans, user);
                  }
                  {
                    !user && setappear(true);
                  }
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
        <div className="right ">
          <div>
            <p>{ans?.answer}</p>
          </div>
          <div>{/* <img src={ans?.image} width={50} height={50} /> */}</div>
          <div className="my-3 absolute right-4 flex items-center justify-between">
            <ul className="flex   gap-4 text-xs">
              <li className="cursor-pointer">Share</li>
              <li className="cursor-pointer">Report</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Answernewpage;
