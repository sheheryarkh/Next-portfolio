import React from 'react'
import Link from 'next/link'
const Header = () => {
  return (
    <>
      <header>
        <div id='portfolio'>Portfolio</div>

        <div id="nav">
        <Link href='#about'><li>About</li></Link>
        <Link href='#projects'><li>projects</li></Link>
        <Link href='#skills'><li>Skills</li></Link>
        <Link href='#edu'><li>Education</li></Link>
       
        </div>
      </header>
    </>
  )
}

export default Header
