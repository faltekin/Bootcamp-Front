import "./contact.css";

const Contact = () => {
  return (
    <div id="contact-wrapper">
      <div id="contact-intro">
        <h2>CONTACT US</h2>
        <div id="highlight-box"></div>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className="appointment-wrapper">
        <div id="appointment">
          <div id="contact-container">
            <div id="contact-top">
              <div id="mobile-number">
                <p>Mobile Number</p>
                <h5>+135 773 321 4442</h5>
              </div>
              <div id="e-mail">
                <p>Email Address</p>
                <h5>demo@demo.com</h5>
              </div>
            </div>
          </div>
          <h3>Make An Appointment</h3>
          <div className="text-contact">
            <input type="text" placeholder="Your Name" />
            <input type="text" placeholder="Your Email" />
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              placeholder="Your Message"
            ></textarea>
          </div>
        </div>
        <div id="map-wrapper">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d385396.32107273565!2d28.68253046522564!3d41.005370214106186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa7040068086b%3A0xe1ccfe98bc01b0d0!2zxLBzdGFuYnVs!5e0!3m2!1str!2str!4v1714216938551!5m2!1str!2str"
            width="100%"
            height="100%"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
export default Contact;