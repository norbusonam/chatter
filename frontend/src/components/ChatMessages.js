import { useEffect, useRef } from "react"
import ChatMessage from "./ChatMessage"

export default function ChatMessages({ messages }) {

  const messagesEnd = useRef(null)

  useEffect(() => {
    messagesEnd.current.scrollIntoView({ behavior: "smooth",  });
  }, [messages])

  return (
    <div className="grow overflow-scroll">
      {
        messages.map(message => {
          return <ChatMessage key={message._id} message={message}/>
        })
      }
      <div ref={messagesEnd}></div>
    </div>
  )

}