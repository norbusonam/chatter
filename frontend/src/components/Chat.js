import ChatHeader from "./ChatHeader";
import ChatMessages from "./ChatMessages";
import ChatNewMessage from "./ChatNewMessage";

export default function Chat({ room }) {

  return (
    <div className='grow bg-gray-700 flex flex-col'>
      <ChatHeader roomEmoji={room.emoji} roomName={room.name} />
      <ChatMessages messages={room.messages}/>
      <ChatNewMessage />
    </div>
  )

}