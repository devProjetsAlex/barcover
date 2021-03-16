import React from 'react'
import Input from '../../FormElements/Input'
import './NewNight.css'
import {VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH} from '../../util/validators'
import Button from '../../FormElements/Button'
import {useForm} from '../../FormElements/form-hook'
 
const NewNight = () => {    
    const [formState, inputHandler] = useForm(
        { 
        barName:{
        value:'',
        isValid: false
    },
        barDate:{
        value:'',
        isValid: false
    },
        barArrival:{
        value:'',
        isValid: false
    },
        barDeparture:{
        value:'',
        isValid: false
    },
        friends:{
        value:'',
        isValid: false
            }         
        },
    false
    )


    const barSubmitHandler = event => {
        event.preventDefault();
        console.log(formState.inputs)
    }
    
    return (
        <form className="place-form" onSubmit={barSubmitHandler}> 
            <div>
                
            </div>
            <Input 
            id='barName'
            element="input" 
            type="text" 
            label="Lieux de la soirée. (Amis, bars, restaurant...)" 
            validators={[VALIDATOR_REQUIRE(1)]} 
            errorText="Créer un nom valide s'il vous plaît."
            onInput = {inputHandler}
            />
            <Input 
            id='barDate'
            element="input" 
            type="date" 
            label="Jour" 
            validators={[VALIDATOR_MINLENGTH(1)]} 
            errorText="Choisir une date s'il vous plaît."
            onInput = {inputHandler}
            />
                  <Input 
            id='barArrival'
            element="input" 
            type="time" 
            label="Heure d'arrivé" 
            validators={[VALIDATOR_MINLENGTH(1)]} 
            errorText="Choisir une heure d'arrivé."
            onInput = {inputHandler}
            />
            <Input 
            id='barDeparture'
            element="input" 
            type="time" 
            label="Heure de départ" 
            validators={[VALIDATOR_MINLENGTH(1)]} 
            errorText="Choisir une heure de départ."
            onInput = {inputHandler}
            />
            <Input
            id='friends'
            element='textarea'
            label='Convive de soirée?'
            validators={[VALIDATOR_REQUIRE(1)]}
            errorText="Entrer le nom des personnes avec qui vous sortez"
            onInput={inputHandler}
            />

            <Button type="submit" disabled={!formState.isValid}>
                Ajouté une soirée!
            </Button>

        </form>
    )

}

export default NewNight