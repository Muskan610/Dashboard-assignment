import React, { Component } from "react";

export class form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      comments: "",
    };
  }
  handleUSernameChange = (event) => {
    this.setState({
      username: event.target.value,
    });
  };
  handleCommentsChange = (event) => {
    this.setState({
      comments: event.target.value,
    });
  };
  handleSubmit= (event) => {
    alert(`${this.state.username} ${this.state.comments}`)
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Username</label>
          <input
            type="text"
            value={this.state.username}
            onChange={this.handleUSernameChange}
          />
        </div>
        <div>
          <label>Comments</label>
          <textarea
            value={this.state.comments}
            onChange={this.handleCommentsChange}
          ></textarea>
        </div>
        <button type="submit"> submit</button>
      </form>
    );
  }
}

export default form;
