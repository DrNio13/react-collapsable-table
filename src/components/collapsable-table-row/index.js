import React from 'react'

export default class TableRow extends React.Component {

    toggleRow = () => {
        this.props.toggleRow(this.props.el)
    }

    render() {
        return (
            <React.Fragment>
                <tr onClick={this.toggleRow} >
                    <th className={'title'}>{this.props.el.title}</th>
                </tr>
                <tr className={this.props.el.isVisible ? 'visible' : 'invisible'}>
                    <td className={'content'}><pre>{this.props.el.data}</pre></td>
                </tr>
            </React.Fragment>
        )
    }
}