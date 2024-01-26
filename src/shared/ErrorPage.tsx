import { Link } from "react-router-dom"


export const ErrorPage = () => {
  return (
    <div className=" flex flex-col justify-center items-center my-auto h-dvh " >
        <h1 className=" text-indigo-600 text-10xl font-bold ">404</h1>
        <p className="text-black font-thin text-3xl italic">Page Not Found 🔌</p>
        <br />
          <Link className="font-semibold rounded-full bg-indigo-500 p-3 text-white outline-offset-0 focus:outline-none hover:bg-indigo-400" to="/">Go Home</Link>
    </div>
  )
}
