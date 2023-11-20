// Write your code here
import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  onIncrement = () => {
    const {count} = this.state

    if (count < 200) {
      this.setState(prevState => ({count: prevState.count + 10}))
    }
  }

  onDecrement = () => {
    const {count} = this.state

    if (count > 0) {
      this.setState(prevState => ({count: prevState.count - 10}))
    }
  }

  render() {
    const {count} = this.state

    return (
      <div className="background">
        <div>
          <h1 className="heading">SPEEDOMETER</h1>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
              alt="speedometer"
              className="image"
            />
          </div>

          <h2 className="head">Speed is {count}mph</h2>

          <p className="para">Min Limit is 0mph, Max Limit is 200mph</p>
          <div className="btn-container">
            <button type="button" className="btn1" onClick={this.onIncrement}>
              Accelerate
            </button>
            <button type="button" className="btn2" onClick={this.onDecrement}>
              Apply Brake
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Speedometer
