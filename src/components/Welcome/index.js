import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {
    isSubscribed: false,
  }

  subscribeClick = () => {
    const {isSubscribed} = this.state
    if (isSubscribed === true) {
      this.setState({isSubscribed: false})
    } else {
      this.setState({isSubscribed: true})
    }
  }

  render() {
    const {isSubscribed} = this.state

    return (
      <div className="bg-container">
        <h1 className="main-heading">Welcome</h1>
        <p className="description">Thank you! Happy Learning</p>
        {!isSubscribed && (
          <button
            onClick={this.subscribeClick}
            type="button"
            className="button"
          >
            Subscribe
          </button>
        )}
        {isSubscribed && (
          <button
            onClick={this.subscribeClick}
            type="button"
            className="button"
          >
            Subscribed
          </button>
        )}
      </div>
    )
  }
}

export default Welcome
