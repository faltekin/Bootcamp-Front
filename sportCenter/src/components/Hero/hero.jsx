import "./hero.css";

const Hero = () => {
  return (
    <div className="hero-wrapper">
      <div className="hero-content">
        <div className="text-content">
          <h2 className="hero-subtitle">POWERFUL</h2>
          <h1 className="hero-title">
            Group
            <br />
            Practice
            <br />
            With Trainer
          </h1>
          <p className="hero-description">
          Sed aliquet sapien eu est fermentum, sit amet condimentum turpis vehicula. Ut auctor libero nec nunc ultrices, at malesuada dolor condimentum. Nullam porta nunc vitae mi ultricies, a dapibus ipsum varius. Duis ultrices nisi at nisl euismod, eget fringilla purus vestibulum.
          </p>
          <div className="hero-buttons">
            <button className="signup-btn">Sign Up</button>
            <button className="details-btn">Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
