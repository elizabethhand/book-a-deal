import React from "react"

export default function HomepageTile({ item }) {
    console.log(item)
    return (
        <div className="homepage-tile">
            <img src={item.img} />
            <h1>{item.name}</h1>
            <p>{item.description}</p>
            <p>£{item.price}</p>

        </div>
    )
}