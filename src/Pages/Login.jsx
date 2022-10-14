//import { useContext } from "react"
//import { Navigate } from "react-router-dom"

// export default function Login() {

//   return (
//     <div className="bg-white text-secondaryColor  dark:text-white dark:bg-primaryColor">
//       <h2 className="flex justify-start font-bold text-3xl">Log In</h2>
//       <form className="ml-10" >
//         <div className="p-16 mt-48">
//         <div className="">
//           <label >Username
//             <input  className="pl-3 placeholder-neutral-900" placeholder="Enter your username" type="text" name="username" />
//           </label>
//         </div>
//         <div className="mt-6">
//           <label>Password
//             <input className="pl-3  placeholder-neutral-900" placeholder="Enter your password" type="password" name="password" />
//           </label>
//         </div>
//         <div className="pt-16">
//         <button className="border rounded-md border-black p-4 m-10" type="submit">Sign in</button>
//         </div>

//         </div>
//       </form>
//     </div>
//   )
// }

// import querystring from "querystring";


import spotify_icon from "../img/Spotify_icon.png"
export default function Login() {
 

  const searchParams = new URLSearchParams();
  searchParams.append("response_type", "code");
  searchParams.append("client_id", "1752a43ddabe4656a3551ab520423e3a");
  searchParams.append("scope", "user-read-private user-read-email");
  searchParams.append("redirect_uri", "http://localhost:8888/callback");
  searchParams.append("state", "qi4ur3980swd3ri21fvl21345");

  var queryParameters = searchParams.toString();

  return (
    <div className="bg-black h-screen  flex m-auto justify-center pt-60">
   
      <a href={`https://accounts.spotify.com/authorize?${queryParameters}`}>
        <img src={spotify_icon} alt="" className="w-20 h-20" />
        
      </a>
    </div>
  );
}
