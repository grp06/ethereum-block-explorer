import React, { useState, useEffect } from 'react'
import axios from 'axios'
import TransactionList from './components/TransactionList'
const ethers = require('ethers')

const hexToEther = (hex) => {
  return ethers.utils.formatEther(hex)
}

const GetLatestBlock = ({ tab }) => {
  const [block, setBlock] = useState(null)
  useEffect(() => {
    axios.get(`http://localhost:3042/latest-block`).then((response) => {
      console.log('🚀 ~ block', response)
      setBlock(response.data.block)
    })
  }, [])
  if (!block) {
    return null
  }
  const { baseFeePerGas, gasLimit, gasUsed, number } = block
  console.log('🚀 ~ GetLatestBlock ~ baseFeePerGas', baseFeePerGas)
  console.log('🚀 ~ GetLatestBlock ~ gasUsed', gasUsed)
  console.log('🚀 ~ GetLatestBlock ~ gasLimit', gasLimit)
  return (
    <div className='col'>
      <h3>Block {number}</h3>
      <div className='row d-flex flex-nowrap justify-content-space-between'>
        <div className='card w-25'>
          <div className='card-body'>
            <h5 className='card-title'>Base Fee Per Gas</h5>
            <p className='card-text'>
              <ul class='list-group'>
                <li class='list-group-item'>{hexToEther(baseFeePerGas.hex)}</li>
              </ul>
            </p>
          </div>
        </div>
        <div className='card w-25'>
          <div className='card-body'>
            <h5 className='card-title'>Gas Limit</h5>
            <p className='card-text'>
              <ul class='list-group'>
                <li class='list-group-item'>{hexToEther(gasLimit.hex)}</li>
              </ul>
            </p>
          </div>
        </div>
        <div className='card w-25'>
          <div className='card-body'>
            <h5 className='card-title'>Gas Used</h5>
            <p className='card-text'>
              <ul class='list-group'>
                <li class='list-group-item'>{hexToEther(gasUsed.hex)}</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
      <div className='row'>
        <TransactionList transactions={block.transactions} />
      </div>
    </div>
  )
}

export default GetLatestBlock
