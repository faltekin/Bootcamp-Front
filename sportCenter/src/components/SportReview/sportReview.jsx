import "./sportReview.css";

const SportReview = () => {
  return (
    <section id="reviews" className="review-wrapper">
      <header className="review-header">
        <h2>REVIEW CLIENT</h2>
        <div className="highlight-box"></div>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae justo nec arcu elementum gravida at at ligula.
        </p>
      </header>
      <div className="review-list">
        <div className="card">
          <div className="client-details">
            <img src="./images/client1.jpg" alt="client" />
            <div className="text-details">
              <h4>Diet Expert</h4>
              <h5>CFO</h5>
            </div>
          </div>
          <div className="review-text">
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget velit eget justo lobortis rutrum. Nullam quis sapien vitae velit tempor vehicula. Ut fermentum leo eget sapien dignissim, eu auctor libero.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="client-details">
            <img src="./images/client2.jpg" alt="client" />
            <div className="text-details">
              <h4>Cardio Trainer</h4>
              <h5>CEO</h5>
            </div>
          </div>
          <div className="review-text">
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget ex vel urna consequat ultricies. Proin eget diam id risus feugiat ultricies nec non lectus. Curabitur vel turpis id est dictum consequat eu sed odio.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SportReview;
