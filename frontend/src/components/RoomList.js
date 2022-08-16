import RoomListItem from "./RoomListItem";

// TODO: room's shouldnt be hard coded
const ROOMS = [
  {
    _id: 'a',
    emoji: '🥾',
    name: 'Hikers of Washington',
  },
  {
    _id: 'b',
    emoji: '💗',
    name: 'Single Group',
  },
  {
    _id: 'c',
    emoji: '🧑‍🎓',
    name: 'RPI Alumn',
  }
];

export default function RoomList() {
  return (
    <div className="w-60 h-screen bg-gray-600 text-center px-1 pt-2">
      {
        ROOMS.map(room =>
          <RoomListItem key={room._id} room={room} />
        )
      }
    </div>
  )
}