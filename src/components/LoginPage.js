import "../css/LoginPage.css"
import { Link } from "react-router-dom";

function LoginPage() {
    return (
            <div className="container-fluid login-container">
                <div className="login-card">
                    <div className="logo-section">
                        <Link className="navbar-brand d-flex align-items-center login-logo" to="/">
                            <img
                                src="flipkart_logo_login.png"
                                alt="store Logo"
                                style={{ height: '50px', width: '50px'}}
                            />
                        </Link>
                    </div>

                    <div className="form-section">
                        <h2 className="welcome-title">Welcome Back</h2>

                        <button type="button" className="btn google-btn d-flex align-items-center justify-content-center">
                            <svg className="google-icon" viewBox="0 0 24 24">
                                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                            </svg>
                            Continue With Google
                        </button>

                        {/* <div className="divider">
                            <span>or</span>
                        </div> */}
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col">
                                    <hr />
                                </div>
                                <div className="col-auto">
                                    <span>OR</span>
                                </div>
                                <div className="col">
                                    <hr />
                                </div>
                            </div>
                        </div>

                        <form>
                            <div className="mb-3">
                                <label for="email" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="email" placeholder="Enter your email" required />
                            </div>

                            <div className="mb-3">
                                <label for="password" className="form-label">Password</label>
                                <input type="password" className="form-control" id="password" placeholder="Enter your password" required />
                            </div>

                            <div className="d-flex justify-content-between align-items-center">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="remember" />
                                    <label className="form-check-label" for="remember">
                                        Remember me
                                    </label>
                                </div>
                                <a href="#" className="forgot-password">Forgot Password?</a>
                            </div>

                            <button type="submit" className="btn login-btn">Login</button>
                        </form>

                        <div className="signup-link">
                            Don't have an account? <a href="#">Sign Up</a>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default LoginPage;
