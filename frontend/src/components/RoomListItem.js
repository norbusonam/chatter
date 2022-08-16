export default function RoomListItem({ room }) {

  return (
    <button className="w-11/12 text-gray-100 hover:bg-gray-700 transition-colors rounded-md p-2 text-left mb-1">
      <p><span>{room.emoji}</span> {room.name}</p>
    </button>
  )

}