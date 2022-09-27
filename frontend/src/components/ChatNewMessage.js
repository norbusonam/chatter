import { useEffect, useRef, useState } from "react";

export default function ChatNewMessage({ socket, user, room }) {

  const [message, setMessage] = useState('');
  const messageTextarea = useRef(null);

  useEffect(() => {
    setMessage('');
    messageTextarea.current.focus()
  }, [room]);

  const sendMessageIfEnter = (e) => {

    if (e.code === 'Enter') {
      e.preventDefault();
      e.stopPropagation();
      if (!!message) {
        // TODO: this really needs to be authenticated
        // const authToken = localStorage.getItem('authToken');
        socket.emit('message:create', {
          from: user.id,
          room: room.id,
          body: message,
        });
        setMessage('');
      }
    }

    if (!!message && e.code === 'Enter') {
    }
  };
  
  return (
    <div className="pb-2 px-4">
      <textarea
        onKeyDown={sendMessageIfEnter}
        onChange={e => setMessage(e.target.value)}
        value={message}
        ref={messageTextarea}
        autoFocus
        className={`w-full h-10 px-3 pt-2 bg-gray-600 text-gray-100 rounded-md resize-none outline-none`}
        placeholder="Send message...">
      </textarea>
    </div>
  );

}