import { Component } from "react";
import '../components/Apps.css';

class HelloWorld extends Component {
    render() {
        return (
            <div className="warnax">Halo {this.props.nama}, {this.props.namaDepan} {this.props.namaBelakang}</div>
        );
    }
}

export default HelloWorld;