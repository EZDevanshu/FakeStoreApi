import "../css/Product.css"
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useCart } from "../components/Cartcontext";

function Product() {
    const [data, setData] = useState([]);
    const { id } = useParams();
    const { addToCart } = useCart();
    const navigate = useNavigate();
    // const navigation = useNavigate();

    useEffect(() => {
        fetch("https://fakestoreapi.com/products/" + id)
            .then(response => response.json())
            .then(data => setData(data))
    }, [id]);

    const handleAddToCart = () => {
        addToCart(data);
        navigate("/myCart"); // cart page pe redirect
    };

    return (
        <>
            <div className="container bg-white p-4 mt-3 rounded shadow">
                <div className="row">
                    <div className="col-md-4 text-center">
                        <img src={data.image} alt="Product" className="main-img mb-3" />
                        <div className="mt-4 action-btns">
                            <button onClick={handleAddToCart} className="btn btn-warning me-2">
                                Add to Cart
                            </button>
                            <button className="btn btn-danger">Buy Now</button>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <h4>{data.title}</h4>
                        <p className="text-success">Special Price</p>
                        <div className="d-flex align-items-center mb-2">
                            <span className="price">{data.price}</span>
                            <span className="old-price">{data.price + (data.price * (0.3))}</span>
                            <span className="offer">30% off</span>
                        </div>
                        <p><strong>Available offers</strong></p>
                        <ul>
                            <li>Bank Offer: Get ₹25* instant discount for the 1st Flipkart Order using Flipkart UPI</li>
                            <li>Special Price: Get extra 30% off</li>
                            <li>Free Delivery on your first order</li>
                        </ul>

                        <div className="delivery-box mt-4">
                            <h6>Delivery</h6>
                            <div className="d-flex">
                                <input type="text" className="form-control w-50" placeholder="Enter Pincode" />
                                <button className="btn btn-primary ms-2">Check</button>
                            </div>
                            <small className="text-muted">Enter pincode to check delivery date & availability</small>
                        </div>

                        <div className="mt-4">
                            <h6>Highlights</h6>
                            <p>{data.category}</p>
                            <p>{data.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Product;