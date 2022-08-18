export default function ChatHeader({ roomEmoji, roomName }) {

  return (
    <div className="h-12 shadow-md pt-3 pl-4 text-xl text-gray-300">
      { roomEmoji } { roomName }
    </div>
  )

}