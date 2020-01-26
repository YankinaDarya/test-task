// @flow

import React from 'react';
import Cell from './Cell/Cell';
import style from './Row.module.css';

const Row = (props: Object) => {
  const values: Array<mixed> = Object.values(props.obj);
  const cells = values.map((cell: mixed) => <Cell item={cell} key={1} />);
  return <div className={style.row}>{cells}</div>;
};

export default Row;
