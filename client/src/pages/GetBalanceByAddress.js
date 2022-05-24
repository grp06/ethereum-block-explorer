import React, { useState } from 'react'
import axios from 'axios'

const GetBalanceByAddress = ({ tab }) => {
  const [address, updateAddress] = useState('')

  const getBalance = async (address) => {
    console.log('calling balance')
    axios.get(`http://localhost:3042/balance/${address}`).then((response) => {
      console.log('response = ', response.data.balance)
    })
  }
  return (
    <div className='col'>
      <div className='row'>
        <div className='input-group d-flex align-items-center w-50'>
          <label className='me-3'>Address</label>
          <input
            type='text'
            className='form-control mx-3'
            placeholder='enter address'
            value={address}
            onChange={(e) => updateAddress(e.target.value)}
          />
          <button className='form-control' onClick={() => getBalance(address)}>
            submit
          </button>
        </div>
      </div>
    </div>
  )
}

export default GetBalanceByAddress
