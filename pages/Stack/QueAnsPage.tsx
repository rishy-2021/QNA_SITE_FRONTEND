import React, { useEffect, useState } from "react";
import { getSession, session } from "next-auth/react";
import Header from "../../components/Header";
import {
  IoShareSocialOutline,
  IoEllipsisVerticalOutline,
} from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import { BsHeart } from "react-icons/bs";
import SharePopUp from "../pages/PopUps/SharePopUp";
import Answernewpage from "../../components/Answernewpage";
import Questionnewpage from "../../components/Questionnewpage";
import { useRouter } from "next/router";
import axios from "axios";
function QueAnsPage({ user }) {
  //   console.log(user, questions);
  const router = useRouter();
  const query = router.query;
  const question_id = query.id;
  const askedDate = query.ad;
  const [question, setQuestion] = useState();
  //   console.log(question);

  useEffect(function () {
    axios
      .post("https://qna-site-server.onrender.com/api/question/sq", {
        qid: question_id,
      })
      .then((response) => setQuestion(response.data.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="relative h-screen">
      <Header user={user} />
      <main className="md:flex mt-24 lg:px-10 xl:px-32 2xl:px-28 md:px-14 ">
        <section className="text-gray-500 middle mt-16 gap-8 px-4 text-sm sm:px-16 md:px-8 md:w-[70%] xl:w-[90%]">
          {question != undefined && (
            <Questionnewpage
              user={user}
              question={question}
              askedDate={askedDate}
            />
          )}
        </section>
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (!session) {
    return {
      props: {
        user: null,
      },
    };
  } else {
    return {
      props: {
        user: session?.user,
      },
    };
  }
}

export default QueAnsPage;
