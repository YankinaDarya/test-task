import React from 'react';
import style from './TableHeader.module.css';
import HeaderCell from './HeaderCell/HeaderCell';

const TableHeader = props => {
  const headerCells = props.headers.map(cell => (
    <HeaderCell name={cell} key={cell} />
  ));
  return <div className={style.header}>{headerCells}</div>;
};

export default TableHeader;
