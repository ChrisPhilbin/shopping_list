import React from 'react';
import { List } from './List'

function App() {

  constructor(props) {
    super(props)
    this.state = {
      str: '',
      items: []
    }
  }

  onChange = (event) => {
    this.setState({str: event.target.value})
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.setState({
      str: '',
      items: [...this.state.items, this.state.str]
    })
  }

  render() {
    return (
      <div className="App">
        <form className="form" onSubmit={this.onSubmit}>
          <input type="text" value={this.state.str} onChange={this.onChange}>
          <button>Submit</button>
        </form>
        <List items={this.state.items} />
      </div>
    );
  }

}

export default App;
