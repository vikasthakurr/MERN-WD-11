import React from 'react'
import { Suspense } from 'react'

const Card = React.lazy(()=>import('./component/Card'))
const Home = React.lazy(()=>import('./component/Home'))

const App = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Card />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Home />
      </Suspense>
    </div>
  )
}

export default App 