import React from 'react';
import style from './HeaderCell.module.css';
import {Link} from 'react-router-dom';

const HeaderCell = (props) => {
    let arrayDirectSort = () => {
        props.directSort(props.name);
    };
    return (
        <div className={style.headerCell}>
                    <Link to={'/' + props.name}>
                        <span onClick={arrayDirectSort}>
                            {props.name}
                        </span>
                    </Link>
        </div>
    );
};

export default HeaderCell;