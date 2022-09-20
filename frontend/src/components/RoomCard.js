export default function RoomCard({ room }) {
  return (
    <div className='text-gray-100'>
      <h1>{room.emoji} {room.name}</h1>
      <p>{room.description}</p>
    </div>
  )
}