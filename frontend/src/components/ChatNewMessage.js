import { useState } from "react";

export default function ChatNewMessage({ socket }) {

  const [message, setMessage] = useState('');

  const sendMessageIfEnter = (e) => {
    if (e.code === 'Enter') {
      socket.emit('create:message', {
        user: 'user._id',
        body: message,
      });
      setMessage('');
    }
  };
  
  return (
    <div className="pb-2 px-4">
      <textarea
        onKeyDown={sendMessageIfEnter}
        onChange={e => setMessage(e.target.value)}
        value={message}
        className={`w-full h-10 px-3 pt-2 bg-gray-600 text-gray-100 rounded-md resize-none outline-none`}
        placeholder="Send message...">
      </textarea>
    </div>
  );

}