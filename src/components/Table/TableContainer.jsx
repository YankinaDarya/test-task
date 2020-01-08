import React from 'react';
import {connect} from "react-redux";
import {directSort} from "../../redux/reducer";
import {withRouter} from 'react-router-dom';
import {compose} from "redux";
import Table from "./Table";

let mapStateToProps = (state) => {
    return {
        data: state.profiles,
        headers: state.keys
    }
};

export const TableContainer = compose(connect(mapStateToProps, {directSort}), withRouter)(Table);
