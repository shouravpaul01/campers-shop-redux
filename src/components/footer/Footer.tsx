import { Link } from 'react-router-dom'
import camper_icon from '/public/campers-icon.png'
const Footer = () => {
  return (
    <footer className="border-t border-dashed border-violet-900 pb-2">
    <div className="bg-slate-200 ">
      <div className="my-container footer p-10">
        <aside>
          <img src={camper_icon} alt="logo" className="w-12 h-12" />
          <p className="text-end text-3xl font-bold">
                  Cambers<span className="text-warning ps-2">Shop</span>
                </p>
        </aside>
        <nav>
          <header className="footer-title">Menu</header>
          <Link to={"/products"} className="link link-hover">Shop</Link>
          <Link to={"/admin-dashboard"} className="link link-hover">Product Management</Link>
          
        </nav>
        <nav>
          <header className="footer-title">Company</header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <header className="footer-title">Legal</header>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </div>
    </div>
    <div className="bg-black p-4 text-white text-opacity-20 text-center">
      <p>Copyright © 2024 - All right reserved by Campers shop</p>
    </div>
  </footer>
  )
}

export default Footer
