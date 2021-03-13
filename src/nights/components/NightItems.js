import React, {useState} from 'react'
import Card from '../../UIElements/Card'
import Button from '../../FormElements/Button'
import Modal from '../../UIElements/Modal'
import './NightItems.css'

const NightItems = props => {
    const [showBar, setShowBar] = useState(false)
    const openbar = () => setShowBar(true)
    const closeBar = () => setShowBar(false)
        
        return (
            <>
            <Modal
                show={showBar}
                onCancel={closeBar}
                header={props.barName}
                contentClass="place-item__modal-content"
                footerClass="place-item__modal-actions"
                footer={<Button onClick={closeBar}> Fermer </Button>}
            > 
                
                    <div className="map-container"> The Bar </div>
            </Modal>
           
            <li className="place=item">
                <Card className="place-item">
                <div className="place-item__image">
                    <img src={props.image} alt={props.title}/>
                </div>

                <div className="place-item__info">
                    <h2>
                        {props.barName}                    
                    </h2>
                    <h4>
                        {props.barDate}
                    </h4>

                    <p>
                        <small> Arrivé : {props.barArrival} Départ : {props.barDeparture} </small>
                    </p>

                    <div className="place-item__actions">
                        <Button onClick={openbar} > Voir le bar. </Button>
                        <Button to={`/MyNight/${props.id}`} inverse> Modifier les heures</Button>
                        <Button danger> Effacer </Button>
                    </div>
                </div>
                </Card>
            </li>
            </>
        )
}

export default NightItems