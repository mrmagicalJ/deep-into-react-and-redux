import React, { Component } from "react";
import Counter from "./Counter";

class ControlPanel extends Component {
  constructor(props) {
    super(props)

    this.initValues = [0, 10, 20]
    const initSum = this.initValues.reduce((acc, cur) => acc + cur)
  
    this.state = {
      sum: initSum
    }
  }

  onCounterUpdate = (newVal, prevVal) => {
    const { sum } = this.state
    const valChange = newVal - prevVal

    this.setState({
      sum: sum + valChange
    })
  }

  render() {
    const { initValues } = this
    const { sum } = this.state

    return (
      <div>
        <Counter caption="First" onUpdate={this.onCounterUpdate} />
        <Counter caption="Second" initValue={initValues[1]} onUpdate={this.onCounterUpdate} />
        <Counter caption="Third" initValue={initValues[2]} onUpdate={this.onCounterUpdate} />
        <button onClick={() => this.forceUpdate()}>Click me to repaint!</button>
        <div>Total Count：{sum}</div>
      </div>
    )
  }
}

export default ControlPanel
