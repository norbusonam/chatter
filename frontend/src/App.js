import { useState } from 'react';
import RoomList from "./components/RoomList";
import Chat from "./components/Chat";
import ChatPlaceholder from './components/ChatPlaceholder'

function App() {

  const [room, setRoom] = useState(null);

  return (
    <div className='flex'>
      <RoomList selectedRoom={room} setRoom={setRoom}/>
      {
        !!room ?
          <Chat room={room}/>
        :
          <ChatPlaceholder />
      }
    </div>
  );

}

export default App;
