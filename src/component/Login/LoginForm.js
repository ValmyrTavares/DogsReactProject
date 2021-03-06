import React from 'react'
import { Link } from 'react-router-dom'
import { TOKEN_POST,  USER_GET } from '../../api'
import useForm from '../../Hooks/useForm'
import Button from '../forms/Button'
import Input from '../forms/Input'

function LoginForm() {

   const username = useForm();
   const password = useForm();

   React.useState(()=> {
        const token = window.localStorage.getItem('token')
        if(token){
            getUser(token)

        }
   },[])


   async function getUser(token){
       const{url, options} = USER_GET(token)
       const response = await fetch(url, options)
       const json = await response.json();
       console.log(json)
   }
   
   async function handleSubmit(event){
        event.preventDefault()

        if(username.validate && password.validate){

            const {url, options} = TOKEN_POST({
                username: username.value,
                password:password.value
            })
            
            const response =  await fetch(url, options)
           const json = await response.json();           
           window.localStorage.setItem('token',json.token);
           getUser(json.token);
          
        }
    }

  


    return (
        <section className="container">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <Input type="text" name="username" label="Name" {...username}/>
                <Input type="password" name="password" label="Senha" {...password}/>
                <Button children="Entrar"/>
            </form>
            <Link to="/login/criar">Cadastro</Link>
        </section>
    )
}

export default LoginForm
