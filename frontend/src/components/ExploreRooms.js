import { useEffect, useState } from "react"
import { getRooms } from "../helpers/api";

export default function ExploreRooms({ setRooms }) {

  const [query, setQuery] = useState('');
  const [roomsFromQuery, setRoomsFromQuery] = useState([]);
  const [isRoomsFromQueryLoading, setIsRoomsFromQueryLoading] = useState(false);

  useEffect(() => {
    queryRooms();
  }, [])

  const queryRooms = () => {
    setIsRoomsFromQueryLoading(true);
    getRooms({ onlyMine: false, query })
      .then((res) => {
        console.log(res.data)
        setRoomsFromQuery(res.data.rooms);
        setQuery('');
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
      <h1>Explore rooms!</h1>
      <form onSubmit={onSearch}>
        <input type='text' onChange={e => setQuery(e.target.value)}></input>
      </form>
      {
        isRoomsFromQueryLoading ?
          <p>loading...</p>
        :
          roomsFromQuery.map(room => (
            <div key={room.id}>
              <h1>{room.emoji} {room.name}</h1>
              <p>{room.description}</p>
            </div>
          ))
      }
    </div>
  )

}