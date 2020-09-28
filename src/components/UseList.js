import React, { Component } from 'react';

const UserList = (props) => {
    const users = props.users;
    console.log('props', props);
    //const users = this.props.users;
    const userlistmap = users.map(user => {
        return user.age > 21 ? (
            <p key={user.id}> this is {user.name} aged {user.age} having {user.belt} belt</p>
        ) : null;
    })
    return (
        <div>
            <h1>User data</h1>
            {userlistmap}
        </div>

    );

}

export default UserList;