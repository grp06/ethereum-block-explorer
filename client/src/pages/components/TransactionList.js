import React, { useState, useEffect } from 'react'
const ethers = require('ethers')
import { Link } from 'react-router-dom'

const TransactionList = ({ transactions }) => {
  return (
    <div className='col'>
      <table className='table'>
        <thead>
          <tr>
            <th scope='col'>tx #</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((tx, idx) => {
            return (
              <tr>
                <Link to={tx}>{tx}</Link>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default TransactionList
