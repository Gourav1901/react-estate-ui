import "./navbar.scss";
import {useState} from  "react";
function Navbar() {
  const [open,setOpen] = useState(false)
  return (
    <nav>
      <div className="left">
      <a href="/" className="logo">
        <img src="/logo.png" alt="" />
        <span>GouravEstate</span>
      </a>
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/">Contact</a>
      <a href="/">Agents</a>
      </div>
      <div className="right">
      <a href="/login">Sign in</a>
      <a href="/register" className="register">Sign up</a>
         <div className="menuIcon">
          <img src="/menu.png" alt="" onClick={() => setOpen((prev) => !prev)} />

         </div>
         <div className= {open ? "menu active" : "menu"}>
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
          <a href="/">Agents</a>
          <a href="/">sign in</a>
          <a href="/">sign up</a>
         </div>
      </div>
    </nav>
  )
}
export default Navbar;