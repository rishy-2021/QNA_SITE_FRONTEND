import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";

interface AnswerProp {
  visi: Boolean;
}
function Answer({ visi }: AnswerProp) {
  // // console.log(visi);
  // const [answers, setAllAnswers] = useState([]);
  // useEffect(function () {
  //   axios
  //     .post("http://localhost:3001/api/answer/allAnswers", {
  //       qid: questions._id,
  //     })
  //     .then((response) => setAllAnswers(response.data.data))
  //     .catch((error) => console.log(error));
  // }, []);
  // return (
  //   <div className={` ${visi ? "visible" : "hidden"}`}>
  //     {answers.map((answer) => (
  //       <div
  //         className={`answer px-4 ml-10 md:ml-14 lg:ml-16 flex flex-col gap-6 mt-6 bg-gray-100 rounded-md ${
  //           visi ? "visible" : "hidden"
  //         }`}
  //       >
  //         <div className="up mt-2 mr-3 md:mr-6 flex justify-between items-center">
  //           <ul className="flex items-center">
  //             <li className="w-[16px] h-[16px] sm:w-[20px] sm:h-[20px] lg:w-[24px] lg:h-[24px] mr-2">
  //               <img
  //                 className="rounded-full"
  //                 // loader={myLoader}
  //                 src={answer.user.image}
  //                 width={70}
  //                 height={70}
  //               ></img>
  //             </li>
  //             <li className="text-blue-500 text-xs lg:text-sm font-semibold">
  //               {answer.user.name}
  //             </li>
  //           </ul>
  //           <ul className="flex items-center text-xs">
  //             <li className="mr-2">12hr</li>
  //             <li>ago</li>
  //           </ul>
  //         </div>
  //         <div className="down text-md px-2 flex items-start gap-6">
  //           <div className="left">
  //             <ul>
  //               <li>
  //                 <svg
  //                   xmlns="http://www.w3.org/2000/svg"
  //                   className="h-5 w-5"
  //                   viewBox="0 0 20 20"
  //                   fill="currentColor"
  //                 >
  //                   <path
  //                     fillRule="evenodd"
  //                     d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z"
  //                     clipRule="evenodd"
  //                   />
  //                 </svg>
  //               </li>
  //               <li>56</li>
  //               <li>
  //                 <svg
  //                   xmlns="http://www.w3.org/2000/svg"
  //                   className="h-5 w-5"
  //                   viewBox="0 0 20 20"
  //                   fill="currentColor"
  //                 >
  //                   <path
  //                     fillRule="evenodd"
  //                     d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z"
  //                     clipRule="evenodd"
  //                   />
  //                 </svg>
  //               </li>
  //             </ul>
  //           </div>
  //           <div className="right">
  //             <div>
  //               <p>{answer.answer}</p>
  //             </div>
  //             <div className="my-3 flex items-center justify-between">
  //               <ul className="flex gap-4 text-xs">
  //                 <li className="cursor-pointer">Reply</li>
  //                 <li className="cursor-pointer">Share</li>
  //                 <li className="cursor-pointer">Report</li>
  //               </ul>
  //               <ul>
  //                 <li>
  //                   <svg
  //                     xmlns="http://www.w3.org/2000/svg"
  //                     className="h-5 w-5"
  //                     viewBox="0 0 20 20"
  //                     fill="currentColor"
  //                   >
  //                     <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
  //                   </svg>
  //                 </li>
  //               </ul>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     ))}
  //   </div>
  // );
}

export default Answer;
