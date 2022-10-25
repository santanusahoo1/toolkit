import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const items = useSelector((state) => state.cart.cart);
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: "row",
                alignItems: 'center',
                justifyContent: 'space-between',
            }}
        >
            <span>
                <Link className="navLink" to="/">
                    <h2>
                        REDUX STORE
                    </h2>
                </Link>
            </span>
            <div style={{
                display: 'flex',
                flexDirection: "row",
                alignItems: 'center',
                justifyContent: 'space-between',
            }}>
                <div style={{
                    marginRight: "35px"
                }}>
                    <Link className="navLink" to="/">
                        Home
                    </Link>
                </div>
                <div>
                    <Link className="navLink" to="/cart">
                        Cart
                    </Link>
                </div>
                <div>
                    <span className="cartCount">Cart items: {items.length}</span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;