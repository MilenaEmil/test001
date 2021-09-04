import React from 'react';
import Card from './Card';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      date: new Date()

    }

  }

  componentDidMount() {
    setInterval(
      () => this.tick(),
      1000
    );
  }

  tick(){
    this.setState({
      date: new Date()
    })
  }

  render(){
    return(
      <div className="row">
        <h1> {this.state.date.toLocaleTimeString()}</h1>
      <Card productTitle = "Iphone 12ProMax"/>
      <Card/>
      <Card/>
      </div>
    )
  }
}


export default App;
