import React,{Component} from 'react';

class UserList extends Component{
    render(){
        console.log('state',this.state);
        console.log('props',this.props);
        const users = this.props.users;
        const userlistmap = users.map(user =>{
            return (
                <p key={user.id}> this is {user.name} aged {user.age} having {user.belt} belt</p>
            );
        })
        return (
            <div>   
                <h1>User data</h1>
                {userlistmap}
            </div>
        
        );
    }
} 

export default UserList;