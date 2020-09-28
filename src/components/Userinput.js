import React,{Component} from 'react';

class Userinput extends Component{
    render(){
        users = this.props;
        const userlistmap = users.map(user =>{
            <p> this is {user.name} aged {user.age} having {user.belt} belt</p>
        })
        return (
            <div>   
                <h1>User data</h1>
                {userlistmap}
            </div>
        
        );
    }
}

export default Userinput;