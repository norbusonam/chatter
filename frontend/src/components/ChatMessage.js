export default function ChatMessage({ message }) {

  return (
    <div>
      <div className="px-4 py-2 my-1 hover:bg-gray-600 text-gray-100">
        <span className="font-bold text-gray-400">{ message.from.username }</span>
        <p>{ message.body }</p>
      </div>
    </div>
  )

}