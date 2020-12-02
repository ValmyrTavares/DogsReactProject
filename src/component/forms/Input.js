import React from 'react'

function input({label,type,name}) {
    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <input name={name} id={name}type={type}/>
            <p className="erro">Error</p>
        </div>
    )
}

export default input
