import React from 'react';
import TableRow from './row';
import './index.css';

export default class CollapsableTable extends React.Component {
    constructor(props) {
        super(props)

        this.toggleRow = this.toggleRow.bind(this)
    }

    toggleRow = (el) => {
        this.props.toggleRow(el)
    }

    render() {
        return (
            <React.Fragment>
                <h3>Dynamic Table</h3>

                <table id='d-table'>
                    <tbody>
                        {(this.props.filteredData).map((el, index) => {
                            return (
                                <TableRow
                                    key={el.id.toString()}
                                    el={el}
                                    index={index}
                                    toggleRow={this.toggleRow} />
                            )
                        })}
                    </tbody>
                </table>
            </React.Fragment>
        )
    }
}