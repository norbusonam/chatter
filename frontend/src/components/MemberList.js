import { useEffect, useState } from "react";
import { getUsersInRoom } from '../helpers/api';
import LoadingSpinner from "./LoadingSpinner";
import MemberListItem from "./MemberListItem";

export default function MemberList({ room }) {

  const [members, setMembers] = useState([]);
  const [isMembersLoading, setIsMembersLoading] = useState(false);

  useEffect(() => {
    setIsMembersLoading(true);
    getUsersInRoom(room.id)
      .then(res => {
        setMembers(res.data.users);
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        setIsMembersLoading(false);
      })
  }, [room]);

  return (
    <div className="w-60 flex-shrink-0 h-screen bg-gray-800 px-1 pt-2 overflow-y-scroll text-center">
      {
        isMembersLoading 
        ? <LoadingSpinner />
        : members.map(member => <MemberListItem member={member} />)
      }
    </div>
  )

}