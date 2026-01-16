EditPost.jsx

import React from 'react'
import {Container, PostForm} from '../components/index'
import service from '../appwrite/config'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'



function EditPost() {
    const [post, setPost] = useState(null)
    const {slug} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        service.getPost(slug).then((postData) => {
            if(postData) {
                setPost(postData)
            } else {
                navigate('/')
            }
        })
    }, [slug, navigate])

  return post ? (
    <div className='py-8'>
        <Container>
            <PostForm post = {post} />
        </Container>
    </div>
  ) : null
}

export default EditPost