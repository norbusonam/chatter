import { useState } from "react"
import { login } from "../../src/helpers/api";

export default function Login({ setUser }) {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoginLoading, setIsLoginLoading] = useState(false);

  const onLogin = () => {
    setIsLoginLoading(true);
    login({ username, password })
      .then(res => {
        localStorage.setItem('authToken', res.au)
        setUser(res.user);
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        setIsLoginLoading(false)
      });
  }

  return (
    <div>
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
            placeholder="password"
            className={`w-60 px-3 h-10 bg-gray-600 text-gray-100 rounded-md outline-none`}
            onChange={(e) => setPassword(e.target.value)}>
          </input>
        </div>
        <br />
        <div className="pb-2 px-4">
          <button
            type="submit"
            disabled={isLoginLoading}>
              Submit
          </button>
        </div>
      </form>
    </div>
  )
}