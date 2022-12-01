import { useState } from "react";
import SignInForm from "./SignIn";
import SignUpForm from "../../pages/api/auth/SignUp";
import LeftOverlay from "./LeftOverlay";
import RightOverlay from "./RightOverlay";

const LoginPage = () => {
  const [isAnimated, setIsAnimated] = useState(false);
  const overlayBg =
    "bg-gradient-to-r from-blue-800 via-purple-800 to-indigo-800";

  return (
    <div className="h-full w-full bg-white relative overflow-hidden rounded-lg">
      <div
        className={`signin bg-white absolute top-0 left-0 h-full w-1/2 flex justify-center items-center transition-all duration-700 ease-in-out z-20 ${
          isAnimated ? "translate-x-full opacity-0" : ""
        }`}
      >
        <SignInForm />
      </div>

      <div
        className={`signup absolute top-0 left-0 h-full w-1/2 flex justify-center items-center transition-all duration-700 ease-in-out ${
          isAnimated
            ? "translate-x-full opacity-100 z-50 animate-show"
            : "opacity-0 z-10"
        }`}
      >
        <div className="h-full w-full flex justify-center items-center">
          <SignUpForm />
        </div>
      </div>

      <div
        className={`overlay-container absolute top-0 left-1/2 w-1/2 h-full overflow-hidden duration-700 ease-in-out z-100 ${
          isAnimated ? "-translate-x-full" : ""
        }`}
      >
        <div
          className={`overlay ${overlayBg} relative -left-full h-full w-[200%] transform duration-700 ease-in-out ${
            isAnimated ? "translate-x-1/2" : "translate-x-0"
          }`}
        >
          <div
            className={`overlay-left w-1/2 h-full absolute flex justify-center items-center top-0 transform transition duration-700 ease-in-out ${
              isAnimated ? "translate-x-0" : "-translate-x-[20%]"
            }`}
          >
            <LeftOverlay
              isAnimated={isAnimated}
              setIsAnimated={setIsAnimated}
            />
          </div>
          <div
            className={`overlay-right w-1/2 h-full absolute flex justify-center items-center top-0 right-0 transform transition duration-700 ease-in-out ${
              isAnimated ? "translate-x-[20%]" : "translate-x-0"
            }`}
          >
            <RightOverlay
              isAnimated={isAnimated}
              setIsAnimated={setIsAnimated}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
