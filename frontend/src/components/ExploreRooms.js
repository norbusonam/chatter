import { useEffect, useState } from "react"
import { getRooms } from "../helpers/api";
import RoomCard from "./RoomCard";
import CenteredText from "./CenteredText"
import LoadingSpinner from "./LoadingSpinner";

export default function ExploreRooms({ refreshRooms, userRooms }) {

  const [query, setQuery] = useState('');
  const [roomsFromQuery, setRoomsFromQuery] = useState([]);
  const [isRoomsFromQueryLoading, setIsRoomsFromQueryLoading] = useState(false);

  useEffect(() => {
    queryRooms();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const queryRooms = () => {
    setIsRoomsFromQueryLoading(true);
    getRooms({ onlyMine: false, query })
      .then((res) => {
        setRoomsFromQuery(res.data.rooms);
      })
      .catch(err => {
        console.log(err);
      }) 
      .finally(() => setIsRoomsFromQueryLoading(false));
  }
  
  const onSearch = (e) => {
    e.preventDefault();
    queryRooms();
  }

  const isUserInRoom = (room) => {
    for (let r of userRooms) {
      if (r.id === room.id) {
        return true;
      }
    }
    return false;
  }

  return (
    <div className='grow bg-gray-700 flex flex-col max-h-screen p-4 overflow-y-scroll'>
      <form onSubmit={onSearch}>
        <div className="flex justify-center pb-5">
          <input
            value={query}
            autoFocus
            type="text"
            placeholder="Room Search"
            className={'w-96 px-3 h-10 bg-gray-600 text-gray-100 rounded-md outline-none'}
            onChange={(e) => setQuery(e.target.value)}>
          </input>
        </div>
        
      </form>
      {
        isRoomsFromQueryLoading ?
          <LoadingSpinner />
        :
          roomsFromQuery.length === 0 ?
            <CenteredText text='No rooms found 😟'/>
          :
            roomsFromQuery.map(room => <RoomCard key={room.id} room={room} refreshRooms={refreshRooms} userIsInRoom={isUserInRoom(room)}/>)
      }
    </div>
  )

}