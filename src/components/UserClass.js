import React from "react"

class UserClass extends React.Component {
    constructor(props) {
        super(props)
        // console.log(props);
        // this.state = {
        //     count: 0,
        // count2: 1
        // }
        // console.log(this.props.name + "child constructor")
        this.state = {
            userInfo: {
                name: "Dummy",
                location: 'Default',
                avatar_url: "Default"
            }

        }
    }

    async componentDidMount() {
        // console.log(this.props.name + "child component mount")
        const data = await fetch("https://api.github.com/users/amalvishnurk")
        const json = await data.json()
        console.log(json);
        this.setState({
            userInfo: json
        }
        )
    }

    componentDidUpdate() {
        console.log("componentDidUpdate")
    }

    componentWillUnmount() {
        console.log("componentWillUnmount")
    }

    render() {
        // console.log(this.props.name + "child render");
        // const { name, location } = this.props
        // const { count, count2 } = this.state

        const { name, location, avatar_url } = this.state.userInfo
        return (
            <div className='flex'>
                <div >
                    <img className="w-[200px] h-[200px] rounded-lg" src={avatar_url}></img>
                </div>
                <div className="ml-2">
                    <h3>Name : {name}</h3>
                    <h4>Location : {location}</h4>
                    <h4>Email : amal@gmail.com</h4>
                </div>

                {/* <h5>count : {count} </h5> */}
                {/* <h5>count2 :{count2} </h5> */}
                {/* <button
                    onClick={() => {
                        // never update state like this
                        // this.state.count = this.state.count + 1
                        this.setState({
                            count: this.state.count + 1,
                        })
                    }}
                >
                    Count Increase</button> */}
            </div>
        )
    }
}

export default UserClass