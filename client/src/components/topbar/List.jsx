import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function List() {
    const [data,setData]=useState([]);
    useEffect(()=>{
        const title= async()=>{
            var res1=await axios.get("/posts/tiles/tits")
            console.log(res1.data)
            setData(res1.data);
            }
            title()
    })

  return (
    <ul>
    {console.log(data)}
    {data.map((item) => (
        <li key={item.id}>{item.text}</li>
    ))}
</ul>

  )
}
