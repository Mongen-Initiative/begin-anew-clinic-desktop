import React from 'react';
import { MemoryRouter as Router, Switch, Route } from 'react-router-dom';
import MainDrawer from './pages/MainDrawer';
// import icon from '../../assets/icon.svg';
// import './App.global.css';

const Hello = () => {
  return (
    <div>
      <MainDrawer />
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Hello} />
      </Switch>
    </Router>
  );
}
