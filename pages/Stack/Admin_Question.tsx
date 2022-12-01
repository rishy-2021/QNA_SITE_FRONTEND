import axios from "axios";
import React, { useEffect, useState } from "react";
import ApprovePopUp from "../PopUps/Stack/Approve";
import DissaprPopUp from "../PopUps/Stack/disapprove";

function Admin_Question() {
  const [disapr, setdisapr] = useState(false);
  const [appr, setappr] = useState(false);
  const [tempQues, setTempQues] = useState();

  useEffect(
    function () {
      axios
        .get(
          "https://qna-site-server.onrender.com/api/tempquestion/getTempQues"
        )
        .then((response) => setTempQues(response.data.data))
        .catch((error) => console.log(error));
    },
    [appr, disapr]
  );

  //   console.log(tempQues);

  //   function approved(res) {
  //     axios
  //       .post("http://localhost:3001/quiz/main/addMainQuiz", {
  //         response: res,
  //       })
  //       .then((response) => console.log(response))
  //       .catch((error) => console.log(error));

  //     axios
  //       .delete(`http://localhost:3001/quiz/deleteTempQuizs/${res._id}`)
  //       .then((response) => console.log(response))
  //       .catch((error) => console.log(error));
  //   }
  return (
    <div className="px-20 mt-12">
      {tempQues !== undefined &&
        tempQues.map((ques, index) => (
          <article className=" shadow-md rounded-md px-4 md:px-4 py-3 leading-relaxed">
            <div className="question flex gap-2">
              <div className="right text-sm px-2">
                <div>
                  <div className="flex flex-row relative">
                    <h2 className="text-2xl mb-4 text-gray-800">
                      {ques.title}
                    </h2>
                  </div>
                  <p className="leading-7 pb-3">{ques.body}</p>
                </div>
                <div className="flex gap-2">
                  {ques.tags[0] &&
                    ques.tags.map((tags) => (
                      <p className=" rounded-2xl w-fit px-2 bg-gray-400 bg-opacity-20 text-blue-500 border-gray-400 border-[1px] drop-shadow-lg">
                        {tags}
                      </p>
                    ))}
                </div>
                <div className="flex gap-12 mt-4">
                  <button
                    type="button"
                    className="1 inline-block px-6 py-2.5  text-white text-base leading-tight uppercase shadow-md bg-red-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                    onClick={() => setdisapr(true)}
                  >
                    Disapprove
                  </button>
                  <DissaprPopUp
                    ques={ques}
                    trigger={disapr}
                    setTrigger={setdisapr}
                  />
                  <button
                    type="button"
                    className=" inline-block px-6 py-2.5  text-white text-base leading-tight uppercase shadow-md bg-green-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                    onClick={() => setappr(true)}
                  >
                    Approve
                  </button>
                  <ApprovePopUp
                    trigger={appr}
                    ques={ques}
                    setTrigger={setappr}
                  />
                </div>
              </div>
            </div>
          </article>
        ))}
    </div>
  );
}

export default Admin_Question;
