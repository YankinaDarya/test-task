import React, {useEffect} from 'react';
import TableHeader from "./TableHeader/TableHeader";
import Row from "./Row/Row";
import {directSort, reversedSort} from "../../redux/reducer";
import {connect} from "react-redux";
import {withRouter} from 'react-router-dom';
import {compose} from "redux";

const Table = (props) => {

    function changes() {
        const keySorted = props.match.params.keySorted;
        const sortType = props.match.params.sortType;
        if (keySorted !== undefined) {
            if (sortType === 'direct') {
                props.directSort(keySorted);
            } else if (sortType === 'reversed') {
                props.reversedSort(keySorted);
            }
        }
    }

    useEffect(() => {
        changes();
    }, []);

    useEffect(() => {
        changes()
    }, [props.match.params.keySorted, props.match.params.sortType]);

    const row = props.data.map(obj => <Row obj={obj}/>);

    return (
        <div>
            <TableHeader headers={props.headers}/>
            {row}
        </div>
    );
};

let mapStateToProps = (state) => {
    return {
        data: state.profiles,
        headers: state.keys
    }
};

export const TableContainer = compose(connect(mapStateToProps, {directSort, reversedSort}), withRouter)(Table);