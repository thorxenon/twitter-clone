"use client"

import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Input } from "../ui/Input";
import { Button } from "../ui/Button";

export const SigninForm = () =>{

    const router = useRouter();

    const [ name, setName ] = useState('');
    const [ emailField, setEmailField ] = useState('');
    const [ passwordField, setPasswordField ] = useState('');

    const handleEnterButton = () =>{
        router.replace('/home');
    }


    return(
        <>
            <Input
                placeHolder="Digite seu e-mail"
                value={ emailField }
                onChange={ t =>setEmailField(t) }
            />

            <Input
                password
                placeHolder="Digite a sua Senha"
                value={ passwordField }
                onChange={ t =>setPasswordField(t) }
            />

            <Button
                //onSubmit={e=> handleSubmit(e)}
                onClick={handleEnterButton}
                label="Enviar"
                size={1}
            />
        </>
    )
}