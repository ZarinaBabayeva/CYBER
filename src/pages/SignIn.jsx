import "../styles/SignIn.css";
function SignIn() {
  return (
    <>
      <div className="container">
        <div className="sign-in j-flex">
          <div className="sign-in-img">
            <img
              src="https://www.techfunnel.com/wp-content/uploads/2022/02/types-of-hackers.jpg"
              alt="hackers"
              className="photo6"
            />
          </div>
          <div className="sign-in-form">
            <div className="heading">
              <h3>Welcome Back!</h3>
              <p>
                Your journey continues here. Please sign in to access your
                account.
              </p>
            </div>
            <forn className="sign-in-f">
              <label htmlFor="user-name">Email:</label>
              <input
                type="email"
                id="user-name"
                placeholder="Enter your email"
              />
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
              />
              <button id="confirm-btn">Confirm</button>
            </forn>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignIn;
