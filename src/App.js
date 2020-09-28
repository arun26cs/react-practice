import React, { Component } from 'react'; 
import './App.css';
import UserList from './components/UseList';
import Adduser from './components/Adduser';

class App extends Component {
  state={
    users:[
      {id:1,name:'arun',age:21,belt:'green'},
      {id:2,name:'arun1',age:22,belt:'green'},
      {id:3,name:'arun2',age:23,belt:'green'}
    ]
  };

  addNinjas = (user)=>{
    let userstemp = [...this.state.users];
    userstemp.push(user);
    this.setState(
      {
        users:userstemp
      }
    );
  }
  render(){
    return (
      <div>
         <h1>here create the react app</h1>
         <UserList users={this.state.users}/>
         <Adduser addNinjas={this.addNinjas}/>
      </div>
    );
  }
  
}

export default App;
