export default function UserCard({ user, logoutUser }) {

  return (
    <div className="bg-gray-900 text-gray-100 text-lg p-2 shrink">
      <div>
        {user.username}
      </div>
      <div>
        <button onClick={logoutUser}>
          Logout
        </button>
      </div>
    </div>
  )

}