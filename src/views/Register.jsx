function Register() {
    return (
        <div className="login">
        <form className="login-form">
            <h2 className="form-title">Registration</h2>
            <div className="input-div">
                <label htmlFor="username" className="input-label">username</label>
                <input id='username' type="text" className="input" />
            </div>
            <div className="input-div">
                <label htmlFor="email" className="input-label">Email</label>
                <input id='email' type="email" className="input" />
            </div>
            <div className="input-div">
                <label htmlFor="password" className="input-label">Password</label>
                <input id="password" type="password" className="input" />
            </div>
            <div className="input-div">
                <label htmlFor="password_confirmation" className="input-label">Confirm Password</label>
                <input id="password_confirmation" type="password" className="input" />
            </div>
            <button className="btn form-btn">Login</button>
        </form>
    </div>
    )
}

export default Register
