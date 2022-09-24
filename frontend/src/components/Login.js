import { useState } from "react"
import { login } from "../../src/helpers/api";
import LoadingSpinner from "./LoadingSpinner";

export default function Login({ setUser }) {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoginLoading, setIsLoginLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const onLogin = (e) => {
    e.preventDefault();
    setErrorMessage('');
    setIsLoginLoading(true);
    login({ username, password })
      .then(res => {
        localStorage.setItem('authToken', 'Bearer ' + res.data.token);
        setUser(res.data.user);
      })
      .catch(err => {
        if (err.response.data && typeof(err.response.data) === 'string') {
          setErrorMessage(err.response.data)
        } else {
          setErrorMessage('Failed to login 😟')
        }
      })
      .finally(() => {
        setIsLoginLoading(false);
      });
  }

  return (
    <div>
      { errorMessage && <p className="text-red-200 pb-4">{errorMessage}</p> }
      <form onSubmit={onLogin}>
        <div className="pb-2 px-4">
          <input
            value={username}
            disabled={isLoginLoading}
            type="text"
            placeholder="username"
            className={`w-60 px-3 h-10 bg-gray-600 text-gray-100 rounded-md outline-none`}
            onChange={(e) => setUsername(e.target.value)}>
          </input>
        </div>
        <div className="pb-2 px-4">
          <input
            value={password}
            disabled={isLoginLoading}
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
              {
                isLoginLoading 
                ? <LoadingSpinner />
                : "Login"
              }
          </button>
        </div>
      </form>
    </div>
  )
}