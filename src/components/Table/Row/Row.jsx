import React from 'react';
import Cell from "./Cell/Cell";
import style from './Row.module.css';

const Row = (props) => {
    const values = Object.values(props.obj);
    const cells = values.map(c => <Cell item={c}/>);
    return (
        <div className={style.row}>
            {cells}
        </div>
    );
};

export default Row;