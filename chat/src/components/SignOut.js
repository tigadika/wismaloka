import React from 'react'
import { auth } from '../firebase.js'

function SignOut() {
    return (
        <div >
        
            <button onClick={() => auth.signOut()}>Sign Out</button>
        </div>
    )
}

export default SignOut