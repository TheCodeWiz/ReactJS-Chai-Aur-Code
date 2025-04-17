import React from 'react'
import { useParams } from 'react-router-dom' //this hook is used to catch the things dynamically from the URL

function User() {
    const {userId} = useParams()
  return (
    <div className='bg-gray-700 text-white text-3xl p-4'>User: {userId}</div>
  )
}

export default User