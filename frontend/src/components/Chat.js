import { useEffect, useState } from "react";
import ChatHeader from "./ChatHeader";
import ChatMessages from "./ChatMessages";
import ChatNewMessage from "./ChatNewMessage";
import io from 'socket.io-client';
import { Messages } from '../data/Messages';

const socket = io("localhost:3001");

export default function Chat({ room }) {

  const [messages, setMessages] = useState(Messages);

  useEffect(() => {

    socket.on('new:message', (msg) => {
      setMessages([...messages, msg]);
    })

    return () => {
      socket.off('connect');
      socket.off('disconnect');
    };
    
  }, [messages]);

  return (
    <div className='grow bg-gray-700 flex flex-col'>
      <ChatHeader roomEmoji={room.emoji} roomName={room.name} />
      <ChatMessages messages={messages}/>
      <ChatNewMessage socket={socket} />
    </div>
  )

}