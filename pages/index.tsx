import type { NextPage } from "next";
import { getSession, useSession } from "next-auth/react";
import { useRouter } from "next/router";

import ForuMe from "./Stack/ForuMe";
import Login from "./Stack/login";
// import Solar from "./Stack/Solar";

const Home: NextPage = ({ user }) => {
  const { data: session, status } = useSession();

  const router = useRouter();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  return (
    <>
      {/* {status === "unauthenticated" && !session && <Login />} */}

      {/* {status === "authenticated" && session && */}
      <ForuMe user={user} />
      {/* //  } */}
    </>
  );
};

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

export default Home;
