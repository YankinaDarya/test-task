// @flow

import React, { useEffect } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { TableContainer } from './components/Table/Table';
import { Preloader } from './components/Preloader/Preloader';
import { initializeApp } from './redux/reducer';
import style from './App.module.css';

const App = props => {
  useEffect(() => {
    props.initializeApp();
  }, []);

  if (props.status[0]) {
    return <Preloader />;
  } else if (props.status[1]) {
    return (
      <div className={style.error}>
        Attention! An error occurred: {props.error}
      </div>
    );
  }
  return (
    <div>
      <Route path="/:keySorted?/:sortType?" render={() => <TableContainer />} />
    </div>
  );
};

const mapStateToProps = (state: Object): Object => {
  return {
    status: state.status,
    error: state.error,
  };
};

export default compose(
  connect(mapStateToProps, { initializeApp }),
  withRouter
)(App);
