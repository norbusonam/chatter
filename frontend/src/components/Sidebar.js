import RoomList from "./RoomList";
import UserCard from "./UserCard";


export default function Sidebar({ currentRoom, setCurrentRoom, rooms, user, isRoomsLoading }) {

  return (
    <div className="w-60 h-screen max-h-screen flex flex-col">
      {
        isRoomsLoading 
        ?
          <div className="bg-gray-800 px-1 pt-2 grow text-gray-100">
            <p>loading...</p>
          </div>
        :
          <>
            <RoomList currentRoom={currentRoom} setCurrentRoom={setCurrentRoom} rooms={rooms}/>
            { !!user && <UserCard user={user} /> }
          </>
      }
    </div>
  )

}