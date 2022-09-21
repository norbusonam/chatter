import { useState } from "react";
import { createUserInRoom } from '../helpers/api';

export default function RoomCard({ room, refreshRooms }) {

  const [isHovered, setIsHovered] = useState(false);

  const joinRoom = () => {
    createUserInRoom(room.id)
      .then(_ => {
        refreshRooms();
      })
      .catch(err => {
        console.log(err);
      });
  }

  return (
    <div 
      className='w-full text-gray-100 bg-gray-600 hover:bg-gray-800 transition-colors rounded-md p-2 text-left mb-1 flex' 
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
    >
      <div className="grow">
        <h1>{room.emoji} {room.name}</h1>
        <p>{room.description}</p>
      </div>
      <div className="">
        { isHovered && <button onClick={joinRoom}>Join</button> }
      </div>
    </div>
  )
}