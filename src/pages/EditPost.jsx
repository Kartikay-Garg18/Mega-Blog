import React, {useEffect, useState} from 'react'
import {Container, PostForm} from '../components'
import databaseService from '../appwrite/database'
import {useParams, useNavigate} from 'react-router-dom'
import { data } from 'autoprefixer';
import { set } from 'react-hook-form';


function EditPost() {
    const [post, setPost] = useState([]);
    const {slug} = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        if(slug){
            databaseService.getPost(slug).then((post)=>{
                if(post){
                    setPost(post);
                }
            })
        } else{
            navigate('/')
        }
    }, [navigate, slug]);
  
    return post? (
        <div className='py-8 '>
            <Container>
                <PostForm post={post} />
            </Container>
        </div>
    ) : null
}

export default EditPost
