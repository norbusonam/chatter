import { useEffect, useState } from "react"
import { getRooms } from "../helpers/api";
import RoomCard from "./RoomCard";

export default function ExploreRooms({ refreshRooms }) {

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

  return (
    <div className='grow bg-gray-700 flex flex-col max-h-screen p-4'>
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
          <p className='text-gray-100 text-center'>loading...</p>
        :
          roomsFromQuery.length === 0 ?
            <p className='text-gray-100 text-center'>No rooms found ☹️</p>
          :
            roomsFromQuery.map(room => <RoomCard key={room.id} room={room} refreshRooms={refreshRooms}/>)
      }
    </div>
  )

}