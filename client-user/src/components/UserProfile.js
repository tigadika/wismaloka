import React from "react";

import { useQuery } from "@apollo/client";
import { GET_USERS } from "../queries/houseQuery";
import { useNavigate } from "react-router-dom";
export default function UserProfile() {
  const { loading, error, data } = useQuery(GET_USERS);
  const userName = localStorage.getItem("name")
  const userId = localStorage.getItem("id")

const navigate=useNavigate()


  function showChat(name) {

  
  var roomName = 'chat_'+(userName.length>name.length ? userName+'_'+name : name+'_'+userName);
   navigate(`/chat/${roomName}`)
  return roomName
  }


  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :( </p>;
  return (
    <>
      {data.getUsers.filter(el =>el.id != userId).map((user) => (
        <div onClick={()=> showChat(user.username)} className="flex flex-row bg-white p-2 border-b hover:bg-gray-100 hover:cursor-pointer">
          <img
            src={user.profilePict}
            className="h-12 w-12 rounded-full p-1 bg-gray-100"
            alt=""
          ></img>
          <div className="flex flex-col text-left ml-3 my-auto">
            <p  className="font-semibold">{user.email}</p>
            <p className="text-sm">{user.role}</p>
          </div>
        </div>
      ))}
    </>
  );
}
