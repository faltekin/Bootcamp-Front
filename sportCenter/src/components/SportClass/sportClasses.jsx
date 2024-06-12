import "./sportClasses.css";

const SportClasses = () => {
  return (
    <section id="classes" className="classes-wrapper">
      <div className="classes-intro">
        <h2>OUR CLASSES</h2>
        <div className="highlight-box"></div>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className="button-container">
        <button className="class-button">Yoga</button>
        <button className="class-button">Group</button>
        <button className="class-button">Solo</button>
        <button className="class-button">Stretching</button>
      </div>
      <div className="class-content">
        <div className="class-info">
          <h2>Why are your Yoga?</h2>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="class-img">
          <img src="images/yoga.jpg" alt="Yoga Class" />
        </div>
      </div>
    </section>
  );
};

export default SportClasses;
