import RoomList from "./RoomList";
import UserCard from "./UserCard";


export default function Sidebar({ currentRoom, setCurrentRoom, rooms, user }) {

  return (
    <div className="w-60 h-screen max-h-screen flex flex-col">
      <RoomList currentRoom={currentRoom} setCurrentRoom={setCurrentRoom} rooms={rooms}/>
      <UserCard user={user} />
    </div>
  )

}