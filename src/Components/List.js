// import React, { Component } from 'react'
// import ListItem from './ListItem'
// import axios from 'axios'
// import URL from '../resource'

// export default class List extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       list: []
//     }
//   }
//   componentDidMount() {
//     axios
//       .get(URL)
//       .then(res => {
//         console.log(res.data)
//         this.setState({
//           list: res.data
//         })
//       })
//       .catch(err => console.log(`get request: ${err}`))
//   }
//   addNewTask = () => {}
//   render() {
//     const { list } = this.state
//     const listArr = list.map(elm => <ListItem key={elm.id} task={elm} />)
//     return <div>{listArr}</div>
//   }
// }
