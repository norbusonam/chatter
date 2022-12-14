import { useState } from "react"
import { signup } from "../../src/helpers/api";
import LoadingSpinner from './LoadingSpinner';

export default function Signup({ setUser }) {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isSignupLoading, setIsSignupLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const onSignup = (e) => {
    e.preventDefault();
    setErrorMessage('');
    setIsSignupLoading(true);
    signup({ name, email, username, password })
      .then(res => {
        localStorage.setItem('authToken', 'Bearer ' + res.data.token);
        setUser(res.data.user);
      })
      .catch(err => {
        if (err.response.data && typeof(err.response.data) === 'string') {
          setErrorMessage(err.response.data)
        } else {
          setErrorMessage('Failed to signup 😟')
        }
      })
      .finally(() => {
        setIsSignupLoading(false);
      });
  }

  return (
    <div>
     { errorMessage && <p className="text-red-200 pb-4">{errorMessage}</p> }
      <form onSubmit={onSignup}>
        <div className="pb-2 px-4">
          <input
            value={name}
            disabled={isSignupLoading}
            type="name"
            placeholder="name"
            className={`w-60 px-3 h-10 bg-gray-600 text-gray-100 rounded-md outline-none`}
            onChange={(e) => setName(e.target.value)}>
          </input>
        </div>
        <div className="pb-2 px-4">
          <input
            value={email}
            disabled={isSignupLoading}
            type="email"
            placeholder="email"
            className={`w-60 px-3 h-10 bg-gray-600 text-gray-100 rounded-md outline-none`}
            onChange={(e) => setEmail(e.target.value)}>
          </input>
        </div>
        <div className="pb-2 px-4">
          <input
            value={username}
            disabled={isSignupLoading}
            type="text"
            placeholder="username"
            className={`w-60 px-3 h-10 bg-gray-600 text-gray-100 rounded-md outline-none`}
            onChange={(e) => setUsername(e.target.value)}>
          </input>
        </div>
        <div className="pb-2 px-4">
          <input
            value={password}
            disabled={isSignupLoading}
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
            disabled={isSignupLoading}>
              {
                isSignupLoading 
                ? <LoadingSpinner />
                : "Signup"
              }
          </button>
        </div>
      </form>
    </div>
  )
}