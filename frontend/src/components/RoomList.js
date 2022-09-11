import RoomListItem from "./RoomListItem";

export default function RoomList({ currentRoom, setCurrentRoom, rooms }) {

  return (
    <div className="bg-gray-800 text-center px-1 pt-2 grow overflow-scroll">
      {
        rooms.map(room =>
          <RoomListItem 
            key={room._id} 
            room={room} 
            isSelected={!!currentRoom && currentRoom._id === room._id}
            setRoom={setCurrentRoom}
          />
        )
      }
    </div>
  )

}