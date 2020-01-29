// @flow

import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import style from './HeaderCell.module.css';

const SORT_TYPES = {
  direct: 'direct',
  reversed: 'reversed',
};

const HeaderCell = props => {
  const prevKey: ?string = props.match.params.keySorted;
  const prevSort: ?string = props.match.params.sortType;
  let url: string = '/';
  if (prevKey !== props.name) {
    url = '/' + props.name + `/${SORT_TYPES.direct}`;
  } else {
    if (prevSort === SORT_TYPES.direct) {
      url = '/' + props.name + `/${SORT_TYPES.reversed}`;
    } else if (prevSort === SORT_TYPES.reversed) {
      url = '/' + props.name + `/${SORT_TYPES.direct}`;
    }
  }
  return (
    <div className={style.headerCell}>
      <Link to={url}>
        <span>{props.name}</span>
      </Link>
    </div>
  );
};

export default withRouter(HeaderCell);
