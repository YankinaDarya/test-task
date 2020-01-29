// @flow

import React from 'react';
import Cell from './Cell/Cell';
import style from './Row.module.css';

const Row = (props: Object) => {
  const values: Array<string> = Object.keys(props.obj).map(
    key => props.obj[key]
  );
  const cells = values.map((cell: string) => <Cell item={cell} key={1} />);
  return <div className={style.row}>{cells}</div>;
};

export default Row;
