import React from 'react';
import TableHeader from "./TableHeader/TableHeader";
import Row from "./Row/Row";

class Table extends React.Component {
    componentDidMount() {
        let keySorted = this.props.match.params.keySorted;
        this.props.directSort(keySorted);
    }
    componentDidUpdate(prevProps, prevState) {
        if(this.props.match.params.keySorted !== prevProps.match.params.keySorted) {
            let keySorted = this.props.match.params.keySorted;
            this.props.directSort(keySorted);
        }
    }
    render() {
        const row = this.props.data.map(obj => <Row obj={obj}/>);
        return (
            <div>
                <TableHeader headers={this.props.headers} directSort={this.props.directSort}/>
                {row}
            </div>
        );
    }
}

export default Table;