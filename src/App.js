import React, { Component } from 'react'; 
import './App.css';
import UserList from './components/UseList';

class App extends Component {
  state={
    users:[
      {id:1,name:'arun',age:21,belt:'green'},
      {id:2,name:'arun1',age:22,belt:'green'},
      {id:3,name:'arun2',age:23,belt:'green'}
    ]
  };
  render(){
    return (
      <div>
         <h1>here create the react app</h1>
         <UserList users={this.state.users}/>
      </div>
    );
  }
  
}

export default App;
