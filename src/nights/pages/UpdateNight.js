import React from 'react'
import {useParams} from 'react-router-dom'
import {useForm} from '../../FormElements/form-hook'
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

    const [formState, inputHandler] = useForm({       
            barName:{
            value:identifiedNight.barName,
            isValid: true
        },
            barDate:{
            value:identifiedNight.barDate,
            isValid: true
        },    
        
            barArrival:{
            value:identifiedNight.barArrival,
            isValid: true
        },
            barDeparture:{
            value:identifiedNight.barDeparture,
            isValid: true
        },
            friends:{
            value:identifiedNight.friends,
            isValid: true
                }  

    }, true
    )

    const barUpdateSubmit = event => {
        event.preventDefault();
        console.log(formState.inputs)
    }

    if (!identifiedNight) {
        return (
            <div className="center">
                <h2> Aucune soirée de trouvée. </h2>
            </div>
        )
    }




    return (
        <form className="place-form" onSubmit={barUpdateSubmit}>
        <Input 
            id='barName'
            element="input" 
            type="text" 
            label="Bar" 
            validators={[VALIDATOR_REQUIRE(1)]} 
            errorText="Choisir un bar valide s'il vous plaît."
            onInput = {inputHandler}
            initialValue={formState.inputs.barName.value}
            initialIsValid={formState.inputs.barName.isValid}
            />
            <Input 
            id='barDate'
            element="input" 
            type="date" 
            label="Jour" 
            validators={[VALIDATOR_MINLENGTH(1)]} 
            errorText="Choisir une date s'il vous plaît."
            onInput ={inputHandler}
            initialValue={formState.inputs.barDate.value}
            initialIsValid={formState.inputs.barDate.isValid}
            />
                  <Input 
            id='barArrival'
            element="input" 
            type="time" 
            label="Heure d'arrivé" 
            validators={[VALIDATOR_MINLENGTH(1)]} 
            errorText="Choisir une heure d'arrivé."
            onInput = {inputHandler}
            initialValue={formState.inputs.barArrival.value}
            initialIsValid={formState.inputs.barArrival.isValid}
            />
            <Input 
            id='barDeparture'
            element="input" 
            type="time" 
            label="Heure de départ" 
            validators={[VALIDATOR_MINLENGTH(1)]} 
            errorText="Choisir une heure de départ."
            onInput = {inputHandler}
            initialValue={formState.inputs.barDeparture.value}
            initialIsValid={formState.inputs.barDeparture.isValid}
            />
            <Input
            id='friends'
            element='textarea'
            label='Convive de soirée'
            validators={[VALIDATOR_REQUIRE(1)]}
            errorText="Entrer le nom des personnes avec qui vous sortez"
            onInput={inputHandler}
            initialValue={formState.inputs.friends.value}
            initialIsValid={formState.inputs.friends.isValid}
            />

            <Button type="submit" disabled={!formState.isValid} >
                Modifié la soirée!
            </Button>
        </form>
    )
}

export default UpdateNight