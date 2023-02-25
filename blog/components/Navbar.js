import Link from "next/link";
import { useState, useEffect } from 'react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const currentScrollY = window.scrollY;
        const shouldBeScrolled = currentScrollY > 300;
        setIsScrolled(shouldBeScrolled);
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    const navbarClassName = `navbar ${isScrolled ? 'scrolled' : ''}`;
    const blogNavbarClassName = `blog_navbar ${isScrolled ? 'scrolled' : ''}`;


  return (
    <div className={blogNavbarClassName}>
      <div className="logo"><Link href="/" >Logo</Link></div>
      <div className={navbarClassName}>
        <nav>
          <ul>
            <li>
              <Link className="navbar_link" href="/">Home</Link>
            </li>
            <li>
              <Link className="navbar_link" href="#about-us">About</Link>
            </li>
            <li style={{marginRight: "40px"}}>
              <Link className="navbar_link" href="/blog" >Blog</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
