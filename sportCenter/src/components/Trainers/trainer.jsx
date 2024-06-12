import "./trainer.css";

const Trainer = () => {
  return (
    <section id="trainers" className="trainer-wrapper">
      <div className="trainer-header">
        <h2>OUR BEST TRAINERS</h2>
        <div className="highlight-bar"></div>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nullam venenatis urna ut nisl varius, sit amet ultrices enim fermentum.
        </p>
      </div>
      <div className="trainer-list">
        <div className="card">
          <img src="./images/trainer1.jpg" alt="trainer" />
          <div className="overlay"></div>
          <div className="trainer-details">
            <div className="details-background">
              <h3>Esin</h3>
              <h4>Cardio Trainer</h4>
              <div className="accent-box"></div>
            </div>
          </div>
        </div>
        <div className="card">
          <img src="./images/trainer2.jpg" alt="trainer" />
          <div className="overlay"></div>
          <div className="trainer-details">
            <div className="details-background">
              <h3>Sefa</h3>
              <h4>Cardio Trainer</h4>
              <div className="accent-box"></div>
            </div>
          </div>
        </div>
        <div className="card">
          <img src="./images/trainer3.jpg" alt="trainer" />
          <div className="overlay"></div>
          <div className="trainer-details">
            <div className="details-background">
              <h3>Jane</h3>
              <h4>Cardio Trainer</h4>
              <div className="accent-box"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trainer;
