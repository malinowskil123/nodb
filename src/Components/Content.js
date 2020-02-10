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
      userDueDate: '',
      searchText: ''
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

  handleSearchTextChange = val => {
    const { searchTaskFn } = this.props
    this.setState({
      searchText: val
    })
    if (val === '') searchTaskFn('')
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
    const { userText, userDueDate, searchText } = this.state
    const { list, deleteTaskFn, editTaskFn, searchTaskFn } = this.props
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
        <form
          onSubmit={e => {
            e.preventDefault()
            if (e.target.key === 13) this.addTask()
          }}
        >
          <div className='input-section'>
            <Input
              type='text'
              value={userText}
              placeHolder={'Enter Task'}
              onchange={this.handleTextChange}
            />
            <Input
              type='date'
              value={userDueDate}
              placeHolder='Enter Due Date'
              onchange={this.handleDueDateChange}
            />
            <Button
              actionName='Submit'
              onClickFn={this.addTask}
              input1={userText}
              input2={userDueDate}
            />
          </div>
        </form>
        <div className='input-section'>
          <Input
            type='text'
            value={searchText}
            placeHolder='Search Task List'
            onchange={this.handleSearchTextChange}
          />
          <button
            onClick={() => {
              searchTaskFn(searchText)
            }}
          >
            Search
          </button>
        </div>
        <div className='content-section'>{listArr}</div>
      </div>
    )
  }
}
