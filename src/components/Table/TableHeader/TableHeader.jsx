// @flow

import React from 'react';
import style from './TableHeader.module.css';
import HeaderCell from './HeaderCell/HeaderCell';

const TableHeader = ({ headers }: Object) => {
  const headerCells = headers.map((cell: string) => (
    <HeaderCell name={cell} key={cell} />
  ));
  return <div className={style.header}>{headerCells}</div>;
};

export default TableHeader;
