import RoomList from "./RoomList";
import UserCard from "./UserCard";


export default function Sidebar({ selectedRoom, setRoom }) {

  return (
    <div className="w-60 h-screen flex flex-col">
      <RoomList selectedRoom={selectedRoom} setRoom={setRoom}/>
      <UserCard />
    </div>
  )

}