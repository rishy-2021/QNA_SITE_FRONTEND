import React, { useState } from "react";
import ApprovePopUp from "../PopUps/Stack/Approve";
import DissaprPopUp from "../PopUps/Stack/disapprove";

function Report() {
  const [disapr, setdisapr] = useState(false);
  const [appr, setappr] = useState(false);
  return (
    <div className="px-20 mt-12">
      {" "}
      <article className=" shadow-md rounded-md px-4 md:px-4 py-3 leading-relaxed">
        <div className="question flex gap-2">
          <div className="left mt-2 mr-3 md:mr-6">
            <ul className="flex flex-col items-center">
              <li className="text-blue-500 cursor-pointer">
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
              </li>
            </ul>
          </div>
          <div className="right text-sm px-2">
            <div>
              <div className="flex flex-row relative">
                <h2 className="text-2xl mb-4 text-gray-800">
                  What does the fox say?
                </h2>
              </div>
              <p className="leading-7 pb-3">
                Guys! So I was in the shower last day and it just popped in my
                head. What does the fox say? Like really. How do they sound when
                they speak. I know about dogs, cats. mouse, cow, etc but fox!
                Never heard of it. Anyways, if any of you guys have any idea.
                Let me know in the comments. Thanks in advance.
              </p>
            </div>
            <div className="flex gap-12 mt-4">
              <button
                type="button"
                className="1 inline-block px-6 py-2.5  text-white text-base leading-tight uppercase shadow-md bg-red-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                onClick={() => setdisapr(true)}
              >
                Disapprove
              </button>
              <DissaprPopUp trigger={disapr} setTrigger={setdisapr} />
              <button
                type="button"
                className=" inline-block px-6 py-2.5  text-white text-base leading-tight uppercase shadow-md bg-green-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                onClick={() => setappr(true)}
              >
                Approve
              </button>
              <ApprovePopUp trigger={appr} setTrigger={setappr} />
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

export default Report;
