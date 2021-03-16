import React from 'react'

import Button from '../../FormElements/Button'
import Card from '../../UIElements/Card'
import "./AccueilConnexion.css"
import niccage from '../../image/niccage.PNG'

const AccueilConnexion = () => {
    return (
        <>
       <div className="place-list center">
                <Card className="place-item">
                <div className="place-item__image">
                    <img src={niccage} alt="Nic Cage"/>
                </div>

                <div className="place-item__info">
                    <div className="place-item__actions">
                        <Button to="ConnexionPublic"> Connexion Public </Button>                  
                    </div>
                </div>
                </Card>
            </div>

            <div className="place-list center">
                <Card className="place-item">
                <div className="place-item__image">
                    <img src={niccage} alt="Nic Cage"/>
                </div>

                <div className="place-item__info">
                    <div className="place-item__actions">
                        <Button to="ConnexionBusiness" > Connexion Business </Button>                  
                    </div>
                </div>
                </Card>
            </div>
            <div className="place-list center">
               <Button to="ConnexionAdmin" inverse> Connexion Admin</Button>
            </div>
        </>
    )
}

export default AccueilConnexion