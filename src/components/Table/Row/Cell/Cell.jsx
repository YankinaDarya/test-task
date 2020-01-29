// @flow

import React from 'react';
import style from './Cell.module.css';

const Cell = (props: { item: string }) => {
  return <div className={style.cell}>{props.item}</div>;
};

export default Cell;
