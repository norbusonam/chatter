import { useState } from "react"
import { getRooms } from "../helpers/api";
import RoomCard from "./RoomCard";

export default function ExploreRooms({ setRooms }) {

  const [query, setQuery] = useState('');
  const [roomsFromQuery, setRoomsFromQuery] = useState([]);
  const [isRoomsFromQueryLoading, setIsRoomsFromQueryLoading] = useState(false);

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
    <div className='grow bg-gray-700 flex flex-col max-h-screen'>
      <h1 className='text-gray-100'>Explore rooms!</h1>
      <form onSubmit={onSearch}>
        <input type='text-gray-100' value={query} onChange={e => setQuery(e.target.value)}></input>
      </form>
      {
        isRoomsFromQueryLoading ?
          <p className='text-gray-100'>loading...</p>
        :
          roomsFromQuery.map(room => <RoomCard key={room.id} room={room} />)
      }
    </div>
  )

}