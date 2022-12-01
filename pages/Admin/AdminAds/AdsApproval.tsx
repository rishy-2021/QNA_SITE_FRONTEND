import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Listing_Header from "../Listing_Header";
import Admin_Header from "../Admin_Header";
function AdsApproval() {
  const router = useRouter();
  return (
    <>
      <Admin_Header />
      <Listing_Header />

      <div className="lg:ml-12  lg:w-full mt-4">
        <table className="w-full">
          <thead className="bg-gray-50 border-b-2 border-gray-200">
            <tr>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                UserImage
              </th>
              <th className="p-3  text-sm font-semibold tracking-wide text-left">
                UserName
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Types of Ads
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Paid
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Clicks
              </th>

              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Approve
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="">
              <td className="p-3 text-sm text-gray-700">
                <img
                  src="/person.jpg"
                  alt=""
                  className="w-10 h-10 rounded-full "
                />
              </td>
              <td className="p-3 text-sm text-gray-700">Name</td>
              <td
                className="p-3 text-sm text-gray-700 cursor-pointer"
                onClick={() => router.push("/Admin/AdminAds/Message")}
              >
                Message Ads
              </td>
              <td className="p-3 text-sm text-gray-700">4000</td>

              <td className="p-3 text-sm text-gray-700">900</td>
              <td className="p-3 text-sm text-gray-700">
                <button className="p-1.5 bg-yellow-500 rounded-lg text-white">
                  Approve
                </button>
              </td>
              <td className="p-3 text-sm text-gray-700">
                <button className="p-1.5 bg-yellow-500 rounded-lg text-white">
                  Delete
                </button>
              </td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 text-sm text-gray-700">
                <img
                  src="/person.jpg"
                  alt=""
                  className="w-10 h-10 rounded-full "
                />
              </td>
              <td className="p-3 text-sm text-gray-700">Name</td>
              <td
                className="p-3 text-sm text-gray-700 cursor-pointer"
                onClick={() => router.push("/Admin/AdminAds/ProfileRank")}
              >
                Profile Ads
              </td>
              <td className="p-3 text-sm text-gray-700">4000</td>

              <td className="p-3 text-sm text-gray-700">900</td>
              <td className="p-3 text-sm text-gray-700">
                <button className="p-1.5 bg-yellow-500 rounded-lg text-white">
                  Approve
                </button>
              </td>
              <td className="p-3 text-sm text-gray-700">
                <button className="p-1.5 bg-yellow-500 rounded-lg text-white">
                  Delete
                </button>
              </td>
            </tr>
            <tr className="bg-whitebg-white">
              <td className="p-3 text-sm text-gray-700">
                <img
                  src="/person.jpg"
                  alt=""
                  className="w-10 h-10 rounded-full "
                />
              </td>
              <td className="p-3 text-sm text-gray-700">Name</td>
              <td
                className="p-3 text-sm text-gray-700 cursor-pointer"
                onClick={() => router.push("/Admin/AdminAds/PostRank")}
              >
                {" "}
                PostRank Ads
              </td>
              <td className="p-3 text-sm text-gray-700">4000</td>

              <td className="p-3 text-sm text-gray-700">900</td>
              <td className="p-3 text-sm text-gray-700">
                <button className="p-1.5 bg-yellow-500 rounded-lg text-white">
                  Approve
                </button>
              </td>
              <td className="p-3 text-sm text-gray-700">
                <button className="p-1.5 bg-yellow-500 rounded-lg text-white">
                  Delete
                </button>
              </td>
            </tr>
            <tr className="bg-whitebg-white">
              <td className="p-3 text-sm text-gray-700">
                <img
                  src="/person.jpg"
                  alt=""
                  className="w-10 h-10 rounded-full "
                />
              </td>
              <td className="p-3 text-sm text-gray-700">Name</td>
              <td
                className="p-3 text-sm text-gray-700 cursor-pointer"
                onClick={() => router.push("/Admin/AdminAds/Banner")}
              >
                {" "}
                Banner Ads
              </td>
              <td className="p-3 text-sm text-gray-700">4000</td>

              <td className="p-3 text-sm text-gray-700">900</td>
              <td className="p-3 text-sm text-gray-700">
                <button className="p-1.5 bg-yellow-500 rounded-lg text-white">
                  Approve
                </button>
              </td>
              <td className="p-3 text-sm text-gray-700">
                <button className="p-1.5 bg-yellow-500 rounded-lg text-white">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default AdsApproval;
