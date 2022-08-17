export default function RoomListItem({ room, isSelected, setRoom }) {

  return (
    <button 
      className={`w-11/12 text-gray-100 hover:bg-gray-700 hover:text-opacity-80 transition-colors trans rounded-md p-2 text-left mb-1 ${isSelected ? 'text-opacity-100 bg-gray-700' : 'text-opacity-60'}`}
      onClick={() => setRoom(room)}
    >
      <p><span>{room.emoji}</span> {room.name}</p>
    </button>
  )

}