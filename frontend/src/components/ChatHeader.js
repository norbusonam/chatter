export default function ChatHeader({ roomEmoji, roomName }) {

  return (
    <div className="h-10 shadow-md">
      { roomEmoji } { roomName }
    </div>
  )

}