import { useState, useEffect } from "react";
import { db } from "../firebase";
import SendMessages from "./SendMessages";
import SignOut from "./SignOut";
function Chat() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    db.collection("messages")
      .orderBy("createdAt")
      .limit(50)
      .onSnapshot((snapshot) => {
        setMessages(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);

  console.log(messages, "<");

  return (
    <div>
      <SignOut></SignOut>
      <div className="msgs">
        {messages.map(({ id, text, photoURL, uid }) => (
          <div>
         <img src={photoURL} alt="" />
            <p>{text} </p>
          </div>
        ))}
      </div>
      <SendMessages />
    </div>
  );
}

export default Chat;
