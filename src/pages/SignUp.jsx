import "../styles/SignUp.css";
function SignUp() {
  return (
    <>
      <div className="container">
        <div className="sign-up j-flex">
          <div className="sing-up-form">
            <div className="heading">
              <h3>Join TuringSec </h3>
              <p>And Elevate Your Experience! Sign Up Today!</p>
            </div>
            <form className="sign-up-f j-flex">
              <div className="column1">
                <label htmlFor="name">First Name:</label>
                <input type="text" id="name" placeholder="Enter your name" />
                <label htmlFor="surname">Last Name:</label>
                <input
                  type="text"
                  id="surname"
                  placeholder="Enter your surname"
                />
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" placeholder="Enter your email" />
              </div>
              <div className="column2">
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter password"
                />
                <label htmlFor="c-password">Confirm Password:</label>
                <input
                  type="password"
                  id="c-password"
                  placeholder="Confirm your password"
                />
              </div>
              <button id="register-btn">Register</button>
            </form>
          </div>
          <div className="sign-up-img">
            <img
              src="https://www.chalmers.se/_next/image/?url=https%3A%2F%2Fcms.www.chalmers.se%2FMedia%2Fmb3hi4kn%2Fcoding-7-1920.jpg%3Fwidth%3D1920%26height%3D1080%26rnd%3D133293116108230000%26quality%3D60%26format%3Dwebp&w=3840&q=85"
              alt="image"
              className="photo7"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
