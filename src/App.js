import { useEffect, useState } from 'React'

import './styles.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  useEffect(() => {
    console.log('hey')
  }, [])

  return (
    <>
      <div>sup</div>
    </>
  )
}

export { App }
