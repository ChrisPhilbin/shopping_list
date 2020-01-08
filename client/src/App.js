import React from 'react';
import './App.css';

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

  return (
    <div className="App">

    </div>
  );
}

export default App;
