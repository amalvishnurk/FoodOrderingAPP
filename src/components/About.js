import React from 'react'
import User from './User'
import UserClass from './UserClass'

import React, { Component } from 'react'

export default class About extends Component {

  constructor(props){
    super(props)
    console.log("parent constructor")
  }

  componentDidMount(){
    console.log("parent did mount")
  }
  render() {
    console.log("parent render")
    return (
      <div>
        <h2>About us</h2>
        <User />
        <UserClass name={"Amal vishnu (class)"} location={"Bangalore"} />
      </div>
    )
  }
}


// const About = () => {
//   return (
//     <div>
//       <h2>About us</h2>
//       <User />
//       <UserClass name={"Amal vishnu (class)"} location={"Bangalore"}/>
//     </div>
//   )
// }

// export default About