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
  }, []);

  // update chat on room change
  useEffect(() => {
    if (!!room) {
      setIsMessagesLoading(true);
      getMessages(room.id, { before: new Date().toISOString() })
        .then(res => {
          setMessages(res.data.messages);
        })
        .catch(err => {
          console.log(err);
        })
        .finally(() => {
          setIsMessagesLoading(false)
        });
    }
  }, [room]);

  return (
    <div className='grow bg-gray-700 flex flex-col max-h-screen'>
      <ChatHeader roomEmoji={room.emoji} roomName={room.name} />
      {
        isMessagesLoading 
          ? <div className="grow text-gray-100
          "><p>loading...</p></div>
          : <ChatMessages messages={messages}/>
      }
      <ChatNewMessage socket={socket} />
    </div>
  )

}