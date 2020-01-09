import React, {useEffect} from 'react';
import {Route, withRouter} from 'react-router-dom';
import {connect} from "react-redux";
import {compose} from "redux";
import {TableContainer} from "./components/Table/Table";
import {initializeApp} from "./redux/reducer";

const App = (props) => {

    useEffect(() => {
        props.initializeApp()
    }, []);

    if (!props.initialized) {
        return (
            <div>Loading...</div>
        )
    }
    return (
        <div>
            <Route path='/:keySorted?/:sortType?' render={() => <TableContainer/>}/>
        </div>
    );

};

const mapStateToProps = (state) => {
    return {
        initialized: state.initialized
    }
};

export default compose(connect(mapStateToProps, {initializeApp}), withRouter)(App);