function Login() {
    return (
        <div className="login">
            <form className="login-form">
                <h2 className="form-title">Login</h2>
                <div className="input-div">
                    <label htmlFor="email" className="input-label">Email</label>
                    <input id='email' type="email" className="input" />
                </div>
                <div className="input-div">
                    <label htmlFor="password" className="input-label">Password</label>
                    <input id="password" type="password" className="input" />
                </div>
                <button className="btn form-btn">Login</button>
            </form>
        </div>
    )
}

export default Login
