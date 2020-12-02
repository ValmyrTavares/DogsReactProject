import React from 'react'
import { Link } from 'react-router-dom'
import useForm from '../../Hooks/useForm'
import Button from '../forms/Button'
import Input from '../forms/Input'

function LoginForm() {

   const username = useForm();
   const password = useForm();
   
    function handleSubmit(event){
        event.preventDefault()

        if(username.validate && password.validate){
            fetch('https://dogsapi.origamid.dev/jason/jwt-auth/v1/token',{
                method:'POST',
                headers:{
                    'Content-Type':'Aplication/json',
                },
                body: JSON.stringify({username,password})
            })
            .then((response)=> {
                console.log(response)
                return response.json()
            })
            .then(json => {
                console.logO(json)
            })
        }
    }

  


    return (
        <section className="container">
            <h1>Login</h1>
            <form action="" onSubmit={handleSubmit}>
                <Input type="text" name="username" label="Name" {...username}/>
                <Input type="password" name="password" label="Senha" {...password}/>
                <Button children="Entrar"/>
            </form>
            <Link to="/login/criar">Cadastro</Link>
        </section>
    )
}

export default LoginForm
