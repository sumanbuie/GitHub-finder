import React, { Component } from "react";

export class Form extends Component {
  state = {
    text: "",
  };
  onChange = (event) => {
    this.setState({ [[event.target.name]]: event.target.value });
  };
  onSubmit = (event) => {
    event.preventDefault();
    if (this.state.text === "") {
      this.props.setAlert("You have to type something!!!", "danger");
    } else {
      this.props.search(this.state.text);
      this.setState({ text: "" });
    }
  };
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} className="form">
          <input
            type="text"
            name="text"
            value={this.state.text}
            onChange={this.onChange}
            placeholder="search a profile..."
          />
          <input
            type="submit"
            name="submit"
            className="btn btn-dark btn-block"
          />
        </form>
        {this.props.btnLoad ? (
          <button
            onClick={this.props.clearSearch}
            className="btn btn-light btn-block "
          >
            Clear
          </button>
        ) : (
          <div></div>
        )}
      </div>
    );
  }
}

export default Form;
