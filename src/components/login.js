import './login.css';
function Login() {
    return (
        <div className="login">
            <input className="" type='text' placeholder="نام کاربری"></input>
            <input className="" type='password' placeholder="رمز عبور"></input>
            <button className="login-button">ورود به بخش مدیریت وبلاگ</button>
            <a href="#" id='forget-pass'>کلمه عبور خود را فراموش کردم</a>
        </div>
    )
}

export default Login;