import Navigation from "../../Components/Navigation"


const ErrorPage = () => {
  return (
    <>
    <Navigation/>
    <div className="container">
    <div className="errorLeft d-flex">
       <div className="404 align-center justify-center">
       <h1>404</h1>
       <p>We are sorry, but the page you requested was not found</p>
        <button>Back To Home</button>
        </div>
        <div className="errorRight">
          <img src="./errorPage.jpg" alt="" />
        </div>
    </div>
    </div>
    
    </>
  )
}

export default ErrorPage