import React from 'react'

export default class SearchBox extends React.Component {
    render() {
        return (
            <input
                type='text'
                placeholder='Search '
                value={this.props.value}
                onChange={this.props.onHandleSearchChange} />
        )
    }
}