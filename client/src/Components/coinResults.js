import React from "react";
import "./Styles/coins.css";

class coinResults extends React.Component {
  render() {
    return (
      <div className="Landing__CoinOutput" id="Output">
        <div className="Landing__CoinOutput_values">
          <div className="Landing__CoinOutput--dollars common-CO-values">
            <div className="Landing__CoinOutput--dollars-label common-CO-labels">
              Silver-Dollar:
            </div>
            <div className="Landing__CoinOutput--value">
              {this.props.dollars}
            </div>
          </div>
          <div className="Landing__CoinOutput--hdollars value-light common-CO-values">
            <div className="Landing__CoinOutput--hdollars-label common-CO-labels">
              Half-Dollar:
            </div>
            <div className="Landing__CoinOutput--value">
              {this.props.hdollars}
            </div>
          </div>
          <div className="Landing__CoinOutput--quarters common-CO-values">
            <div className="Landing__CoinOutput--quarters-label common-CO-labels">
              Quarters:
            </div>
            <div className="Landing__CoinOutput--value">
              {this.props.quarters}
            </div>
          </div>
          <div className="Landing__CoinOutput--dimes value-light common-CO-values">
            <div className="Landing__CoinOutput--dimes-label common-CO-labels">
              Dimes:
            </div>
            <div className="Landing__CoinOutput--value">{this.props.dimes}</div>
          </div>
          <div className="Landing__CoinOutput--nickles common-CO-values">
            <div className="Landing__CoinOutput--nickles-label common-CO-labels">
              Nickles:
            </div>
            <div className="Landing__CoinOutput--value">
              {this.props.nickles}
            </div>
          </div>
          <div className="Landing__CoinOutput--pennies value-light common-CO-values">
            <div className="Landing__CoinOutput--pennies-label common-CO-labels">
              Pennies:
            </div>
            <div className="Landing__CoinOutput--value">
              {this.props.pennies}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default coinResults;
