import React from "react"

const Footer = () => {
    const year = new Date().getFullYear();
  return (
    <div>
      
      <footer className='footer'>
      <p>&copy; {year} sheheryar khan. All rights reserved.</p>
     <a href="https://www.linkedin.com/in/sheheryar-khan-a34151208/" className="ft">lets connect</a>
      <a href="https://github.com/sheheryarkh" className="ft">Github</a>
      <a href="https://www.facebook.com/profile.php?id=100073801196939&_rdc=1&_rdr" className="ft">Facebook</a>
      </footer>
    </div>
  )
}

export default Footer
