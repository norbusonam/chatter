import { useEffect, useState } from "react";
import ChatHeader from "./ChatHeader";
import ChatMessages from "./ChatMessages";
import ChatNewMessage from "./ChatNewMessage";
import io from 'socket.io-client';
import { getMessages } from '../helpers/api';

const socket = io(process.env.REACT_APP_API_URL);

export default function Chat({ room, user }) {

  const [messages, setMessages] = useState([]);
  const [isMessagesLoading, setIsMessagesLoading] = useState(false);
  const [isConnected, setIsConnected] = useState(socket.connected);

  // set up sockets
  useEffect(() => {

    socket.on('connect', () => {
      setIsConnected(true);
    });

    socket.on('disconnect', () => {
      setIsConnected(false);
    });

    socket.on('message:new', (msg) => {
      setMessages([...messages, msg]);
    });

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
          setIsMessagesLoading(false);
        });
    }
  }, [room]);

  return (
    <div className='grow bg-gray-700 flex flex-col max-h-screen'>
      <ChatHeader roomEmoji={room.emoji} roomName={room.name} />
      
      {
        !isConnected && 
          <div>
            Socket it not connected, messages may not be up to date ☹️ try <a onClick={window.location.reload(true)}>refreshing</a>
          </div>
      }
      {
        isMessagesLoading 
          ? <div className="grow text-gray-100"><p>loading...</p></div>
          : <ChatMessages messages={messages}/>
      }
      <ChatNewMessage socket={socket} user={user} room={room} />
    </div>
  )

}