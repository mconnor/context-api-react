import React, { Component } from 'react';

import './App.css';


const MyContext = React.createContext();

// provider component

class MyProvider extends Component {
  state = {
    name: "mike",
    age: 100,
    hair: 'red'
  }
  render () {
    return (
      <MyContext.Provider value={
          {
            state: this.state,
            growYearOlder: () => {
            
              this.setState({
                age: this.state.age + 1
              })
            }
          }
        }>
          {this.props.children}
      </MyContext.Provider>
    )
  }
}

const Family = (props) => (
  <div className="family">
    <Person />
  </div>
)

class Person extends Component {
  render(){
    return (
      <div className="person">
        {/* child of MyContext.Consumer is always a funciton */}
        <MyContext.Consumer>
          {(context) => (
            <React.Fragment>
              <p>name: {context.state.name}</p>
              <p>hair: {context.state.hair}</p>
              <p>age: {context.state.age}</p>
              <button onClick={context.growYearOlder}>🎂</button>
            </React.Fragment>
          )}
        </MyContext.Consumer>
      </div>
    )
  }
}
class App extends Component {
  
  render() {
    return ( 
      <MyProvider>
        <h1>React Context API Test</h1>
        <div className="App">
          <header className="App-header">
            <Family/>
          
          </header>
        </div>
      </MyProvider>
    );
  }
}

export default App;
