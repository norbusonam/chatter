export default function CenteredText({ text }) {

  return (
    <div className="grow text-gray-100 width-full height-full flex items-center justify-center">
      <p>
        { text }
      </p>
    </div>
  )
  
}