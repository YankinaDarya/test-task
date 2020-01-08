import React from 'react';
import {Route, withRouter} from 'react-router-dom';
import {connect} from "react-redux";
import {compose} from "redux";
import {setData, setKeys} from "./redux/reducer";
import {TableContainer} from "./components/Table/TableContainer";
import style from './App.module.css';

class App extends React.Component {
    render() {
        const keys = Object.keys(this.props.data[0]);
        this.props.setKeys(keys);
        this.props.setData(this.props.data);
        return (
            <div className={style.layout}>
                <Route path='/:keySorted?' render={() => <TableContainer/>}/>
            </div>
        );
    }
}

export default compose(connect(null, {setData, setKeys}), withRouter)(App);