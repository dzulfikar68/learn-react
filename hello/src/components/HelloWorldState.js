import { Component } from "react";

class HelloWorldState extends Component {
    constructor(props) {
        super(props);
        this.state = { salam: "Hallo" };
    } 

    salamkan = () => {
        this.setState({ salam: "Salam untukmu" });
    }

    render() {
        return (
            <div className="warna">
                {this.state.salam} {this.props.namaDepan} {this.props.namaBelakang}
                <br/>
                <button onClick={this.salamkan}>Salam!</button>
            </div>
        );
    }
}

export default HelloWorldState;