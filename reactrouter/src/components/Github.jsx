import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

export default function Github() {
    // const [data, setData] = useState([])

    // useEffect(() => {
    //     fetch('https://api.github.com/users/manns0143')
    //         .then((res) => res.json())
    //         .then((data) => {
    //             console.log(data)
    //             setData(data)
    //         })
    // }, [])

    const data = useLoaderData()

    return (
        <>
            <div>
                Name: {data.name}
            </div>
            <div>
                Github username : {data.login}
            </div>
            <div>
                Github avatar: <img src={data.avatar_url} alt="github avatar" />
            </div>
        </>
    )
}

export const githubInfoLoader = async () => {
    const res = await fetch('https://api.github.com/users/manns0143')
    return res.json()
}