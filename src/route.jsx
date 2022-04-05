import React from 'react';
import { Routes as Switch, Route } from 'react-router-dom';
import Dashboard from './component/Dashboard/Dashboard';
import Wizard from './component/Wizard/Wizard';

export default function Routes() {
  return (
    <Switch>
      <Route path="/wizard" element={<Wizard />} />
      <Route path="/" element={<Dashboard />} />
    </Switch>
  );
}
