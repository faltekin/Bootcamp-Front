import "./purchase.css";

const Purchase = () => {
  return (
    <section className="purchase-wrapper">
      <div className="purchase-intro">
        <h2>PURCHASE FROM US</h2>
        <div className="highlight-box"></div>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="purchase-list">
        <div className="purchase-card">
          <img src="./images/purchase1.jpg" alt="purchase-image" />
          <h3>Kettlebell / 5kg</h3>
          <h4>
            <span>89,99$</span> / 59,99$
          </h4>
          <div className="shopping-container">
            <i className="fas fa-shopping-cart"></i>
            <h5>Add To Cart</h5>
            <div></div>
          </div>
        </div>
        <div className="purchase-card">
          <img src="./images/purchase2.jpg" alt="purchaseImage" />
          <h3>Treadmill</h3>
          <h4>
            <span>899,99$</span> / 599,99$
          </h4>
          <div className="shopping-container">
            <i className="fas fa-shopping-cart"></i>
            <h5>Add To Cart</h5>
            <div></div>
          </div>
        </div>
        <div className="purchase-card">
          <img src="./images/purchase3.jpg" alt="purchaseImage" />
          <h3>Adjustable Dumbell</h3>
          <h4>
            <span>89,99$</span> / 59,99$
          </h4>
          <div className="shopping-container">
            <i className="fas fa-shopping-cart"></i>
            <h5>Add To Cart</h5>
            <div></div>
          </div>
        </div>
        <div className="purchase-card">
          <img src="./images/purchase4.jpg" alt="purchaseImage" />
          <h3>Kettlebell / 3kg</h3>
          <h4>
            <span>89,99$</span> / 59,99$
          </h4>
          <div className="shopping-container">
            <i className="fas fa-shopping-cart"></i>
            <h5>Add To Cart</h5>
            <div></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Purchase;
