import React from "react";
import { getSession, session } from "next-auth/react";
import Header from "../../components/Header";

import DashNewAnswer from "../../components/DashNewAnswer";
// import DashNewQue from "../components/dashnewque";
function QueAnsPage({ user }) {
  return (
    <div className="relative h-screen">
      <Header user={user} />
      <main className="md:flex mt-24 lg:px-10 xl:px-32 2xl:px-28 md:px-14">
        <section className="text-gray-500 middle mt-16 gap-8 px-4 text-sm sm:px-16 md:px-8 md:w-[70%] xl:w-[90%]">
          <DashNewAnswer user={user} />
        </section>
      </main>
    </div>
  );
}

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

export default QueAnsPage;
