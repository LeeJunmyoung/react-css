import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Button danger="danger"/>
        <Button />
      </Fragment>
    );
  }
}
const Button =({danger})=>(
  <button className={danger==="danger"?"button button--danger":"button button--success"} >hello</button>
);

export default App;
