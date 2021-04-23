import React, { Component } from 'react'
import axios from 'axios'

export default class componentName extends Component {

    async componentDidMount(){
        const res = await axios.get('http://localhost:4000/api/users');
        //console.log(res)
        this.setState({users: res.data});
        console.log(this.state.users)
    }

    render() {
        return (
            <div>
                CREATE USER 
            </div>
        )
    }
}
