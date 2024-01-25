import { Link } from "react-router-dom"


export const ErrorPage = () => {
  return (
    <div className="error-page" >
        <h1 >404</h1>
        <p >Page Not Found</p>
        <br />
          <Link className="" to="/">Go Home</Link>
    </div>
  )
}
