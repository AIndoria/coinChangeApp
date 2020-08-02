import React from "react";
import "./Styles/coins.css";
import CoinResults from "./coinResults";

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
                title="Please enter a value in the format of x, xx, .xx, x.xx, x or xx.xx"
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
          <CoinResults
            dollars={this.state.changeReceived.dollars}
            hdollars={this.state.changeReceived.halfdollars}
            quarters={this.state.changeReceived.quarters}
            dimes={this.state.changeReceived.dimes}
            nickles={this.state.changeReceived.nickles}
            pennies={this.state.changeReceived.pennies}
          ></CoinResults>
        )}
      </div>
    );
  }
}

export default Coins;
