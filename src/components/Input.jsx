import { Component } from "react";

import './Input.scss';

class Input extends Component{
    render(){
        return(
            <div className="input">
                {this.props.children}
            </div>
        )
    }


}


export default Input;