import React from 'react'
import Input from '../../FormElements/Input'
import './NewNight.css'
import {VALIDATOR_REQUIRE} from '../../util/validators'


const NewNight = () => {
    return (
        <form className="place-form">
            <div>
                
            </div>
            <Input element="input" type="text" label="Bar" validators={[VALIDATOR_REQUIRE()]} errorText="Please enter a valid bar name" />
        </form>
    )

}

export default NewNight