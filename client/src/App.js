import { useEffect, useState } from 'React'

import './scss/custom.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import GetBalanceByAddress from './pages/GetBalanceByAddress'
import GetLatestBlock from './pages/GetLatestBlock'
import { Routes, Route, Link } from 'react-router-dom'
import Transaction from './pages/components/Transaction'
const App = () => {
  const { pathname } = window.location
  return (
    <div className='container'>
      <ul className='nav'>
        <li className='nav-item'>
          <Link
            className={`nav-link ${
              pathname === '/latest-block-transactions' ? 'active' : ''
            }`}
            to='/latest-block-transactions'
          >
            Latest Block
          </Link>
        </li>
        <li className='nav-item'>
          <Link
            className={`nav-link ${
              pathname === '/get-balance-by-address' ? 'active' : ''
            }`}
            to='/get-balance-by-address'
          >
            Get Balance by Address
          </Link>
        </li>
      </ul>
      <Routes>
        <Route path='/latest-block-transactions' element={<GetLatestBlock />} />
        <Route
          path='/latest-block-transactions/:transaction'
          element={<Transaction />}
        />
        <Route
          path='get-balance-by-address'
          element={<GetBalanceByAddress />}
        />
      </Routes>
    </div>
  )
}

export { App }
