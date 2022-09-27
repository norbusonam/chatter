import { useState } from 'react';

export default function ChatMessage({ message }) {

  const [isHoveredOverUsername, setIsHoveredOverUsername] = useState(false);

  const isEmojiMessage = (msg) => {
    
    const emojiRegex = /\p{Emoji}/u;
    for (let character of msg.trim()) {
      if (!emojiRegex.test(character)) return false;
    }
    return true;
  }

  return (
    <div className="px-4 py-2 my-1 hover:bg-gray-600 text-gray-100">
      <span
        className="font-bold text-gray-400 relative cursor-pointer"
        onMouseEnter={() => setIsHoveredOverUsername(true)}
        onMouseLeave={() => setIsHoveredOverUsername(false)}>
        {
          isHoveredOverUsername &&
          <span
            className='absolute bottom-6 bg-gray-800 p-2 ease-out rounded-md'>
            {message.from.username}
          </span>
        }
        { message.from.name }
      </span>
      <p className={isEmojiMessage(message.body) ? 'text-5xl' : ''}>{ message.body }</p>
    </div>
  )

}