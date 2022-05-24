require('dotenv').config()
const ethers = require('ethers')
const express = require('express')
const app = express()
const cors = require('cors')
const port = 3042
const provider = new ethers.providers.JsonRpcProvider(
  process.env.ALCHEMY_RINKEBY_URL
)

app.use(cors())
app.use(express.json())

app.get('/balance/:address', async (req, res) => {
  const { address } = req.params
  const resp = await provider.getBalance(address)
  const balance = ethers.utils.formatEther(resp._hex)

  res.send({ balance })
})

app.get('/latest-block', async (req, res) => {
  const block = await provider.getBlock()

  res.send({ block })
})

app.get('/transaction/:id', async (req, res) => {
  const { id } = req.params

  const transaction = await provider.getTransaction(id)
  console.log('🚀 ~ app.get ~ transaction', transaction)

  res.send({ transaction })
})

app.listen(port, () => {
  console.log(`Listening on port ${port}!`)
})
