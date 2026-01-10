import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/Home.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function HomePage() {
    const [alProData, getalProData] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(res => getalProData(res));
    }, []);

    const firstSix = alProData.slice(0, 6);
    const nextSeven = alProData.slice(6, 13);
    const lastSeven = alProData.slice(13, 20);

    const renderCards = (data) => {
        return data.map((product) => (
            <Link className="product" to={"/products/" + product.id}>
                <div
                    key={product.id}
                    className="individual-product-card fans-geysers-card border"
                    style={{ width: "220px" }}
                >
                    <div className="product-image-container fan-geyser-image-wrap">
                        <div className="product-display-image fan-geyser-placeholder ">
                            <img
                                src={product.image}
                                style={{ height: "100px", width: "100px" }}
                                alt={product.title}
                            />
                        </div>
                    </div>
                    <h5 className="category-title-text fan-geyser-title">
                        {product.title}
                    </h5>
                    <p className="price-info-text fan-geyser-price">₹{product.price}</p>
                </div>
            </Link>
        ));
    };



    return (
        <>
            <div className="bg-white shadow mt-2 border-bottom mb-3 category-container">
                <div className="container-fluid px-5 py-2">
                    <div className="d-flex justify-content-between text-center">
                        <div className="px-3" style={{ fontSize: '14px', fontWeight: '500', cursor: 'pointer' }}>
                            <img src="https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100" width="64"
                                alt="Grocery" />
                            <div className="mt-2">Grocery</div>
                        </div>

                        <div className="px-3" style={{ fontSize: '14px', fontWeight: '500', cursor: 'pointer' }}>
                            <img src="https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100" width="64"
                                alt="Mobiles" />
                            <div className="mt-2">Mobiles</div>
                        </div>

                        <div className="dropdown px-3">
                            <img src="https://rukminim1.flixcart.com/flap/128/128/image/0d75b34f7d8fbcb3.png?q=100" width="64"
                                alt="Fashion" />
                            <div className="mt-2 dropdown-toggle" style={{ fontSize: '14px', fontWeight: '500', cursor: 'pointer' }}
                                data-bs-toggle="dropdown">Fashion</div>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="/">Men's Top Wear</a></li>
                                <li><a className="dropdown-item" href="/">Men's Bottom Wear</a></li>
                                <li><a className="dropdown-item" href="/">Women Ethnic</a></li>
                                <li><a className="dropdown-item" href="/">Women Western</a></li>
                                <li><a className="dropdown-item" href="/">Kids</a></li>
                            </ul>
                        </div>

                        <div className="dropdown px-3">
                            <img src="https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100" width="64"
                                alt="Electronics" />
                            <div className="mt-2 dropdown-toggle" style={{ fontSize: '14px', fontWeight: '500', cursor: 'pointer' }}
                                data-bs-toggle="dropdown">Electronics</div>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="/">Mobiles & Accessories</a></li>
                                <li><a className="dropdown-item" href="/">Smart Wearables</a></li>
                                <li><a className="dropdown-item" href="/">Laptops</a></li>
                                <li><a className="dropdown-item" href="/">Speakers</a></li>
                                <li><a className="dropdown-item" href="/">Camera</a></li>
                            </ul>
                        </div>

                        <div className="dropdown px-3">
                            <img src="https://rukminim1.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg?q=100" width="64" alt="Home" />
                            <div className="mt-2 dropdown-toggle" style={{ fontSize: '14px', fontWeight: '500', cursor: 'pointer' }}
                                data-bs-toggle="dropdown">Home</div>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="/">Kitchen</a></li>
                                <li><a className="dropdown-item" href="/">Furniture</a></li>
                                <li><a className="dropdown-item" href="/">Decor</a></li>
                                <li><a className="dropdown-item" href="/">Lighting</a></li>
                            </ul>
                        </div>

                        <div className="px-3" style={{ fontSize: '14px', fontWeight: '500', cursor: 'pointer' }}>
                            <img src="https://rukminim1.flixcart.com/flap/128/128/image/0139228b2f7eb413.jpg?q=100" width="64"
                                alt="Appliances" />
                            <div className="mt-2">Appliances</div>
                        </div>

                        <div className="px-3" style={{ fontSize: '14px', fontWeight: '500', cursor: 'pointer' }}>
                            <img src="https://rukminim1.flixcart.com/flap/128/128/image/71050627a56b4693.png?q=100" width="64"
                                alt="Travel" />
                            <div className="mt-2">Travel</div>
                        </div>

                        <div className="dropdown px-3">
                            <img src="https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100" width="64"
                                alt="Beauty" />
                            <div className="mt-2 dropdown-toggle" style={{ fontSize: '14px', fontWeight: '500', cursor: 'pointer' }}
                                data-bs-toggle="dropdown">Beauty, Toys & More</div>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="/">Beauty & Grooming</a></li>
                                <li><a className="dropdown-item" href="/">Food & Beverages</a></li>
                                <li><a className="dropdown-item" href="/">Toys</a></li>
                                <li><a className="dropdown-item" href="/">Sports</a></li>
                            </ul>
                        </div>

                        <div className="px-3" style={{ fontSize: '14px', fontWeight: '500', cursor: 'pointer' }}>
                            <img src="https://rukminim1.flixcart.com/flap/128/128/image/05d708653beff580.png?q=100" width="64"
                                alt="Two Wheelers" />
                            <div className="mt-2">Two Wheelers</div>
                        </div>
                    </div>
                </div>
            </div>

            <div
                id="flipkartCarousel"
                className="carousel slide stylish-carousel"
                data-bs-ride="carousel"
                data-bs-interval="2500"
            >
                {/* Indicators */}
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="/flipkartCarousel" data-bs-slide-to="0" className="active" />
                    <button type="button" data-bs-target="/flipkartCarousel" data-bs-slide-to="1" />
                    <button type="button" data-bs-target="/flipkartCarousel" data-bs-slide-to="2" />
                </div>

                {/* Slides */}
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img
                            src="https://rukminim1.flixcart.com/fk-p-flap/3200/540/image/74f0ad81e44e6e6f.jpg?q=60"
                            className="d-block w-100 carousel-img"
                            alt="Banner 1"
                        />
                    </div>

                    <div className="carousel-item">
                        <img
                            src="https://rukminim1.flixcart.com/fk-p-flap/3240/540/image/5b309e98775e22e4.jpg?q=60"
                            className="d-block w-100 carousel-img"
                            alt="Banner 2"
                        />
                    </div>

                    <div className="carousel-item">
                        <img
                            src="https://rukminim1.flixcart.com/fk-p-flap/3240/540/image/076c4f2ee87225d7.jpg?q=60"
                            className="d-block w-100 carousel-img"
                            alt="Banner 3"
                        />
                    </div>
                </div>

                {/* Controls */}
                <button className="carousel-control-prev custom-control" type="button" data-bs-target="/flipkartCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" />
                </button>

                <button className="carousel-control-next custom-control" type="button" data-bs-target="/flipkartCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" />
                </button>
            </div>


            <div className="row mt-3 mb-3">
                <div className="col-9" >
                    <div className="container ms-3">
                        <h2 className="slider-title-header mb-4">Top Deals</h2>
                        <div className="slider-section-wrapper">
                            <div className="product-cards-wrapper">
                                {
                                    renderCards(firstSix)
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="ms-5 d-flex align-items-center">
                        <img src="https://rukminim1.flixcart.com/fk-p-flap/3200/4920/image/ce3cf81edb760559.jpg?q=60" style={{ height: '330px' }} alt="Banner image"  />
                    </div>
                </div>
            </div>

            <div className="container-fluid py-3">
                <div className="row g-4">
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="product-image">
                            <img src="https://rukminim1.flixcart.com/fk-p-flap/640/340/image/a8e2ebb6e3486665.jpg?q=60" alt="Floor Mat" />
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="product-image">
                            <img src="https://rukminim1.flixcart.com/fk-p-flap/640/340/image/a2c99766fe520090.jpg?q=60" alt="Mixer" />
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="product-image">
                            <img src="https://rukminim1.flixcart.com/fk-p-flap/640/340/image/1156864a33cbce2e.jpg?q=60" alt="TV" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mb-3 py-3">
                <div className="col d-flex justify-content-center" >
                    <div className="container-fluid px-5">
                        <h2 className="slider-title-header mb-3">Tyohaar Trends</h2>
                        <div className="slider-section-wrapper">
                            <div className="product-cards-wrapper">
                                {
                                    renderCards(nextSeven)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mb-3 py-3">
                <div className="col d-flex justify-content-center" >
                    <div className="container-fluid px-5">
                        <h2 className="slider-title-header mb-3">Top Rated</h2>
                        <div className="slider-section-wrapper">
                            <div className="product-cards-wrapper">
                                {
                                    renderCards(lastSeven)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomePage;