// @flow

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { setCurSortParams } from '../../actions/actions';
import { getSortedData } from '../../redux/selectors';
import Row from './Row/Row';
import TableHeader from './TableHeader/TableHeader';
import style from './Table.module.css';

const Table = props => {
  useEffect(() => {
    const keySorted: ?string = props.match.params.keySorted;
    const sortType: ?string = props.match.params.sortType;
    if (keySorted !== undefined) {
      props.setCurSortParams(keySorted, sortType);
    }
  }, [props.match.params.keySorted, props.match.params.sortType]);
  const renderRow = props.data.map(obj => <Row obj={obj} key={obj.Name} />);
  return (
    <div className={style.tableContainer}>
      <TableHeader headers={props.headers} />
      {renderRow}
    </div>
  );
};

const mapStateToProps = (
  state: Object
): { data: Array<{ obj: string }>, headers: Array<string> } => {
  return {
    data: getSortedData(state),
    headers: state.keys,
  };
};

export const TableContainer = compose(
  connect(mapStateToProps, { setCurSortParams }),
  withRouter
)(Table);
