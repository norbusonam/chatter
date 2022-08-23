module.exports = (io) => {
  return (message) => {
    console.log('new message!')
    io.emit('message:new', message)
  }
}