import React, { Component } from "react";
import propTypes from "prop-types";

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: props.initValue
    }
    console.log(`enter constructor：${this.props.caption}`)
  }

  componentWillMount() {
    console.log(`enter componentWillMount：${this.props.caption}`)
  }
  componentDidMount() {
    console.log(`enter componentDidMount：${this.props.caption}`)
  }
  componentWillReceiveProps() {
    console.log(`enter componentWillReceiveProps：${this.props.caption}`)
  }

  onClickIncrementButton = () => {
    // const { count } = this.state

    // this.setState({
    //   count: count + 1
    // })
    this.updateCount(true)
  }

  onClickDecrementButton = () => {
    // const { count } = this.state

    // this.setState({
    //   count: count - 1
    // })
    this.updateCount(false)
  }

  updateCount(isIncrement) {
    const { count } = this.state
    const { onUpdate } = this.props
    const newCount = isIncrement ? count + 1 : count - 1

    this.setState({ count: newCount })
    onUpdate(newCount, count)
  }

  render() {
    const { caption } = this.props
    const { count } = this.state

    console.log(`enter render：${caption}`)

    return (
      <div>
        <button onClick={this.onClickIncrementButton}>+</button>
        <button onClick={this.onClickDecrementButton}>-</button>
        <div>Caption {caption}：{count}</div>
      </div>
    )
  }
}

Counter.propTypes = {
  caption: propTypes.string.isRequired,
  initValue: propTypes.number,
  onUpdate: propTypes.func
}

Counter.defaultProps = {
  initValue: 0,
  onUpdate: f => f // 默认是一个什么都不做的函数
}

export default Counter
