'use client' 
import { signIn } from "next-auth/react";
import Image from "next/image";

function Login() {
  return (
    

        <div className="bg-[#11A37F] justify-center h-screen flex flex-col items-center text-center">
                   <Image
        src="https://chromeunboxed.com/wp-content/uploads/2022/12/ChatGPT-Feature-1200x900.png"
        width={200}
        height={200}
        alt="me"
      /> 
      <button 
      onClick={()=>signIn("google")}
      className="text-white font-bold text-3xl animate-pulse"
      >
        Sign in to use chatGPT
      </button>
      </div>
        
  );
}

export default Login;