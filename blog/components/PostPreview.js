import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function PostPreview({ post }) {
  return (
    <Link href={`/posts/myPosts/${post.id}`} className="disabled">
      
      <div className="latest_blog">
      <div className="blog_image">
          {
            <Image
              src={
                "http://localhost:1337" +
                  post?.attributes?.Image?.data?.attributes?.formats?.small
                    ?.url ?? ""
              }
              alt="My Image"
              width={220}
              height={200}
            />
            }
        </div>
        <div className="blogs_section">
          <h1 className="blogs_title">{post.attributes.Title}</h1>
          <p className="blogs_description">{post.attributes.Description}</p>
        </div>
        
      </div>
    </Link>
  );
}
