import ChatHeader from "./ChatHeader";

export default function Chat({ room }) {

  return (
    <div className='grow bg-gray-700'>
      <ChatHeader roomEmoji={room.emoji} roomName={room.name} />
    </div>
  )

}