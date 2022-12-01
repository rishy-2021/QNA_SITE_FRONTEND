import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
interface AskProps {
  trigger: Boolean;
  setTrigger: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function AnswerPopUp({
  trigger,
  setTrigger,
  question,
  user,
}: AskProps) {
  const [answer, setAnswer] = useState("");
  const [Ans_Image, setAns_Image] = useState();

  // console.log(user, "user");

  // const AnswerSubmit = () => {
  //   console.log(user, "user");
  //   axios
  //     .post("http://localhost:3001/api/tempanswer", {
  //       question_id: question._id,
  //       answer: answer,
  //       user: user,
  //       answerImage: Ans_Image,
  //     })
  //     .then((response) => {
  //       console.log(response);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // };

  const AnswerSubmit = () => {
    console.log(user, "user");
    axios
      .post("https://qna-site-server.onrender.com/api/answer", {
        question_id: question._id,
        answer: answer,
        user: user,
        answerImage: Ans_Image,
      })
      .then((response) => {
        // console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const handleAImage = (e) => {
    const file = e.target.files[0];

    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setAns_Image(reader.result);
    };
  };
  return trigger ? (
    <main className="z-50 fixed inset-0 w-full flex justify-center items-center">
      <section className="flex bg-black w-full bg-opacity-20 justify-center items-center  text-black">
        <div className=" h-[100%] flex justify-center items-center py-16 md:py-16 lg:py-4">
          <div className="bg-white rounded-xl min-w-[330px] sm:w-[600px] lg:w-[50%] px-4 mx-2 sm:px-6 py-10 my-4 md:my-6 lg:my-6 sm:py-[29px] text-gray-500 flex flex-col gap-5">
            <div
              className="flex items-start justify-start text-3xl cursor-pointer"
              onClick={() => setTrigger(false)}
            >
              &#215;
            </div>
            <div className="flex flex-col gap-4 items-start justify-between">
              <h1 className="font-semibold text-lg text-gray-800 lg:text-2xl">
                Question
              </h1>
            </div>
            <div className="font-semibold flex items-center justify-between text-gray-700 w-full pr-3 px-1 py-1 lg:text-2xl rounded-md focus:border-b-2">
              <div>
                <p className="text-base">
                  <>{question.title}</>
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4 items-start justify-between">
              <h1 className="font-semibold text-lg text-gray-800 lg:text-2xl">
                Discription
              </h1>
            </div>
            <div className="flex items-center justify-between text-gray-700 w-full pr-10 px-2 py-2 rounded-md focus:border-b-2">
              <div>
                <p className="text-base">{question.body}</p>
              </div>
            </div>
            <div className="flex gap-2 items-start justify-start text-sm lg:text-lg w-full border-t-[1px] border-gray-300 pt-8">
              <div className="flex flex-col items-start justify-start gap-4 w-full">
                <p className="ml-2 font-semibold text-base lg:text-xl test-gray-700">
                  Your Answer
                </p>
                <textarea
                  className="resize-none w-[100%] rounded-lg h-1/2 border-2 focus:border-gray-500 outline-none px-4 py-2"
                  name=""
                  id=""
                  cols={100}
                  rows={6}
                  placeholder="For example..."
                  onChange={(e) => {
                    setAnswer(e.target.value);
                  }}
                ></textarea>
                <input type="file" onChange={handleAImage} />
                <button
                  className="ml-2 border-2 border-gray-500 rounded-lg px-5 py-2 font-semibold bg-slate-500 text-white"
                  onClick={() => {
                    setTrigger(false);
                    AnswerSubmit();
                  }}
                >
                  Post Answer
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  ) : null;
}
