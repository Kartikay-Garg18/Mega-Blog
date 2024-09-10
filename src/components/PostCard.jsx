import React from 'react'
import storageService from '../appwrite/storage'
import { Link } from 'react-router-dom'

function PostCard({$id, title, featuredImage}) {
  return (
    <Link to={`/posts/${$id}`}>
        <div className="w-full rounded-lg bg-gray-100 p-4">
            <div className="w-full justify-center mb-4">
                <img src={storageService.getFilePreview(featuredImage)} alt={title} className='rounded-xl'/>
            </div>
            <h2>{title}</h2>
        </div>
    </Link>
  )
}

export default PostCard
