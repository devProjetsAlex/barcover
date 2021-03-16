import React from 'react'
import Card from '../../UIElements/Card'
import "./NightsList.css"
import NightItems from './NightItems'
import Button from '../../FormElements/Button'

const NightsList = props => {
    if (props.items.length === 0 ) {
        return(
           <div className="place-list center">
               <Card>
                   <h2>
                       Vous n'avez pas enregistré de lieux visité dans votre soirée. Voulez-vous en enregistrer un?
                   </h2>
                   <Button className="place-list center" to="/MyNight/New"> Créer une soirée! </Button>
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

export default NightsList