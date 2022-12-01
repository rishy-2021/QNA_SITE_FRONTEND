const RightOverlay = ({ isAnimated, setIsAnimated }) => {
  return (
    <div className="p-8 text-center">
      <h1 className="text-6xl font-bold text-white mb-4">
        Don't have an account!
      </h1>

      <h5 className="text-xl text-white">
        Sign up and start a new journey today
      </h5>
      <div className=" flex py-3 items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="animate-bounce h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="white"
        >
          <path
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17 13l-5 5m0 0l-5-5m5 5V6"
          />
        </svg>
      </div>
      <div className="mt-0">
        <button
          className="py-2.5 px-5 bg-transparent rounded-lg text-center text-white font-bold uppercase ring-2 ring-white active:scale-110 transition-transform ease-in"
          onClick={(e) => {
            setIsAnimated(!isAnimated);
          }}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default RightOverlay;
