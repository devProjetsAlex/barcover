import React,{useState} from 'react'
import {useForm} from '../../FormElements/form-hook'
import Input from '../../FormElements/Input'
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../util/validators'

import Button from '../../FormElements/Button'


const ConnexionAdmin = () => {     
    const [isLoginMode, setIsLoginMode] = useState(true)
    const [formState, inputHandler, setFormData] = useForm(
        {
            email:{
                value:'',
                isValid: false
            },
            password:{
                value:'',
                isValid: false
            }
        },
        false
    )

    const switchModeHandler = () =>{
        if (!isLoginMode) {
            setFormData(
              {
                ...formState.inputs,
                address: undefined,          
              },
              formState.inputs.email.isValid && formState.inputs.password.isValid
            );
          } else {
            setFormData(
              {
                ...formState.inputs,
                address: {
                  value: '',
                  isValid: false
                }    
              },
              false
            );
          }

        setIsLoginMode(prevMode=> !prevMode)
    }


    const authSubmitHandler = event => {
        event.preventDefault();
        console.log(formState.inputs)
    }

        return (
            <>
            <form className="place-form" onSubmit={authSubmitHandler}>
                {!isLoginMode && (
                    <>
                <Input element="input"
                id="business"
                type="text"
                label="Nom de l'entreprise"
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Entrer votre nom s'il vous plaît."
                onInput={inputHandler}
                >
                </Input>

                <Input element="input"
                id="phone"
                type="number"
                label="Téléphone"
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Entrer votre numéro de téléphone s'il vous plaît."
                onInput={inputHandler}
                >
                </Input>
                
                <Input element="input"
                id="emailEntreprise"
                type="email"
                label="Email Entreprise"
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Entrer un Email valide s'il vous plaît."
                onInput={inputHandler}
                >
                </Input>
                      </>
                )}
       
                <Input 
                    element="input"
                    id="email"
                    type="email"
                    label="E-Mail"
                    validators={[VALIDATOR_EMAIL()]}
                    errorText={"Entrer une addresse Email Valide s'il vous plaît"}
                    onInput= {inputHandler}
                >                
                </Input>

                <Input 
                    element="input"
                    id="password"
                    type="password"
                    label="Password"
                    validators={[VALIDATOR_MINLENGTH(5)]}
                    errorText="Entrer un password de 5 caractères minimum."                        
                    onInput= {inputHandler}
               >
                </Input>
                <div className="place-item__info">
                <Button >
                    {isLoginMode ? 'Connexion' : "S'inscrire" }
                </Button>
                <Button inverse onClick={switchModeHandler}>
                    {isLoginMode ? 'Créer un compte' : 'Retour'}
                </Button>
                </div>
   
            </form>
           </>
        )
  }
  export default ConnexionAdmin;
  