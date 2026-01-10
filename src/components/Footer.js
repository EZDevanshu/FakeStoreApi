import "../css/Footer.css";

function Footer() {
    return (
        <>
            <footer className="mt-3">
                <div className="footer-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
                                <h6 className="footer-heading">About</h6>
                                <a href="/" className="footer-link">Contact Us</a>
                                <a href="/" className="footer-link">Careers</a>
                                <a href="/" className="footer-link">Flipkart Stories</a>
                                <a href="/" className="footer-link">Press</a>
                                <a href="/" className="footer-link">About Us</a>
                                <a href="/" className="footer-link">Corporate Information</a>
                            </div>

                            <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
                                <h6 className="footer-heading">Group Companies</h6>
                                <a href="/" className="footer-link">Myntra</a>
                                <a href="/" className="footer-link">Cleartrip</a>
                                <a href="/" className="footer-link">Shopsy</a>
                            </div>

                            <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
                                <h6 className="footer-heading">Help</h6>
                                <a href="/" className="footer-link">Payments</a>
                                <a href="/" className="footer-link">Shipping</a>
                                <a href="/" className="footer-link">Cancellation & Returns</a>
                                <a href="/" className="footer-link">FAQ</a>
                            </div>

                            <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
                                <h6 className="footer-heading">Consumer Policy</h6>
                                <a href="/" className="footer-link">Cancellation & Returns</a>
                                <a href="/" className="footer-link">Terms Of Use</a>
                                <a href="/" className="footer-link">Security</a>
                                <a href="/" className="footer-link">Privacy</a>
                                <a href="/" className="footer-link">Sitemap</a>
                                <a href="/" className="footer-link">Grievance Redressal</a>
                                <a href="/" className="footer-link">EPR Compliance</a>
                            </div>

                            <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
                                <h6 className="footer-heading">Mail Us:</h6>
                                <div className="contact-info">
                                    Flipkart Internet Private Limited,<br />
                                    Buildings Alyssa, Begonia &<br />
                                    Clove Embassy Tech Village,<br />
                                    Outer Ring Road, Devarabeesanahalli Village,<br />
                                    Bengaluru, 560103,<br />
                                    Karnataka, India
                                </div>

                                <div className="social-icons">
                                    <span style={{color: '#878787', fontSize: '12px', display: 'block', marginBottom: '10px'}}>Social:</span>
                                    <a href="/"><i className="bi bi-facebook"></i></a>
                                    <a href="/"><i className="bi bi-twitter-x"></i></a>
                                    <a href="/"><i className="bi bi-youtube"></i></a>
                                    <a href="/"><i className="bi bi-instagram"></i></a>
                                </div>
                            </div>

                            <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
                                <h6 className="footer-heading">Registered Office Address:</h6>
                                <div className="contact-info">
                                    Flipkart Internet Private Limited,<br />
                                    Buildings Alyssa, Begonia &<br />
                                    Clove Embassy Tech Village,<br />
                                    Outer Ring Road, Devarabeesanahalli Village,<br />
                                    Bengaluru, 560103,<br />
                                    Karnataka, India<br />
                                    CIN : U51109KA2012PTC066107<br />
                                    <span style={{color: '#2874f0'}}>
                                        Telephone: 044-45614700 / 044-67415800
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bottom-footer">
                    <div className="container">
                        <div className="bottom-footer-content">
                            <div className="footer-links-inline">
                                <a href="/"><i className="fas fa-store"></i> Become a Seller</a>
                                <a href="/"><i className="fas fa-bullhorn"></i> Advertise</a>
                                <a href="/"><i className="fas fa-gift"></i> Gift Cards</a>
                                <a href="/"><i className="fas fa-question-circle"></i> Help Center</a>
                                <span className="copyright">© 2007-2025 Flipkart.com</span>
                            </div>

                            <div className="payment-icons">
                                <span className="payment-icon visa">VISA</span>
                                <span className="payment-icon mastercard">MC</span>
                                <span className="payment-icon maestro">maestro</span>
                                <span className="payment-icon amex">AMEX</span>
                                <span className="payment-icon diners">DC</span>
                                <span className="payment-icon discover">DISCOVER</span>
                                <span className="payment-icon paypal">PayPal</span>
                                <span className="payment-icon apple-pay">Pay</span>
                                <span className="payment-icon google-pay">GPay</span>
                                <span className="payment-icon rupay">RuPay</span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
