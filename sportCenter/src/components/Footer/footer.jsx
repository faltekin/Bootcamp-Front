import "./footer.css";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <img src="./images/logo.png" alt="logo" />
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
      </p>
      <div className="footer-container">
        <div className="info-section">
          <h3>Information</h3>
          <h4>About Us</h4>
          <h4>Classes</h4>
          <h4>Blog</h4>
          <h4>Contact</h4>
        </div>
        <div className="links-section">
          <h3>Helpful Links</h3>
          <h4>Services</h4>
          <h4>Supports</h4>
          <h4>Terms & Condition</h4>
          <h4>Privacy Policy</h4>
        </div>
      </div>
    </div>
  );
};

export default Footer;
