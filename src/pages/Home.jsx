import "../styles/Home.css";
import { NavLink } from "react-router-dom";
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
              <div className="front-card">
                <i className="fa-solid fa-magnifying-glass"></i>
                <h5>Continuous Monitoring</h5>
              </div>
              <div className="back-card">
                <p>
                  Enjoy peace of mind with continuous monitoring of your
                  application landscape.
                </p>
              </div>
            </div>
            <div className="benefits-card">
              <div className="front-card">
                <i className="fa-solid fa-shield-halved"></i>
                <h5>Enhanced Resilience</h5>
              </div>
              <div className="back-card">
                <p>
                  Bolster the resilience of your applications against evolving
                  cyber threats.
                </p>
              </div>
            </div>
            <div className="benefits-card">
              <div className="front-card">
                <i className="fa-solid fa-certificate"></i>
                <h5>Compliance Assurance</h5>
              </div>
              <div className="back-card">
                <p> Meet regulatory requirements with confidence. </p>
              </div>
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
          <div className="about-hackers j-flex">
            <div className="hackers-text">
              <h3>Hack for Good: Earn, Learn, and Secure the Internet</h3>
              <p>
                Welcome to a community that values ethical hacking as a force
                for positive change! At TuringSec, we champion the idea that
                hacking skills can be harnessed for good, offering opportunities
                to earn, learn, and actively contribute to a more secure
                internet.
              </p>
              <h3>Earn Money Ethically</h3>
              <p>
                Unlock the potential to earn while making a positive impact.
                Ethical hackers are highly sought after, and our platform
                connects you with organizations that recognize and reward your
                skills through bug bounty programs.
              </p>
              <h3>Learn and Grow</h3>
              <p>
                Continuous learning is at the heart of what we do. Whether
                you`re an experienced cybersecurity professional or just
                starting, our platform provides resources, challenges, and a
                supportive community for your growth.
              </p>
              <h3>Hack for Good</h3>
              <p>
                TuringSec encourages hacking for positive impact. Let`s redefine
                the narrative surrounding hacking by channeling our skills
                toward protecting user data, fortifying digital infrastructure,
                and ensuring a safer online environment for everyone.
              </p>
            </div>
            <div className="hackers-img">
              <img
                src="https://media.npr.org/assets/img/2020/03/25/gettyimages-1175885065_custom-c9bd267a1487d39cf0e54cdf05eaeda6dbed59ec-s1100-c50.jpg"
                alt="hackers"
                className="photo0"
              />
              <img
                src="https://www.hackerone.com/sites/default/files/2023-10/Blog%20Header_Young%20Hackers%20Are%20Hacking%20For%20Good.png"
                alt="hakcers"
                className="photo1"
              />
              <img
                src="https://assets-global.website-files.com/62a42b5da3f817736cf48d21/632d6b5d99d27152236f0dcd_domain-hacking.webp"
                alt="hackers"
                className="photo2"
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="heading">
            <h3>News</h3>
            <p>Explore our knowledge base.</p>
          </div>
          <div className="news-cards j-flex">
            <NavLink className="news-card">
              <div className="news-card-img">
                <img
                  src="https://github.blog/wp-content/uploads/2023/10/Security_banner-OG.jpg?resize=800%2C425"
                  alt="image"
                />
              </div>
              <div className="news-card-text">
                <p>Successful Bug Bounty Campaign</p>
                <small>
                  Our recent bug bounty campaign concluded with tremendous
                  success! A big thank you to all the security researchers who
                  participated and helped make our systems more secure. Your
                  dedication and expertise are invaluable to our ongoing
                  commitment to cybersecurity.
                </small>
                <p className="date">Date:</p>
                <small>December 1, 2023</small>
              </div>
            </NavLink>
            <NavLink className="news-card">
              <div className="news-card-img">
                <img
                  src="https://www.freecodecamp.org/news/content/images/2019/11/bug.png"
                  alt="image"
                />
              </div>
              <div className="news-card-text">
                <p>New Bug Bounty Program Launched</p>
                <small>
                  We`re thrilled to announce the launch of our latest bug bounty
                  program! Ethical hackers and security researchers are invited
                  to participate in helping us identify and address potential
                  vulnerabilities. Your contributions play a crucial role in
                  enhancing our cybersecurity defenses.
                </small>
                <p className="date">Date:</p>
                <small>November 15, 2023</small>
              </div>
            </NavLink>
            <NavLink className="news-card">
              <div className="news-card-img">
                <img
                  src="https://miro.medium.com/v2/resize:fit:1200/1*MP_DQbKRZe_h8LUwPTzhEQ.png"
                  alt="image"
                />
              </div>
              <div className="news-card-text">
                <p>Upcoming Bug Bounty Challenges</p>
                <small>
                  Exciting news! Brace yourselves for upcoming bug bounty
                  challenges. We`ll be introducing new targets and rewards,
                  providing opportunities for security researchers to contribute
                  to our ongoing efforts in strengthening our cybersecurity
                  defenses. Stay tuned for more details!
                </small>
                <p className="date">Date:</p>
                <small>November 5, 2023</small>
              </div>
            </NavLink>
            <NavLink className="news-card">
              <div className="news-card-img">
                <img
                  src="https://son-images.imgix.net/news/2023/lghazal-wci"
                  alt="image"
                />
              </div>
              <div className="news-card-text">
                <p>Top Researchers Recognized</p>
                <small>
                  Celebrating the exceptional efforts of our top bug bounty
                  researchers! We`ve recognized and rewarded the outstanding
                  contributions of individuals who have consistently
                  demonstrated their expertise in identifying and responsibly
                  disclosing security vulnerabilities.
                </small>
                <p className="date">Date:</p>
                <small>October 20, 2023</small>
              </div>
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
