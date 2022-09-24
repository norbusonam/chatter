import { useEffect, useState, useRef } from "react";
import ChatHeader from "./ChatHeader";
import ChatMessages from "./ChatMessages";
import ChatNewMessage from "./ChatNewMessage";
import io from 'socket.io-client';
import { getMessages } from '../helpers/api';

const socket = io(process.env.REACT_APP_API_URL);

export default function Chat({ room, user, refreshRooms, setCurrentRoom }) {

  const [messages, setMessages] = useState([]);
  const [isMessagesLoading, setIsMessagesLoading] = useState(false);
  const [isConnected, setIsConnected] = useState(socket.connected);
  const prevRoomRef = useRef();

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
  }, [messages]);

  // update chat on room change
  useEffect(() => {
    if (!!prevRoomRef.current && prevRoomRef.current.id !== room.id) {
      socket.emit('room:exit', { room: prevRoomRef.current.id });
    }
    if (!!room) {
      socket.emit('room:enter', { room: room.id });
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
    prevRoomRef.current = room;
  }, [room]);

  return (
    <div className='grow bg-gray-700 flex flex-col max-h-screen min-w-0'>
      <ChatHeader room={room} refreshRooms={refreshRooms} setCurrentRoom={setCurrentRoom}/>
      {
        !isConnected && 
          <div className="text-red-300 p-2 bg-gray-500 shadow-md">
            Socket failed to connected, messages may not be up to date ☹️ <button onClick={() => window.location.reload()} className='underline'>try refreshing</button>
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