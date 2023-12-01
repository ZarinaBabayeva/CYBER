import "../styles/Contact.css";
function Contact() {
  return (
    <>
      <div className="container">
        <div className="contact-us j-flex">
          <div className="contact-us-info">
            <div id="phone">
              <i className="fa-solid fa-mobile-screen-button"></i>
              <p>+994(00)000 00 00</p>
            </div>
            <div id="mail">
              <i className="fa-regular fa-envelope"></i>
              <p>turingsec@gmail.com</p>
            </div>
            <div id="location">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d194473.18588939894!2d49.8549596!3d40.394592499999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d6bd6211cf9%3A0x343f6b5e7ae56c6b!2zQmFrw7w!5e0!3m2!1str!2saz!4v1701433386602!5m2!1str!2saz"
                allowfullscreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div className="contact-us-box">
            <div className="heading">
              <h3>Contact Us</h3>
              <p>
                Have questions, suggestions, or just want to say hello? We`d
                love to hear from you! Feel free to reach out!
              </p>
            </div>
            <form className="contact-us-f">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" placeholder="Enter your name" />
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                placeholder="Enter a valid email adress"
              />
              <label htmlFor="message">Your message:</label>
              <textarea id="message" cols="70" rows="5"></textarea>
              <button className="send-btn">Send</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
