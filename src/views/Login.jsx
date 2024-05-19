import { useRef, useState } from "react";
import axiosClient from "../axios-client";
import { useStateContext } from "../contexts/ContextProvider";

function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();
    
    const [errors, setErrors] = useState(null);

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
        .catch(err => {
            const response = err.response;
            if (response && response.status === 422){
                if (response.data.errors){
                    setErrors(response.data.errors)
                } else {
                    setErrors({
                        email: [response.data.message]
                    })
                }
            }
        })
    }

    return (
        <div className="login">
            <form onSubmit={login} className="login-form">
                <h2 className="form-title">Login</h2>
                <div className="input-div">
                    <label htmlFor="email" className="input-label">Email</label>
                    <input ref={emailRef} id='email' type="email" className="input" />
                    {errors && errors.email && <span className="error">{errors.email}</span>}

                </div>
                <div className="input-div">
                    <label htmlFor="password" className="input-label">Password</label>
                    <input ref={passwordRef} id="password" type="password" className="input" />
                    {errors && errors.password && <span className="error">{errors.password}</span>}

                </div>
                <button className="btn form-btn">Login</button>
            </form>
        </div>
    )
}

export default Login
