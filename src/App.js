import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import AppNavbar from './components/AppNavbar'
import HomePage from './components/HomePage'
import AboutPage from './components/AboutPage'
import Service from './components/ServicesPage'
import Footer from './components/footer'
import TeamPage from './components/TeamPage'
import ContactPage from './components/ContactPage'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <AppNavbar />
        <main>
          <Switch>
            <Route exact path='/'>
              <HomePage />
            </Route>
            <Route path='/about'>
              <AboutPage />
            </Route>
            <Route path='/services'>
              <Service />
            </Route>
            <Route path='/team'>
              <TeamPage />
            </Route>
            <Route path='/contact'>
              <ContactPage />
            </Route>
          </Switch>
        </main>
        <Footer />
      </Router>
      
    </div>
  );
}

export default App;
