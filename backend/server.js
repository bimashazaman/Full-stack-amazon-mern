import express from 'express'
import data from './data'

const app = express()

app.get('/api/products', (req, res) => {
  const hi = res.json(data.products)
  res.send(hi)
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(5000, () => {
  console.log('Example app listening on port 5000!')
})
