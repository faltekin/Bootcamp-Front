import "./header.css";

const Header = () => {
  return (
    <div className="header-wrapper">
      <img className="site-logo" src="images/logo.png" alt="logo" />
      <nav className="menu-container">
        <ul className="menu-items">
          <li className="menu-item">
            <a href="#hero">Home</a>
          </li>
          <li className="menu-item">
            <a href="#classes">Classes</a>
          </li>
          <li className="menu-item">
            <a href="#trainers">Trainer</a>
          </li>
          <li className="menu-item">
            <a href="#reviews">Review</a>
          </li>
          <li className="menu-item">
            <a href="#contact-wrapper">Contact</a>
          </li>
        </ul>
        <div className="join-section">
          <a href="#join">JOIN US</a>
        </div>
      </nav>
    </div>
  );
};

export default Header;
