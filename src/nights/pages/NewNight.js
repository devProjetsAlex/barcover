import React,{useCallback, useReducer} from 'react'
import Input from '../../FormElements/Input'
import './NewNight.css'
import {VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH} from '../../util/validators'
import Button from '../../FormElements/Button'


const formReducer = (state, action) => {
    switch (action.type) {
        case 'INPUT_CHANGE':
        let formIsValid= true;
        for (const inputId in state.inputs) {
            if (inputId === action.inputId) {
                formIsValid = formIsValid && action.isValid;
            } else {
                formIsValid = formIsValid && state.inputs[inputId].isValid;
            }
        }
        return {
            ...state,
            inputs: {
                ...state.inputs,
                [action.inputId]: {value: action.value, isValid: action.isValid}
            },
            isValid: formIsValid
        };
        default:
            return state
    }
} 
 
const NewNight = () => {    
    const [formState, dispatch] = useReducer(formReducer, {
        inputs:{
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
        isValid: false
    });

    const inputHandler = useCallback((id, value, isValid) => {
        dispatch({
            type: 'INPUT_CHANGE',
            value: value, 
            isValid: isValid, 
            inputId: id
        })
    },[])

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
            label="Bar" 
            validators={[VALIDATOR_REQUIRE(1)]} 
            errorText="Choisir un bar valide s'il vous plaît."
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
            label='Convive de soirée'
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