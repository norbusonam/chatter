export default function UserCard({ user, setUser }) {

  const onLogout = () => {
    localStorage.setItem('authToken', null)
    setUser(null);
  }

  return (
    <div className="bg-gray-900 text-gray-100 text-lg p-2 shrink">
      <div>
        {user.username}
      </div>
      <div>
        <button onClick={onLogout}>
          Logout
        </button>
      </div>
    </div>
  )

}