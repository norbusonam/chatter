import { useState } from "react"
import { signup } from "../../src/helpers/api";

export default function Signup({ setUser }) {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isSignupLoading, setIsSignupLoading] = useState(false);
  const [failedToSignup, setFailedToSignup] = useState(false);

  const onSignup = (e) => {
    e.preventDefault();
    setIsSignupLoading(true);
    signup({ name, email, username, password })
      .then(res => {
        localStorage.setItem('authToken', 'Bearer ' + res.data.token);
        setUser(res.data.user);
      })
      .catch(err => {
        console.log(err);
        setFailedToSignup(true);
      })
      .finally(() => {
        setIsSignupLoading(false);
      });
  }

  return (
    <div>
     { failedToSignup && <p className="text-red-200 pb-4">Failed to signup ☹️</p> }
      <form onSubmit={onSignup}>
        <div className="pb-2 px-4">
          <input
            value={name}
            type="name"
            placeholder="name"
            className={`w-60 px-3 h-10 bg-gray-600 text-gray-100 rounded-md outline-none`}
            onChange={(e) => setName(e.target.value)}>
          </input>
        </div>
        <div className="pb-2 px-4">
          <input
            value={email}
            type="email"
            placeholder="email"
            className={`w-60 px-3 h-10 bg-gray-600 text-gray-100 rounded-md outline-none`}
            onChange={(e) => setEmail(e.target.value)}>
          </input>
        </div>
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
            disabled={isSignupLoading}>
              Signup
          </button>
        </div>
      </form>
    </div>
  )
}