import React from 'react'
import {Link} from 'react-router-dom'


import './BarsItem.css'
import Avatar from "../../UIElements/Avatar"
import Card from "../../UIElements/Card"

const BarItem = props => {
    return (
        <li className="user-item">
            <div> 
            <Card className="user-item__content">
            <Link to={`/${props.id}/bars`}>    

                <div className="user-item__image">
                    <Avatar image={props.image} alt={props.name}  />
                </div>

                <div className="user-item__info">       
                
                    <div>
                        {props.name} 
                    </div> 
                    <div>
                        {props.email}
                    </div>                    
                    <div>                        
                        {props.phone} 
                    </div>
                </div>
            </Link>
            </Card>
            </div>
        </li>
    )
}

export default BarItem