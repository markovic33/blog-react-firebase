import React, { useEffect, useState } from 'react'
import {getDocs, collection, deleteDoc, doc} from 'firebase/firestore';
import { db, auth } from '../firebase-config';

const Home = ({isAuth}) => {

  const [postLists, setPostLists] = useState([]);

  const postsCollectionRef = collection(db, "posts");

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPostLists(data.docs.map((doc) => ({...doc.data(), id: doc.id}) ));
    }
    getPosts();
  },[]);

  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id)
    await deleteDoc(postDoc);
  };

  return (
    <div className='home_page'>
      {
        postLists.map((post) => {
          return <div className='post'>
                      <div className='post_header'>
                        <div className='post_header_title'>
                          <h1>{post.title}</h1>
                        </div>
                        <div className='delete_post'>
                          {
                            isAuth && post.author.id === auth.currentUser.uid && (
                              <button onClick={() => {deletePost(post.id)}}> 
                                X 
                              </button>
                            ) 
                          }
                        </div>
                      </div>
                      <div className='post_body'>
                        {post.postText}
                      </div>
                      <h3>@{post.author.name}</h3>
                  </div>
        })
      }
    </div>
  )
}

export default Home