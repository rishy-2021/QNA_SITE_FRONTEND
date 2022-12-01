import React, { Component, useState } from "react";
import Image from "next/image";
import axios from "axios";
import { getSession } from "next-auth/react";

function Contact({ user }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  //   console.log(message);

  function sendMessage() {
    axios
      .post("https://qna-site-server.onrender.com/api/message", {
        name: name,
        email: email,
        message: message,
        user: user,
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <>
      <div className="Contact_Page bg-gray-50 flex flex-col-reverse mb-16 lg:flex-row lg:justify-center">
        <div className="left lg:w-[50%]">
          <div className="top bg-[url('/city.jpg')] bg-cover bg-center h-[1000px] cover"></div>
          <div className="down flex gap-1 sm:gap-16 md:gap-36 lg:gap-8 xl:gap-24 justify-center items-center text-xs px-6 py-6 bg-gray-300 sm:px-8 sm:py-4 md:px-14 lg:px-40">
            <ul
              className="flex mr-2 items-center font-bold
                     text-gray-400"
            >
              <li className="w-[20px] mr-1">
                <Image
                  className="text-blue-400"
                  src="/facebook.svg"
                  width={30}
                  height={30}
                ></Image>
              </li>
              <li>Facebook</li>
            </ul>
            <ul
              className="flex mr-2 items-center font-bold
                     text-gray-400"
            >
              <li className="w-[20px] mr-1">
                <Image
                  className="text-blue-400"
                  src="/instagram.svg"
                  width={30}
                  height={30}
                ></Image>
              </li>
              <li>Instagram</li>
            </ul>
            <ul
              className="flex mr-2 items-center font-bold
                     text-gray-400"
            >
              <li className="w-[20px] mr-1">
                <Image
                  className="text-blue-400"
                  src="/twitter.svg"
                  width={30}
                  height={30}
                ></Image>
              </li>
              <li>Twitter</li>
            </ul>
            <ul
              className="flex mr-2 items-center font-bold
                     text-gray-400"
            >
              <li className="w-[20px] mr-1">
                <Image
                  className="text-blue-400"
                  src="/git.svg"
                  width={30}
                  height={30}
                ></Image>
              </li>
              <li>GitHub</li>
            </ul>
          </div>
        </div>
        <div className="right lg:w-[50%] px-4 py-4 bg-blue-500 text-gray-100 flex flex-col gap-6 sm:px-8 sm:py-4 md:py-14 lg:px-14">
          <section className="flex flex-col">
            <p className="text-4xl font-semibold mb-4">Get in Touch</p>
            <p className="text-base">
              Fill out this form our team will get back to you within 24hour.
            </p>
          </section>
          <section className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
            <div className="sm:w-[46%] mb-4">
              <label className="font-semibold" htmlFor="">
                First Name
              </label>
              <br />
              <input
                className="text-gray-600 mt-2 outline-none px-4 py-2 w-full rounded-md"
                type="text"
                placeholder="Enter first name"
              />
            </div>
            <div className="sm:w-[46%] mb-4">
              <label className="font-semibold" htmlFor="">
                Last Name
              </label>
              <br />
              <input
                className="text-gray-600 mt-2 outline-none px-4 py-2 w-full rounded-md"
                type="text"
                placeholder="Enter last name"
              />
            </div>
          </section>
          <section className="max-w-[1000px]">
            <label className="font-semibold" htmlFor="">
              Email address
            </label>
            <br />
            <input
              className="text-gray-600 mt-2 outline-none px-4 py-2 w-full rounded-md"
              type="text"
              name=""
              id=""
              placeholder="Enter email address"
            />
          </section>
          <section className="mb-2">
            <label className="" htmlFor="">
              Subject
            </label>
            <div className="mt-4 grid grid-cols-2 gap-6 justify-between items-center">
              <ul className="">
                <input className="mr-2" type="radio" name="" id="" />
                <label htmlFor="">Web Design</label>
              </ul>
              <ul>
                <input className="mr-2" type="radio" name="" id="" />
                <label htmlFor="">App Development</label>
              </ul>
              <ul>
                <input className="mr-2" type="radio" name="" id="" />
                <label htmlFor="">Adobe Xd</label>
              </ul>
              <ul>
                <input className="mr-2" type="radio" name="" id="" />
                <label htmlFor="">Motion Graphics</label>
              </ul>
              <ul>
                <input className="mr-2" type="radio" name="" id="" />
                <label htmlFor="">Illustration</label>
              </ul>
              <ul>
                <input className="mr-2" type="radio" name="" id="" />
                <label htmlFor="">Other</label>
              </ul>
            </div>
          </section>
          <section className="flex flex-col">
            <label className="" htmlFor="">
              Message
            </label>
            <textarea
              className="text-gray-600 mt-3 rounded-md px-4 py-2"
              name=""
              id=""
              rows={10}
              placeholder="Enter message here..."
            ></textarea>
            <div className="w-[100%] flex justify-center items-center">
              <button className="mt-4 px-3 py-2 border-2 border-white rounded-lg max-w-[640px] w-full">
                Send Message
              </button>
            </div>
          </section>
        </div>
      </div>
      <div className="Contact_page2 bg-gray-50 px-4 text-gray-600 sm:px-8 sm:py-4 md:py-14 xl:px-72">
        <div className="flex flex-col mb-6">
          <p className="text-4xl font-semibold mb-4">Let's Talk With Us</p>
          <p className="text-base">
            Have a project in mind that you think we'd be a great fit for it!
            We'd love to know what you're thinking
          </p>
        </div>
        <div>
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6">
            <ul className="flex flex-col mb-4 sm:w-[46%]">
              <label className="mb-4" htmlFor="">
                Name
              </label>
              <input
                className="outline-none px-4 py-2 border-2 border-gray-200 rounded-md"
                type="text"
                placeholder="Enter your name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </ul>
            <ul className="flex flex-col mb-4 sm:w-[46%]">
              <label className="mb-4" htmlFor="">
                Email
              </label>
              <input
                className="outline-none px-4 py-2 border-2 border-gray-200 rounded-md"
                type="email"
                placeholder="Enter your email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </ul>
          </div>
          <div className="flex flex-col mb-6">
            <label className="mb-4" htmlFor="">
              Message
            </label>
            <textarea
              className="border-2 border-gray-300 rounded-md px-4 py-2 mb-4"
              name=""
              id=""
              rows={10}
              placeholder="Enter message here..."
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            ></textarea>
            <div className="w-[100%] flex justify-center items-center">
              <button
                className="px-3 py-2 border-2 border-gray-300 rounded-lg max-w-[640px] w-full"
                onClick={sendMessage}
              >
                Send Message
              </button>
            </div>
          </div>
          <div className="flex text-sm flex-wrap gap-4 sm:gap-8 my-6 sm:mt-20 justify-start md:justify-between md:gap-14 lg:gap-32 xl:gap-20 items-center">
            <ul className="flex text-gray-500 items-start justify-between">
              <li className="bg-blue-500 rounded-full cursor-pointer text-white p-4 mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </li>
              <li className="flex flex-col items-start justify-center gap-1">
                <span>Phone Number</span>
                <span className="font-semibold text-base">1231231232</span>
              </li>
            </ul>
            <ul className="flex text-gray-500 items-start justify-between">
              <li className="bg-blue-500 rounded-full cursor-pointer text-white p-4 mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z"
                    clipRule="evenodd"
                  />
                </svg>
              </li>
              <li className="flex flex-col items-start justify-center gap-1">
                <span>Email</span>
                <span className="font-semibold text-base">
                  Leads4Need@localbusiness.com
                </span>
              </li>
            </ul>
            <ul className="flex text-gray-500 items-start justify-between">
              <li className="bg-blue-500 rounded-full cursor-pointer text-white p-4 mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
              </li>
              <li className="flex flex-col items-start justify-center gap-1">
                <span>Location</span>
                <span className="font-semibold text-base">
                  John Bucharest SL 199
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
export default Contact;

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/Stack/login",
        permanent: false,
      },
    };
  }

  return {
    props: {
      user: session?.user,
    },
  };
}
