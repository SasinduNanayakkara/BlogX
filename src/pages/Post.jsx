import React from 'react'
import { useLocation } from 'react-router-dom'
import { posts } from '../data'

const Post = () => {

    const location = useLocation();//get the current URL
    const path = location.pathname.split("/")[2]; //get the postID from the URL

    const post = posts.find(p => p.id.toString() === path); //find the post according to the ID
    return (
        //render the post details
        <div className='post'>
            <img src={post.img} className='postImg' alt={post.title} srcset="" />
            <h1 className="postTitle">{post.title}</h1>
            <p className="postDesc">{post.desc}</p>
            <p className="postLongDesc">{post.longDesc}</p>
        </div>
    )
}

export default Post
