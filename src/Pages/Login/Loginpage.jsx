import React, {useState} from 'react'
import "./LoginPage.css"
import Logo from "../../assets/logo.png"

const Loginpage = () => {

  const [signState, setSignState] = useState("Sign In");
  return (
    <div className="login">
    <img src={Logo} alt="" className='login-logo' />
    <div className="login-form">
    <h1>{signState}</h1>
    <form>
    {signState === "Sign Up" ?<input type="text" placeholder='Your Name' />: <></>} 
    
    <input type="email" placeholder='E-mail' />
    <input type="password" placeholder='Password' />
    <button>{signState}</button>
    <div className="form-help">
    <div className="remember">
    <input type="checkbox"  />
    <label htmlFor=""> Remember Me</label>
    </div>
    <p> Need help?</p>
    </div>
    </form>
    <div className="form-switch">
    {signState === "Sign In" ? <p>New to NetFlix <span onClick={()=> {setSignState("Sign Up")}}>Sign up Now</span></p> : <p>Already have an account? <span onClick={()=> {setSignState("Sign In")}}>Sign in Now</span></p> }
    </div>
    </div>
    </div>
  )
}

export default Loginpage