import React from "react";
import LoginPage from "../../components/LoginPage/LoginPage";

function Login() {
  // if(session) return null;
  return (
    <div className="">
      <main>
        <section className="h-screen w-screen">
          <LoginPage />
        </section>
      </main>
    </div>
  );
}

export default Login;
