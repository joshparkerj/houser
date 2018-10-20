import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Dashboard from './component/Dashboard/Dashboard';
import Wizard from './component/Wizard/Wizard';

export default function Routes(props){
  return (
    <Switch>
      <Route path='/wizard' component={Wizard} />
      <Route path='/' component={Dashboard} />
    </Switch>
  )
}