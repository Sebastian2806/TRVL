import React, { useEffect } from 'react';
import _ from 'lodash';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { setVH } from '../util/helpers';
import Home from './Home';
import MainTemplate from '../components/templates/MainTemplate';

const setHeight = setVH();

const Root = () => {
  useEffect(() => {
    setHeight();
    const debouced = _.debounce(setHeight, 500);
    window.addEventListener('resize', debouced);

    return () => {
      window.removeEventListener('resize', debouced);
    };
  }, []);

  return (
    <BrowserRouter basename={window.location.pathname || ''}>
      <MainTemplate>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/destinations" component={Home} />
          <Route path="/contact" component={Home} />
        </Switch>
      </MainTemplate>
    </BrowserRouter>
  );
};

export default Root;
