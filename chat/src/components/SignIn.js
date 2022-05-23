import firebase from 'firebase/compat/app';
import {auth} from '../firebase'

function SignIn() {

    function signInWithGoogle() {
        const provider = new firebase.auth.GoogleAuthProvider()
        auth.signInWithPopup(provider)
    }
  return (
  <button onClick={signInWithGoogle}>Sign in with google</button>
  )
}

export default SignIn