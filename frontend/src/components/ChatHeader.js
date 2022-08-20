export default function ChatHeader({ roomEmoji, roomName }) {

  return (
    <div className="h-12 shadow-md px-4 py-2 text-xl text-gray-300">
      { roomEmoji } { roomName }
    </div>
  )

}