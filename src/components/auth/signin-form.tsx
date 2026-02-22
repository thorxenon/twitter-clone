"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Input } from "../ui/Input";
import { Button } from "../ui/Button";
import { loginService } from "@/services/auth-service";
import { useAuth } from "@/contexts/auth-context";
import { toast } from "sonner";

export const SigninForm = () =>{

    const router = useRouter();

    const [ slugField, setSlugField ] = useState('');
    const [ passwordField, setPasswordField ] = useState('');
    const { loading, setLoading, login } = useAuth();

    const handleSubmit = async (e: React.FormEvent) =>{
        e.preventDefault();
        setLoading(true);

        try{
            console.log('Enviando dados:', { slug: slugField, password: passwordField });
            const request = await loginService(slugField, passwordField);

            if(request.status !== 201){
                toast.error('Slug ou senha inválidos.');
                return;
            }

            toast.success('Login realizado com sucesso!');
            login(request.data.token);
            router.replace('/home');
        }catch(error){
            toast.error('Ocorreu um erro no servidor. Tente novamente mais tarde.');
        } finally {
            setLoading(false);
        }
    }

    return(
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <Input
                placeHolder="Digite seu slug"
                value={ slugField }
                onChange={ t =>setSlugField(t) }
            />

            <Input
                password
                placeHolder="Digite a sua Senha"
                value={ passwordField }
                onChange={ t =>setPasswordField(t) }
            />

            <Button
                label="Enviar"
                type="submit"
                size={1}
            />
        </form>
    )
}