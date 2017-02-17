import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';

const RouterComponent = () => {
  const { scene } = styles;
  return (
    <Router sceneStyle={scene}>
      <Scene key="login" title="Please Login" component={LoginForm} />
      <Scene key="employeelist" title="Employees" component={EmployeeList} />
    </Router>
  );
};

const styles = {
  scene: {
    paddingTop: 64
  }
}

export default RouterComponent;
