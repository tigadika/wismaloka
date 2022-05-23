import { useState } from "react";
import {db, auth} from '../firebase'
import firebase from 'firebase/compat/app';
function SendMessages() {
    const [messages, setMessages] = useState('');
async function sendMessages(e){
    e.preventDefault();
    const {uid, photoURL} = auth.currentUser

    await db.collection('messages').add({
        text: messages,
        photoURL,
        uid,
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
    })
}
  return (
    <div>
        <form onSubmit={sendMessages}>
            <input value={messages} onChange={(e) => setMessages(e.target.value) } type="text" placeholder="messages..."></input>
            <button type="submit">send</button>
        </form>
    </div>
  )
}

export default SendMessages