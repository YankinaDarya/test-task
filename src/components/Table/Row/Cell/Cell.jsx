// @flow

import React from 'react';
import style from './Cell.module.css';

const Cell = (props: Object) => {
  return <div className={style.cell}>{props.item}</div>;
};

export default Cell;
