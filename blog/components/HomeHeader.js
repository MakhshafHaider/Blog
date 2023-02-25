import React from 'react'
import Link from 'next/link';

export default function HomeHeader() {
  return (
    <div className='home_header'>
      <div className='header_background_image'></div>
      <div className='home_header_detail'>
        <h1 className='home_header_heading'>Explore technology</h1>
        <span className='home_header_span'>Empowering through technology - staying informed, engaged,<br/> and creating a better future.</span> <br/><br/><br/><br/>
      <Link className='home_header_button' href={"/blog"} >See All Blogs</Link>
      </div>
    </div>
  )
}

