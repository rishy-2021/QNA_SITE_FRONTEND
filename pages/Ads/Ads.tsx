import { useRouter } from "next/router";
import React from "react";

function Ads() {
  const boxes = new Array(6).fill(0);
  const router = useRouter();
  return (
    <div className="flex flex-col md:flex-row ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-[70%] ml-12 mt-12 mb-4">
        <div>
          <div
            className="w-44 h-44 rounded-2xl bg-gray-50 text-center border border-gray-700 p-4"
            onClick={() => router.push("/Ads/profilerank")}
          >
            <img
              src="https://image.freepik.com/free-vector/concumers-with-devices-get-targeted-ads-messages-multi-device-targeting-reaching-audience-cross-device-marketing-concept-white-background-bright-vibrant-violet-isolated-illustration_335657-321.jpg"
              alt=""
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
          <h1 className="ml-8">Profile Rank</h1>
        </div>
        <div
          className="w-44 h-44 border border-gray-700"
          onClick={() => router.push("/Ads/postrank")}
        >
          Post
        </div>
        <div
          className="w-44 h-44 border border-gray-700"
          onClick={() => router.push("/Ads/banner")}
        >
          Banner
        </div>
        <div
          className="w-44 h-44 border border-gray-700"
          onClick={() => router.push("/Ads/Message")}
        >
          Message
        </div>
      </div>

      <button
        className="bg-blue-600 w-fit h-fit px-4 py-2"
        onClick={() => router.push("/Ads/AdsAccount")}
      >
        Your Ads Account
      </button>
    </div>
  );
}

export default Ads;
