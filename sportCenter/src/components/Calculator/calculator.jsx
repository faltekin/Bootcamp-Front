import "./calculator.css";

const Calculator = () => {
  return (
    <div className="calculator-wrapper">
      <div className="calculator-top">
        <h2>BMI Calculator</h2>
        <p className="bmi-calc-p">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam venenatis urna ut nisl varius, sit amet ultrices enim fermentum.
        </p>
        <p className="bmi-calc-p">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam venenatis urna ut nisl varius, sit amet ultrices enim fermentum.
        </p>
        <div className="calculator-container-inner">
          <div className="height-input">
            <input type="text" placeholder="Your Height" />
            <p>cm</p>
          </div>
          <div className="weight-input">
            <input type="text" placeholder="Your Weight" />
            <p>kg</p>
          </div>
        </div>
      </div>
      <div className="calculator-bottom">
        <img src="./images/bmi-index.jpg" alt="bmi-index" />
        <div className="result" id="result"></div>
      </div>
    </div>
  );
};
export default Calculator;
