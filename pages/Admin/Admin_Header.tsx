import React from "react";
import { useRouter } from "next/router";
function Admin_Header() {
  const router = useRouter();
  return (
    <div>
      {" "}
      <ul className="flex justify-center  z-50 bg-white shadow-lg  items-center text-center my-4 lg:mt-2 sm:mb-0 py-2 gap-2 md:gap-4 lg:gap-10  w-full overflow-x-auto pl-48 sm:pl-0">
        <li className="min-w-[100px]">
          <button
            className="w-full relative h-14 first-letter:inline-flex items-center justify-center overflow-hidden text-xs font-medium text-gray-900 rounded-lg"
            onClick={() => router.push("/Admin/AdminListing/admin_listing")}
          >
            <span className="w-full relative px-5 text-xs md:text-sm lg:text-base py-3 transition-all ease-in duration-75 font-semibold rounded-lg group-hover:bg-opacity-0 text-black bg-white border-4 border-blue-400 hover:bg-gray-100 hover:text-blue-700">
              LISTING
            </span>
          </button>
        </li>
        <li className="min-w-[100px]">
          <button
            className="w-full relative h-14 first-letter:inline-flex items-center justify-center overflow-hidden text-xs font-medium text-gray-900 rounded-lg"
            onClick={() => router.push("/Admin/AdminQuiz/request")}
          >
            <span className="w-full relative px-7 text-xs md:text-sm lg:text-base py-3 transition-all ease-in duration-75 bg-white rounded-lg group-hover:bg-opacity-0 text-black font-semibold border-b-4 border-white hover:border-blue-400 hover:text-blue-500">
              QUIZ
            </span>
          </button>
        </li>
        <li className="min-w-[100px]">
          <button
            className="w-full relative h-14 first-letter:inline-flex items-center justify-center overflow-hidden text-xs font-medium text-gray-900 rounded-lg"
            onClick={() => router.push("/Admin/AdminJob/admin_job")}
          >
            <span className="relative px-8 text-xs md:text-sm lg:text-base py-3 transition-all ease-in duration-75 bg-white rounded-lg group-hover:bg-opacity-0 text-black font-semibold border-4 border-blue-400 hover:bg-gray-100 hover:text-blue-500">
              JOB
            </span>
          </button>
        </li>
        <li className="min-w-[100px]">
          <button
            className="w-full relative h-14 first-letter:inline-flex items-center justify-center overflow-hidden text-xs font-medium text-gray-900 rounded-lg "
            onClick={() => router.push("/Admin/AdminQuestion/question")}
          >
            <span className="relative px-3 text-xs md:text-sm lg:text-base py-3 transition-all ease-in duration-75 bg-white rounded-lg text-black font-semibold border-4 border-blue-400 hover:bg-gray-100 hover:text-blue-500">
              QUESTION
            </span>
          </button>
        </li>
        <li className="min-w-[100px]">
          <button
            className="w-full relative h-14 first-letter:inline-flex items-center justify-center p-0.5 mr-2 overflow-hidden text-xs font-medium text-gray-900 rounded-lg "
            onClick={() => router.push("/Admin/AdminListing/postreport")}
          >
            <span className="relative px-7 text-xs md:text-sm lg:text-base py-3 transition-all ease-in duration-75 bg-white rounded-lg text-black font-semibold border-4 border-blue-400 hover:bg-gray-100 hover:text-blue-500 ">
              POST
            </span>
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Admin_Header;
