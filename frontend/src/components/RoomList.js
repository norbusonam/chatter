import RoomListItem from "./RoomListItem";

export default function RoomList({ currentRoom, setCurrentRoom, rooms }) {

  return (
    <div className="bg-gray-800 text-center px-1 pt-2 grow overflow-scroll">
      {
        rooms.map(room =>
          <RoomListItem 
            key={room.id} 
            room={room} 
            isSelected={!!currentRoom && currentRoom.id === room.id}
            setRoom={setCurrentRoom}
          />
        ) 
      }
      <button 
        className='w-11/12 text-gray-100 hover:bg-gray-700 hover:text-opacity-80 transition-colors rounded-md p-2 text-left mb-1 text-opacity-70'
        onClick={() => setCurrentRoom(null)}
      >
        <p><span>🧭</span> Explore Rooms</p>
      </button>
    </div>
  )

}