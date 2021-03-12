import React from 'react'
import {useParams} from 'react-router-dom'

import Input from '../../FormElements/Input'
import Button from '../../FormElements/Button'
import {VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE} from '../../util/validators'
import './NewNight.css'

const DUMMY_NIGHT = [
    {
        id:'p1',
        friends:'George et Phil',
        barName:'Le Sacrilège',
        barArrival: "21:00",
        barDeparture: "23:00",
        barDate: "2021-03-13",
        creator: "u1"
    },
    {
        id:'p1',
        friends:'George et Phil',
        barName:'Le Nelligan',
        barArrival: "21:00",
        barDeparture: "23:00",
        barDate: "2021-03-13",
        creator: "u1"
    }
]


const UpdateNight = () => {

    const nightId = useParams().nightId;
    const identifiedNight = DUMMY_NIGHT.find(n => n.id === nightId)

    if (!identifiedNight) {
        return (
            <div className="center">
                <h2> Aucune soirée de trouvée. </h2>
            </div>
        )
    }




    return (
        <form className="place-form">
        <Input 
            id='barName'
            element="input" 
            type="text" 
            label="Bar" 
            validators={[VALIDATOR_REQUIRE(1)]} 
            errorText="Choisir un bar valide s'il vous plaît."
            onInput = {()=>{}}
            value={identifiedNight.barName}
            valid={true}
            />
            <Input 
            id='barDate'
            element="input" 
            type="date" 
            label="Jour" 
            validators={[VALIDATOR_MINLENGTH(1)]} 
            errorText="Choisir une date s'il vous plaît."
            onInput ={()=>{}}
            value={identifiedNight.barDate}
            valid={true}
            />
                  <Input 
            id='barArrival'
            element="input" 
            type="time" 
            label="Heure d'arrivé" 
            validators={[VALIDATOR_MINLENGTH(1)]} 
            errorText="Choisir une heure d'arrivé."
            onInput = {()=>{}}
            value={identifiedNight.barArrival}
            valid={true}
            />
            <Input 
            id='barDeparture'
            element="input" 
            type="time" 
            label="Heure de départ" 
            validators={[VALIDATOR_MINLENGTH(1)]} 
            errorText="Choisir une heure de départ."
            onInput = {()=>{}}
            value={identifiedNight.barDeparture}
            valid={true}
            />
            <Input
            id='friends'
            element='textarea'
            label='Convive de soirée'
            validators={[VALIDATOR_REQUIRE(1)]}
            errorText="Entrer le nom des personnes avec qui vous sortez"
            onInput={()=>{}}
            value={identifiedNight.friends}
            valid={true}
            />

            <Button type="submit" disabled={true}>
                Modifié la soirée!
            </Button>
        </form>
    )
}

export default UpdateNight