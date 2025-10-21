function middleware(req, res, next) {
  console.log('I am a custom middleware')
  next()
}

export default middleware