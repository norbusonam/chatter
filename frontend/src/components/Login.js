import { useState } from "react"
import { login } from "../../src/helpers/api";

export default function Login({ setUser }) {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoginLoading, setIsLoginLoading] = useState(false);
  const [failedToLogin, setFailedToLogin] = useState(false);

  const onLogin = (e) => {
    e.preventDefault();
    setIsLoginLoading(true);
    login({ username, password })
      .then(res => {
        localStorage.setItem('authToken', 'Bearer ' + res.data.token);
        setUser(res.data.token);
      })
      .catch(err => {
        console.log(err);
        setFailedToLogin(true);
      })
      .finally(() => {
        setIsLoginLoading(false);
      });
  }

  return (
    <div>
      { failedToLogin && <p className="text-red-200 pb-4">Failed to login ☹️</p> }
      <form onSubmit={onLogin}>
        <div className="pb-2 px-4">
          <input
            value={username}
            type="text"
            placeholder="username"
            className={`w-60 px-3 h-10 bg-gray-600 text-gray-100 rounded-md outline-none`}
            onChange={(e) => setUsername(e.target.value)}>
          </input>
        </div>
        <div className="pb-2 px-4">
          <input
            value={password}
            type="password"
            placeholder="password"
            className={`w-60 px-3 h-10 bg-gray-600 text-gray-100 rounded-md outline-none`}
            onChange={(e) => setPassword(e.target.value)}>
          </input>
        </div>
        <br />
        <div className="pb-2 px-4">
          <button
            type="submit"
            className='w-60 text-gray-100 bg-gray-700 hover:bg-gray-900 hover:text-opacity-80 transition-colors rounded-md p-2 mb-1 text-opacity-60 text-center'
            disabled={isLoginLoading}>
              Login
          </button>
        </div>
      </form>
    </div>
  )
}