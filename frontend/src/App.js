import { useEffect, useState } from 'react';
import Auth from './components/Auth';
import Chat from "./components/Chat";
import ExploreRooms from './components/ExploreRooms';
import LoadingSpinner from './components/LoadingSpinner';
import Sidebar from './components/Sidebar';
import { getMe, getRooms } from './helpers/api';

function App() {

  const [user, setUser] = useState(null);
  const [isUserLoading, setIsUserLoading] = useState(false);
  const [rooms, setRooms] = useState([]);
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
          setIsUserLoading(false);
        });
    }
  }, []);

  useEffect(() => {
    if (!!user) {
      refreshRooms();
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

  const refreshRooms = () => {
    getRooms({ onlyMine: true, query: '' })
      .then(res => {
        setRooms(res.data.rooms);
      })
      .catch(err => {
        console.log(err);
      })
  }

  return (
    <div>
      {
        isUserLoading 
        ?
          <LoadingSpinner />
        :
          !!user ?
            <div className='flex'>
              <Sidebar currentRoom={currentRoom} setCurrentRoom={setCurrentRoom} rooms={rooms} user={user} logoutUser={logoutUser}/>
              {
                !!currentRoom ?
                  <Chat room={currentRoom} user={user} refreshRooms={refreshRooms} setCurrentRoom={setCurrentRoom} />
                :
                  <ExploreRooms refreshRooms={refreshRooms} userRooms={rooms}/>
              }
            </div>
          :
            <Auth setUser={setUser}/>
      }
    </div>
  );

}

export default App;
