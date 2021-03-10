import React from 'react';

import UserItem from './UserItem';
import './UserList.css';
import Card from '../../UIElements/Card'

const UsersList = props => {
  if (props.items.length === 0) {
    return (
      <Card className="center">
        
          <h2>No users found.</h2>
        
      </Card>
    );
  }

  return (
    <ul className="users-list">
      {props.items.map(user => (
        <UserItem
          key={user.id}
          id={user.id}        
          name={user.name}
          email={user.email}
          image={user.image}
          barCount={user.bars}
         
        />
      ))}
    </ul>
  );
};

export default UsersList;
