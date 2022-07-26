import { useState } from 'react'
import logo from './logo.svg'
import { PokedexCase } from './components/PokedexCase'

function App() {
  return (
    <div className='p-4 flex items-center text-center '>
      <div className='bg-red-500 mx-8 my-4 case-3d'>
        <div className=''>
          <PokedexCase />
        </div>
      </div>
    </div>
  )
}

export default App
