import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Badge } from '@mui/material';
import { AddShoppingCart } from '@mui/icons-material';

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
                    <Badge badgeContent={items.length ? items.length : "0"} color="error">
                        <Link to="/cart">
                            <AddShoppingCart />
                        </Link>
                    </Badge>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
