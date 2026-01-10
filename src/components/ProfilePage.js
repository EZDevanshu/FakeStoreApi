import "../css/Profile.css"

function ProfilePage() {
    return (
        <>
            <div className="profile-container">
                <div className="profile-sidebar shadow-sm">
                    <div className="text-center mb-4">
                        <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                            className="rounded-circle profile-img mb-2" alt="User Avatar" />
                        <h5 className="mb-0">Username</h5>
                        <small className="text-muted">user@123</small>
                    </div>
                    <ul className="list-group profile-sidebar-menu">
                        <a href="#" className="list-group-item active">👤 My Profile</a>
                        <a href="#" className="list-group-item">📦 My Orders</a>
                        <a href="#" className="list-group-item">❤️ Wishlist</a>
                        <a href="#" className="list-group-item">🎟️ Coupons</a>
                        <a href="#" className="list-group-item">🎁 Gift Cards</a>
                        <a href="#" className="list-group-item">🔔 Notifications</a>
                    </ul>
                </div>

                <div className="profile-content">
                    <div className="card profile-card mb-4">
                        <div className="card-body">
                            <h5 className="mb-3">Personal Information</h5>
                            <div className="row g-3">
                                <div className="col-md-6">
                                    <label className="form-label">Full Name</label>
                                    <input type="text" className="form-control" placeholder="username"/>
                                </div>
                                <div className="col-md-6">   
                                    <label className="form-label">Email</label>
                                    <input type="email" className="form-control" placeholder="user@example.com" />
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label">Mobile Number</label>
                                    <input type="text" className="form-control" placeholder="MoNo." />
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label">Gender</label>
                                    <select className="form-select">
                                        <option selected>Female</option>
                                        <option>Male</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                            </div>
                            <div className="text-end mt-3">
                                <button className="btn btn-primary px-4" onClick={()=>{
                                    alert("save changed!!")
                                }}>Save Changes</button>
                            </div>
                        </div>
                    </div>

                    <div className="card profile-card">
                        <div className="card-body">
                            <h5 className="mb-3">Saved Addresses</h5>
                            <div className="address-box p-3 mb-2 border rounded">
                                <strong>Home</strong>
                                <p className="mb-1 text-muted">123, Near ABC Street, Rajkot, Gujarat</p>
                            </div>
                            <div className="address-box p-3 mb-2 border rounded">
                                <strong>Office</strong>
                                <p className="mb-1 text-muted">XYZ University, Rajkot</p>
                            </div>
                            <button className="btn btn-outline-primary btn-sm mt-2">+ Add New Address</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProfilePage;
