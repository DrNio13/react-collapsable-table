import React, { Component } from 'react';
import CollapsableTable from './components/collapsable-table'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: [
        { id: 1, title: 'Title 1', data: 'More details here 1', isVisible: true }, // optionally first row to be visible
        { id: 2, title: 'Title 2', data: 'More details here 2' },
        { id: 3, title: 'Title 3', data: 'More details here 3' },
        { id: 4, title: 'Title 4', data: 'More details here 4' },
      ]
    }

    this.toggleRow = this.toggleRow.bind(this)
  }

  toggleRow = (el) => {

    this.setState(previousState => {
      const items = previousState.data.map((item) => {
        if (item.id === el.id) {
          return { ...item, isVisible: !item.isVisible }
        }

        return item
      })

      return {
        data: items
      }
    })
  }

  render() {
    return (
      <React.Fragment>
        <CollapsableTable {...this.state} toggleRow={this.toggleRow} />
      </React.Fragment>
    );
  }
}

export default App;
