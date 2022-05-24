import React, { useState, useEffect } from 'react'
import axios from 'axios'

const ethers = require('ethers')
import { Link } from 'react-router-dom'

const hexToEther = (hex) => {
  return ethers.utils.formatEther(hex)
}

const Transaction = () => {
  const { pathname } = window.location

  const [txData, setTxData] = useState(null)

  const getTransaction = async () => {
    const res = await axios.get(
      `http://localhost:3042/transaction/${
        pathname.split('/latest-block-transactions/')[1]
      }`
    )
    setTxData(res.data.transaction)
  }
  useEffect(() => {
    getTransaction()
  }, [])

  if (!txData) {
    return null
  }
  const { blockNumber, confirmations, from, gasLimit, gasPrice, nonce, value } =
    txData
  console.log('🚀 ~ Transaction ~ gasLimit', hexToEther(gasLimit.hex))
  return (
    <div className='col'>
      <table className='table'>
        <thead>
          <tr>
            <th scope='col'>Block #</th>
            <th scope='col'>Confirmations</th>
            <th scope='col'>From</th>
            <th scope='col'>Gas Limit</th>
            <th scope='col'>Gas Price</th>
            <th scope='col'>Nonce</th>
            <th scope='col'>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope='row'>{blockNumber}</th>
            <td>{confirmations}</td>
            <td>{from}</td>
            <td>{hexToEther(gasLimit.hex)}</td>
            <td>{hexToEther(gasPrice.hex)}</td>
            <td>{nonce}</td>
            <td>{hexToEther(value.hex)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Transaction
