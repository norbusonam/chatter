import { useState } from 'react';

export default function ChatMessage({ message }) {

  const [isHoveredOverUsername, setIsHoveredOverUsername] = useState(false);

  return (
    
    <div>
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
        <p>{ message.body }</p>
      </div>
    </div>
  )

}