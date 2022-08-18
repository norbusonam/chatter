import { useState } from "react";

export default function ChatNewMessage() {

  const [messageHeight, setMessageHeight] = useState(10);

  const sendMessage = () => {
    // TODO: send message logic
  };

  const updateHeight = (event) => {
    // TODO: this logic still needs work
    setMessageHeight(10 + parseInt((event.target.scrollHeight - 40) / 20) * 10)
  };
  
  return (
    <div className="pb-2 px-4">
      <form onSubmit={sendMessage}>
        <textarea
          onKeyUp={updateHeight}
          className={`w-full h-${Math.max(messageHeight, 10)} px-3 pt-2 bg-gray-500 text-gray-100 rounded-md resize-none`}
          placeholder="Send message...">
        </textarea>
      </form>
    </div>
  )

}