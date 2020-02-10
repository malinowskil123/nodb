import React, { Component } from 'react'
import './App.css'
import Header from './Components/Header'
import Content from './Components/Content'
import axios from 'axios'
import URL from './resource'

export default class List extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: []
    }
  }

  componentDidMount() {
    axios
      .get(URL)
      .then(res => {
        this.setState({
          list: res.data
        })
      })
      .catch(err => console.log(`get request: ${err}`))
  }

  addNewTask = task => {
    axios
      .post(URL, task)
      .then(res => {
        this.setState({
          list: res.data
        })
      })
      .catch(err => console.log(`post request: ${err}`))
  }

  editTask = (id, task) => {
    axios
      .put(`${URL}/${id}`, task)
      .then()
      .then(res => {
        this.setState({
          list: res.data
        })
      })
      .catch(err => console.log(`put request: ${err}`))
  }

  deleteTask = id => {
    let bool = window.confirm(
      'Are You Sure You want to Delete This Task\nPress Ok To Delete'
    )
    if (bool) {
      axios
        .delete(`${URL}/${id}`)
        .then(res => {
          this.setState({
            list: res.data
          })
        })
        .catch(err => console.log(`delete request: ${err}`))
    }
  }

  searchTask = searchText => {
    axios
      .get(`${URL}/taskSearch?text=${searchText}`)
      .then(res => {
        this.setState({
          list: res.data
        })
      })
      .catch(err => console.log(`get search by text request: ${err}`))
  }

  render() {
    const { list } = this.state
    return (
      <div className='App'>
        <Header />
        <div className='img-wrapper'>
          <Content
            list={list}
            addNewTaskFn={this.addNewTask}
            editTaskFn={this.editTask}
            deleteTaskFn={this.deleteTask}
            searchTaskFn={this.searchTask}
          />
        </div>
      </div>
    )
  }
}
