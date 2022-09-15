import { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";

export default function Auth({ setUser }) {
  const [isLoginMode, setIsLoginMode] = useState(true);

  return (
    <div className="bg-gray-800 w-screen h-screen grid content-center text-center">
      <div>
        <button 
          className={`text-gray-100 hover:bg-gray-700 hover:text-opacity-80 transition-colors rounded-md p-2 text-left mb-1 ${isLoginMode ? 'text-opacity-100 bg-gray-700' : 'text-opacity-60'}`}
          onClick={() => setIsLoginMode(true)}
        >
          Login
        </button>
        <button 
          className={`ml-5 text-gray-100 hover:bg-gray-700 hover:text-opacity-80 transition-colors rounded-md p-2 text-left mb-1 ${!isLoginMode ? 'text-opacity-100 bg-gray-700' : 'text-opacity-60'}`}
          onClick={() => setIsLoginMode(false)}
        >
          Signup
        </button>
        <br />
        <br />
        {isLoginMode ? <Login setUser={setUser} /> : <Signup setUser={setUser}/>}
      </div>
    </div>
  )
}