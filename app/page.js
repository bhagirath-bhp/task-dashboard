
import React from 'react'

const App = () => {
  return (
    <div className='flex justify-center items-center h-screen bg-black'>
      <button className="bg-blue-500 h-10 px-8 rounded text-white flex justify-center align-center mx-2 s">
        <a className="lh-2 block sm:inline mx-2 my-auto" href='/login'>Login</a>
      </button>
      <button className="h-10 min-w-15 rounded border text-white flex justify-center align-center mx-2 s">
        <a className="lh-2 block sm:inline mx-2 my-auto" href='/dashboard'>Dashboard</a>
      </button>
    </div>
  )
}

export default App