import React, {useEffect, useState} from 'react'
import databaseService from '../appwrite/database'
import {Container, PostCard} from '../components'


function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(()=>{

        const a = databaseService.getPosts().then((posts)=>{
            if(posts){
                setPosts(posts.documents);
            }
        })
        console.log(a)
    }, [])

    if(posts.length === 0){
        return (
            <div className='w-full py-8 mt-4 text-center'>
                <Container>
                    <div className='flex flex-wrap'>
                        <div className="p-2 w-full">
                            <h1 className='text-3xl font-bold hover:text-gray-500'>No posts found</h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }

    return (
        <div className='py-8 w-full'>
            <Container>
                <div className="flex flex-wrap">
                    {posts.map((post)=>{
                        return (
                            <div key={post.$id} className='p-2 w-1/4'>
                                <PostCard {...post} />
                            </div>
                        )
                    })}
                </div>
            </Container>
        </div>
    )
}

export default Home
