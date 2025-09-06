import { useState } from "react";

const Login = () => {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const submitHandler = (e) => {
        e.preventDefault();
        console.log("Email:", email);
        console.log("Password:", password);
        setEmail("");
        setPassword("");
    }

  return (
    <div className="flex h-screen w-screen justify-center items-center">
        <div className="border-2 border-emerald-600 p-20 rounded-xl">
            <form onSubmit={(e)=> {
                submitHandler(e)
            }} className="flex flex-col items-center justify-center">
                <input value={email} onChange={(e)=>{
                    setEmail(e.target.value)
                }} required className="outline-none border-2 bg-transparent border-emerald-600 text-xl py-3 px-5 rounded-full" type="email" placeholder="Enter your email" />
                <input 
                value={password}
                onChange={(e)=>{
                    setPassword(e.target.value)
                }}
                required className="outline-none border-2 bg-transparent border-emerald-600 text-xl py-3 px-5 rounded-full mt-3" type="password" placeholder="Enter your password" />
                <button className="border-none border-2 bg-emerald-600 text-xl py-3 px-5 rounded-full mt-5" >Login</button>
            </form>
        </div>
    </div>
  )
}
export default Login