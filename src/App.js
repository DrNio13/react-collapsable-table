import React, { Component } from 'react';
import CollapsableTable from './components/collapsable-table'
import SearchBox from './components/seach-box'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      searchTerm: '',
      data: [
        { id: 1, title: 'Title 1', data: 'More details here 1', isVisible: true }, // optionally first row to be visible
        { id: 2, title: 'Title 2', data: 'More details here 2' },
        { id: 3, title: 'Title 3', data: 'More details here 3' },
        { id: 4, title: 'Title 4', data: 'More details here 4' },
      ],
      filteredData: []
    }

    this.toggleRow = this.toggleRow.bind(this)
  }

  componentDidMount() {
    this.setState(previousState => ({
      filteredData: previousState.data.concat([])
    }))
  }

  onHandleSearchChange = (ev) => {
    const text = ev.currentTarget.value

    this.setState(previousState => ({
      filteredData: previousState.data.filter(item => {
        if (item.data.includes(text) || item.title.includes(text)) {
          item.isVisible = true
          return true
        } else {
          item.isVisible = false
          return false
        }
      })
    }))
  }

  toggleRow = (el) => {

    this.setState(previousState => {
      const items = previousState.filteredData.map((item) => {
        if (item.id === el.id) {
          return { ...item, isVisible: !item.isVisible }
        }

        return item
      })

      return {
        filteredData: items
      }
    })
  }

  render() {
    return (
      <React.Fragment>
        <SearchBox onHandleSearchChange={this.onHandleSearchChange} />
        <CollapsableTable {...this.state} toggleRow={this.toggleRow} />
      </React.Fragment>
    );
  }
}

export default App;
