import UserClass from "./UserClass";
import {Component} from "react";
import UserContext from "../utils/UserContext";


class About extends Component {

    constructor(props){
        super(props);

        
    }

    componentDidMount() {
       
    }

    render() {
        
        return(
            <div>
                <h1>
                    <UserContext.Consumer>
                        { ({loggedInUser}) => (<h1>{loggedInUser}</h1>)}
                    </UserContext.Consumer>
                </h1>
                <UserClass name={"Nishant Bhardwaj"} location={"Delhi"} />
               
           </div>
        )
    }
}

    export default About