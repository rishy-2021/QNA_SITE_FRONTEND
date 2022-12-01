import React from "react";
import { useRouter } from "next/router";
function Listing_Header() {
  const router = useRouter();
  return (
    <div>
      {" "}
      <ul className="flex  shadow-lg px-4 pt-4 pb-6 bg-white w-full justify-center ">
        <li
          className="w-[30%] text-center text-white text-xl mr-12 cursor-pointer hover:bg-blue-500 bg-blue-400 p-2 rounded-lg"
          onClick={() => router.push("/Admin/AdminListing/admin_listing")}
        >
          Profile
        </li>
        <li
          className="w-[30%] text-center text-white text-xl mr-12 cursor-pointer hover:bg-blue-500 bg-blue-400 p-2 rounded-lg"
          onClick={() => router.push("/Admin/AdminListing/ReportListing")}
        >
          Report
        </li>
        <li
          className="w-[30%] text-center text-white text-xl cursor-pointer hover:bg-blue-500 bg-blue-400 p-2 rounded-lg mr-12"
          onClick={() => router.push("/Admin/AdminListing/feedback")}
        >
          Feedback
        </li>
        <li
          className="w-[30%] text-center text-white text-xl cursor-pointer hover:bg-blue-500 bg-blue-400 p-2 mr-12 rounded-lg"
          onClick={() => router.push("/Admin/AdminListing/ReviewReport")}
        >
          Review Reports
        </li>
        <li
          className="w-[30%] text-center text-white text-xl cursor-pointer hover:bg-blue-500 bg-blue-400 p-2 rounded-lg"
          onClick={() => router.push("/Admin/AdminAds/AdsApproval")}
        >
          AdsApproval
        </li>
      </ul>
    </div>
  );
}

export default Listing_Header;
