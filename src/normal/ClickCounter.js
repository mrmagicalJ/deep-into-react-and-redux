import React, { Component } from "react";

class ClickCounter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  onClickButton = () => {
    const { count } = this.state

    this.setState({
      count: count + 1
    })
  }

  render() {
    const { count } = this.state

    return (
      <div>
        <button onClick={this.onClickButton}>Click me</button>
        <div>Click count：{count}</div>
      </div>
    )
  }
}

export default ClickCounter
