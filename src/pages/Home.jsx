import "../styles/Home.css";
function Home() {
  return (
    <>
      <section>
        <div className="container">
          <div className="hero j-flex">
            <div className="animation">
              <video
                src="../src/media/animation.mp4"
                alt="animation"
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
            <div className="hero-text">
              <div className="heading">
                <h3>
                  Reduce Exposure to Threats with the Attack Resistance Platform
                </h3>
                <p>
                  Take a preemptive stance on application security with attack
                  surface management, continual asset testing and security
                  coverage validation.
                </p>
              </div>
              <p>
                In an ever-evolving digital landscape, safeguarding your
                applications against potential threats is paramount. Embrace a
                preemptive stance on application security through the
                implementation of the Attack Resistance Platform. This robust
                platform is designed to fortify your defenses, reduce exposure
                to threats, and ensure the integrity of your digital assets.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="benefits">
        <div className="container">
          <div className="benefits-cards j-flex">
            <div className="benefits-card">
              <div className="front-card">
                <i className="fa-solid fa-bugs"></i>
                <h5>Proactive Threat Mitigation</h5>
              </div>
              <div className="back-card">
                <p>
                  Identify and mitigate potential threats before they can be
                  exploited.
                </p>
              </div>
            </div>
            <div className="benefits-card">
              <i className="fa-solid fa-magnifying-glass"></i>
              <h5>Continuous Monitoring</h5>
            </div>
            <div className="benefits-card">
              <i className="fa-solid fa-shield-halved"></i>
              <h5>Enhanced Resilience</h5>
            </div>
            <div className="benefits-card">
              <i className="fa-solid fa-certificate"></i>
              <h5>Compliance Assurance</h5>
            </div>
          </div>
        </div>
      </section>
      <section className="for-hackers">
        <div className="container">
          <div className="heading">
            <h3>For hackers</h3>
            <p>Earn money, learn skills, and attack-proof the internet.</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
