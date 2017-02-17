import React from 'react';
import { Router, Scene, Actions } from 'react-native-router-flux';

import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';

import {
  Icon
} from 'native-base';

const RouterComponent = () => {
  const { scene } = styles;
  return (
    <Router sceneStyle={scene}>
      <Scene initial key="auth">
        <Scene initial key="login" title="Please Login" component={LoginForm} />
      </Scene>
      <Scene key="main">
        <Scene
          initial
          key="employeeList"
          title="Employees"
          rightTitle={<Icon name="add" />}
          onRight={() => Actions.employeeCreate()}
          component={EmployeeList} />
        <Scene
          key="employeeCreate"
          title="Create Employee"
          component={EmployeeCreate} />
      </Scene>
    </Router>
  );
};

const styles = {
  scene: {
    paddingTop: 64
  }
}

export default RouterComponent;
