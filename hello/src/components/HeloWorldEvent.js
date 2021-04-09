import { Component } from "react";

class HelloWorldEvent extends Component {
    constructor(){
        super();
        this.state = { data: "" };
    }

    handleChange = (event) => {
        this.setState({ data: event.target.value});
    }

    render() {
        return (
            <div>
                <input type="text" onChange={this.handleChange}/>
                <h3> {this.state.data} </h3>
            </div>
        );
    }
}

export default HelloWorldEvent;