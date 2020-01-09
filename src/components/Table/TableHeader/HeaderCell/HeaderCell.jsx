import React from 'react';
import style from './HeaderCell.module.css';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router-dom';

const HeaderCell = (props) => {
    const prevKey = props.match.params.keySorted;
    const prevSort = props.match.params.sortType;
    let url = '/';
    if(prevKey !== props.name) {
        url = '/' + props.name + '/direct';
    }
    else {
        if(prevSort === 'direct') {
            url = '/' + props.name + '/reversed';
        }
        else if(prevSort === 'reversed') {
            url = '/' + props.name + '/direct';
        }
    }
    return (
        <div className={style.headerCell}>
                    <Link to={url}>
                        <span>
                            {props.name}
                        </span>
                    </Link>
        </div>
    );
};

export default (withRouter)(HeaderCell);