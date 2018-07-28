import React, { Component } from 'react'
import { createPortal, render } from 'react-dom'
import _ from 'lodash'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      task: '',
      tasks: []
    }
  }

  render () {
    return (
      <div>
        <form onSubmit={e => {
          e.preventDefault()
          this.setState({
            task: '',
            tasks: this.state.tasks.concat([this.state.task])
          })
        }}>
          <input
            onChange={e => {
              this.setState({
                task: e.target.value
              })
            }}
            placeholder="task"
            value={this.state.task}
          />
          <button type='submit'>Add</button>
        </form>
        {
          createPortal(
            <div>
              {
                this.state.tasks.map((task, i) => (
                  <div key={i}>
                    Task: {task}
                  </div>
                ))
              }
            </div>,
            window.parent.document.getElementById('app')
          )
        }
      </div>
    )
  }
}

render(
  <App />,
  document.getElementById('iframe')
)
