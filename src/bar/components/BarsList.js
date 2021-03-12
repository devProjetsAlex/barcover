import React from 'react';

import BarsItem from './BarsItem';
import './BarsList.css';
import Card from '../../UIElements/Card'

const BarsList = props => {
  if (props.items.length === 0) {
    return (
      <Card className="center">
        
          <h2>No Bar found.</h2>
        
      </Card>
    );
  }

  return (
    <ul className="users-list">
      {props.items.map(bar => (
        <BarsItem
          key={bar.id}
          id={bar.id}        
          name={bar.name}
          email={bar.email}
          image={bar.image}
          phone={bar.phone}
         
        />
      ))}
    </ul>
  );
};

export default BarsList;
