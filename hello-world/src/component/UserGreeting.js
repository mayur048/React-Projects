import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: false
        }
    }
    
    render() {

        //short-circuit Operator
        return this.state.isLoggedIn && <div>Welcome Mayur</div>

        //terniary Operator
        // return(
        //     this.state.isLoggedIn ?(
        //         <div>Welcome Mayur</div> 
        //     ):(
        //         <div>Welcome Guest</div>
        //     )
        // )
        
        //conditional variable
        // let message 
        // if(this.state.isLoggedIn){
        //     message = <div>Welcome Mayur</div>
        // }else{
        //     message = <div>Welcome Guest</div>
        // }

        // return <div>{message}</div>

        //If,else methods
        // if(this.state.isLoggedIn){
        //     return (
        //         <div>
        //             <div>Welcome Mayur</div>
        //         </div>
        //     )
        // }else{
        //     return (
        //         <div>
        //             <div>Welcome Guest</div>
        //         </div>
        //     )
        // }

        // return (
        //     <div>
        //         <div>Welcome Mayur</div>
        //         <div>Welcome Guest</div>
        //     </div>
        // )
    }
}

export default UserGreeting
