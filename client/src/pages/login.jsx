import React from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const Navigate = useNavigate();

  const handleSubmit = () => {
    Navigate("/otppage");
  };

  return (
    <div className="bg-gray-900 min-h-screen flex justify-center items-center font-sans text-white">
      <div className="max-w-sm p-8 rounded-lg shadow-lg">
        <h1 className="mb-4 text-3xl font-black">Login</h1>
        <p className="mb-4 text-lg">
          Let's do this! Start your free trial by filling in our simple form
          below. You will be hearing from us soon!
        </p>
        <form className="mb-4">
          <div className="mb-4">
            <label className="block text-sm font-semibold" htmlFor="email">
              E-mail
            </label>
            <input
              className="w-full py-2 px-3 rounded border text-black border-gray-700 focus:outline-none focus:border-blue-500"
              id="email"
              type="email"
              placeholder="Email"
              required
            />
          </div>

          <div className="mb-6">
            {/* <label className="flex items-center text-sm">
              <input type="checkbox" name="accept" className="mr-2" required />
              <span>
                I accept the
                <a href="#" className="text-white underline ml-1">
                  terms of use
                </a>
                and
                <a href="#" className="text-white underline ml-1">
                  privacy policy
                </a>
              </span>
            </label> */}
            <a href="/signup" className="text-white mt-10 underline ml-1">
              Signup Here
            </a>
          </div>
          <div className="flex justify-center">
            <button
              onClick={handleSubmit}
              className="bg-blue-600 text-white py-2 px-8 rounded-lg font-semibold"
              type="submit"
            >
              Send OTP
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;