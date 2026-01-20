import { Link } from "react-router-dom";
import '../css/Navbar.css'

function Navbar() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navFlip shadow-sm" style={{ marginBottom: "0" }}>
                <div className="container-fluid px-3 px-lg-5">

                    <Link className="navbar-brand d-flex align-items-center" to="/">
                        <img
                            src="./flipkart_logo.png"
                            alt="store Logo"
                            style={{ height: '40px', width: '100px' }}
                        />
                    </Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav w-100 align-items-center">

                            <li className="nav-item flex-grow-1 mx-3 w-100 mt-2 mt-lg-0">
                                <div className="input-group">
                                    <input type="text" className="form-control search-bar"
                                        placeholder="Search for products, brands and more" />
                                    <button className="btn btn-search" type="button">
                                        <i className="bi bi-search"></i>
                                    </button>
                                </div>
                            </li>

                            <li className="nav-item dropdown mt-2 mt-lg-0">
                                <a href="/" className="btn btn-login fw-semibold dropdown-toggle px-4 text-center d-block d-lg-inline-block" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    Login
                                </a>
                                <ul className="dropdown-menu dropdown-menu-end">
                                    <li><Link className="dropdown-item" to="/login">Login</Link></li>
                                    <li><Link className="dropdown-item" to="/myProfile">My Profile</Link></li>
                                    <li><a className="dropdown-item" href="/">Flipkart Plus Zone</a></li>
                                    <li><a className="dropdown-item" href="/">Orders</a></li>
                                    <li><a className="dropdown-item" href="/">Wishlist</a></li>
                                    <li><a className="dropdown-item" href="/">Coupons</a></li>
                                    <li><a className="dropdown-item" href="/">Gift Cards</a></li>
                                </ul>
                            </li>

                            <li className="nav-item mx-3 mt-2 mt-lg-0">
                                <Link className="nav-link d-flex align-items-center justify-content-center nav-link-custom" to="/myCart">
                                    <i className="bi bi-cart"></i>&nbsp;Cart
                                </Link>
                            </li>

                            <li className="nav-item mx-2 mt-2 mt-lg-0">
                                <Link className="nav-link nav-link-custom text-center" to="/becomeSeller">
                                    Become a Seller
                                </Link>
                            </li>

                            <li className="nav-item dropdown mx-2 mt-2 mt-lg-0">
                                <a className="nav-link nav-link-custom dropdown-toggle text-center" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    More
                                </a>
                                <ul className="dropdown-menu dropdown-menu-end">
                                    <li><a className="dropdown-item" href="/">Notification Preferences</a></li>
                                    <li><a className="dropdown-item" href="/">24x7 Customer Care</a></li>
                                    <li><a className="dropdown-item" href="/">Advertise</a></li>
                                    <li><a className="dropdown-item" href="/">Download App</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
