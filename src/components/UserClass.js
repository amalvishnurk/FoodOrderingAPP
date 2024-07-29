import React from "react"

class UserClass extends React.Component {
    constructor(props) {
        super(props)
        // console.log(props);
        this.state = {
            count: 0,
            // count2: 1
        }
        console.log("child constructor")
    }

    componentDidMount() {
        console.log("child component mount")
    }

    render() {
        console.log("child render");
        const { name, location } = this.props
        const { count, count2 } = this.state
        return (
            <div className='userCard'>
                <h3>Name : {name}</h3>
                <h4>Location : {location}</h4>
                <h4>Email : amal@gmail.com</h4>
                <h5>count : {count} </h5>
                {/* <h5>count2 :{count2} </h5> */}
                <button
                    onClick={() => {
                        // never update state like this
                        // this.state.count = this.state.count + 1
                        this.setState({
                            count: this.state.count + 1,
                        })
                    }}
                >
                    Count Increase</button>
            </div>
        )
    }
}

export default UserClass