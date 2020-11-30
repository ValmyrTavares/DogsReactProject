import React from 'react'
import PhotoGet from './endpoints/PhotoGet'
import PhotoPost from './endpoints/PhotoPost'
import TokenPost from './endpoints/TokenPost'
import UsePost from './endpoints/UsePost'

function Api() {
    return (
        <div>
            <h1>USER POST</h1>
            <UsePost/>
            <h1>TOKEN POST</h1>
            <TokenPost/>
            <h1>Photo Post</h1>
            <PhotoPost/>
            <h1>PhotoGet</h1>
            <PhotoGet/>
        </div>
    )
}

export default Api

