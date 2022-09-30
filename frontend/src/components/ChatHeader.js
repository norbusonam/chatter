import { deleteUserInRoom } from "../helpers/api"

export default function ChatHeader({ room, refreshRooms, setCurrentRoom, isShowingMembers, showMembers, hideMembers }) {

  const leaveRoom = () => {
    deleteUserInRoom(room.id)
      .then(_ => {
        refreshRooms();
        setCurrentRoom(null);
      })
      .catch(err => {
        console.log(err);
      })
  }

  return (
    <div className="flex justify-between h-12 shadow-md px-4 py-2">
      <div className="text-xl text-gray-300">
        { room.emoji } { room.name }
      </div>
      <div>
        <button
          className='h-8 px-2 mx-1 rounded-md hover:bg-opacity-50 bg-opacity-30 transition-colors bg-blue-500 text-gray-100'
          onClick={ isShowingMembers ? hideMembers : showMembers }>
            { isShowingMembers ? 'Hide members' : 'Show members'}
        </button>
        <button
          className='h-8 px-2 mx-1 rounded-md hover:bg-opacity-50 bg-opacity-30 transition-colors bg-red-500 text-gray-100'
          onClick={leaveRoom}>
            Leave
        </button>
      </div>
    </div>
  )

}