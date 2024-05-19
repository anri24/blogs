import { useRef, useState } from "react";
import { useStateContext } from "../contexts/ContextProvider";
import axiosClient from "../axios-client";

function Register() {
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();

    const [errors, setErrors] = useState(null)

    const {setUser, setToken} = useStateContext();
    
    const register = (e) => {        
        e.preventDefault();
        const payload = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            password_confirmation: confirmPasswordRef.current.value,
        }

        axiosClient.post('/register', payload)
        .then(({data}) => {
            setUser(data.user);
            setToken(data.token);
        })
        .catch(err => {
            const response = err.response;
            if(response && response.status === 422){
                setErrors(response.data.errors)
                console.log(response.data)
            }
        })
    }


    return (
        <div className="login">
        <form onSubmit={register} className="login-form">
            <h2 className="form-title">Registration</h2>
            <div className="input-div">
                <label htmlFor="username" className="input-label">username</label>
                <input ref={nameRef} id='username' type="text" className="input" />
                {errors && errors.name && <span className="error">{errors.name}</span>}
            </div>
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
            <div className="input-div">
                <label htmlFor="password_confirmation" className="input-label">Confirm Password</label>
                <input ref={confirmPasswordRef} id="password_confirmation" type="password" className="input" />
            </div>
            <button className="btn form-btn">Login</button>
        </form>
    </div>
    )
}

export default Register
