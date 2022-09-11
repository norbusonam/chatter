import { useEffect, useState } from 'react';
import Chat from "./components/Chat";
import ChatPlaceholder from './components/ChatPlaceholder'
import Sidebar from './components/Sidebar';
import { getMe, getRooms } from './helpers/api';

function App() {

  const [user, setUser] = useState(null);
  const [isUserLoading, setIsUserLoading] = useState(false);
  const [rooms, setRooms] = useState([]);
  const [roomsIsLoading, setRoomsIsLoading] = useState(null);
  const [currentRoom, setCurrentRoom] = useState([]);

  useEffect(() => {
    setIsUserLoading(true);
    getMe().then(res => {
      setUser(res.user);
      setIsUserLoading(false);
    });
  }, []);

  useEffect(() => {
    if (!!user) {

    }
  }, [user]);

  return (
    <div>
      {
        isUserLoading ?
          <p>loading...</p>
        :
          !!user ?
            <div className='flex'>
              <Sidebar currentRoom={currentRoom} setCurrentRoom={setCurrentRoom} rooms={rooms} user={user}/>
              {
                !!currentRoom ?
                  <Chat room={currentRoom}/>
                :
                  <ChatPlaceholder />
              }
            </div>
          :
            <h1>log in!</h1> // TODO: some authentication here
      }
    </div>
  );

}

export default App;
