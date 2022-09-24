export default function UserCard({ user, logoutUser }) {

  return (
    <div className="bg-gray-900 text-gray-100 px-2 py-4 shrink flex justify-between items-center">
      <div>
        {user.name}
      </div>
      <div>
          <button
            className='h-8 px-2 mx-2 rounded-md hover:bg-opacity-50 bg-opacity-30 transition-colors bg-red-500'
            onClick={logoutUser}>
              Logout
          </button>
      </div>
    </div>
  )

}