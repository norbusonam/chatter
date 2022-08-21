import { useState } from 'react';
import Chat from "./components/Chat";
import ChatPlaceholder from './components/ChatPlaceholder'
import Sidebar from './components/Sidebar';

function App() {

  const [room, setRoom] = useState(null);

  return (
    <div className='flex'>
      <Sidebar selectedRoom={room} setRoom={setRoom}/>
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
