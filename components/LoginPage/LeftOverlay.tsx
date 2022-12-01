const LeftOverlay = ({ isAnimated, setIsAnimated }) => {
  return (
    <div className="p-8 text-center">
      <h1 className="text-6xl font-bold text-white mb-4">Welcome, back!</h1>

      <h5 className="text-xl text-gray-200">
        Sign In with your existing credential
      </h5>
      <div className="mt-10">
        <button
          className="py-2.5 px-5 bg-transparent rounded-lg text-center text-white font-bold uppercase ring-2 ring-white active:scale-110 transition-transform ease-in"
          onClick={(e) => {
            setIsAnimated(!isAnimated);
          }}
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

export default LeftOverlay;
