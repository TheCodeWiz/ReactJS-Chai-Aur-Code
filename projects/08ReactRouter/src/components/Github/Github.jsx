import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom' // this hook is used to load the data after calling the data from the API like we havde done in githubInfoLoader

function Github() {
  const data = useLoaderData() // this will help in calling the data after its fetching is done 
  /*
  // one way of calling the API using useEffect hook 
    const [data, setData] = useState([])
    useEffect(() =>{
        fetch('https://api.github.com/users/TheCodeWiz')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setData(data)
        })
    }, [])
  */
  return (
    <div className='text-center ml-80 mr-80 bg-gray-500 text-white p-4 text-3xl'>Github Followers: {data.followers}
    <div className='flex justify-center items-center mt-5 mb-5'>
        <img src={data.avatar_url} alt="git picture" width={300} />
    </div>
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/TheCodeWiz')
  return response.json() //this is a promise then too I am able to return the promise 
}

// by calling the data from APi as we have done in githubInfoLoader the slight lag we were facing when we were caling the API using useeffect hook is now completely gone and the calling of API has now been optimized.