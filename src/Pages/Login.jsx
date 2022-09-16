import { useContext } from "react"
import { Navigate } from "react-router-dom"

export default function Login() {


  return (
    <div className=" text-fuchsia-900 ">
      <h1 className="flex justify-start font-bold text-3xl">Log In</h1>
      <form className="ml-10" >
        <div className="p-16 mt-48">
        <div className="">
          <label >Username
            <input  className="pl-3 border-black border placeholder-neutral-900" placeholder="Enter your username" type="text" name="username" />
          </label>
        </div>
        <div className="mt-6">
          <label>Password
            <input className="pl-3 border-black border placeholder-neutral-900" placeholder="Enter your password" type="password" name="password" />
          </label>
        </div>
        <div className="pt-16">
        <button className="border rounded-md border-black p-4 m-10" type="submit">Sign in</button>
        </div>
        
        </div>
      </form>
    </div>
  )
}

