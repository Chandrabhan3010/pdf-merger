const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World! my name is nick and it is auto save')
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})