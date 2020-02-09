import React, { Component } from 'react'
import './ListItem.css'
import Input from './Input'

export default class ListItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      editingBool: false,
      editTask: '',
      editDueDate: ''
    }
  }

  updateTask = val => {
    this.setState({
      editTask: val
    })
  }

  updateDueDate = val => {
    this.setState({
      editDueDate: val
    })
  }

  toggleEdit = () => {
    const { editingBool } = this.state
    this.setState({
      editingBool: !editingBool
    })
  }

  render() {
    const { editingBool, editTask, editDueDate } = this.state
    const { task, editTaskFn, deleteTaskFn } = this.props
    return (
      <div
        className='List-Item'
        onDoubleClick={() => {
          deleteTaskFn(task.id)
        }}
      >
        <div className='list-item-header'>
          <p>Created : {task.date}</p>
        </div>
        {!editingBool ? (
          <>
            <div className='list-item-content'>
              <h3>Task : {task.text}</h3>
              <h3>Due Date : {task.dueDate}</h3>
            </div>
            <div>
              <button className='list-item-button' onClick={this.toggleEdit}>
                Edit
              </button>
            </div>
          </>
        ) : (
          <>
            <Input
              type='text'
              value={editTask}
              placeHolder='Edit Task'
              onchange={this.updateTask}
            />
            <Input
              type='Date'
              value={editDueDate}
              placeHolder='Edit Due Date'
              onchange={this.updateDueDate}
            />
            <button
              className='list-item-button'
              onClick={() => {
                editTaskFn(task.id, { text: editTask, dueDate: editDueDate })
                this.toggleEdit()
              }}
            >
              Save
            </button>
          </>
        )}
      </div>
    )
  }
}
