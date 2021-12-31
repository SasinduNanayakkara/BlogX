import React from 'react'
const Login = () => {

    const google = () =>{
        window.open("http://localhost:5000/auth/google", "_self");
    }
    const github = () =>{
        window.open("http://localhost:5000/auth/github", "_self");
    }
    const facebook = () =>{
        window.open("http://localhost:5000/auth/facebook", "_self");
    }
    return (
        <div className='login'>
            <h1 className="loginTitle">Choose a login Method</h1>
            <div className="wrapper">
                <div className="left">
                    <div className="loginButton google" onClick={google}>
                    <i class="fab fa-google"></i>
                    &nbsp;&nbsp;Google
                    </div>
                    <div className="loginButton facebook" onClick={facebook}>
                    <i class="fab fa-facebook"></i>
                    &nbsp;&nbsp;Facebook
                    </div>
                    <div className="loginButton github" onClick={github}>
                    <i class="fab fa-github"></i>
                    &nbsp;&nbsp;Github
                    </div>
                </div>
                <div className="center">
                    <div className="line"/>
                    <div className="or">OR</div>
                </div>
                <div className="right">
                    <input type="text" name="username" placeholder='username' id="" />
                    <input type="text" name="password" placeholder='password' id="" />
                    <button className="submit">Login</button>
                </div>
            </div>
        </div>
    )
}

export default Login
