import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { directSort, reversedSort } from '../../actions/actions';
import Row from './Row/Row';
import TableHeader from './TableHeader/TableHeader';

const Table = props => {

  useEffect(() => {
    const keySorted = props.match.params.keySorted;
    const sortType = props.match.params.sortType;
    if (keySorted !== undefined) {
      if (sortType === 'direct') {
        props.directSort(keySorted);
      } else if (sortType === 'reversed') {
        props.reversedSort(keySorted);
      }
    }
  }, [props.match.params.keySorted, props.match.params.sortType]);

  const renderRow = props.data.map(obj => <Row obj={obj} key={obj.Name} />);

  return (
    <div>
      <TableHeader headers={props.headers} />
      {renderRow}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    data: state.profiles,
    headers: state.keys,
  };
};

export const TableContainer = compose(
  connect(mapStateToProps, { directSort, reversedSort }),
  withRouter
)(Table);
