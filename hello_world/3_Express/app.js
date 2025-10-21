import express from 'express'
import middleware from './middleWares/1_middleware.js'
import morgan from 'morgan'
const app = express()

app.use(express.json());

app.use(middleware)
app.use(morgan('tiny'))
const courses = [
  { id: 1, name: 'Learn React' },
  { id: 2, name: 'Learn Angular' },
  { id: 3, name: 'Learn Vue' }
]
app.get('/', (req, res) => {
  res.send('Hello  From Adarsh!')
})

app.get('/about', (req, res) => {
  res.send('About Page Here')
}
)
app.get('/contact', (req, res) => {
  res.send('Contact Page Here')
} )


app.get('/courses/:id', (req, res) => {
 let course = courses.find(res =>res.id === parseInt(req.params.id))
  if(!course) res.status(404).send('The course with the given ID was not found')
  res.send(course)
}
)

app.get('/courses', (req, res) => {
  res.send(courses)
}
)
app.post('/courses', (req, res) => {
  const course = {
    id: courses.length + 1,
    name: req.body.name
  }
  courses.push(course)
  res.send(course)
}
)
// put
app.put('/courses/:id', (req, res) => {
  let course = courses.find(res =>res.id === parseInt(req.params.id))
  if(!course) return res.status(404).send('The course with the given ID was not found')
  course.name = req.body.name
  res.send(course)
}
)

// delete 
app.delete('/courses/:id', (req, res) => {
  let course = courses.find(res =>res.id === parseInt(req.params.id))
  if(!course) return res.status(404).send('The course with the given ID was not found')
  const index = courses.indexOf(course)
  courses.splice(index, 1)
  res.send(course)
}
)

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Server started on ${port}`)
} )