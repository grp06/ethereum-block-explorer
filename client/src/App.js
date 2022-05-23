import { useEffect, useState } from 'React'
import axios from 'axios'

import './scss/custom.scss'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  const [selectedTab, setSelectedTab] = useState(1)
  useEffect(() => {
    axios.get('http://localhost:3042/balance').then((response) => {
      console.log(response.balance)
    })
  }, [])

  return (
    <>
      <ul className='nav'>
        <li className='nav-item'>
          <a
            className={`nav-link ${selectedTab === 1 ? 'active' : ''}`}
            aria-current='page'
            href='#'
            onClick={() => setSelectedTab(1)}
          >
            tab 1
          </a>
        </li>
        <li className='nav-item'>
          <a
            className={`nav-link ${selectedTab === 2 ? 'active' : ''}`}
            href='#'
            onClick={() => setSelectedTab(2)}
          >
            tab 2
          </a>
        </li>
      </ul>
    </>
  )
}

export { App }
