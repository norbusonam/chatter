export default function UserCard({ user }) {

  return (
    <div className="bg-gray-900 text-gray-100 text-lg p-2">
      {user.username}
    </div>
  )

}