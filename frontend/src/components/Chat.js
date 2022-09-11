import { useEffect, useState } from "react";
import ChatHeader from "./ChatHeader";
import ChatMessages from "./ChatMessages";
import ChatNewMessage from "./ChatNewMessage";
import io from 'socket.io-client';
import { getMessages } from '../helpers/api';

const socket = io("localhost:3001");

export default function Chat({ room }) {

  const [messages, setMessages] = useState([]);
  const [isMessagesLoading, setIsMessagesLoading] = useState(false);

  // set up sockets
  useEffect(() => {
    socket.on('message:new', (msg) => {
      setMessages([...messages, msg]);
    })
    return () => {
      socket.off('connect');
      socket.off('disconnect');
    };
  }, [messages]);

  // update chat on room change
  useEffect(() => {
    setIsMessagesLoading(true);
    getMessages().then(res => {
      setMessages(res.messages);
      setIsMessagesLoading(false);
    })
  }, [room])

  return (
    <div className='grow bg-gray-700 flex flex-col max-h-screen'>
      <ChatHeader roomEmoji={room.emoji} roomName={room.name} />
      {
        isMessagesLoading 
          ? <p>loading...</p>
          : <ChatMessages messages={messages}/>
      }
      <ChatNewMessage socket={socket} />
    </div>
  )

}