import React, { Component } from 'react'
import Input from './Input'
import Button from './Button'
import ListItem from './ListItem'
import './Content.css'

export default class Content extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userText: '',
      userDueDate: ''
    }
  }

  handleTextChange = val => {
    this.setState({
      userText: val
    })
  }

  handleDueDateChange = val => {
    this.setState({
      userDueDate: val
    })
  }

  addTask = () => {
    const { userText, userDueDate } = this.state
    const { addNewTaskFn } = this.props
    addNewTaskFn({
      date: new Date().toLocaleDateString(),
      text: userText,
      dueDate: userDueDate
    })
    this.resetUserInput()
  }

  resetUserInput = () => {
    this.setState({
      userText: '',
      userDueDate: ''
    })
  }

  render() {
    const { userText, userDueDate } = this.state
    const { list, deleteTaskFn, editTaskFn } = this.props
    const listArr = list.map(elm => (
      <ListItem
        key={elm.id}
        task={elm}
        editTaskFn={editTaskFn}
        deleteTaskFn={deleteTaskFn}
      />
    ))
    return (
      <div className='Content'>
        <div className='input-section'>
          <Input
            value={userText}
            placeHolder={'Enter Task'}
            handleTextChangeFn={this.handleTextChange}
            onchange={this.handleTextChange}
          />
          <Input
            value={userDueDate}
            placeHolder={'Enter Due Date'}
            handleDueDateChangeFn={this.handleDueDateChange}
            onchange={this.handleDueDateChange}
          />
          <Button
            actionName={'Submit'}
            onClickFn={this.addTask}
            input1={userText}
            input2={userDueDate}
          />
        </div>
        <div className='content-section'>{listArr}</div>
      </div>
    )
  }
}
