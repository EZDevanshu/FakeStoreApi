import "../css/Cart.css";
import { useCart } from "../components/Cartcontext";


function Cart() {
    const { cart, removeFromCart, updateQty } = useCart();

    return (
        <>
            <div class="container mt-5 cart-container">
                <div class="row">
                    <div class="col">
                        {cart.length === 0 ? (
                            <h1>Empty Card.....</h1>
                        ) : (
                            cart.map((item) => (
                                <div key={item.id} className="cart-item d-flex mb-3">
                                    <img src={item.image} className="me-3 rounded" alt={item.title} width="120" />
                                    <div>
                                        <h5>{item.title}</h5>
                                        <p>
                                            ₹{item.price} x {item.qty} ={" "}
                                            <strong>₹{item.price * item.qty}</strong>
                                        </p>
                                        <div className="d-flex align-items-center">
                                            <button
                                                className="btn btn-outline-secondary btn-sm me-2"
                                                onClick={() => updateQty(item.id, Math.max(1, item.qty - 1))}
                                            >
                                                -
                                            </button>
                                            <input
                                                type="text"
                                                value={item.qty}
                                                readOnly
                                                className="form-control form-control-sm text-center"
                                                style={{ width: "50px" }}
                                            />
                                            <button
                                                className="btn btn-outline-secondary btn-sm ms-2"
                                                onClick={() => updateQty(item.id, item.qty + 1)}
                                            >
                                                +
                                            </button>
                                        </div>
                                        <button
                                            className="btn btn-link text-danger mt-2"
                                            onClick={() => removeFromCart(item.id)}
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cart;