import React from 'react';
// import logo from './logo.svg';
import { BrowserRouter as Route } from 'react-router-dom'
import LandingPage from './routes/Landing/landing'
import AdoptPage from './routes/Adopt/Adopt'


import './App.css';

export default class App extends React.Component {
  
mainRoutes (){
  return (
    <>
      <Route 
      exact
      key ='/'
      path='/'
      component = {LandingPage}
    />


    <Route 
      exact
      key ='/adopt'
      path ='/adopt'
      component = {AdoptPage}
    />
    </>
  )
}
 
render(){
  return (
    <div className="App">
      <main className = 'App_main'>
        {this.mainRoutes()}
      </main>
    </div>
  );
  }

}

