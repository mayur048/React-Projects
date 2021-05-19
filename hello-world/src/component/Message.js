import React from 'react'
import { Component } from 'react';

class Message extends Component{

    constructor(){
        super()
        this.state = {
            message: 'Welcome Visitor'
        }
    }

    chnageMessage(){
        this.setState({
            message: 'Thank You For Subscribing'
        })
    }

    render(){
        return(
            <div>
                <h1>
                    {this.state.message}
                </h1>
                <button onClick={() => this.chnageMessage()}>Subscribe</button>
            </div>   
        )
    }
}

export default Message