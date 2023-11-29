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
    </>
  );
}

export default Home;
