import RoomList from "./RoomList";
import UserCard from "./UserCard";


export default function Sidebar({ currentRoom, setCurrentRoom, rooms, user, isRoomsLoading }) {

  return (
    <div className="w-60 h-screen max-h-screen flex flex-col">
      {
        isRoomsLoading 
        ?
          <div>
            <RoomList currentRoom={currentRoom} setCurrentRoom={setCurrentRoom} rooms={rooms} is/>
            { !!user && <UserCard user={user} /> }
          </div>
        :
          <p>loading...</p>
      }
    </div>
  )

}