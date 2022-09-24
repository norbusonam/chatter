import RoomList from "./RoomList";
import UserCard from "./UserCard";


export default function Sidebar({ currentRoom, setCurrentRoom, rooms, user, logoutUser }) {

  return (
    <div className="w-60 flex-shrink-0 h-screen flex flex-col">
      <RoomList currentRoom={currentRoom} setCurrentRoom={setCurrentRoom} rooms={rooms}/>
      <UserCard user={user} logoutUser={logoutUser}/>
    </div>
  )

}