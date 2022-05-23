require('dotenv').config()
const ethers = require('ethers')
const express = require('express')
const app = express()
const cors = require('cors')
const port = 3042
const provider = new ethers.providers.JsonRpcProvider(
  process.env.ALCHEMY_RINKEBY_URL
)

// localhost can have cross origin errors
// depending on the browser you use!
app.use(cors())
app.use(express.json())

app.get('/balance', (req, res) => {
  const { address } = req.params
  res.send({ balance: 1 })
})

app.listen(port, () => {
  console.log(`Listening on port ${port}!`)
})
