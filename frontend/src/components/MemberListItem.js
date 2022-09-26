export default function MemberListItem({ member }) {

  return (
    <div 
      className='w-11/12 text-gray-100 hover:bg-gray-700 transition-colors rounded-md p-2 text-left mb-1 inline-block'
    >
      <p><span className="font-bold">{member.name}</span> ({member.username})</p>
    </div>
  )

}