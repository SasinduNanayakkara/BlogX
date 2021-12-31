import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({post}) => { //pass the data
    return (
        
        <div className='card'>
            <Link className='link' to={`/post/${post.id}`}>
                <span className="title">{post.title}</span>
                <img src={post.img} alt={post.title} className='img' srcset="" />
                <p className="desc">{post.desc}</p>
                <button className="cardButton">Read More</button>
            </Link>
        </div>
    )
}

export default Card
