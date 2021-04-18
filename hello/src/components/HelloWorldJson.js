import { Component } from "react";

class HelloWorldJson extends Component {
    constructor() {
        super();
        this.state = {
            siswa: [
                {
                    id: 1,
                    nama: "Perwira Abrianto"
                },
                {
                    id: 2,
                    nama: "Beauty Khuluqiyah"
                },
                {
                    id: 3,
                    nama: "Untung Slamet"
                }
            ]
        }
    }

    render() {
        return (
            <div>
                {
                    this.state.siswa.map((dinamis, key) =>
                        <div key={key}>
                            <h3>{dinamis.id}. {dinamis.nama}</h3>
                        </div>
                    )
                }
            </div>
        );
    }
}

export default HelloWorldJson;