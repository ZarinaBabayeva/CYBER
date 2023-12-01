import "../styles/About.css";
function About() {
  return (
    <>
      <section>
        <div className="container">
          <div className="about-site j-flex">
            <div className="about-site-text">
              <div className="heading">
                <h3>Welcome to TuringSec!</h3>
                <p>
                  At TuringSec, we prioritize the security of our systems and
                  products. We believe that collaboration with the global
                  community of security researchers and ethical hackers is
                  essential to maintaining a robust cybersecurity posture.
                </p>
              </div>
              <p>
                At TuringSec, security is at the core of everything we do. We
                recognize the importance of a strong cybersecurity posture and
                believe that collaboration with the global security community is
                essential. Our Bug Bounty Program invites skilled ethical
                hackers and security researchers to help us identify and rectify
                potential vulnerabilities in our systems.
              </p>
            </div>
            <div className="about-site-image">
              <img
                src="https://img.freepik.com/free-vector/secure-login-concept-illustration_114360-4511.jpg"
                alt="image"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="back-img">
        <div className="logo-container j-flex">
          <img
            src="../src/media/icons8-cyber-64.png"
            alt="logo"
            className="logo-img"
          />
          <h2 className="logo">TuringSec</h2>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="participate j-flex">
            <div className="participate-text">
              <div className="heading">
                <h3>Why Participate in TuringSec Bug Bounty Site?</h3>
              </div>
            </div>
            <div className="participate-gif">
              <img
                src="https://cloudbridgesolution.com/hs-fs/hubfs/Cloudbridge-website/Security.gif?width=1400&height=1400&name=Security.gif"
                alt="gif"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
