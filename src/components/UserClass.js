import React from "react"
import { useState } from "react";
import Shimmer from "./Shimmer";

class UserClass extends React.Component {

    constructor(props){
        super(props);
        
       
        this.state = {
            details: '',
            count : 0
         }
        
    }

    async componentDidMount(){
        
        const data = await fetch("https://api.github.com/users/akshaymarch7");
        const dataJson = await data.json();

        //console.log('did mount');
        this.setState({
            details: dataJson,
        })
    }

    componentDidUpdate (){
       // console.log("component did update");
    }

    componentWillUnmount(){
        //console.log('component will unmount');
    }
    
    render() {
      // console.log(this.state.count,'count');
        const{ login, location, avatar_url}  = this.state.details;
       
        return (this.state.details === "") ? (<Shimmer />) :  (
        <div className="user-card">
            <img className="w-40" src={avatar_url} />
            <h2>Name: {login}</h2>
            <h3>Location: {location}</h3>
            <h3>Contact: @nishant_bhardwaj</h3>
            <button onClick={() => {

                this.setState({
                    count: this.state.count + 1,
                })
            }}>click</button>
        </div>
        )
    }

} 

export default UserClass