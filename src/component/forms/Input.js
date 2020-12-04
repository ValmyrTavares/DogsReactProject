import React from 'react'

function input({label, type, name, value, onChange, error, onBlur}) {
    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <input name={name} id={name} type={type} onChange={onChange} value={value} onBlur={onBlur}/>
    { error && <p className="erro">{error}</p>}
        </div>
    )
}

export default input
