import React from "react";

class Coins extends React.Component {
  constructor(props) {
    super(props);
    this.handleValueChange = this.handleValueChange.bind(this);
    this.state = {
      coinsSum: 0,
      changeReceived: [],
      isLoaded: false,
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
    return (
      <div>
        <h2>Coiny McCoinFace</h2>
        <form onSubmit={this.handleSubmission.bind(this)}>
          <label>
            Value:
            <input
              type="text"
              name="val"
              pattern="[0-9]*[.]?[0-9]{0,2}"
              value={this.state.coinsSum}
              onChange={this.handleValueChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <div>{this.state.coinsSum}</div>
        <div>{this.state.changeReceived.dollars}</div>
        <div>{this.state.changeReceived.halfdollars}</div>
        <div>{this.state.changeReceived.quarters}</div>
        <div>{this.state.changeReceived.dimes}</div>
        <div>{this.state.changeReceived.nickles}</div>
        <div>{this.state.changeReceived.pennies}</div>
      </div>
    );
  }
}

export default Coins;
