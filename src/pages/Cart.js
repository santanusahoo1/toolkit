import { Fab, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addQty, remove, subQty } from '../store/cartSlice';



const Cart = () => {

    const dispatch = useDispatch();
    const products = useSelector((state) => state.cart.cart);

    const handleRemove = (productId) => {
        dispatch(remove(productId));
    };
    const handleAddQty = (productId) => {
        dispatch(addQty(productId));
    }
    const handleSubQty = (productId) => {
        dispatch(subQty(productId));
    }

    const TAX_RATE = 0.07;

    function ccyFormat(num) {
        return `${num.toFixed(2)}`;
    }

    function subtotal(items) {
        return items.map(({ price, quantity }) => price * quantity).reduce((sum, i) => sum + i, 0);
    }
    const invoiceSubtotal = subtotal(products);
    const invoiceTaxes = TAX_RATE * invoiceSubtotal;
    const invoiceTotal = invoiceTaxes + invoiceSubtotal;

    return (
        <div>
            <h3>Shopping Cart</h3>
            {products.length > 0 ? (
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="spanning table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center" colSpan={3}>
                                    Item
                                </TableCell>

                                <TableCell align="center" colSpan={2}>Details</TableCell>
                                <TableCell rowSpan={1} />
                            </TableRow>
                            <TableRow>
                                <TableCell align="center" colSpan={1}>Desc</TableCell>
                                <TableCell align="center" colSpan={1}>Qty.</TableCell>
                                <TableCell align="center" colSpan={1}>Unit</TableCell>
                                <TableCell align="center" colSpan={1}>Sum</TableCell>
                                <TableCell align="center" colSpan={2}>Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {products.map((row) => (
                                <TableRow key={row.id}>
                                    <TableCell colSpan={3} style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center"
                                    }}>
                                        <img
                                            src={row.image}
                                            srcSet={row.image}
                                            alt={"product img"}
                                            loading="lazy"
                                        />
                                        {row.title}
                                    </TableCell>
                                    <TableCell colSpan={1} align="center">{row.quantity}</TableCell>
                                    <TableCell colSpan={1} align="center">{row.price}</TableCell>
                                    <TableCell colSpan={1} align="center">{(row.price * row.quantity).toFixed(2)}</TableCell>
                                    <TableCell colSpan={1} align="right">
                                        <Fab size="small" color="primary" aria-label="add" onClick={() => handleAddQty(row.id)}
                                            style={{
                                                marginRight: "10px"
                                            }}
                                        >
                                            <AddIcon />
                                        </Fab>
                                        {
                                            row.quantity > 1 ? (
                                                <Fab size="small" color="warning" aria-label="sub" onClick={() => handleSubQty(row.id)}
                                                    style={{
                                                        marginRight: "15px"
                                                    }}
                                                >
                                                    <RemoveCircleOutlineIcon />
                                                </Fab>
                                            ) :
                                                <Fab size="small" color="secondary" aria-label="sub" disabled style={{
                                                    marginRight: "15px"
                                                }}>
                                                    <RemoveCircleOutlineIcon />
                                                </Fab>
                                        }
                                        <Fab size="small" color="error" aria-label="delete" onClick={() => handleRemove(row.id)}>
                                            <DeleteIcon />
                                        </Fab>
                                    </TableCell>

                                </TableRow>
                            ))}
                            <TableRow>
                                <TableCell rowSpan={3} />
                                <TableCell colSpan={2}>Subtotal</TableCell>
                                <TableCell align="right">{ccyFormat(invoiceSubtotal)}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Tax</TableCell>
                                <TableCell align="right">{`${(TAX_RATE * 100).toFixed(0)} %`}</TableCell>
                                <TableCell align="right">{ccyFormat(invoiceTaxes)}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell colSpan={2}>Total</TableCell>
                                <TableCell align="right">{ccyFormat(invoiceTotal)}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            ) : <h1>Cart Empty</h1>
            }

        </div>
    );
};

export default Cart;