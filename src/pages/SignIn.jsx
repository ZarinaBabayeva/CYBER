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
              className="photo0"
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
              <label htmlFor="user-name">User Name:</label>
              <input type="text" id="user-name" />
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" />
              <button id="confirm-btn">Confirm</button>
            </forn>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignIn;
