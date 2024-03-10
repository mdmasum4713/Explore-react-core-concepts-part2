import { useEffect, useState } from 'react'
import './Friends.css'
import Frined from './friend'
export default function Friends(){
   
   
    const [Friends, setFriends] = useState([])
   
    useEffect(()=>{
fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())
.then(data => setFriends(data))
    }, [])

    return (
        <div className='box'>
            <h3>Friends: {Friends.length}</h3>
            {
               Friends.map(friend => <Frined friend={friend}></Frined>)
            }
        </div>
    )
}

/**
 * 1. state to hold data
 * 2. use effect with dependency array
 * 3. use fetch to load data
 * 4. set loaded data to the state
 * 5. display data on the component
 */