// Write your code here
import {Component} from 'react'

import './index.css'

class App extends Component {
  state = {isDarkMode: true}

  onClicked = () => {
    this.setState(prevState => ({isDarkMode: !prevState.isDarkMode}))
  }

  render() {
    const {isDarkMode} = this.state

    return (
      <div className="container">
        <div className="card-conatiner">
          <h1>Click To Change Mode</h1>
          {isDarkMode ? (
            <button onClick={this.onClicked}>Light Mode</button>
          ) : (
            <button onClick={this.onClicked}>Dark Mode</button>
          )}
        </div>
      </div>
    )
  }
}

export default App
