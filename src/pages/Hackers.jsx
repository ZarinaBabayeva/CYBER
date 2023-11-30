import "../styles/Hackers.css";
function Hackers() {
  return (
    <>
      <section className="top">
        <div className="container">
          <div className="heading">
            <h3>LeaderBoard</h3>
            <p>Check out the top performers.</p>
          </div>
          <div className="leader-list">
            <div className="leader j-flex">
              <h3>№</h3>
              <h3>Hacker</h3>
              <h3>Reputation</h3>
              <h3>Signal</h3>
              <h3>Impact</h3>
            </div>
            <div className="leader j-flex">
              <h3>1</h3>
              <div className="hacker j-flex">
                <img
                  src="https://static.toiimg.com/photo/83890812.cms"
                  alt="avatar"
                />
                <p>Alex Rodriguez</p>
              </div>
              <p>9238</p>
              <p>7.0</p>
              <p>14.97</p>
            </div>
            <div className="leader j-flex">
              <h3>2</h3>
              <div className="hacker j-flex">
                <img
                  src="https://cms.forbesafrica.com/wp-content/uploads/2023/10/instagram-daily-2023-10-01T183433.735.png"
                  alt="avatar"
                />
                <p> Sophia Smith</p>
              </div>
              <p>5037</p>
              <p>7.0</p>
              <p>26.50</p>
            </div>
            <div className="leader j-flex">
              <h3>3</h3>
              <div className="hacker j-flex">
                <img
                  src="data:image/jpeg;base64,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"
                  alt="avatar"
                />
                <p>Samuel William</p>
              </div>
              <p>4672</p>
              <p>7.0</p>
              <p>18.33</p>
            </div>
          </div>
        </div>
      </section>
      <section className="hackers-contact">
        <div className="container">
          <div className="heading">
            <h3>Speak with a Security Expert</h3>
            <p>
              We can help you detect and resolve vulnerabilities before they are
              exploited.
            </p>
          </div>
          <form className="security-expert j-flex">
            <div className="column1">
              <label htmlFor="name">First Name:</label>
              <input type="text" id="name" />
              <label htmlFor="surname">Last Name:</label>
              <input type="text" id="surname" />
              <label htmlFor="email">Business Email:</label>
              <input type="email" id="email" />
            </div>
            <div className="column2">
              <label htmlFor="company">Company:</label>
              <input type="text" id="company" />
              <label htmlFor="job">Job Title:</label>
              <input type="text" id="job" />
              <label htmlFor="country">Country:</label>
              <input type="text" id="country" />
            </div>
            <div className="column3">
              <div>
                <input type="radio" name="security" id="identify" />
                <label htmlFor="identify">
                  Identify and remediate vulnerabilities faster
                </label>
              </div>
              <div>
                <input type="radio" name="security" id="fix" />
                <label htmlFor="fix">
                  Fix security issues during development
                </label>
              </div>
              <div>
                <input type="radio" name="security" id="skillsets" />
                <label htmlFor="skillsets">
                  Scale my organization`s security operations or skillsets
                </label>
                <div>
                  <input type="radio" name="security" id="prove" />
                  <label htmlFor="prove">Prove compliance</label>
                </div>
                <div>
                  <input type="radio" name="security" id="cloud" />
                  <label htmlFor="cloud">
                    Eliminate cloud misconfigurations
                  </label>
                </div>
                <div>
                  <input type="radio" name="security" id="dont" />
                  <label htmlFor="dont">I don`t work in security </label>
                </div>
              </div>
              <button className="send-btn">Send</button>
            </div>
          </form>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="hack-for-good j-flex">
            <div className="hackers-image">
              <img
                src="https://img.freepik.com/premium-vector/attention-danger-hacking-neon-symbol-red-map-background-hack-attack-concept-system-hacked-error_213860-2772.jpg?w=2000"
                alt="hack for good"
                className="photo0"
              />
              <img
                src="https://online.stanford.edu/sites/default/files/styles/embedded_large/public/2019-07/hack-lab_INTLPOL268.jpg?itok=9wwhRzbR"
                alt="hack"
                className="photo1"
              />
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY0COJDPT5dmpxXCTHX2IvS6FPxZJHpm9Orw&usqp=CAU"
                alt="hack"
                className="photo2"
              />
            </div>
            <div className="hackers-text">
              <div className="heading">
                <h3>Hack for Good</h3>
                <p>Earn, Learn, and Secure the Internet</p>
              </div>
              <p>
                Welcome to a community that values ethical hacking as a force
                for positive change! At TuringSec, we champion the idea that
                hacking skills can be harnessed for good, offering opportunities
                to earn, learn, and actively contribute to a more secure
                internet.Unlock the potential to earn while making a positive
                impact. Ethical hackers are highly sought after, and our
                platform connects you with organizations that recognize and
                reward your skills through bug bounty programs. Contribute to
                the safety of online spaces and be financially acknowledged for
                your efforts.Continuous learning is at the heart of what we do.
                Whether you`re an experienced cybersecurity professional or just
                starting, our platform provides resources, challenges, and a
                supportive community for your growth. Stay updated on the latest
                threats, tools, and techniques to stay ahead in the
                ever-evolving world of cybersecurity.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hackers;
