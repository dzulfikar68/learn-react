import React, { Component } from 'react';
import Moment from 'moment';
import image from './logo.svg';
// import { CSSTransitionGroup } from 'react-transition-group';

class App extends Component {
  constructor() {
    super();
    this.state = { todos: [] };
  }

  addTodo = (e) => {
    e.preventDefault();

    let jam = this.refs.jam.value;
    let aktivitas = this.refs.aktivitas.value;

    this.state.todos.push({ jam, aktivitas});

    this.setState({ todos: this.state.todos });

    this.refs.formulir.reset();
    this.refs.jam.focus();
  };

  removeTodo = (i) => {
    this.state.todos.splice(i, 1);
    this.setState({ todos: this.state.todos });
  };

  render() {
    let indonesia = require('moment/locale/id');
    Moment.updateLocale('id', indonesia);
    return (
      <div>
        <img src={image} alt="demo" width={300}/>
        <h3>Aplikasi Aktivitas Harian</h3>
        <p>{Moment().format('dddd')} - {Moment().format('LLL')}</p>
        <form className="form-inline" ref="formulir">
          <input className="form-control" type="text" ref="jam" placeholder="jam aktivitas" />
          <input className="form-control" type="text" ref="aktivitas" placeholder="jenis aktivitas" />
          <button className="btn btn-info" onClick={this.addTodo}>Simpan</button>
        </form>
        <hr/>
        <div>
          <ul>
            {/* <CSSTransitionGroup
              transitionName="animasi"
              transitionEnter={true}
              transitionEnterTimeout={500}
              transitionLeave={true}
              transitionLeaveTimeout={500}
            > */}
              {this.state.todos.map((data, i) => 
                  <li key={i}>
                    <div>
                      <button className="btn btn-outline-danger" onClick={()=>this.removeTodo(i)}>hapus</button> {data.jam} : {data.aktivitas}
                    </div>
                  </li>
              )}
            {/* </CSSTransitionGroup> */}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;