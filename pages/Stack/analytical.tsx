import React, { Component, useEffect, useState } from "react";
import Image from "next/image";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import GraChart from "../../components/Analytic/Graph/GraChart";
import {
  // Data,
  donutdata,
  linedata,
  multilinedata,
  radialdata,
  bardata,
} from "../../components/Analytic/Graph/data";
import ProgressBar from "../../components/Analytic/Graph/ProgressBar";
import axios from "axios";
// import Sidebar from "../../../components/ExtraComponents/sidebar";

// useEffect(function () {
//   axios

//     .get("http://localhost:3001/api/question/allQuestions")
//     .then((response) => console.log(response.data))
//     .catch((error) => console.log(error));
// }, []);

// export default class Analytics2 extends Component {

// render()
function Analytics() {
  const [startDate, setStartDate] = useState(new Date());
  const user = {
    name: "jjjjjjjjj",
    email: "r@gmail.com",
  };
  const [Data, setData] = useState();
  // const [val, setVal] = useState();
  const [render, setRender] = useState(0);

  function buttonData() {
    axios.post("https://qna-site-server.onrender.com/api/sms/addSmsQ", {
      user: user,
    });
  }
  function button2Data() {
    // axios
    //   .post("http://localhost:3001/api/sms/allSmsQ", {
    //     date: startDate.toDateString(),
    //   })
    //   .then((response) => {
    //     console.log("0000000000", response.data.data);
    //     setData({
    //       options: {
    //         chart: {
    //           id: "basic-bar",
    //         },
    //         xaxis: {
    //           categories: [
    //             "January",
    //             "February",
    //             "March",
    //             "April",
    //             "May",
    //             "June",
    //             "July",
    //           ],
    //         },
    //         stoke: {
    //           curve: "smooth",
    //         },
    //         yaxis: [
    //           {
    //             labels: {
    //               style: {
    //                 colors: "black",
    //               },
    //             },
    //           },
    //         ],
    //         dataLabels: {
    //           enabled: false,
    //         },
    //         fill: {
    //           type: "gradient",
    //           gradient: {
    //             shadeIntensity: 1,
    //             opacityFrom: 0.7,
    //             opacityTo: 0.9,
    //             stops: [0, 90, 100],
    //           },
    //         },
    //       },
    //       series: [
    //         {
    //           name: "series-1",
    //           data: [
    //             response.data.data.smsDatep3,
    //             response.data.data.smsDatep2,
    //             response.data.data.smsDatep1,
    //             response.data.data.smsMainDate,
    //             response.data.data.smsDatel1,
    //             response.data.data.smsDatel2,
    //             response.data.data.smsDatel3,
    //           ],
    //         },
    //       ],
    //       width: "100%",
    //       height: 400,
    //     });
    //   })
    //   .catch((error) => console.log(error));
  }

  useEffect(() => {
    axios

      .post("https://qna-site-server.onrender.com/api/sms/allsmsQ")
      .then((response) => {
        // console.log("0000000000", response.data.data);

        setData({
          options: {
            chart: {
              id: "basic-bar",
            },

            xaxis: {
              categories: [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December",
              ],
            },
            stoke: {
              curve: "smooth",
            },
            yaxis: [
              {
                labels: {
                  style: {
                    colors: "black",
                  },
                },
              },
            ],
            dataLabels: {
              enabled: false,
            },
            fill: {
              type: "gradient",
              gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.7,
                opacityTo: 0.9,
                stops: [0, 90, 100],
              },
            },
          },
          series: [
            {
              name: "series-1",
              data: [
                response.data.data.smsQ1,
                response.data.data.smsQ2,
                response.data.data.smsQ3,
                response.data.data.smsQ4,
                response.data.data.smsQ5,
                response.data.data.smsQ6,
                response.data.data.smsQ7,
                response.data.data.smsQ8,
                response.data.data.smsQ9,
                response.data.data.smsQ10,
                response.data.data.smsQ11,
                response.data.data.smsQ12,
              ],
            },
          ],
          width: "100%",
          height: 400,
        });
      })
      .catch((error) => console.log(error));
  }, [render]);
  return (
    <main className="place-items-center lg:place-items-start h-screen grid grid-cols-1 lg:grid-cols-4 w-full">
      <div className="left lg:float-left w-[30%] hidden lg:block">
        <section className="md:w-[]  hidden lg:block  fixed">
          {/* <Sidebar /> */}
        </section>
      </div>
      <div className="right lg:float-right mt-16 mb-4 max-w-[800px] lg:max-w-[1200px] px-4 w-full lg:col-span-3">
        <div className=" bg-teal-200 rounded-lg   h-fit  px-2 py-4 text-gray-100 items-center lg:items-start ">
          <h2 className="text-3xl ml-12 font-semibold mb-2">Todays' Salary</h2>
          <p className="text-xl ml-12 mb-4 ">Sales Summary</p>
          <div className="flex gap-10 ml-32 mb-8 ">
            <div className="bg-gray-700 px-6 py-6 rounded-lg min-w-[180px]">
              <ul className="flex flex-col gap-1">
                <li className="text-yellow-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </li>
                <li className="font-semibold text-lg">$5k</li>
                <li>Total Sales</li>
                <li className="text-yellow-200">lorem ipsum text</li>
              </ul>
            </div>
            <div className="bg-gray-700 px-6 py-6 rounded-lg min-w-[180px]">
              <ul className="flex flex-col gap-1">
                <li className="text-green-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm9 4a1 1 0 10-2 0v6a1 1 0 102 0V7zm-3 2a1 1 0 10-2 0v4a1 1 0 102 0V9zm-3 3a1 1 0 10-2 0v1a1 1 0 102 0v-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </li>
                <li className="font-semibold text-lg">500</li>
                <li>Total Sales</li>
                <li className="text-green-200">lorem ipsum text</li>
              </ul>
            </div>
            <div className="bg-gray-700 px-4 py-4 rounded-lg min-w-[180px]">
              <ul className="flex flex-col gap-1">
                <li className="text-pink-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </li>
                <li className="font-semibold text-lg">9</li>
                <li>Product Sold</li>
                <li className="text-pink-200">lorem ipsum text</li>
              </ul>
            </div>
            <div className="bg-gray-700 px-4 py-4 rounded-lg min-w-[180px]">
              <ul className="flex flex-col gap-1">
                <li className="text-blue-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
                  </svg>
                </li>
                <li className="font-semibold text-lg">12</li>
                <li>New Customers</li>
                <li className="text-blue-200">lorem ipsum text</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="  bg-pink-100 rounded-lg w-[80%] ml-24 mt-10 px-4 py-4 text-gray-400 ">
          <div className="text-center text-black ">
            <button
              className="m-9 px-10 py-3 bg-pink-800 rounded-lg"
              onClick={() => {
                setRender(render + 1);
                buttonData();
              }}
            >
              click for Months
            </button>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
            <button
              className="m-9 px-10 py-3 bg-pink-800 rounded-lg"
              onClick={() => {
                setRender(render + 1);
                button2Data();
              }}
            >
              click for Specific Date
            </button>
          </div>
          <h2 className="text-xl font-semibold text-black">Views</h2>
          {Data !== undefined && (
            <div className="">
              <GraChart
                options={Data.options}
                series={Data.series}
                type="area"
                height={Data.height}
                width={Data.width}
              />
            </div>
          )}
        </div>
        {/* // )} */}

        <div className="  bg-pink-100 rounded-lg w-[80%] mt-12 ml-24">
          <h2 className="text-lg font-semibold">
            Actions(kitne logo ne msg kiya,website)
          </h2>
          <GraChart
            options={multilinedata.options}
            series={multilinedata.series}
            type="area"
            width={multilinedata.width}
            height={multilinedata.height}
          />
        </div>

        <div className="relative  w-[80%] ml-24 mt-12 rounded-lg">
          <h1 className="text-4xl">Social Analytics</h1>
          {/* <GraChart options={Data.options} series={Data.series} type="area" /> */}

          {/* <Image className="md:min-w-[700px] w-full" src="/graph.png" width={1920} height={1080} objectFit={'contain'}></Image> */}
        </div>

        <div className="grid grid-cols-2 mt-6 mb-8">
          <div className=" rounded-lg mt-8">
            <GraChart
              options={donutdata.options}
              series={donutdata.series}
              type="donut"
              width={donutdata.width}
              height={donutdata.height}
            />{" "}
            {/* <Image className="" src="/graph.png" width={1920} height={1080} objectFit={'contain'}></Image> */}
          </div>

          <section className="ml-12">
            <h2 className="text-gray-600 font-semibold text-2xl mb-6 mt-12 ">
              Social Links
            </h2>

            <aside className="flex gap-44 items-start rounded-md px-4 py-4 lg:py-2 lg:px-2 cursor-pointer">
              <div className="flex items-start gap-6">
                <ul className="">
                  <li>
                    <Image
                      className=""
                      src="/google.svg"
                      width={30}
                      height={30}
                    />
                  </li>
                </ul>
                <ul className="flex flex-col item-center gap-1">
                  <li className="text-gray-600">Google</li>
                  <li className="text-gray-400">25 Feb 2019</li>
                </ul>
              </div>
              <div>
                <ul>
                  <li className="text-green-700 drop-shadow-md text-xl">
                    <span className="">+</span>$0.15
                  </li>
                </ul>
              </div>
            </aside>
            <aside className="flex gap-44 items-start rounded-md px-4 py-4 lg:py-2 lg:px-2 cursor-pointer">
              <div className="flex items-start gap-6">
                <ul className="">
                  <li>
                    <Image
                      className=""
                      src="/google.svg"
                      width={30}
                      height={30}
                    />
                  </li>
                </ul>
                <ul className="flex flex-col item-center gap-1">
                  <li className="text-gray-600">Google</li>
                  <li className="text-gray-400">25 Feb 2019</li>
                </ul>
              </div>
              <div>
                <ul>
                  <li className="text-green-700 drop-shadow-md text-xl">
                    <span className="">+</span>$0.15
                  </li>
                </ul>
              </div>
            </aside>
            <aside className="flex gap-44 items-start rounded-md px-4 py-4 lg:py-2 lg:px-2 cursor-pointer">
              <div className="flex items-start gap-6">
                <ul className="">
                  <li>
                    <Image
                      className=""
                      src="/google.svg"
                      width={30}
                      height={30}
                    />
                  </li>
                </ul>
                <ul className="flex flex-col item-center gap-1">
                  <li className="text-gray-600">Google</li>
                  <li className="text-gray-400">25 Feb 2019</li>
                </ul>
              </div>
              <div>
                <ul>
                  <li className="text-green-700 drop-shadow-md text-xl">
                    <span className="">+</span>$0.15
                  </li>
                </ul>
              </div>
            </aside>
            <aside className="flex gap-44 items-start rounded-md px-4 py-4 lg:py-2 lg:px-2 cursor-pointer">
              <div className="flex items-start gap-6">
                <ul className="">
                  <li>
                    <Image
                      className=""
                      src="/google.svg"
                      width={30}
                      height={30}
                    />
                  </li>
                </ul>
                <ul className="flex flex-col item-center gap-1">
                  <li className="text-gray-600">Google</li>
                  <li className="text-gray-400">25 Feb 2019</li>
                </ul>
              </div>
              <div>
                <ul>
                  <li className="text-green-700 drop-shadow-md text-xl">
                    <span className="">+</span>$0.15
                  </li>
                </ul>
              </div>
            </aside>
          </section>
        </div>
      </div>
    </main>
  );
}
// }
export default Analytics;
