import React, { useEffect, useState } from 'react'
import {addDoc, collection} from 'firebase/firestore';
import { db, auth } from '../firebase-config';
import { useNavigate } from 'react-router-dom';


const CreatePost = ({isAuth}) => {

  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");

  const navigate = useNavigate();

  const postsCollectionRef = collection(db, "posts");
  const createPosts = async () => {
    await addDoc(postsCollectionRef, {title, 
                                      postText, 
                                      author: {name: auth.currentUser.displayName , id: auth.currentUser.uid} 
                                    });
    navigate("/");
  };

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, [])

  return (
    <div className='create_post_page'>
      <div className="post_container">
        <h1>Create A Post</h1>
        <div className='post_inputs'>
            <label>Title:</label>
            <input placeholder='Title...' 
                   onChange={(e) => {setTitle(e.target.value)}} 
            />
        </div>
        <div className='post_inputs'>
            <label>Post:</label>
            <textarea placeholder='Post...'
                      onChange={(e) => {setPostText(e.target.value)}}
            />
        </div>
        <button onClick={createPosts}>
          Submit Post
        </button>
      </div>
    </div>
  )
}

export default CreatePost