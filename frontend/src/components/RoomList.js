import { Rooms } from "../data/Rooms";
import RoomListItem from "./RoomListItem";

export default function RoomList({ selectedRoom, setRoom }) {

  return (
    <div className="bg-gray-600 text-center px-1 pt-2 grow">
      {
        Rooms.map(room =>
          <RoomListItem 
            key={room._id} 
            room={room} 
            isSelected={!!selectedRoom && selectedRoom._id === room._id}
            setRoom={setRoom}
          />
        )
      }
    </div>
  )

}