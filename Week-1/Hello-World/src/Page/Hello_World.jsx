import React from 'react'

const Hello_World = () => {
  return (
    <>
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-900 via-purple-800 to-pink-700 px-6">
        <h1
            className="
            text-7xl font-extrabold
            bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500
            bg-clip-text text-transparent
            transition duration-300
            hover:invert
            cursor-pointer
            "
        >
            Hello, World!
        </h1>
        </div>
    </>
  )
}

export default Hello_World