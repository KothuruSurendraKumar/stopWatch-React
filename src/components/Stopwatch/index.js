// Write your code here
import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {
    timerInSeconds: 0,
    isTimeRunning: false,
  }

  componentWillUnmount() {
    clearInterval(this.timeInterval)
  }

  onResetTimer = () => {
    clearInterval(this.timeInterval)
    this.setState({isTimeRunning: false, timerInSeconds: 0})
  }

  onStopTimer = () => {
    clearInterval(this.timeInterval)
    this.setState({isTimeRunning: false})
  }

  onUpdateTimer = () => {
    this.setState(prevState => ({
      timerInSeconds: prevState.timerInSeconds + 1,
    }))
  }

  onStartTime = () => {
    this.timeInterval = setInterval(this.onUpdateTimer, 1000)
    this.setState({isTimeRunning: true})
  }

  renderSeconds = () => {
    const {timerInSeconds} = this.state
    const seconds = Math.floor(timerInSeconds % 60)

    if (seconds < 10) {
      return `0${seconds}`
    }
    return seconds
  }

  renderMinutes = () => {
    const {timerInSeconds} = this.state
    const minutes = Math.floor(timerInSeconds / 60)

    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  render() {
    const {isTimeRunning} = this.state
    const time = `${this.renderMinutes()}:${this.renderSeconds()}`

    return (
      <div className="app-container">
        <div className="stopwatch-container">
          <div className="operational-container">
            <h1 className="heading">Stopwatch</h1>
            <div className="operational-down-container">
              <div className="timer-icon">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                  alt="stopwatch"
                  className="stopwatch"
                />
                <p className="stopwatch-content">Timer</p>
              </div>
              <h1 className="timer">{time}</h1>
              <div className="button-container">
                <button
                  className="start-button"
                  type="button"
                  onClick={this.onStartTime}
                  disabled={isTimeRunning}
                >
                  Start
                </button>
                <button
                  className="stop-button"
                  type="button"
                  onClick={this.onStopTimer}
                >
                  Stop
                </button>
                <button
                  className="reset-button"
                  type="button"
                  onClick={this.onResetTimer}
                >
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Stopwatch
