import { useState } from 'react';
import { createUserInRoom, deleteUserInRoom } from '../helpers/api';

export default function RoomCard({ room, refreshRooms, userIsInRoom }) {

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

  const leaveRoom = () => {
    deleteUserInRoom(room.id)
      .then(_ => {
        refreshRooms();
      })
      .catch(err => {
        console.log(err);
      });
  }

  return (
    <div 
      className='w-full text-gray-100 bg-gray-600 hover:bg-gray-800 transition-colors rounded-md p-2 text-left mb-2 flex items-center transition-colors'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className='grow'>
        <h1 className='font-bold mb-1'>{room.emoji} {room.name}</h1>
        <p className='text-gray-300'>{room.description}</p>
      </div>
      <div>
        { 
          isHovered &&
          <button
            className={`h-8 w-16 mx-2 rounded-md hover:bg-opacity-70 bg-opacity-50 transition-colors ${ userIsInRoom ? 'bg-red-500' : 'bg-green-400' }`}
            onClick={ userIsInRoom ? leaveRoom : joinRoom }>
            { userIsInRoom ? "Leave" : "Join" }
          </button>
        }
      </div>
    </div>
  )
}