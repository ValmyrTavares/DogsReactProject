import React from 'react'

function PhotoGet() {


    function HandleSubmit(event){
        event.preventDefault()
        fetch('https://dogsapi.origamid.dev/json/api/photo')
        .then(response =>{
            console.log(response)
            return response.json()
        })
        .then(json => {
            console.log(json)
            return json
        })
    }


    return (
        <form onSubmit={HandleSubmit}>
            <input type="text"/>
            <button>Enviar</button>
        </form>
    )
}

export default PhotoGet
