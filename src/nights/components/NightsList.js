import React from 'react'
import Card from '../../UIElements/Card'
import "./NightsList.css"
import NightItems from './NightItems'

const BarsList = props => {
    if (props.items.length === 0 ) {
        return(
           <div className="place-list center">
               <Card>
                   <h2>
                       Vous n'avez pas enregistré de bar visité dans votre liste. Voulez-vous en enregistrer un?
                   </h2>
               </Card>
            
           </div>
        )
    }
    return (
        <ul className="place-list">
            {props.items.map(night => (
                <NightItems
                    key={night.id}
                    id={night.id}
                    image={night.imageUrl}
                    barName={night.barName}
                    barArrival={night.barArrival}
                    barDeparture={night.barDeparture}
                    barDate={night.barDate}
                    creator={night.creator}
                    >

                </NightItems>
            ))}
        </ul>
    )
}

export default BarsList