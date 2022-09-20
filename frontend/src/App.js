import { useEffect, useState } from 'react';
import Auth from './components/Auth';
import Chat from "./components/Chat";
import ExploreRooms from './components/ExploreRooms';
import Sidebar from './components/Sidebar';
import { getMe, getRooms } from './helpers/api';

function App() {

  const [user, setUser] = useState(null);
  const [isUserLoading, setIsUserLoading] = useState(false);
  const [rooms, setRooms] = useState([]);
  const [isRoomsLoading, setIsRoomsLoading] = useState(false);
  const [currentRoom, setCurrentRoom] = useState(null);

  useEffect(() => {
    const authToken = localStorage.getItem('authToken');
    if (!!authToken) {
      setIsUserLoading(true);
      getMe()
        .then(res => {
          setUser(res.data.user);
        })
        .catch(err => {
          console.log(err);
        })
        .finally(() => {
          setIsUserLoading(false)
        });
    }
  }, []);

  useEffect(() => {
    if (!!user) {
      setIsRoomsLoading(true);
      getRooms({ onlyMine: true, query: '' })
        .then(res => {
          setRooms(res.data.rooms)
        })
        .catch(err => {
          console.log(err)
        })
        .finally(() => {
          setIsRoomsLoading(false)
        });
    } else {
      setRooms([]);
    }
  }, [user]);

  const logoutUser = () => {
    setUser(null);
    setRooms([]);
    setCurrentRoom(null);
    localStorage.removeItem('authToken');
  }

  return (
    <div>
      {
        isUserLoading || isRoomsLoading ?
          <div className="bg-gray-800 w-screen h-screen text-gray-100">
            <p>loading...</p>
          </div>
        :
          !!user ?
            <div className='flex'>
              <Sidebar currentRoom={currentRoom} setCurrentRoom={setCurrentRoom} rooms={rooms} user={user} logoutUser={logoutUser}/>
              {
                !!currentRoom ?
                  <Chat room={currentRoom} user={user} />
                :
                  <ExploreRooms setRooms={setRooms} />
              }
            </div>
          :
            <Auth setUser={setUser}/>
      }
    </div>
  );

}

export default App;
