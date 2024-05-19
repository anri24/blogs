import { useRef } from "react";
import axiosClient from "../axios-client";
import { useStateContext } from "../contexts/ContextProvider";

function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();

    const {setUser, setToken} = useStateContext();

    function login(e){
        e.preventDefault();
        const payload = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
        }

        axiosClient.post('/login', payload)
        .then(({data}) => {
            setUser(data.user);
            setToken(data.token);
        })
    }

    return (
        <div className="login">
            <form onSubmit={login} className="login-form">
                <h2 className="form-title">Login</h2>
                <div className="input-div">
                    <label htmlFor="email" className="input-label">Email</label>
                    <input ref={emailRef} id='email' type="email" className="input" />
                </div>
                <div className="input-div">
                    <label htmlFor="password" className="input-label">Password</label>
                    <input ref={passwordRef} id="password" type="password" className="input" />
                </div>
                <button className="btn form-btn">Login</button>
            </form>
        </div>
    )
}

export default Login
