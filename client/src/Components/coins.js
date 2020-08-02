import React from "react";
import "./Styles/coins.css";

class Coins extends React.Component {
  constructor(props) {
    super(props);
    this.handleValueChange = this.handleValueChange.bind(this);
    this.state = {
      coinsSum: 0,
      changeReceived: [],
      isHidden: true,
    };
  }

  handleValueChange = (e) => {
    this.setState({ coinsSum: e.target.value });
  };

  handleSubmission = (e) => {
    e.preventDefault();
    const sendInputData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
    };
    fetch("/coinvalue", sendInputData);
    fetch("/api/sum")
      .then((res) => res.json())
      .then((jsonData) => {
        this.setState({
          isLoaded: true,
          changeReceived: jsonData,
        });
        console.log(this.state.changeReceived);
      });
  };

  render() {
    const { isHidden } = this.state;

    return (
      <div className="Landing">
        <div className="Landing__CoinInput">
          <div className="Landing__Heading">
            <h2>Change Counter</h2>
          </div>
          <form
            className="Landing__CoinInput_form"
            onSubmit={this.handleSubmission.bind(this)}
          >
            <label className="Landing__CoinInput--label">
              Please enter a sum:
            </label>
            <div className="Landing__CoinInput--inputField">
              <input
                type="text"
                name="val"
                pattern="[0-9]*[.]?[0-9]{0,2}"
                value={this.state.coinsSum}
                onChange={this.handleValueChange}
              />
            </div>
            <div className="Landing__CoinInput--populatedCurrency">
              <span>Change will be shown for: ${this.state.coinsSum}</span>
            </div>
            <div className="Landing__CoinInput--submit">
              <input
                type="submit"
                value="Submit"
                onClick={() => this.setState({ isHidden: false })}
              />
            </div>
          </form>
        </div>

        {isHidden ? null : (
          <div className="Landing__CoinOutput" id="Output">
            <div className="Landing__CoinOutput_values">
              <div className="Landing__CoinOutput--dollars common-CO-values">
                <div className="Landing__CoinOutput--dollars-label common-CO-labels">
                  Silver-Dollar:
                </div>
                <div className="Landing__CoinOutput--value">
                  {this.state.changeReceived.dollars}
                </div>
              </div>
              <div className="Landing__CoinOutput--hdollars value-light common-CO-values">
                <div className="Landing__CoinOutput--hdollars-label common-CO-labels">
                  Half-Dollar:
                </div>
                <div className="Landing__CoinOutput--value">
                  {this.state.changeReceived.halfdollars}
                </div>
              </div>
              <div className="Landing__CoinOutput--quarters common-CO-values">
                <div className="Landing__CoinOutput--quarters-label common-CO-labels">
                  Quarters:
                </div>
                <div className="Landing__CoinOutput--value">
                  {this.state.changeReceived.quarters}
                </div>
              </div>
              <div className="Landing__CoinOutput--dimes value-light common-CO-values">
                <div className="Landing__CoinOutput--dimes-label common-CO-labels">
                  Dimes:
                </div>
                <div className="Landing__CoinOutput--value">
                  {this.state.changeReceived.dimes}
                </div>
              </div>
              <div className="Landing__CoinOutput--nickles common-CO-values">
                <div className="Landing__CoinOutput--nickles-label common-CO-labels">
                  Nickles:
                </div>
                <div className="Landing__CoinOutput--value">
                  {this.state.changeReceived.nickles}
                </div>
              </div>
              <div className="Landing__CoinOutput--pennies value-light common-CO-values">
                <div className="Landing__CoinOutput--pennies-label common-CO-labels">
                  Pennies:
                </div>
                <div className="Landing__CoinOutput--value">
                  {this.state.changeReceived.pennies}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Coins;
