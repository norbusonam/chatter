import ChatMessage from "./ChatMessage"

export default function ChatMessages({ messages }) {

  return (
    <div className="grow">
      {
        messages.map(message => {
          return <ChatMessage key={message._id} message={message}/>
        })
      }
    </div>
  )

}