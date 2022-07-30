import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Menu from './components/Menu/Menu';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Menu />
        <Home />
      </div>
    );
  }
}

export default App;
