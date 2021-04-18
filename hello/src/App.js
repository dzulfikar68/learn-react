import { Component } from 'react';
import './App.css';
import HelloWorld from './components/HelloWorld';
import HelloWorldJson from './components/HelloWorldJson';
import HelloWorldJsonFile from './components/HelloWorldJsonFile';
import HelloWorldState from './components/HelloWorldState';
import HelloWorldEvent from './components/HeloWorldEvent';

class App extends Component {
  render() {
    return (
      <div>
        <div className="warna">Hallo Semuanya!</div>

        <HelloWorldEvent />

        <HelloWorldJson />

        <HelloWorldJsonFile />
        
        <HelloWorld nama="abi" namaDepan="dzulfikar" namaBelakang="fauzi"/>
        <HelloWorld nama="umi" namaDepan="putri" namaBelakang="ermawati"/>
        <HelloWorld nama="dede" namaDepan="yaqub" namaBelakang="hammam"/>

        <HelloWorldState nama="dede" namaDepan="yaqub" namaBelakang="hammam"/>
      </div>
    );
  }
}

export default App;
