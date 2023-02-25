import React, { useEffect, useState } from 'react';
import PostPreview from './PostPreview';

export default function HomeLatestPosts({posts}) {
  console.log("posts is", posts)
  
    const [latestPosts, setLatestPost] = useState([]);
    // useEffect(() => {
    //   console.log("posts are", posts)
    //   console.log("setLatestPost",setLatestPost);
    //   setLatestPost(posts.slice(0,5));
    // }, [posts]);
    useEffect(() => {
      setLatestPost(posts.slice(0,5));
    }, [posts]);
    
    function renderPostPreviews(){
         return latestPosts.map((post) => {
            return <PostPreview post={post} key={post.id} />
         })
    }

  return (
    <>
        <h2 className='latest_blog_heading'>Our Latest Posts</h2>
        {renderPostPreviews()}
    </>

  )
}
